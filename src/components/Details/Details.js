import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const Details = () => {
    const params = useParams();
    console.log("PARAMS??", params);
    const id = params.foodID;
    // console.log(id, typeof(id))

    const [foods, setFoods] = useState([]);
    // console.log('Foods?', foods);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [id]);


    const [object, setObject] = useState([]);
    console.log('object??', object);

    const findingFunc = () => {
        const myObj = foods.find(x => x.id == id);
        console.log("FIND??", myObj)
        setObject(myObj)
    }
    // findingFunc();




    return (
        <div>
            <h1>Hello from details!! </h1>

            <button className='btn' onClick={findingFunc}>See Details ? </button>

            <div className='food-details'>
                {/* <img src={object.img} alt="" /> */}
                <h5>ID: {object.id} </h5>
                <h2> Name: {object.name} </h2>
                <h5> Email: {object.email} </h5>

            </div>

        </div>
    );
};

export default Details;