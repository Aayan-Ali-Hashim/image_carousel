import { useState } from "react";
import "./App.css";
const App = () => {
  const [current, setCurrent] = useState(0);
  const images = [
    "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  ];

  const handleLeft = () => {
    current === 0 ? setCurrent(images.length - 1): setCurrent(current - 1);
  };
  const handleRight = () => {
    current === images.length - 1 ? setCurrent(0) : setCurrent(current + 1);
  };
  function goToSlide(index:number) {
    setCurrent(index);
  }
  return (
    <div>
      <p className="image-number">{current+1} of 5</p>
      <div className="image-slider">
        <div className="arrow left-arrow" onClick={handleLeft}>
          ←
        </div>
        <div className="images">
          <img  src={images[current]} className="image" />
        </div>
        <div className="arrow right-arrow" onClick={handleRight}>
          →
        </div>
      </div>
    <div className="dots">
      {images.map((_,index)=>(
        <span
        key={index}
        className={`dot ${current === index ? " active " : ""}`}
        onClick={()=>goToSlide(index)}
        >•</span>
        ))}
    </div>
    </div>
  );
};

export default App;
