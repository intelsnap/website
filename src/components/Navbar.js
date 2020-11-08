import { Link } from 'gatsby'
import React from 'react';
//import {Logowrapper} from "../components/logoelement";
//import {useStaticQuery, graphql} from "gatsby";
import logo from "../assets/logo.svg";
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';


const Navbar = () => {
    // const data = useStaticQuery(graphql `
    //     query {
    //         logo: file(relativePath: {eq: "logo.svg"}) {
    //             publicURL
    //         }
    //     }

    // `)
    return (
     
       <Nav className="justify-content-center" activeKey= "/home" as="ul"
         onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
       
       >

           <Nav.Item>
          
            <ul className="sticky">
                <logo>
                <Link to = "/">
                <img src = {logo}  alt="intelsnap" width="90" height="90"/>
                </Link>
                </logo>
                <li className="hd" activeKey="/">
                    <Link to = "/"> Home </Link>
                </li>
                <li className="hd" activeKey="/services">
                    <Link to = "/services/"> Services </Link>
                </li>
                <li className="hd" active>
                    <Link to = "/technologies/"> Technologies </Link>
                </li>
                <li className="hd">
                    <Link to = "/media/"> Media </Link>
                </li>
                <li className="hd">
                    <Link to = "/about/"> About </Link>
                </li>
                <li className="hd">
                    <Link to = "/contact/"> Contact </Link>
                </li>
            </ul>

            </Nav.Item>
        
  </Nav>
    )
}

export default Navbar
