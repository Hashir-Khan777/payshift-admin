import React from "react";
import SliderComponent from "./SliderComponent";
import ProjectSlider from "./ProjectSlider";
import DisputeSlider from "./DisputeSlider";

const HomeTab = () => {
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
      <ProjectSlider
        headingWhite="Active"
        headingBlack="Projects"
        link="View all projects"
        cards={leadCards}
        activeProjects={23}
        totalHours={320}
      />
      <SliderComponent
        headingWhite="Revenue"
        headingBlack="Summary"
        cards={paymentsCards}
        link="View all projects"
        categories={categories}
      />
      <DisputeSlider
        headingWhite="Customer"
        headingBlack="Tickets"
        cards={DisputeCards}
        link="View all projects"
        categories={categories}
        pending="23"
      />
    </>
  );
};

export default HomeTab;
