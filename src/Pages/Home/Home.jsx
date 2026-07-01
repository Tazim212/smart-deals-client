import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Products from '../../Components/Products/Products';
import OurPartners from '../../Components/OurPartners/OurPartners';
import CustomerReview from '../../Components/CustomerReview/CustomerReview';
import Services from '../../Components/Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <OurPartners></OurPartners>
            <CustomerReview></CustomerReview>
            <Services></Services>
        </div>
    );
};

export default Home;