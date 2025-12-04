import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Navbar />

      <div className="cards">
        <Card title="card 1" description="Lorem ipsum selator rofelo" />
        <Card title="card 2" description="Lorem ipsum selator rofelo" />
        <Card title="card 3" description="Lorem ipsum selator rofelo" />
        <Card title="card 4" description="Lorem ipsum selator rofelo" />
      </div>

      <Footer />
    </>
  );
}

export default App;
