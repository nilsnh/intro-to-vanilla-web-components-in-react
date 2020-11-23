export default function Example({ title, children }) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
      <style jsx>{`
        h2 {
          margin: 0;
        }
        section {
          border: 3px solid var(--moz-green);
          padding: var(--spacing-small);
          margin-bottom: var(--spacing);
        }
      `}</style>
    </section>
  )
}
