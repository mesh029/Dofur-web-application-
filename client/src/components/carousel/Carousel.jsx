import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./carousel.css";

export default function Carousel() {
  const data = ["1", "2", "3", "4"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [styles, setStyles] = useState("spans2");

  const carouselInfiniteScroll = () => {
    if (currentIndex == data.length - 1) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      carouselInfiniteScroll();
      setStyles("spans2");
    }, 3000);
    //clean up function

    return () => clearInterval(interval);
  });

  return (
    <div className="carousel">
      <div className="carousel-container">
        {data.map((item, index) => {
          var car_text;
          var car_undertext;

          if (item == 1) {
            car_text = "WCDIgggg";
            car_undertext =
              "A charitable organization driven by the sole goal to try enable every child attends school and does so without struggle";
          } else if (item == 2) {
            car_text = "hubarous";
            car_undertext =
              "Hello world hello world hello world hello world hello world hello world";
          } else {
            car_text = "hubarous";
            car_undertext =
              "Hello world hello world hello world hello world hello world hello world";
          }

          return (
            <div
              className="carousel-item"
              style={{ transform: `translate(-${currentIndex * 100}%)` }}
              key={index}
            >
              <div className="car_head_div">
                <h1>{car_text}</h1>
              </div>
              <div className="car_head_div">
                <h4>{car_undertext}</h4>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bottom">
        {data.map((item, index) => {
          return (
            <span
              className={currentIndex === index ? "spans2" : "spans"}
              onClick={() => setCurrentIndex(index)}
            ></span>
          );
        })}
      </div>
    </div>
  );
}
