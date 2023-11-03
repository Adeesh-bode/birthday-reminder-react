import React, { useState} from 'react';
import './index.css';

export default function AddForm({ data , setData })
{
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [image, setImage] = useState("");

    function fetchData(e)
    {   
        e.preventDefault(); // avoid the page to refresh on submit
        setData([
                ...data,
                {   
                    id: data.length + 1,
                    name:name ,
                    age:age ,
                    image: image,
                }
            ])

        setName("");
        setAge(""); 
        setImage("");
    }
        
    return(
        <form onSubmit={(e)=>fetchData(e)} className='form'>
            <h1 >Enter Birthday Details:</h1>
            <div className='inputs'>
                <label htmlFor='name'>
                    Name:{" "}
                    <input 
                        type="text"
                        placeholder='Enter Name'
                        id="name"
                        onChange={(e)=>setName(e.target.value)}
                    ></input>
                </label>
                <label htmlFor='age'>
                    Age:{" "}
                    <input 
                        type="number"
                        placeholder='Enter Age'
                        id="age"
                        onChange={(e)=>setAge(e.target.value)}
                    ></input>
                </label>
                <label htmlFor='image'>
                    Image Url:{" "}
                    <input 
                        type="text"
                        placeholder='Enter Url'
                        id="image"
                        onChange={(e)=>setImage(e.target.value)}
                    ></input>
                </label>
            </div>
            <button type="submit">Add Birthday</button>
        </form>
    )   
}