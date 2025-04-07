
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 50;

const renderer = new THREE.WebGLRenderer({ antialias: true });
const container = document.getElementById('background-container');
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x0f0f0f, 1);
container.appendChild(renderer.domElement);

const particleCount = 500;
const particles = new THREE.BufferGeometry();
const positions = new Float32Array(particleCount * 3);
const velocities = new Float32Array(particleCount * 3);
const colors = new Float32Array(particleCount * 3);

for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 100;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 100;

    velocities[i * 3] = (Math.random() - 0.5) * 0.2;
    velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.2;
    velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.2;

    colors[i * 3] = 1.0;
    colors[i * 3 + 1] = Math.random() * 0.2 + 0.8;
    colors[i * 3 + 2] = Math.random() * 0.2 + 0.8;
}

particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
particles.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3));
particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));

const particleMaterial = new THREE.ShaderMaterial({
    uniforms: {
        u_time: { value: 0.0 },
        u_mouse: { value: new THREE.Vector2(0, 0) },
        u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        u_pointSize: { value: 3.0 }
    },
    vertexShader: `
        attribute vec3 velocity;
        uniform float u_time;
        uniform vec2 u_mouse;
        uniform vec2 u_resolution;
        uniform float u_pointSize;
        varying vec3 v_color;

        void main() {
            v_color = color;
            vec3 mouseWorld = vec3(
                (u_mouse.x / u_resolution.x - 0.5) * 100.0,
                (0.5 - u_mouse.y / u_resolution.y) * 100.0,
                0.0
            );

            vec3 pos = position + velocity * u_time;
            vec3 toMouse = mouseWorld - pos;
            float distToMouse = length(toMouse);
            if (distToMouse < 20.0) {
                vec3 dir = normalize(toMouse);
                pos -= dir * (20.0 - distToMouse) * 0.05;
            }

            if (pos.x > 50.0) pos.x -= 100.0;
            if (pos.x < -50.0) pos.x += 100.0;
            if (pos.y > 50.0) pos.y -= 100.0;
            if (pos.y < -50.0) pos.y += 100.0;
            if (pos.z > 50.0) pos.z -= 100.0;
            if (pos.z < -50.0) pos.z += 100.0;

            gl_PointSize = u_pointSize + sin(u_time + position.x) * 2.0;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
    `,
    fragmentShader: `
        varying vec3 v_color;
        void main() {
            float dist = length(gl_PointCoord - vec2(0.5));
            if (dist > 0.5) discard;
            gl_FragColor = vec4(v_color, 1.0 - dist * 2.0);
        }
    `,
    vertexColors: true,
    transparent: true
});

const particleSystem = new THREE.Points(particles, particleMaterial);
scene.add(particleSystem);

const lineGeometry = new THREE.BufferGeometry();
const maxLines = particleCount * 10;
const linePositions = new Float32Array(maxLines * 6);
const lineColors = new Float32Array(maxLines * 6);

const lineMaterial = new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.3 });
const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
scene.add(lines);

let mouse = { x: 0, y: 0 };
window.addEventListener('mousemove', (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
    particleMaterial.uniforms.u_mouse.value.set(mouse.x, mouse.y);
});

let time = 0;
function animate() {
    requestAnimationFrame(animate);
    time += 0.05;
    particleMaterial.uniforms.u_time.value = time;

    const positions = particleSystem.geometry.attributes.position.array;
    const velocities = particleSystem.geometry.attributes.velocity.array;
    for (let i = 0; i < particleCount; i++) {
        positions[i * 3] += velocities[i * 3];
        positions[i * 3 + 1] += velocities[i * 3 + 1];
        positions[i * 3 + 2] += velocities[i * 3 + 2];
    }
    particleSystem.geometry.attributes.position.needsUpdate = true;

    let lineIndex = 0;
    for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
            const dx = positions[i * 3] - positions[j * 3];
            const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
            const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
            if (dist < 15.0 && lineIndex < maxLines) {
                linePositions[lineIndex * 6] = positions[i * 3];
                linePositions[lineIndex * 6 + 1] = positions[i * 3 + 1];
                linePositions[lineIndex * 6 + 2] = positions[i * 3 + 2];
                linePositions[lineIndex * 6 + 3] = positions[j * 3];
                linePositions[lineIndex * 6 + 4] = positions[j * 3 + 1];
                linePositions[lineIndex * 6 + 5] = positions[j * 3 + 2];

                lineColors[lineIndex * 6] = colors[i * 3];
                lineColors[lineIndex * 6 + 1] = colors[i * 3 + 1];
                lineColors[lineIndex * 6 + 2] = colors[i * 3 + 2];
                lineColors[lineIndex * 6 + 3] = colors[j * 3];
                lineColors[lineIndex * 6 + 4] = colors[j * 3 + 1];
                lineColors[lineIndex * 6 + 5] = colors[j * 3 + 2];

                lineIndex++;
            }
        }
    }
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions.slice(0, lineIndex * 6), 3));
    lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors.slice(0, lineIndex * 6), 3));
    lineGeometry.attributes.position.needsUpdate = true;
    lineGeometry.attributes.color.needsUpdate = true;

    renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    particleMaterial.uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => navLinks.classList.toggle('active'));


window.addEventListener('load', function() {
    emailjs.init("jsLAMfKr6gjnit8NP");
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
        from_name: document.getElementById('from_name').value,
        from_email: document.getElementById('from_email').value,
        message: document.getElementById('message').value
    };

    emailjs.send("service_tvb0s7a", "template_3df0nen", formData)
        .then(function(response) {
            alert('Message sent successfully!');
            document.getElementById('contact-form').reset();
        }, function(error) {
            alert('Failed to send message. Please try again.');
            console.error('EmailJS Error:', error);
        });
});