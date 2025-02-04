import React from "react";
// import SliderComponent from './SliderComponent';
import ServiceSliderComponent from "./ServiceSliderCom";
import SliderComponent from "./SliderComponent";
import ProjectSlider from "./ProjectSlider";

// const recentHighlightsCards = [
//     {
//         title: "Agent viewing Registration",
//         info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum officia dolores minus non placeat ipsum nihil porro commodi molestiae odio?Lorem ipsum dolor sit amet.",
//         btnText: "Explore",
//         active: false,
//         showMoreInfo:true
//     },
//     {
//         title: "Agent viewing Registration",
//         info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum officia dolores minus non placeat ipsum nihil porro commodi molestiae odio?Lorem ipsum dolor sit amet.",
//         btnText: "Explore",
//         active: false,
//         showMoreInfo:true
//     },
//     {
//         title: "Agent viewing Registration",
//         info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum officia dolores minus non placeat ipsum nihil porro commodi molestiae odio?Lorem ipsum dolor sit amet.",
//         btnText: "Explore",
//         active: false,
//         showMoreInfo:true
//     },

//     {
//         title: "Agent viewing Registration",
//         info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum officia dolores minus non placeat ipsum nihil porro commodi molestiae odio?Lorem ipsum dolor sit amet.",
//         btnText: "Explore",
//         active: false,
//         showMoreInfo:true
//     },

//     {
//         title: "Agent viewing Registration",
//         info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum officia dolores minus non placeat ipsum nihil porro commodi molestiae odio?Lorem ipsum dolor sit amet.",
//         btnText: "Explore",
//         active: false,
//         showMoreInfo:true
//     },

//     {
//         title: "Agent viewing Registration",
//         info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum officia dolores minus non placeat ipsum nihil porro commodi molestiae odio?Lorem ipsum dolor sit amet.",
//         btnText: "Explore",
//         active: false,
//         showMoreInfo:true
//     },

// ];

const ServicesTab = () => {
  const paymentsCards = [
    {
      title: "Complex 1",
      propertyId: "#PRO50",
      btnText: "All Profiles",
      buyers: 125,
      tenants: 750,
      active: false,
      alert: "Due Jan 2024",
      alertType: "danger",
    },
    {
      title: "Complex 1",
      propertyId: "#PRO50",
      btnText: "All Profiles",
      buyers: 125,
      tenants: 750,
      active: false,
      alert: "Due Jan 2024",
      alertType: "danger",
    },
    {
      title: "Complex 1",
      propertyId: "#PRO50",
      btnText: "All Profiles",
      buyers: 125,
      tenants: 750,
      active: false,
      alert: "Due Jan 2024",
      alertType: "danger",
    },
    {
      title: "Complex 1",
      propertyId: "#PRO50",
      btnText: "All Profiles",
      buyers: 125,
      tenants: 750,
      active: false,
      alert: "Due Jan 2024",
      alertType: "danger",
    },
    {
      title: "Complex 1",
      propertyId: "#PRO50",
      btnText: "All Profiles",
      buyers: 125,
      tenants: 750,
      active: false,
      alert: "Due Jan 2024",
      alertType: "danger",
    },
    {
      title: "Complex 1",
      propertyId: "#PRO50",
      btnText: "All Profiles",
      buyers: 125,
      tenants: 750,
      active: false,
      alert: "Due Jan 2024",
      alertType: "danger",
    },
    {
      title: "Complex 1",
      propertyId: "#PRO50",
      btnText: "All Profiles",
      buyers: 125,
      tenants: 750,
      active: false,
      alert: "Due Jan 2024",
      alertType: "danger",
    },
    {
      title: "Complex 1",
      propertyId: "#PRO50",
      btnText: "All Profiles",
      buyers: 125,
      tenants: 750,
      active: false,
      alert: "Due Jan 2024",
      alertType: "danger",
    },
    {
      title: "Complex 1",
      propertyId: "#PRO50",
      btnText: "All Profiles",
      buyers: 125,
      tenants: 750,
      active: false,
      alert: "Due Jan 2024",
      alertType: "danger",
    },
  ];

  const leadCards = [
    {
      img: "/Images/banglow.png",
      title: "Project name",
      loc: "Dubai",
      para: "Lorem ipsum dolor si amet.",
      progress: "Under construction",
      leads: "1,522",
      btnText: "View",
    },
    {
      img: "/Images/banglow.png",
      title: "Project name",
      loc: "Dubai",
      para: "Lorem ipsum dolor si amet.",
      progress: "Under construction",
      leads: "1,522",
      btnText: "View",
    },
    {
      img: "/Images/banglow.png",
      title: "Project name",
      loc: "Dubai",
      para: "Lorem ipsum dolor si amet.",
      progress: "Under construction",
      leads: "1,522",
      btnText: "View",
    },
    {
      img: "/Images/banglow.png",
      title: "Project name",
      loc: "Dubai",
      para: "Lorem ipsum dolor si amet.",
      progress: "Under construction",
      leads: "1,522",
      btnText: "View",
    },
    {
      img: "/Images/banglow.png",
      title: "Project name",
      loc: "Dubai",
      para: "Lorem ipsum dolor si amet.",
      progress: "Under construction",
      leads: "1,522",
      btnText: "View",
    },
    {
      img: "/Images/banglow.png",
      title: "Project name",
      loc: "Dubai",
      para: "Lorem ipsum dolor si amet.",
      progress: "Under construction",
      leads: "1,522",
      btnText: "View",
    },
    {
      img: "/Images/banglow.png",
      title: "Project name",
      loc: "Dubai",
      para: "Lorem ipsum dolor si amet.",
      progress: "Under construction",
      leads: "1,522",
      btnText: "View",
    },
    {
      img: "/Images/banglow.png",
      title: "Project name",
      loc: "Dubai",
      para: "Lorem ipsum dolor si amet.",
      progress: "Under construction",
      leads: "1,522",
      btnText: "View",
    },
    {
      img: "/Images/banglow.png",
      title: "Project name",
      loc: "Dubai",
      para: "Lorem ipsum dolor si amet.",
      progress: "Under construction",
      leads: "1,522",
      btnText: "View",
    },
  ];

  const categories = [
    {
      id: 1,
      cat: "All",
    },
    {
      id: 2,
      cat: "By Project",
    },
    {
      id: 3,
      cat: "By Property",
    },
  ];

  return (
    <>
      <SliderComponent
        headingWhite="Customer"
        headingBlack="Profiles"
        cards={paymentsCards}
        categories={categories}
      />
      <ProjectSlider
        headingWhite="Lead"
        headingBlack="Management"
        cards={leadCards}
      />
      <ProjectSlider
        headingWhite="CRM"
        headingBlack="Overview"
        cards={leadCards}
      />
    </>
  );
};

export default ServicesTab;
