import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

console.log(data);

export default function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        // item={item}   add props.item.tag to work functional
        {...item} //remove .item from props item.tag to make functional
      />
    );
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}
