import React from "react";

const Service = ({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) => {
  return (
    <div className="one">
      <img src={`/vectors/${icon}`} alt="" />
      <div>
        <h1 className="iconss">{title}</h1>

        <p className="design">{desc}</p>
      </div>
    </div>
  );
};

export default Service;
