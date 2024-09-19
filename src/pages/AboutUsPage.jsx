import React, { useEffect } from "react";
import AboutUs from "../components/AboutUs/AboutUs";
import BrandArea from "../components/BrandArea/BrandArea";
import BreadcrumbArea from "../components/BreadcrumbArea/BreadcrumbArea";
import OurHistory from "../components/OurHistory/OurHistory";
import ServicesAreaSix from "../components/ServicesArea/ServicesAreaSix";
import TeamOne from "../components/Team/TeamOne";
import VideoAreaTwo from "../components/VideoArea/VideoAreaTwo";
import Layout from "../layouts/Layout";
import { gsapTitleAnimation } from "../lib/gsap-lib/gsapTitleAnimation";
import AboutUsTwo from "../components/AboutUs/AboutUsTwo";
import HowWeWork from "../components/HowWeWork/HowWeWork";
import ServicesAreaTwo from "../components/ServicesArea/ServicesAreaTwo";

const AboutUsPage = () => {
  useEffect(() => {
    gsapTitleAnimation();
  }, []);

  return (
    <>
      <Layout header={2} footer={2}>
        <BreadcrumbArea title={"About Us"} subtitle={"About Us"} />
        {/* <AboutUs /> */}
        <AboutUsTwo/>
        {/* <HowWeWork/> */}
        <ServicesAreaTwo/>
        {/* <ServicesAreaSix /> */}
        {/* <VideoAreaTwo /> */}
        {/* <OurHistory /> */}
        {/* <TeamOne /> */}
        {/* <BrandArea className={"inner-brand-area pb-70"} /> */}
      </Layout>
    </>
  );
};

export default AboutUsPage;
