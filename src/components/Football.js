import React from "react";

const Football = () => {
  const gameName = "cricket";
  return (
    <div id="container">
      <h1 className="cricket">
        I love {gameName}. {gameName === "football" ? "⚽" : "🏏"}
      </h1>
      {/* <h1>{new Date().getFullYear()}</h1> */}
      <h1 className="football">
        {new Date().toLocaleString("bn-US", {
          year: "numeric",
          month: "short",
          day: "2-digit",
        })}
      </h1>
      <label htmlFor="first-name">first name:</label>
      <input type="text" id="first-name" />
    </div>
  );
};

export default Football;
