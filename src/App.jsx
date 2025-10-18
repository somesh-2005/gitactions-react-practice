import "./style.css";

export default function App() {
  return (
    <div className="container">
      <h1>Welcome to My CI/CD Frontend</h1>
      <h1>Hii I am Somesh Swadhin Biswal</h1>
      <p>This is a simple one-page React + Vite app deployed via Jenkins.</p>
      <button onClick={() => alert("Build Successful!")}>Click Me</button>
    </div>
  );
}
