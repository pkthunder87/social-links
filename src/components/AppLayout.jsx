function AppLayout({ children }) {
  return (
    <main className="app-layout">
      <div className="app-layout__outer">
        <div className="app-layout__inner">{children}</div>
      </div>
    </main>
  );
}

export default AppLayout;
