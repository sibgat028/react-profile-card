export default function App() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img
          src=""
          alt=""
          style={styles.image}
        />

        <h2>Sibgat Ullah</h2>
        <p>Frontend Developer 🚀</p>

        <button style={styles.button}>Follow</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f2f2f2",
  },
  card: {
    width: "250px",
    padding: "20px",
    borderRadius: "12px",
    background: "white",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  },
  image: {
    borderRadius: "50%",
    marginBottom: "10px",
  },
  button: {
    padding: "10px 20px",
    border: "none",
    background: "black",
    color: "white",
    borderRadius: "8px",
    cursor: "pointer",
  },
};
