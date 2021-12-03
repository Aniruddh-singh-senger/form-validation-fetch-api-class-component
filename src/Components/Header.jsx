import React, { useState } from "react";
import Feedbackform from "./Feedbackform";
import DisplayTable from "./DisplayTable";
export default function Header() {
  const [GetDisplay, setDisplay] = useState(<Feedbackform />);
  const [isActiveclass, setActiveclass] = useState(true);
  const [isActiveclass2, setActiveclass2] = useState(false);

  const hadleChange = () => {
    setActiveclass(true);
    setActiveclass2(false);
    setDisplay(<Feedbackform />);
  };
  const hadleChangetable = () => {
    setActiveclass(false);
    setActiveclass2(true);

    setDisplay(<DisplayTable />);
  };
  return (
    <div>
      <div className="container-fluid  pb-1">
        <div className="row">
          <div
            className="col"
            style={{
              background: "white",
              paddingTop: "1rem",
              boxShadow: "0px 2px 2px #00000029",
            }}
          >
            <div className="btncontainer">
              <button
                type="submit"
                className={isActiveclass ? " btnselect" : "btnnonselect"}
                onClick={hadleChange}
              >
                Form
              </button>
              <button
                type="submit"
                className={isActiveclass2 ? " btnselect" : "btnnonselect "}
                onClick={hadleChangetable}
              >
                Table
              </button>
            </div>
          </div>
        </div>
      </div>
      {GetDisplay}
    </div>
  );
}
