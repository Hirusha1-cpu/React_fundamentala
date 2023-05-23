import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../App.css'
import Header from './Header';


const Contact = () => {
    const [mainData, setMainData] = useState([])
    const [themeChange, setThemeChange]= useState(false)
    useEffect(()=>{
        const dataFetching = async ()=>{
            const res = await fetch('https://jsonplaceholder.typicode.com/posts/')
            const data = await res.json()

            if(data){
                console.log(data);
                setMainData(data)
            }
        }
        dataFetching();
    },[]);
  return (
    <div className='ContactContainer'>
        <Header/>
        Contact Page
        <button onClick={()=> setThemeChange(pre=>pre?false:true)}>Change Theme</button>
        <div className='ContactBlock'>

        {mainData?.map(({id, title})=>
        (<Link to={`/contact/${id}`} key={id}>
        <div className='ContactBlockUnit' chageTheme={themeChange}>
            <h3>{title}</h3>
        </div>
        
        
        </Link>))}
        </div>
    </div>
  )
}

export default Contact;

