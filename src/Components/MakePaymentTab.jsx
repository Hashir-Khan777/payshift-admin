import React from "react";
import MakePaymentSliderComponent from "./MPSliderComponent";
import SliderComponent from "./SliderComponent";

// const BillOverViewCard = [
//     {
//         title: "Maintenance Fee",
//         propertyId: "#1234",
//         info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, labore placeat! Unde veritatis rerum non, dolor consequuntur sit ipsam sunt.",
//         btnText: "Pay",
//         amount: 150,
//         payment: true,
//         active: false,
//         alert: "Due Jan 2024",
//         alertType: "danger",
//     },
//     {
//         title: "Maintenance Fee",
//         propertyId: "#1234",
//         info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, labore placeat! Unde veritatis rerum non, dolor consequuntur sit ipsam sunt.",
//         btnText: "Pay",
//         amount: 150,
//         payment: true,
//         active: true,
//         alert: "Due Jan 2024",
//         alertType: "danger",
//     },
//     {
//         title: "Maintenance Fee",
//         propertyId: "#1234",
//         info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, labore placeat! Unde veritatis rerum non, dolor consequuntur sit ipsam sunt.",
//         btnText: "Pay",
//         amount: 150,
//         payment: true,
//         active: false,
//         alert: "Due Jan 2024",
//         alertType: "danger",
//     },
//     {
//         title: "Maintenance Fee",
//         propertyId: "#1234",
//         info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, labore placeat! Unde veritatis rerum non, dolor consequuntur sit ipsam sunt.",
//         btnText: "Pay",
//         amount: 150,
//         payment: true,
//         active: false,
//         alert: "Due Jan 2024",
//         alertType: "danger",
//     },
//     {
//         title: "Maintenance Fee",
//         propertyId: "#1234",
//         info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, labore placeat! Unde veritatis rerum non, dolor consequuntur sit ipsam sunt.",
//         btnText: "Pay",
//         amount: 150,
//         payment: true,
//         active: false,
//         alert: "Due Jan 2024",
//         alertType: "danger",
//     },
//     {
//         title: "Maintenance Fee",
//         propertyId: "#1234",
//         info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, labore placeat! Unde veritatis rerum non, dolor consequuntur sit ipsam sunt.",
//         btnText: "Pay",
//         amount: 150,
//         payment: true,
//         active: false,
//         alert: "Due Jan 2024",
//         alertType: "danger",
//     },

// ]

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

const MakePaymentTab = () => {
  return (
    <>
      {/* <MakePaymentSliderComponent
        headingWhite="Your"
        headingBlack="Bill Overview"
        cards={BillOverViewCard}
      /> */}
      <SliderComponent
        headingWhite="My"
        headingBlack="Document"
        cards={myDocumentCard}
      />
    </>
  );
};

export default MakePaymentTab;
