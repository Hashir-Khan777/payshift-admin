import React from "react";
import SliderComponent from "./SliderComponent";
import ProjectComponent from "./ProjectComponent";
import DisputeSlider from "./DisputeSlider";

const Properties = () => {
  // const myRequestCard = [
  //   {
  //     title: "Request No: 1234",
  //     info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis quia.",
  //     btnText: "Check",
  //     link: "/my-request",
  //     active: false,
  //   },
  //   {
  //     title: "Request Closed",
  //     info: "Your request is closed for Owner and Tenant Registration is closed.",
  //     btnText: "Check",
  //     link: "/my-request",
  //     active: true,
  //   },
  //   {
  //     title: "Request Closed",
  //     info: "Your request is closed for Owner and Tenant Registration is closed.",
  //     btnText: "Check",
  //     link: "/my-request",
  //     active: false,
  //   },
  //   {
  //     title: "Request Closed",
  //     info: "Your request is closed for Owner and Tenant Registration is closed.",
  //     btnText: "Check",
  //     link: "/my-request",
  //     active: false,
  //   },
  //   {
  //     title: "Request Closed",
  //     info: "Your request is closed for Owner and Tenant Registration is closed.",
  //     btnText: "Check",
  //     link: "/my-request",
  //     active: false,
  //   },
  //   {
  //     title: "Request Closed",
  //     info: "Your request is closed for Owner and Tenant Registration is closed.",
  //     btnText: "Check",
  //     link: "/my-request",
  //     active: false,
  //   },
  //   {
  //     title: "Request Closed",
  //     info: "Your request is closed for Owner and Tenant Registration is closed.",
  //     btnText: "Check",
  //     link: "/my-request",
  //     active: false,
  //   },
  // ];

  // const myReportCard = [
  //   {
  //     title: "Report Name",
  //     info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim iure placeat vero repudiandae maxime",
  //     btnText: "Check",
  //     link: "/my-report",
  //     active: false,
  //   },
  //   {
  //     title: "Report Name",
  //     info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim iure placeat vero repudiandae maxime",
  //     btnText: "Check",
  //     link: "/my-report",
  //     active: true,
  //   },
  //   {
  //     title: "Report Name",
  //     info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim iure placeat vero repudiandae maxime",
  //     btnText: "Check",
  //     link: "/my-report",
  //     active: false,
  //   },
  //   {
  //     title: "Report Name",
  //     info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim iure placeat vero repudiandae maxime",
  //     btnText: "Check",
  //     link: "/my-report",
  //     active: false,
  //   },
  //   {
  //     title: "Report Name",
  //     info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim iure placeat vero repudiandae maxime",
  //     btnText: "Check",
  //     link: "/my-report",
  //     active: false,
  //   },
  //   {
  //     title: "Report Name",
  //     info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim iure placeat vero repudiandae maxime",
  //     btnText: "Check",
  //     link: "/my-report",
  //     active: false,
  //   },
  //   {
  //     title: "Report Name",
  //     info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim iure placeat vero repudiandae maxime",
  //     btnText: "Check",
  //     link: "/my-report",
  //     active: false,
  //   },
  //   {
  //     title: "Report Name",
  //     info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim iure placeat vero repudiandae maxime",
  //     btnText: "Check",
  //     link: "/my-report",
  //     active: false,
  //   },
  // ];

  // const myDocumentCard = [
  //   {
  //     title: "Doc Name",
  //     info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim iure placeat vero repudiandae maxime",
  //     btnText: "Check",
  //     link: "/my-document",
  //     active: false,
  //   },
  //   {
  //     title: "Doc Name",
  //     info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim iure placeat vero repudiandae maxime",
  //     btnText: "Check",
  //     link: "/my-document",
  //     active: true,
  //   },
  //   {
  //     title: "Doc Name",
  //     info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim iure placeat vero repudiandae maxime",
  //     btnText: "Check",
  //     link: "/my-document",
  //     active: false,
  //   },
  //   {
  //     title: "Doc Name",
  //     info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim iure placeat vero repudiandae maxime",
  //     btnText: "Check",
  //     link: "/my-document",
  //     active: false,
  //   },
  //   {
  //     title: "Doc Name",
  //     info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim iure placeat vero repudiandae maxime",
  //     btnText: "Check",
  //     link: "/my-document",
  //     active: false,
  //   },
  //   {
  //     title: "Doc Name",
  //     info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim iure placeat vero repudiandae maxime",
  //     btnText: "Check",
  //     link: "/my-document",
  //     active: false,
  //   },
  // ];

  const myProjectCards = [
    {
      title: "Project Name",
      firstpara: "Lorem ipsum dolor si amet.",
      secondpara: "Lorem ipsum dolor si amet.",
      btnText: "View",
    },
    {
      title: "Project Name",
      firstpara: "Lorem ipsum dolor si amet.",
      secondpara: "Lorem ipsum dolor si amet.",
      btnText: "View",
    },
    {
      title: "Project Name",
      firstpara: "Lorem ipsum dolor si amet.",
      secondpara: "Lorem ipsum dolor si amet.",
      btnText: "View",
    },
    {
      title: "Project Name",
      firstpara: "Lorem ipsum dolor si amet.",
      secondpara: "Lorem ipsum dolor si amet.",
      btnText: "View",
    },
    {
      title: "Project Name",
      firstpara: "Lorem ipsum dolor si amet.",
      secondpara: "Lorem ipsum dolor si amet.",
      btnText: "View",
    },
    {
      title: "Project Name",
      firstpara: "Lorem ipsum dolor si amet.",
      secondpara: "Lorem ipsum dolor si amet.",
      btnText: "View",
    },
    {
      title: "Project Name",
      firstpara: "Lorem ipsum dolor si amet.",
      secondpara: "Lorem ipsum dolor si amet.",
      btnText: "View",
    },
    {
      title: "Project Name",
      firstpara: "Lorem ipsum dolor si amet.",
      secondpara: "Lorem ipsum dolor si amet.",
      btnText: "View",
    },
    {
      title: "Project Name",
      firstpara: "Lorem ipsum dolor si amet.",
      secondpara: "Lorem ipsum dolor si amet.",
      btnText: "View",
    },
  ];

  const paymentsCards = [
    {
      title: "Maintenance Fee",
      propertyId: "#PRO50",
      btnText: "View",
      amount: 250000,
      payment: true,
      active: false,
      alert: "Due Jan 2024",
      alertType: "danger",
      showMoreInfo: true,
    },
    {
      title: "Maintenance Fee",
      propertyId: "#PRO50",
      btnText: "View",
      amount: 250000,
      payment: true,
      active: false,
      alert: "Due Jan 2024",
      alertType: "danger",
      showMoreInfo: true,
    },
    {
      title: "Maintenance Fee",
      propertyId: "#PRO50",
      btnText: "View",
      amount: 250000,
      payment: true,
      active: false,
      alert: "Due Jan 2024",
      alertType: "danger",
      showMoreInfo: true,
    },
    {
      title: "Maintenance Fee",
      propertyId: "#PRO50",
      btnText: "View",
      amount: 250000,
      payment: true,
      active: false,
      alert: "Due Jan 2024",
      alertType: "danger",
      showMoreInfo: true,
    },
    {
      title: "Maintenance Fee",
      propertyId: "#PRO50",
      btnText: "View",
      amount: 250000,
      payment: true,
      active: false,
      alert: "Due Jan 2024",
      alertType: "danger",
      showMoreInfo: true,
    },
    {
      title: "Maintenance Fee",
      propertyId: "#PRO50",
      btnText: "View",
      amount: 250000,
      payment: true,
      active: false,
      alert: "Due Jan 2024",
      alertType: "danger",
      showMoreInfo: true,
    },
    {
      title: "Maintenance Fee",
      propertyId: "#PRO50",
      btnText: "View",
      amount: 250000,
      payment: true,
      active: false,
      alert: "Due Jan 2024",
      alertType: "danger",
      showMoreInfo: true,
    },
    {
      title: "Maintenance Fee",
      propertyId: "#PRO50",
      btnText: "View",
      amount: 250000,
      payment: true,
      active: false,
      alert: "Due Jan 2024",
      alertType: "danger",
      showMoreInfo: true,
    },
    {
      title: "Maintenance Fee",
      propertyId: "#PRO50",
      btnText: "View",
      amount: 250000,
      payment: true,
      active: false,
      alert: "Due Jan 2024",
      alertType: "danger",
      showMoreInfo: true,
    },
    {
      title: "Maintenance Fee",
      propertyId: "#PRO50",
      btnText: "View",
      amount: 250000,
      payment: true,
      active: false,
      alert: "Due Jan 2024",
      alertType: "danger",
      showMoreInfo: true,
    },
    {
      title: "Maintenance Fee",
      propertyId: "#PRO50",
      btnText: "View",
      amount: 250000,
      payment: true,
      active: false,
      alert: "Due Jan 2024",
      alertType: "danger",
      showMoreInfo: true,
    },
    {
      title: "Maintenance Fee",
      propertyId: "#PRO50",
      btnText: "View",
      amount: 250000,
      payment: true,
      active: false,
      alert: "Due Jan 2024",
      alertType: "danger",
      showMoreInfo: true,
    },
  ];

  const DisputeCards = [
    {
      title: "John Smith",
      propertyId: "#PRO50",
      btnText: "View",
      payment: true,
      issue: "Unable to download report, facing issues on mobile app.",
      ticketId: "#12345",
      assignedTo: "George",
      active: false,
      alert: "High Priority",
      alertType: "danger",
      showMoreInfo: true,
    },
    {
      title: "John Smith",
      propertyId: "#PRO50",
      btnText: "View",
      payment: true,
      issue: "Unable to download report, facing issues on mobile app.",
      ticketId: "#12345",
      assignedTo: "George",
      active: false,
      alert: "High Priority",
      alertType: "danger",
      showMoreInfo: true,
    },
    {
      title: "John Smith",
      propertyId: "#PRO50",
      btnText: "View",
      payment: true,
      issue: "Unable to download report, facing issues on mobile app.",
      ticketId: "#12345",
      assignedTo: "George",
      active: false,
      alert: "High Priority",
      alertType: "danger",
      showMoreInfo: true,
    },
    {
      title: "John Smith",
      propertyId: "#PRO50",
      btnText: "View",
      payment: true,
      issue: "Unable to download report, facing issues on mobile app.",
      ticketId: "#12345",
      assignedTo: "George",
      active: false,
      alert: "High Priority",
      alertType: "danger",
      showMoreInfo: true,
    },
    {
      title: "John Smith",
      propertyId: "#PRO50",
      btnText: "View",
      payment: true,
      issue: "Unable to download report, facing issues on mobile app.",
      ticketId: "#12345",
      assignedTo: "George",
      active: false,
      alert: "High Priority",
      alertType: "danger",
      showMoreInfo: true,
    },
    {
      title: "John Smith",
      propertyId: "#PRO50",
      btnText: "View",
      payment: true,
      issue: "Unable to download report, facing issues on mobile app.",
      ticketId: "#12345",
      assignedTo: "George",
      active: false,
      alert: "High Priority",
      alertType: "danger",
      showMoreInfo: true,
    },
    {
      title: "John Smith",
      propertyId: "#PRO50",
      btnText: "View",
      payment: true,
      issue: "Unable to download report, facing issues on mobile app.",
      ticketId: "#12345",
      assignedTo: "George",
      active: false,
      alert: "High Priority",
      alertType: "danger",
      showMoreInfo: true,
    },
    {
      title: "John Smith",
      propertyId: "#PRO50",
      btnText: "View",
      payment: true,
      issue: "Unable to download report, facing issues on mobile app.",
      ticketId: "#12345",
      assignedTo: "George",
      active: false,
      alert: "High Priority",
      alertType: "danger",
      showMoreInfo: true,
    },
    {
      title: "John Smith",
      propertyId: "#PRO50",
      btnText: "View",
      payment: true,
      issue: "Unable to download report, facing issues on mobile app.",
      ticketId: "#12345",
      assignedTo: "George",
      active: false,
      alert: "High Priority",
      alertType: "danger",
      showMoreInfo: true,
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
      <ProjectComponent
        headingWhite="Payment"
        headingBlack="Tracking"
        cards={myProjectCards}
      />
      <SliderComponent
        headingWhite="Revenue"
        headingBlack="Reports"
        cards={paymentsCards}
        link="View all projects"
        categories={categories}
      />
      <DisputeSlider
        headingWhite="Customer"
        headingBlack="Disputes"
        cards={DisputeCards}
        link="View all projects"
        categories={categories}
        pending="23"
      />
    </>
  );
};

export default Properties;
