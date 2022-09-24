import React from 'react';
import './Foods.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Food from '../Food/Food';
// import { Container, Row, Col } from 'react-bootstrap';
import { Grid, List, ListItem, Item } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';


const Foods = () => {

    const [foods, setFoods] = useState([]);
    // console.log('FOOD??:', foods)

    const [typeOfFood, setTypeOfFood] = useState('redOnion.dinner.json');

    const handleFoodsType = (foodName, e) => {
        setTypeOfFood(foodName);
        // handleFoodClick(e);
    };


    //fetching data from Various local json file each time by onClick in a button
    useEffect(() => {
        fetch(typeOfFood)
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [typeOfFood]);



    //Event Handler Function
    const handleFoodClick = (event) => {

        const allClasses = document.getElementsByClassName('food-btn');
        for (let i = 0; i < allClasses.length; i++) {
            allClasses[i].classList.remove('active')
        };

        event.currentTarget.classList.add('active');
        // event.target.classList.add('actives');


        // target VS currentTarget 
        ///////////// "target" and "currentTarget" is  almost same! but... 
        ////////"target" is carries the value while function/ event is triggered and remains the same all the time! 
        ////And, "currentTarget"  refers to the present. It's the most recent target that caught the event that bubbled up from elsewhere.

        // const myEvent = event.target;
        // const myEvent = event.currentTarget;
        // const myEvent = event.currentTarget.parentNode;
        // const myEvent = event.currentTarget.parentNode.children;
        // const myEvent = event.currentTarget.parentNode.removeChild(event.target);
        // console.log("EVENT:", myEvent);

        // event.target.style.backgroundColor = "green"; //worked
        // event.target.remove(event.target) //worked for removing target
        // event.target.parentNode.removeChild(event.target); //worked parent>child>remove
        // event.target.parentNode.remove(event.target); //deletes parent that means all child also
    };


    //navigate to details page, using Dynamic Route path//
    const navigate = useNavigate();
    const handleDetailsButton = (foodID) => {
        navigate(`/foods/details/${foodID}`)
    };

    //navigate to cart page function
    const handleCheckout = () => navigate('/checkout');



    return (
        <>
            <div id="myDIV">
                <button className='btn food-btn ' onClick={(e) => { handleFoodsType('redOnion.breakfast.json'); handleFoodClick(e); }}> Breakfast </button>
                <button className='btn food-btn active' onClick={(e) => { handleFoodsType('redOnion.lunch.json'); handleFoodClick(e); }}> Lunch </button>
                <button className='btn food-btn ' onClick={(e) => { handleFoodsType('redOnion.dinner.json'); handleFoodClick(e); }} > Dinner </button>
            </div>

            <Grid className='grandma-grid' container direction="row" justifyContent="center" alignItems="center" spacing={{}} columns={{ xs: 12, sm: 12, md: 12 }}>
                {foods.map(x => (
                    <Grid className='parent-grid' item xs={12} sm={6} md={4} key={x.id}>
                        <ListItem className='child-grid'>
                            <div className='grid-div d-flex flex-column'>
                                <div className='w-100 m-auto'>
                                    <img src={x.img} alt="" className='img-fluid' />
                                </div>
                                <div className='m-auto text-center food-info'>
                                    <h6>{x.name} </h6>
                                    <p>{x.details}</p>
                                    <h5>{x.Price}</h5>
                                    <button onClick={() => handleDetailsButton(`${x.id}`)} className='details-button'> Details </button>
                                </div>
                            </div>
                        </ListItem>
                    </Grid>
                ))}
            </Grid>

            <button className='check-out-button' onClick={handleCheckout}>Checkout Your Food</button>
        </>

    );
};

export default Foods;