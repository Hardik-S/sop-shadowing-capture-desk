# SOP Shadowing Capture Desk

Fixture-first portfolio product that turns messy synthetic shadowing notes into a process map, systems touched, exception log, and question log. The product signal is operational judgment: learn the workflow before automating it.

## Portfolio Signal

This app demonstrates that ambiguous operations work should be captured, questioned, and verified before software or AI is introduced. It is intentionally not an automation agent and does not make claims about replacing the coordinator.

## Synthetic Data Boundary

All examples are synthetic. They describe a mock vendor-onboarding workflow with invented observers, systems, exception rules, and notes. No real company, customer, vendor, finance, or personal data is included.

## Stack Rationale

Vite, React, TypeScript, and Vitest were selected because the first slice is a static deterministic workflow tool. A server framework, database, or live LLM call would slow the core portfolio proof and introduce unnecessary secret-handling risk.

## File Map

- `src/data/shadowing.ts`: synthetic source notes and provenance-style fields.
- `src/lib/shadowing.ts`: deterministic sectioning, process-step inference, exception extraction, and learning brief.
- `src/lib/shadowing.test.ts`: Vitest coverage for ordering, exception preservation, and learning-first framing.
- `src/App.tsx`: one-screen workbench UI.
- `src/App.css`: responsive, operations-desk visual system.

## Local Setup

```powershell
npm ci
npm run test -- --run
npm run build
npm run preview
```

## Decision Log

- Kept data fixture-first because the goal is workflow understanding, not live ingestion.
- Preserved raw notes beside the derived process map so reviewers can see what each step came from.
- Made the learning-first warning a first-viewport artifact because premature automation is the failure mode this product is designed to avoid.
- Used simple deterministic title inference with tests instead of a model call; future GPT behavior should be server-side only and keep API keys out of the client bundle.

## Verification

The worker run should record the exact commands and deploy URL in the coordination repo after validation. Expected checks are `npm ci`, `npm run test -- --run`, `npm run build`, and local preview smoke for the process map and question log.

## Next Improvements

- Add editable note intake while preserving the synthetic-data warning.
- Export the process map as Markdown for handoff review.
- Add confidence labels that distinguish directly observed steps from inferred questions.
