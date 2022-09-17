import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Foods from '../Foods/Foods';
import Top from '../Top/Top';

const Home = () => {
    <Spinner animation="border" variant="primary" />
    return (
        <div>
            <Top></Top>
            <Foods></Foods>

        </div>
    );
};

export default Home;