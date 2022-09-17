import React from 'react';
import './Foods.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Food from '../Food/Food';
import { Container, Row, Col } from 'react-bootstrap';
import { Grid, List, ListItem, Item } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';


const Foods = () => {

    const [foods, setFoods] = useState([]);
    // console.log('FOOD??:', foods)

    const [typeOfFood, setTypeOfFood] = useState('redOnion.dinner.json');

    const handleFoodsType = (foodName) => {
        setTypeOfFood(foodName)
    };

    useEffect(() => {
        fetch(typeOfFood)
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [typeOfFood]);


    /* const handleColor = () => {
        document.getElementById("color").style.color = "red";
    } */
    // <h4>Lunch</h4>

    {/* <Container fluid>
            <Row>
                <Col lg="6">
                    {
                        foods.map(x => <Food key={x.id} id={x.id} name={x.name} img={x.img} price={x.price} details={x.details} ></Food>)
                    }
                </Col>
            </Row>

        </Container> */}
    /*  <Container >
 
         <Row>
             <Col className='foods-div'>
                 {
                     foods.map(x => <Food key={x.id} id={x.id} name={x.name} img={x.img} price={x.price} details={x.details} ></Food>)
                 }
             </Col>
         </Row>
 
     </Container> */
    {/* <Grid container spacing={{ xs: 2, md: 3 }}>
         {foods.map((_, index) => (
             <Grid item xs={1} sm={1} md={2} lg={4} key={index}>
                 <ListItem className='food-div'>
                     <div className='food-div2'>
                         <h1>This is FOOD</h1>
                         <h2>ID: {foods.id}</h2>
                         <h2>Name: {foods.name}</h2>
                         <img className='img-fluid' src={foods.img} alt="" />
                     </div>
                 </ListItem>
             </Grid>
         ))}
     </Grid> */}

    // <Grid container spacing={{ xs: 2, md: 3 }} column={{ sx: 4, sm: 8, md: 12 }}>
    //     {foods.map(x => (
    //         <Grid items xs={12} sm={6} md={4} key={foods.id}>
    //             <ListItem>

    //                 {/* <div className='food-div'>
    //                     <h1>This is FOOD</h1>
    //                     <h2>ID: {x.id}</h2>
    //                     <h2>Name: {x.name}</h2>
    //                     <img className='img-fluid' src={x.img} alt="" />
    //                 </div> */}

    //                 {/* <Food x={x}></Food> */}

    //             </ListItem>
    //         </Grid>
    //     ))}
    // </Grid>



    // let header = document.getElementById("myDIV");
    // let btns = header.getElementsByClassName("food-btn");
    // for (let i = 0; i < btns.length; i++) {
    //     btns[i].addEventListener("click", function () {
    //         let current = document.getElementsByClassName("active");
    //         current[0].className = current[0].className.replace(" active", "");
    //         this.className += " active";
    //     });
    // }


    var header = document?.getElementById("myDIV");
    var btns = header?.getElementsByClassName("btn");
    for (var i = 0; i < btns?.length; i++) {
        btns[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }


    //navigate to details page//
    const navigate = useNavigate();
    const handleDetailsButton = (foodID) => {
        navigate(`/foods/details/${foodID}`)
    };


    return (
        <>

            <div id="myDIV">
                <button className='btn food-btn' onClick={() => handleFoodsType('redOnion.breakfast.json')}> Breakfast </button>
                <button className='btn food-btn' onClick={() => handleFoodsType('redOnion.lunch.json')}> Lunch </button>
                <button className='btn' onClick={() => handleFoodsType('redOnion.dinner.json')} > Dinner </button>
            </div>
            

            <Grid className='grandma-grid' container direction="row" justifyContent="center" alignItems="center" spacing={{}} columns={{ xs: 12, sm: 12, md: 12 }}>

                {foods.map(x => (
                    <Grid className='parent-grid' item xs={12} sm={6} md={4} key={x.id}>

                        <ListItem className='child-grid'>
                            <div className='grid-div d-flex flex-column'>
                                <div className='w-50 m-auto'>
                                    <img src={x.img} alt="" className='img-fluid' />
                                </div>
                                <div className='m-auto text-center'>
                                    <input className='input-username' type="text" placeholder='username' />
                                    <input className='input-username' type="text" placeholder='password' />

                                    <h4>FOOD</h4>
                                    <h6>ID: {x.id} </h6>
                                    <h6>{x.name} </h6>
                                    <button onClick={()=>handleDetailsButton(`${x.id}`)} className='details-button'> Details </button>
                                </div>
                            </div>
                        </ListItem>

                    </Grid>

                ))}
            </Grid>
        </>

    );
};

export default Foods;