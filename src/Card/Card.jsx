import "./Card.css";
import img1 from "/public/Picture.png";
function Card({ bgColor, btnColor }) {
  return (
    <div style={{ backgroundColor: bgColor }}>
      <img src={img1} alt="" />
      <h3>NIKE AIR FORCE 1 ‘07 (white/black)</h3>
      <p>$89.99</p>
      <p>I lost left shoe, don’t need this one anymore. Please buy it.</p>
      <button style={{ backgroundColor: btnColor }}>
        <i></i>
        Add to cart
      </button>
    </div>
  );
}

export default Card;
