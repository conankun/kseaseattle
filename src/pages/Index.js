import React from 'react'
import Banner from 'components/Banner'
import Profile from 'components/Profile';
import OfficerList from 'components/OfficerList';
import NMSC from 'components/NMSC';
import Contact from 'components/Contact';
import Footer from 'components/Footer';

const Index = () => (
  <>
    <Banner></Banner>
    <Profile></Profile>
    <OfficerList startingYear={2020}></OfficerList>
    <NMSC></NMSC>
    <Contact></Contact>
    <Footer></Footer>
  </>
);

export default Index;