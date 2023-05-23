import Main from "./Components/Main";
import { Fragment, useState } from "react";

import { myData } from "./Data/myData";

// const NewBlock = () => {
//   return (
//     <Fragment>
//       {myData.map(({ name, city, id, image }) => {
//         return <Main key={id} name={name} city={city} image={image} />;
//       })}
//     </Fragment>
//   );
// };

function App() {
  const [myVar, setMyVar] = useState({
    name: "amila1",
    city: "gampaha0",
    position: "web dev1",
  });

  const [myDataState, setMyDataState] = useState(myData);
  const [inputVal, setInputVal] = useState(0);

  const clickHandle = () => {
    setTimeout(() => {
      console.log("I am clicked");
      setInputVal((pre) => pre + 1);
    }, 3000);
    setMyVar({
      ...myVar,
      name: "pakaya",
    });
    setMyDataState([
      ...myDataState,
      {
        id: 127,
        name: "amila1",
        city: "gampaha0",
        position: "web dev1",
        image:
          "https://www.befunky.com/images/prismic/1f427434-7ca0-46b2-b5d1-7d31843859b6_funky-focus-red-flower-field-after.jpeg?auto=avif,webp&format=jpg&width=863",
      },
    ]);
  };
  console.log(inputVal);

  const MainBlock = myData.map(({ name, city, id, image }, index) => {
    return <Main key={id.index} name={name} city={city} image={image} />;
  });

  const inputChangeHandle = (event, data) => {
    event.preventDefault();

    console.log(data);
    setInputVal(event.target.value);
  };

  return (
    <div className="main_container">
      <div>
        <h1>{inputVal}</h1>
      </div>
      {/* <Main />
      <Main city="Gampaha" /> */}
      <div className="mainBlock_container">{MainBlock}</div>
      <div>
        <button
          style={{
            fontSize: "12px",
            border: "1px solid black",
            padding: "7px 12px",
            backgroundColor: "pink",
          }}
          onClick={clickHandle}
        >
          Click Me
        </button>
        <br />
        <br />
        <input
          style={{
            border: "1px solid black",
            padding: "20px 15px",
            width: "200px",
            height: "20px",
            color: "white",
            backgroundColor: "black",
            fontSize: "18px",
          }}
          type="text"
          placeholder="Type what you want"
          onChange={(e) => {
            inputChangeHandle(e, inputVal);
          }}
        />
      </div>
      {/* <NewBlock/> */}
    </div>
  );
}

export default App;
