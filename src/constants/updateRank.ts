const styles: Record<string, React.CSSProperties> = {
  page: {
    padding: "20px 16px",
    background: "var(--background)",
    fontFamily: "Inter, system-ui, sans-serif",
  },

  card: {
    maxWidth: 900,
    margin: "0 auto",
    height: "420px", // 👈 MUHIM
    display: "flex",
    flexDirection: "column",
    borderRadius: "var(--radius)",
    background: "var(--card)",
    border: "1px solid var(--border)",
  },

  /* 🔼 CONTENT SCROLL */
  content: {
    flex: 1,
    padding: 20,
    overflowY: "auto", // 👈 MUHIM
  },

  title: {
    margin: "0 0 6px",
    fontSize: 16,
    fontWeight: 600,
  },

  description: {
    marginBottom: 12,
    fontSize: 14,
    color: "var(--muted-foreground)",
  },

  item: {
    padding: "10px 12px",
    borderRadius: "var(--radius)",
    background: "var(--accent)",
    marginBottom: 8,
    fontSize: 14,
  },

  /* 🔽 BOTTOM FIXED */
  selectorRow: {
    display: "flex",
    gap: 10,
    padding: 12,
    borderTop: "1px solid var(--border)",
    background: "var(--card)",
  },

  selector: {
    flex: 1,
    padding: "10px 12px",
    borderRadius: "var(--radius)",
    border: "none",
    cursor: "pointer",
    fontSize: 14,
  },
};
