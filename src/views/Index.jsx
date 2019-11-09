import React from "react";
// nodejs library that concatenates classes
// import classnames from "classnames";

// reactstrap components
// import {
//   Badge,
//   Container,
//   Row,
//   Col,
//   Card,
//   CardBody,
//   CardImg
// } from "reactstrap";

// core components
import DemoNavbar from "../components/Navbars/DemoNavbar";
import CardsFooter from "../components/Footers/SimpleFooter";
import Hero from "../views/IndexSections/Hero";
// import Cards from "../views/IndexSections/Cards";
import WorkFromHome from "components/workFromHome";
import WhatsappBar from "components/whatsappBar";
import RenewalsSwitch from "components/renewalsSwitch";
import RatingsBar from "components/ratingsBar";
import CardsSection from "components/cardsSection";
// index page sections

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <Hero />
          {/* <Cards /> */}
          <WorkFromHome />
          <WhatsappBar />
          <RenewalsSwitch />
          <RatingsBar />
          <CardsSection />
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Landing;
