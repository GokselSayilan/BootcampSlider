import React, { useState, useEffect } from "react";
import "./bootcampSlider.css";
import data from "../person.json";

function BootcampSlider() {
  const [activeState, setActiveState] = useState("tanya");
  const [activePerson, setActivePerson] = useState("");

  useEffect(() => {
    if (activeState === "tanya") {
      setActivePerson(data[0]);
    } else {
      setActivePerson(data[1]);
    }
  }, [activeState]);

  return (
    <div className="bootcampSlider">
      <img
        src="assets/images/pattern-curve.svg"
        className="leftBottomBg"
        alt="leftBottomBg"
      />
      <div className="bootcampSliderWrapper">
        <div className="bootcampSliderLeft">
          <img
            src="assets/images/pattern-quotes.svg"
            className="textBg"
            alt="textBg"
          />
          <p className="bootcampSliderLeftContent">{activePerson.desc}</p>
          <div className="bootcampSliderLeftBottom">
            <p className="bootcampSliderLeftBottomTitle">
              {activePerson.fullName}
            </p>
            <p className="bootcampSliderLeftBottomDesc">{activePerson.job}</p>
          </div>
        </div>
        <div className="bootcampSliderRight">
          <img
            src="assets/images/pattern-bg.svg"
            alt="photoBg"
            className="photoBg"
          />
          <div className="sliderControl">
            <img
              src="assets/images/icon-prev.svg"
              className="sliderControlIcon"
              alt="sliderPrev"
              onClick={() =>
                setActiveState(activeState === "tanya" ? "john" : "tanya")
              }
            />
            <img
              src="assets/images/icon-next.svg"
              className="sliderControlIcon"
              alt="sliderNext"
              onClick={() =>
                setActiveState(activeState === "tanya" ? "john" : "tanya")
              }
            />
          </div>
          <img
            src={activePerson.img}
            alt="personPhoto"
            className="bootcampSliderRightImg"
          />
        </div>
      </div>
    </div>
  );
}

export default BootcampSlider;
