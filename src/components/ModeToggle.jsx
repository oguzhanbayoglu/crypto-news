import React, { useState } from "react";
import { useEffect } from "react";
import { themeChange } from "theme-change";

const ModeToggle = () => {
  const [dark] = useState(false);
  useEffect(() => {
    themeChange(false);
    console.log(dark);
  }, [dark]);

  return (
    // <button
    //   data-toggle-theme="dark,light"
    //   data-act-class="ACTIVECLASS"
    //   onClick={() => setDark(!dark)}
    //   className="swap swap-rotate"
    // >
    //   {dark ? lightLogo : darkLogo}
    // </button>
    <div>
      <select data-choose-theme className="select select-bordered select-xs ">
        <option value="dark">Dark</option>
        <option value="pastel">Light</option>
        <option value="synthwave">Synthwave</option>
        <option value="aqua">Aqua</option>
      </select>
    </div>
  );
};

export default ModeToggle;
