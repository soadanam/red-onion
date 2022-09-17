import { Grid, ListItem } from '@mui/material';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Food.css';

const Food = (props) => {
    console.log(" food Props:", props)

    return (<>
        {/* <Container className='food-div'>
            <Row className="justify-content-center">
                <Col sm={12}>
                    <div>
                        <h1>This is FOOD</h1>
                        <h2>ID: {props.id}</h2>
                        <h2>Name: {props.name}</h2>
                        <img src={props.img} alt="" />
                    </div>
                </Col>
            </Row>
        </Container> */}

        {/* <div className='food-div'>
                <h1>This is FOOD</h1>
                <h2>ID: {props.id}</h2>
                <h2>Name: {props.name}</h2>
                <img className='img-fluid' src={props.img} alt="" />
        </div> */}


        {/* MATERIAL UI  */}

        {/* <Grid container spacing={{ xs: 2, md: 3 }} columns={{}}>
            {Array.from(Array(1)).map((_, index) => (
                <Grid item xs={1} sm={1} md={2} lg={4} key={index}>
                    <ListItem className='food-div'>
                        <div className='food-div2'>
                            <h1>This is FOOD</h1>
                            <h2>ID: {props.id}</h2>
                            <h2>Name: {props.name}</h2>
                            <img className='img-fluid' src={props.img} alt="" />
                        </div>
                    </ListItem>
                </Grid>
            ))}
        </Grid> */}

        {/* <div className='food-div'>
            <h1>This is FOOD</h1>
            <h2>ID: {props.food.id}</h2>
            <h2>Name: {props.food.name}</h2>
            <img className='img-fluid' src={props.img} alt="" />
        </div>
 */}


        <div className='food-div'>
            <h1>This is FOOD</h1>
            <h2>ID: {props.x.id}</h2>
            <h2>Name: {props.x.name}</h2>
            <img className='img-fluid' src={props.x.img} alt="" />
        </div>

    </>
    );
};

export default Food;