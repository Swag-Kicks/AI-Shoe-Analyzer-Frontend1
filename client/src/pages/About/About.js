import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/shared/Footer';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeAbout from '../Home/HomeAbout/HomeAbout';
import HomeBrands from '../Home/HomeBrands/HomeBrands';
import HomeTwoHeader from "../HomeTwo/HomeTwoHeader/HomeTwoHeader"
import HomeTwoFooter from '../HomeTwo/HomeTwoFooter/HomeTwoFooter';

const About = () => {
   return (
      <>
         <PageHelmet pageTitle="About Page" />

         <HomeTwoHeader/>
         <CommonPageHeader title="About Us" subtitle="About" />
         <HomeAbout/>
         {/* <HomeTwoAchievement/> */}
         <HomeBrands/>
         <HomeTwoFooter/>
      </>
   );
};

export default About;