"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";

const MAX_DEG = 6;

// Gently tilts its content towards the mouse pointer (mouse/trackpad only).
export default function Tilt({ className, children }: { className?: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    ref.current.style.setProperty("--ry", `${(x * MAX_DEG * 2).toFixed(2)}deg`);
    ref.current.style.setProperty("--rx", `${(-y * MAX_DEG * 2).toFixed(2)}deg`);
  }

  function onLeave() {
    ref.current?.style.setProperty("--ry", "0deg");
    ref.current?.style.setProperty("--rx", "0deg");
  }

  return (
    <div ref={ref} className={`tilt${className ? ` ${className}` : ""}`} onPointerMove={onMove} onPointerLeave={onLeave}>
      {children}
    </div>
  );
}
