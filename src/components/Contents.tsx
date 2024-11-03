import React from "react";
import OurSalons from "./OurSalons";
import Topic from "./Topic";
import News from "./News";

const Contents = () => {
  return (
    <>
      <div className="p-24">
        <OurSalons />

        <Topic />

        <News />
      </div>
    </>
  );
};
export default Contents;
