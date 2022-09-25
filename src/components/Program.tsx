import React from "react";

const Programs = ({
  icon,
  title,
  desc,
  custom,
}: {
  icon: string;
  title: string;
  desc: string;
  custom: string;
}) => {
  return (
    <div className="line-one">
      <img src={`/vectors/${icon}`} alt="" />
      <div>
        <div className="program">{title}</div>
        <div className="training">
          {desc}
          <div className="custom">{custom}</div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
