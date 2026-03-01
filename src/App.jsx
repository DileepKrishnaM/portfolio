import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;