import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Products from '../../Components/Products/Products';
import OurPartners from '../../Components/OurPartners/OurPartners';
import CustomerReview from '../../Components/CustomerReview/CustomerReview';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <OurPartners></OurPartners>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;