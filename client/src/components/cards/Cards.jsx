import Post from "../post/Post";
import Card from "../card/card"
import LandCard from "../landCard/LandCard";
import "./cards.css";

export default function Cards({ cards }) {
  return (
    <>
    
<div className="cards">
  {cards.map((p) => (
    <Card card={p} />
  ))}
</div>
    </>

  );
}
