import { describe, expect, it } from 'vitest'
import { shadowingNotes } from '../data/shadowing'
import { buildCaptureDesk, inferStepTitle } from './shadowing'

describe('SOP shadowing capture', () => {
  it('orders process steps by observed timestamp', () => {
    const desk = buildCaptureDesk([...shadowingNotes].reverse())

    expect(desk.processSteps.map((step) => step.title)).toEqual([
      'Capture request from shared inbox',
      'Validate evidence in tracker',
      'Create ERP vendor after approval',
      'Route rush setup without skipping controls',
    ])
  })

  it('keeps systems and exception evidence explicit', () => {
    const desk = buildCaptureDesk(shadowingNotes)

    expect(desk.systemsTouched).toEqual(['Shared inbox', 'Vendor tracker', 'ERP', 'Slack'])
    expect(desk.exceptions).toContain('Finance approval is a hard gate')
    expect(desk.exceptions).toContain('Rush setup changes priority, not evidence requirements')
  })

  it('frames output as learning before automation', () => {
    const desk = buildCaptureDesk(shadowingNotes)

    expect(desk.learningBrief).toMatch(/Do not automate the workflow yet/)
    expect(desk.openQuestions).toHaveLength(3)
    expect(inferStepTitle('unmapped handwritten observation')).toBe('Review shadowed workflow detail')
  })
})
