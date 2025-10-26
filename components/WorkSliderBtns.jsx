"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderBtns = ({ containerStyles, btnStyles }) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      {/* Prev Button */}
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold />
      </button>
      {/* Next Button */}
      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
