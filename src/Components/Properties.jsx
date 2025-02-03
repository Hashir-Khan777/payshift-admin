import React from "react";
import SliderComponent from "./SliderComponent";

const Properties = () => {
  const myRequestCard = [
    {
      title: "Request No: 1234",
      info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis quia.",
      btnText: "Check",
      link: "/my-request",
      active: false,
    },
    {
      title: "Request Closed",
      info: "Your request is closed for Owner and Tenant Registration is closed.",
      btnText: "Check",
      link: "/my-request",
      active: true,
    },
    {
      title: "Request Closed",
      info: "Your request is closed for Owner and Tenant Registration is closed.",
      btnText: "Check",
      link: "/my-request",
      active: false,
    },
    {
      title: "Request Closed",
      info: "Your request is closed for Owner and Tenant Registration is closed.",
      btnText: "Check",
      link: "/my-request",
      active: false,
    },
    {
      title: "Request Closed",
      info: "Your request is closed for Owner and Tenant Registration is closed.",
      btnText: "Check",
      link: "/my-request",
      active: false,
    },
    {
      title: "Request Closed",
      info: "Your request is closed for Owner and Tenant Registration is closed.",
      btnText: "Check",
      link: "/my-request",
      active: false,
    },
    {
      title: "Request Closed",
      info: "Your request is closed for Owner and Tenant Registration is closed.",
      btnText: "Check",
      link: "/my-request",
      active: false,
    },
  ];

  const myReportCard = [
    {
      title: "Report Name",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim iure placeat vero repudiandae maxime",
      btnText: "Check",
      link: "/my-report",
      active: false,
    },
    {
      title: "Report Name",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim iure placeat vero repudiandae maxime",
      btnText: "Check",
      link: "/my-report",
      active: true,
    },
    {
      title: "Report Name",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim iure placeat vero repudiandae maxime",
      btnText: "Check",
      link: "/my-report",
      active: false,
    },
    {
      title: "Report Name",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim iure placeat vero repudiandae maxime",
      btnText: "Check",
      link: "/my-report",
      active: false,
    },
    {
      title: "Report Name",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim iure placeat vero repudiandae maxime",
      btnText: "Check",
      link: "/my-report",
      active: false,
    },
    {
      title: "Report Name",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim iure placeat vero repudiandae maxime",
      btnText: "Check",
      link: "/my-report",
      active: false,
    },
    {
      title: "Report Name",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim iure placeat vero repudiandae maxime",
      btnText: "Check",
      link: "/my-report",
      active: false,
    },
    {
      title: "Report Name",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim iure placeat vero repudiandae maxime",
      btnText: "Check",
      link: "/my-report",
      active: false,
    },
  ];

  const myDocumentCard = [
    {
      title: "Doc Name",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim iure placeat vero repudiandae maxime",
      btnText: "Check",
      link: "/my-document",
      active: false,
    },
    {
      title: "Doc Name",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim iure placeat vero repudiandae maxime",
      btnText: "Check",
      link: "/my-document",
      active: true,
    },
    {
      title: "Doc Name",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim iure placeat vero repudiandae maxime",
      btnText: "Check",
      link: "/my-document",
      active: false,
    },
    {
      title: "Doc Name",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim iure placeat vero repudiandae maxime",
      btnText: "Check",
      link: "/my-document",
      active: false,
    },
    {
      title: "Doc Name",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim iure placeat vero repudiandae maxime",
      btnText: "Check",
      link: "/my-document",
      active: false,
    },
    {
      title: "Doc Name",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim iure placeat vero repudiandae maxime",
      btnText: "Check",
      link: "/my-document",
      active: false,
    },
  ];

  return (
    <>
      <SliderComponent
        headingWhite="My"
        headingBlack="Requests"
        cards={myRequestCard}
      />
      <SliderComponent
        headingWhite="My"
        headingBlack="Report"
        cards={myReportCard}
      />
      <SliderComponent
        headingWhite="My"
        headingBlack="Document"
        cards={myDocumentCard}
      />
    </>
  );
};

export default Properties;
