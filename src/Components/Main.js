import { Fragment } from "react";
import { myData } from "../Data/myData";
import "../App.css";

const name = "Hirusha Achintha";
const position = "Web developer";
const myObj = {
  name: `${name}`,
  position: `${position}`,
  
};
function Main({ city ,image}) {
  return (
    <div>
      This is main Component
      <img
        src={
          image
            ? `${image}`
            : `https://media.istockphoto.com/id/470248962/photo/tea-plantations-sunset.jpg?s=612x612&w=0&k=20&c=xo98EQ7-n4_nKqvzy4204GErBr4W_iRplcTqzyhj_K0=`
        }
      />
      <div className="mainBlock_details">
        <p>
          <ul>
            <li>{!name?`no-name`:`${name}`}</li>
            <li>{position}</li>
            <li>{city}</li>
            <li>Hirusha</li>
            <li>Hirusha</li>
          </ul>
          <li>{myObj.position}</li>
        </p>
      </div>
    </div>
  );
}

export default Main;
