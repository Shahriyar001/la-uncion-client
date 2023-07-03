import React from 'react';
import Banner from '../Banner/Banner';
import AboutUs from '../AboutUs/AboutUs';
import SpecialRacipe from '../SpacialRacipe/SpecialRacipe';
import Services from '../Services/Services';
import Menu from '../Menu/Menu';
import Team from '../Team/Team';
import Reservation from '../Reservation/Reservation';
import DishOfTWeek from '../DishofTWeek/DishOfTWeek';
import Testimonial from '../Testimonia/Testimonial';
import ContactUs from '../ContuctUs/ContactUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <SpecialRacipe></SpecialRacipe>
            <Services></Services>
            <Menu></Menu>
            <Team></Team>
            <Reservation></Reservation>
            <DishOfTWeek></DishOfTWeek>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;