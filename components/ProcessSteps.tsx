import type { CSSProperties, ReactNode } from "react";

export type Step = { title: string; text: ReactNode };

// Must match --seq in the "Process" section of globals.css (seconds between steps appearing).
const SEQ_STEP = 0.7;

// Animated step-by-step process. Each step except the last has a connector to the next
// step with a dot on it. When the list scrolls into view the steps appear one at a
// time as the line reaches them, then the dot keeps looping and each circle pulses as it
// arrives. `--step` is the step index the CSS uses for all timings.
//
// Layout: horizontal columns when there is room, a vertical timeline when the container
// is narrower than 760px (phones, or `vertical` for long step text, which caps the width).
export default function ProcessSteps({ steps, vertical = false }: { steps: Step[]; vertical?: boolean }) {
  // The loop starts once the build-up sequence has finished, plus a short pause.
  const loopStart = `${(steps.length * SEQ_STEP + 0.6).toFixed(1)}s`;
  return (
    <div className={`process-wrap${vertical ? " process-wrap-vertical" : ""}`}>
      <ol className="process-grid" style={{ "--loop-start": loopStart, "--count": steps.length } as CSSProperties}>
        {steps.map((step, i) => (
          <li className="process-step" key={step.title} style={{ "--step": i } as CSSProperties}>
            {i < steps.length - 1 && (
              <span className="process-link" aria-hidden="true">
                <span className="process-dot" />
              </span>
            )}
            <div className="step-num" aria-hidden="true">
              {i + 1}
            </div>
            <h3>{step.title}</h3>
            <div className="step-text">{step.text}</div>
          </li>
        ))}
      </ol>
    </div>
  );
}
