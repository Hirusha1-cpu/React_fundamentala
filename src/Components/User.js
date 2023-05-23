import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const User = () => {
    const [data, setData] = useState({})
    const {id} = useParams()
    useEffect(()=>{
        console.log('useEffect running1');
        const getData = async ()=>{
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            const data = await res.json()
            if(data){
                setData(data)
            }


        }
        getData()
        return()=>{
            getData()
        }
    },[id])
    console.log(id);
  return (
    <div>User
        {data?(<div>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
        </div>):null}
        <Link to='/contact'>Back</Link>
    </div>

  )
}

export default User