export type ShadowingNote = {
  id: string
  timestamp: string
  observer: string
  raw: string
  system: string
  actor: string
  exceptionHint: string
}

export type ProcessStep = {
  id: string
  sequence: number
  title: string
  system: string
  owner: string
  evidence: string
}

export type CaptureDesk = {
  processSteps: ProcessStep[]
  systemsTouched: string[]
  exceptions: string[]
  openQuestions: string[]
  learningBrief: string
}

const titlePatterns = [
  { match: ['starts in shared inbox', 'searches subject'], title: 'Capture request from shared inbox' },
  { match: ['spreadsheet tracker', 'checks whether'], title: 'Validate evidence in tracker' },
  { match: ['ERP vendor record', 'finance approval'], title: 'Create ERP vendor after approval' },
  { match: ['Edge case', 'rush setup'], title: 'Route rush setup without skipping controls' },
]

export function buildCaptureDesk(notes: ShadowingNote[]): CaptureDesk {
  const sortedNotes = [...notes].sort((a, b) => a.timestamp.localeCompare(b.timestamp))

  const processSteps = sortedNotes.map((note, index) => ({
    id: note.id,
    sequence: index + 1,
    title: inferStepTitle(note.raw),
    system: note.system,
    owner: note.actor,
    evidence: note.raw,
  }))

  return {
    processSteps,
    systemsTouched: Array.from(new Set(sortedNotes.map((note) => note.system))),
    exceptions: sortedNotes.map((note) => note.exceptionHint),
    openQuestions: [
      'Which requester fields are mandatory before ERP entry can begin?',
      'Who owns the same-day approval SLA for urgent field repair vendors?',
      'Where should the final vendor ID be recorded so AP does not re-key it?',
    ],
    learningBrief:
      'Do not automate the workflow yet: first confirm evidence gates, ownership, and exception rules with the people doing the work.',
  }
}

export function inferStepTitle(rawNote: string): string {
  const match = titlePatterns.find((pattern) =>
    pattern.match.every((fragment) => rawNote.includes(fragment)),
  )

  return match?.title ?? 'Review shadowed workflow detail'
}
