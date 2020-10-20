import React from 'react'
import Banner from 'components/Banner'
import Profile from 'components/Profile';
import OfficerList from 'components/OfficerList';

const Index = () => (
  <>
    <Banner></Banner>
    <Profile></Profile>
    <OfficerList startingYear={2020}></OfficerList>
  </>
);

export default Index;