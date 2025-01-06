import "./App.css";
import Display from "./components/Display";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="wrapper">
      {/* Hero Section */}
      <Hero />

      {/* Display section */}
      <Display />
    </div>
  );
}

export default App;
