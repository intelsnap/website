import React from "react"
import { Link } from "gatsby";
import Layout from "../components/layout";
import pic from "../images/image1.jpeg";
import pic1 from "../images/image2.jpeg";
import styles from "../components/about.module.css"



const About = () => {
  return (

    <Layout>
      <div class="container" style = {{textAlign:"justify"}}>
        <div class="row">
          <div class="col-md-9">
            <h1> About </h1>
              <p>
                Is a digital design agency that enables digital transformation with creative data-driven solutions to the building industry.
                Our services range from the definition of digital strategies to the creation of powerful automation with customized software.
                We employ a range of new technologies to realize outcomes including computational design, data-driven methodologies, advanced workflows, and sophisticated algorithms.
              </p>

          </div>
        </div>

          
          <h1>Leadership team</h1>
          
          <section className = {styles.page}>
            
            <div class ="row">
              <div class="col-md-1">

              </div>
              <div class="col-md-4">

                <h4 style = {{color: "black" , paddingTop:"10px" , fontSize:"14px" , fontWeight:"bold"}}> Arif Hanif - Founder </h4>

              </div>

            </div>
          
            {/* <h2 style = {{color: "black" ,textAlign:"center" }}> Arif Hanif - Founder </h2> */}
            <article >
            <img src = {pic}  alt="Arif-Hanif" width="120" height="62"/>
            <p> Arif is an engineer with the heart of an entrepreneur. His passion for transforming businesses through 
              software solutions that drive exceptional results for clients has fueled our firm's high quality work and steady growth.
              His leadership has brought Intelsnap to the forefront in web, mobile and IoT solutions development.</p>

          </article>

                <div class ="row">
              <div class="col-md-1">

              </div>
              <div class="col-md-4">

                <h4 style = {{color: "black" , paddingTop:"10px" , fontSize:"14px" , fontWeight:"bold"}}> Sahar Zafar - Founder </h4>

              </div>

            </div>
          <article >
            
            <img src = {pic1}  alt="Sahar-Zafar" width="120" height="62"/>
            <p> Sahar Senior Scientist specializing in Project Management Consulting for Biotechnology and Biodefense Research Compliance. His passion for transforming businesses through 
              software solutions that drive exceptional results for clients has fueled our firm's high quality work and steady growth.
              His leadership has brought Intelsnap to the forefront in web, mobile and IoT solutions development.</p>

          </article>

          
          </section>

       </div>

      </Layout>
  )

}

export default About;
