import { Fragment, useState } from "react";
import './App.css'
import Unit from "./Components/Unit";
import Header from "./Components/Header";


const App = () => {
  // const [image, setImage] = useState("");
  // const [name, setName] = useState("");
  // const [city, setCity] = useState("");
  // const [position, setPosition] = useState("");
  const [inputData, setInputData] = useState({
    image: "",
    name: "",
    city: "",
    position: "",

  })

  const clickHandle = () => {
  setMyData(pre=>{
    return[...pre,{
      image:inputData.image,
      name:inputData.name,
      city:inputData.city,
      position:inputData.position,

    }]
  })  
  setInputData(preImage=>{
    if(preImage.image.length>0){
      return {
        ...preImage,
        image: "",
      }
    }
    else{
      return preImage
    }
  })
 // setName((preName)=> (preName.length>0 ? "": pre))

  setInputData(preName=>{
    if(preName.name.length>0){
      return {
        ...preName,
        name: "",
      }
    }else{
      return preName
    }
  })
  // setCity((preCity)=> (preCity.length>0 ? "": pre))
  setInputData(preCity=>{
    if(preCity.city.length>0){
      return {
        ...preCity,
        city:''
      }
    }else{
      return preCity
    }
  })
  // setPosition((prePosition)=> (prePosition.length>0 ? "": prePosition))
  setInputData(prePosition=>{
    if(prePosition.position.length>0){
      return {
        ...prePosition,
        position:''
      }
    }else{
      return prePosition
    }
  })


}
const [myData, setMyData] = useState([])
console.log(myData);
  return (
    <div>

     <Header/>
    <div className="main_container">
      <div className="main_left">
        <input
          type="text"
          placeholder="Image Address"
          value={inputData.image}
          onChange={(e) => {
            e.preventDefault();
            setInputData(preInputData=>({
              ...preInputData,
              image: e.target.value,
              
            }))
          }}
        />
        <input
          type="text"
          placeholder="Name"
          value={inputData.name}
          onChange={(e) => {
            e.preventDefault();
            setInputData(preInputData=>({
              ...preInputData,
              
              name:e.target.value,
            }))
          }}
        />
        <input
          type="text"
          placeholder="City"
          value={inputData.city}
          onChange={(e) => {
            e.preventDefault();
            setInputData(preInputData=>({
              ...preInputData,
              
              city:e.target.value,
            }))
          }}
        />
        <input
          type="text"
          placeholder="Position"
          value={inputData.position}
          onChange={(e) => {
            e.preventDefault();
            setInputData(preInputData=>({
              ...preInputData,
              
              position:e.target.value,
            }))
          }}
        />
        <button onClick={clickHandle }> Submit</button>
      </div>
      <div className="main_right">
        {myData?.map(({image, name, city, position},index)=>
        <Unit 
        image={image}
        name={name}
        city={city}
        position={position}
        key={index}
        
        />)}
      </div>
    </div>
    </div>
  );
};

export default App;
