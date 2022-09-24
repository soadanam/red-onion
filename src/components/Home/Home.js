import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Foods from '../Foods/Foods';
import Top from '../Top/Top';
import WhyChoose from '../WhyChoose/WhyChoose';

const Home = () => {
    <Spinner animation="border" variant="primary" />
    return (
        <div>
            <Top></Top>
            <Foods></Foods>
            <WhyChoose></WhyChoose>

        </div>
    );
};

export default Home;