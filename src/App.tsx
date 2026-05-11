import { shadowingNotes } from './data/shadowing'
import { buildCaptureDesk } from './lib/shadowing'
import './App.css'

function App() {
  const desk = buildCaptureDesk(shadowingNotes)

  return (
    <main className="app-shell">
      <section className="hero">
        <div>
          <p className="eyebrow">Synthetic operations notes only</p>
          <h1>SOP Shadowing Capture Desk</h1>
          <p className="hero-copy">
            Convert messy shadowing notes into process steps, systems touched,
            exceptions, and open questions before anyone pretends the workflow is
            ready for automation.
          </p>
        </div>
        <aside className="brief-panel" aria-label="Learning-first brief">
          <span>Capture stance</span>
          <strong>{desk.learningBrief}</strong>
        </aside>
      </section>

      <section className="workspace" aria-label="SOP capture workspace">
        <section className="notes-column" aria-label="Raw shadowing notes">
          <div className="section-heading">
            <p className="eyebrow">Import source</p>
            <h2>Messy shadowing notes</h2>
          </div>
          {shadowingNotes.map((note) => (
            <article className="note-card" key={note.id}>
              <div>
                <span>{note.timestamp}</span>
                <strong>{note.system}</strong>
              </div>
              <p>{note.raw}</p>
              <small>{note.observer}</small>
            </article>
          ))}
        </section>

        <section className="process-column" aria-label="Process map">
          <div className="section-heading">
            <p className="eyebrow">Process map</p>
            <h2>Captured steps</h2>
          </div>
          <ol className="step-list">
            {desk.processSteps.map((step) => (
              <li key={step.id}>
                <span>{step.sequence}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>
                    {step.owner} in {step.system}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </section>

      <section className="evidence-grid">
        <div>
          <p className="eyebrow">Systems touched</p>
          <h2>Handoff surfaces</h2>
          <ul className="pill-list">
            {desk.systemsTouched.map((system) => (
              <li key={system}>{system}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow">Exception log</p>
          <h2>Rules to confirm</h2>
          <ul className="plain-list">
            {desk.exceptions.map((exception) => (
              <li key={exception}>{exception}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow">Question log</p>
          <h2>Do not automate until answered</h2>
          <ul className="plain-list">
            {desk.openQuestions.map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}

export default App
