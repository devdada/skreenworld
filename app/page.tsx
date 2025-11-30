export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "#000",
        color: "#fff",
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ fontSize: "3rem", fontWeight: "600", marginBottom: "20px" }}>
        skreenworld
      </h1>
      <p style={{ opacity: 0.7 }}>A new way to carry your screen.</p>
    </main>
  );
}
