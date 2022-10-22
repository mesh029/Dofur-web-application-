import Flippy, { FrontSide, BackSide } from "react-flippy";
import "./landCard.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function LandCard({ card }) {
  return (
    // .. return

    <div className="container">
      <div className="topContainer">
        <div class="box">
          <i class="fas fa-quote-left fa2"></i>
          <div class="text">
            <i class="fas fa-quote-right fa1"></i>
            <div>
              <h3>Quote the day</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottomContainer">
        <div className="about">
          <h4>
            In partnership with several charitable agencies, WCDI has been able
            to help alot of children around the country. With Dofur, you too can
            educate a child from the comfort of your home. Join us today
          </h4>
        </div>
        <div className="buttons">
          <button className="button">
            <Link className="link" to="/donate">
              Donate
            </Link>
          </button>
          <button className="button">
            <Link className="link" to="/donate">
              Become Recipient
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
