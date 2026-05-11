import type { ShadowingNote } from '../lib/shadowing'

export const shadowingNotes: ShadowingNote[] = [
  {
    id: 'note-1',
    timestamp: '09:12',
    observer: 'Mina, ops analyst',
    raw:
      'Jordan starts in shared inbox, searches subject "new vendor setup", copies requester and vendor legal name into the onboarding tracker. If the requester skipped cost center, Jordan pings Slack before touching ERP.',
    system: 'Shared inbox',
    actor: 'Ops coordinator',
    exceptionHint: 'Missing cost center pauses ERP entry',
  },
  {
    id: 'note-2',
    timestamp: '09:24',
    observer: 'Mina, ops analyst',
    raw:
      'In the spreadsheet tracker, Jordan checks whether tax form and ACH form are both attached. If either file is missing, the ticket stays in intake and the requester gets a templated evidence request.',
    system: 'Vendor tracker',
    actor: 'Ops coordinator',
    exceptionHint: 'Missing tax or ACH evidence keeps work in intake',
  },
  {
    id: 'note-3',
    timestamp: '09:41',
    observer: 'Mina, ops analyst',
    raw:
      'ERP vendor record is only created after finance approval. Jordan maps payment terms, uploads the two forms, then adds the generated vendor ID back to the tracker for AP handoff.',
    system: 'ERP',
    actor: 'Ops coordinator',
    exceptionHint: 'Finance approval is a hard gate',
  },
  {
    id: 'note-4',
    timestamp: '10:03',
    observer: 'Mina, ops analyst',
    raw:
      'Edge case: rush setup for field repair vendors. Jordan still refuses to skip tax form, but creates a red urgent tag and asks finance lead for same-day approval in Slack.',
    system: 'Slack',
    actor: 'Finance lead',
    exceptionHint: 'Rush setup changes priority, not evidence requirements',
  },
]
