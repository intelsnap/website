import React from "react";
import Navbar from "../components/App/Navbar";
import Footer from "../components/App/Footer";
import Layout from "../components/App/Layout";
import Banner from "../components/Index/Banner";
import OurSolutions from "../components/Index/OurSolutions";

const Home = () => {
  return (
    <Layout>
      <Navbar />
      <Banner />
      <OurSolutions />
      <Footer />
    </Layout>
  );
};

export default Home;
