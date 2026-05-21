"use client";

import { useRef } from "react";

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="h-[300vh] w-full relative">
      {/* Sticky hero image — fixed while user scrolls through the 500vh */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">

        {/* Base photo — face anchored to the right */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/homepage.jpeg"
          alt="Prateek Goswami"
          className="absolute inset-0 w-full h-full object-cover object-[50%_center] md:object-[70%_center]"
        />

        {/* ── Gradient layers ──────────────────────────────────────────── */}

        {/*
          1. Single left-to-right vignette.
             Fades from semi-transparent black (NOT solid) so the photo
             remains visible everywhere — just darkened enough for legibility.
             70% opacity on the far left → 30% at mid-screen → transparent.
        */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(8,8,8,0.72) 0%, rgba(8,8,8,0.55) 28%, rgba(8,8,8,0.25) 52%, rgba(8,8,8,0.05) 68%, transparent 80%)",
          }}
        />

        {/* 2. Orange atmospheric glow — bottom-right, matching the photo's warm light */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 65% 75% at 92% 85%, rgba(249,115,22,0.18) 0%, rgba(255,85,0,0.08) 45%, transparent 68%)",
          }}
        />

        {/* 3. Top & bottom edge cinematic darken */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(8,8,8,0.55) 0%, transparent 18%, transparent 78%, rgba(8,8,8,0.9) 100%)",
          }}
        />

        {/* 4. Glowing orange accent line at the bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[2px]"
          style={{
            background:
              "linear-gradient(to right, #ff5500 0%, rgba(255,85,0,0.4) 40%, transparent 65%)",
            boxShadow: "0 0 16px rgba(255,85,0,0.5)",
          }}
        />
      </div>
    </div>
  );
}
