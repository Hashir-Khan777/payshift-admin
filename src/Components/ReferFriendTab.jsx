import React from "react";
import ReferSliderComponent from "./ReferSC";
import ReferHistorySliderComponent from "./ReferHistorySC";
import ProjectComponent from "./ProjectComponent";
import AuditSlider from "./AuditSlider";

// const referAndEarnCard = [
//     {
//         title: "Special Promo",
//         heading:"Get AED 150 off",
//         discount_amount: 150,
//         discount_code: "REF50",
//         btnText: "Invite"
//     },
//     {
//         title: "Special Promo",
//         heading:"Get AED 150 off",
//         discount_amount: 150,
//         discount_code: "REF50",
//         btnText: "Invite"
//     },
//     {
//         title: "Special Promo",
//         heading:"Get AED 150 off",
//         discount_amount: 150,
//         discount_code: "REF50",
//         btnText: "Invite"
//     },
//     {
//         title: "Special Promo",
//         heading:"Get AED 150 off",
//         discount_amount: 150,
//         discount_code: "REF50",
//         btnText: "Invite"
//     },
//     {
//         title: "Special Promo",
//         heading:"Get AED 150 off",
//         discount_amount: 150,
//         discount_code: "REF50",
//         btnText: "Invite"
//     },
//     {
//         title: "Special Promo",
//         heading:"Get AED 150 off",
//         discount_amount: 150,
//         discount_code: "REF50",
//         btnText: "Invite"
//     },

// ]

// const referHistoryCard = [
//     {
//         name:"John Smith",
//         date:"12/12/24",
//         picture:"https://s3-alpha-sig.figma.com/img/e1b4/bbdd/554d91884ce3072de2345fc01373f64b?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ITEszaFvk3IRD8pkqodDwYLeMRvHcoFShtGkHssaNWyJfiCwADKBvG9SZZSlI9IovYDFLyqdwccJNLzaOZqFDLzWlabgXhqBetzf9DnvC9Cd6GjHXm3SUkqIY5GR-NQwAXc8ihLFEpo570SZk1N8J4zkbfxDE4ab~og1nwukO4CY97xwGCEpuKO3m-H22YvqB8Xpw3lt2zJkcbbWLFv-CXzSrUhLXG00AjIV~IyYwO5EsoYw98rOiPc-2kERSUM6kXvVfPeFTyUxILYKqJ1u-KlsjJTz~FQY9eWOV~F1ekxS-vabnmO9HCEF0L1iQtxzgsy-VLhINUYIdI~DpFLGKA__",
//         amount:100
//     },
//     {
//         name:"Mary Jane",
//         date:"12/12/24",
//         picture:"https://s3-alpha-sig.figma.com/img/25d1/a770/20008b9e3f08babd1f67f01cdb8f89d6?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i4KytGa7cP1OZbHVbp1C8gMe4nFnRjqTujuOwi5Wyn9I3lbNBdHZHuqqiWuQcT7zaZdBqiS6wO61HK5l3zEY8jvijRNonxF41scMgPxJufii2MV4xAjzdSF~2oHCO8ZDJwRzF3PjvgowNu0RgqANdhVWQgtFwI498hM3P1FEAFHYAtc06WIhqTB4zgSVrpUSwrGmH58HjLJT3-uZz~C18ylXSaH~IsA1UP3zwlLUX7m1aKeP8Kpvj5AtlFK7IU2McawCL46FZyjkrl3RcB53sPlUxBk6R0X45ZJJXD4dHO5fNYrL3mXsdHNDDEXy4Xa2PBzn2SL~X~pGzJxs19WCmg__",
//         amount:150
//     },
//     {
//         name:"Xiao Long Bao",
//         date:"12/12/24",
//         picture:"https://s3-alpha-sig.figma.com/img/383c/9b85/ff65f6f4b7d13097eb239dd1f5f60413?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ENz98q~Ob0gb6~6aTUETGmyrPNuLzEYV76sx0k9yLfgd8mv63JizOEpszLJSChnzR-LszADIb0R6MhbM9RT4cwVU7ym1aGkeLSMdNe8dbGonEl7RZOGc6fThfTLPqenyVIbs3Atm7lVmVSoiJg7uoph3xA8PYGBXMiUUzDqGv-ZE7nJzwHVvVJ1JCmXWNqom99oUAvd14BHPfcH-L~FVT7C3eA764PL~xxea2clAn3lUi1rOw4ycd4STlwhfYM8xsO9Imxs94Kz-YGJTXZbKXT18hxAxBoHPJZY0Zf3vPDxfqVAwjZRgysDFN6erubfFi5Np1LGC-wX-vYFuDd3AQg__",
//         amount:120
//     },
//     {
//         name:"John Smith",
//         date:"12/12/24",
//         picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUYpmAKW4A-gVGOLVQfvauDeQtLgEwRfbHPA&s",
//         amount:150
//     },
//     {
//         name:"John Smith",
//         date:"12/12/24",
//         picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUYpmAKW4A-gVGOLVQfvauDeQtLgEwRfbHPA&s",
//         amount:150
//     },
//     {
//         name:"John Smith",
//         date:"12/12/24",
//         picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUYpmAKW4A-gVGOLVQfvauDeQtLgEwRfbHPA&s",
//         amount:150
//     },
// ]

const auditCards = [
  {
    time: "10/01/25, 2:44 pm",
    log: "George added a new user role...",
  },
  {
    time: "10/01/25, 2:41 pm",
    log: "Mary resolved a ticket...",
  },
  {
    time: "10/01/25, 2:39 pm",
    log: "A new tenant was added to...",
  },
  {
    time: "10/01/25, 2:44 pm",
    log: "George added a new user role...",
  },
  {
    time: "10/01/25, 2:41 pm",
    log: "Mary resolved a ticket...",
  },
  {
    time: "10/01/25, 2:39 pm",
    log: "A new tenant was added to...",
  },
  {
    time: "10/01/25, 2:44 pm",
    log: "George added a new user role...",
  },
  {
    time: "10/01/25, 2:41 pm",
    log: "Mary resolved a ticket...",
  },
  {
    time: "10/01/25, 2:39 pm",
    log: "A new tenant was added to...",
  },
  {
    time: "10/01/25, 2:44 pm",
    log: "George added a new user role...",
  },
  {
    time: "10/01/25, 2:41 pm",
    log: "Mary resolved a ticket...",
  },
  {
    time: "10/01/25, 2:39 pm",
    log: "A new tenant was added to...",
  },
];

const moderatorsCard = [
  {
    title: "Moderators (4)",
    firstpara: "Lorem ipsum dolor si amet.",
    btnText: "Edit",
  },
  {
    title: "Moderators (4)",
    firstpara: "Lorem ipsum dolor si amet.",
    btnText: "Edit",
  },
  {
    title: "Moderators (4)",
    firstpara: "Lorem ipsum dolor si amet.",
    btnText: "Edit",
  },
  {
    title: "Moderators (4)",
    firstpara: "Lorem ipsum dolor si amet.",
    btnText: "Edit",
  },
  {
    title: "Moderators (4)",
    firstpara: "Lorem ipsum dolor si amet.",
    btnText: "Edit",
  },
  {
    title: "Moderators (4)",
    firstpara: "Lorem ipsum dolor si amet.",
    btnText: "Edit",
  },
  {
    title: "Moderators (4)",
    firstpara: "Lorem ipsum dolor si amet.",
    btnText: "Edit",
  },
  {
    title: "Moderators (4)",
    firstpara: "Lorem ipsum dolor si amet.",
    btnText: "Edit",
  },
  {
    title: "Moderators (4)",
    firstpara: "Lorem ipsum dolor si amet.",
    btnText: "Edit",
  },
];

const categories = [
    {
        id: 1,
        cat: "All"
    },
    {
        id: 2,
        cat: "Group Type"
    },
    {
        id: 3,
        cat: "Project Type"
    },
]

const ReferFriendTab = () => {
  return (
    <>
      <ProjectComponent
        headingWhite="Role"
        headingBlack="Management"
        categories={categories}
        cards={moderatorsCard}
      />
      <AuditSlider headingWhite="Audit" headingBlack="Log" link="View entire log" cards={auditCards} />
    </>
  );
};

export default ReferFriendTab;
