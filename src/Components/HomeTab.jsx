import React from 'react'
import SliderComponent from './SliderComponent';


const recentHighlightsCards = [
    {
        title: "Request Closed",
        info: "Your request is closed for Owner and Tenant Registration is closed.",
        ref_no: 12345,
        btnText: "Check",
        active: false,
        showMoreInfo:true
    },
    {
        title: "Request Closed",
        info: "Your request is closed for Owner and Tenant Registration is closed.",
        ref_no: 12345,
        btnText: "Check",
        active: true,
        showMoreInfo:true
    },
    {
        title: "Request Closed",
        info: "Your request is closed for Owner and Tenant Registration is closed.",
        ref_no: 12345,
        btnText: "Check",
        active: false,
        showMoreInfo:true
    },
    {
        title: "Request Closed",
        info: "Your request is closed for Owner and Tenant Registration is closed.",
        ref_no: 12345,
        btnText: "Check",
        active: false,
        showMoreInfo:true
    },
    {
        title: "Request Closed",
        info: "Your request is closed for Owner and Tenant Registration is closed.",
        ref_no: 12345,
        btnText: "Check",
        active: true,
        showMoreInfo:true
    },
    {
        title: "Request Closed",
        info: "Your request is closed for Owner and Tenant Registration is closed.",
        ref_no: 12345,
        btnText: "Check",
        active: false,
        showMoreInfo:true
    },
    {
        title: "Request Closed",
        info: "Your request is closed for Owner and Tenant Registration is closed.",
        ref_no: 12345,
        btnText: "Check",
        active: false,
        showMoreInfo:true
    },
    {
        title: "Request Closed",
        info: "Your request is closed for Owner and Tenant Registration is closed.",
        ref_no: 12345,
        btnText: "Check",
        active: true,
        showMoreInfo:true
    },
    {
        title: "Request Closed",
        info: "Your request is closed for Owner and Tenant Registration is closed.",
        ref_no: 12345,
        btnText: "Check",
        active: false,
        showMoreInfo:true
    },
];

const offersCards = [
    {
        title: "Get AED 50 OFF",
        info: "Refer a friend and get AED 50 OFF using code",
        ref_no: "REF50",
        btnText: "Claim",
        offer: true,
        active: false,
        showMoreInfo:true
    },
    {
        title: "Get AED 50 OFF",
        info: "Refer a friend and get AED 50 OFF using code",
        ref_no: "REF50",
        btnText: "Claim",
        offer: true,
        active: true,
        showMoreInfo:true
    },
    {
        title: "Get AED 50 OFF",
        info: "Refer a friend and get AED 50 OFF using code",
        ref_no: "REF50",
        btnText: "Claim",
        offer: true,
        active: false,
        showMoreInfo:true
    },
    {
        title: "Get AED 50 OFF",
        info: "Refer a friend and get AED 50 OFF using code",
        ref_no: "REF50",
        btnText: "Claim",
        offer: true,
        active: false,
        showMoreInfo:true
    },
    {
        title: "Get AED 50 OFF",
        info: "Refer a friend and get AED 50 OFF using code",
        ref_no: "REF50",
        btnText: "Claim",
        offer: true,
        active: true,
        showMoreInfo:true
    },
    {
        title: "Get AED 50 OFF",
        info: "Refer a friend and get AED 50 OFF using code",
        ref_no: "REF50",
        btnText: "Claim",
        offer: true,
        active: false,
        showMoreInfo:true
    },
    {
        title: "Get AED 50 OFF",
        info: "Refer a friend and get AED 50 OFF using code",
        ref_no: "REF50",
        btnText: "Claim",
        offer: true,
        active: false,
        showMoreInfo:true
    },
    {
        title: "Get AED 50 OFF",
        info: "Refer a friend and get AED 50 OFF using code",
        ref_no: "REF50",
        btnText: "Claim",
        offer: true,
        active: true,
        showMoreInfo:true
    },
    {
        title: "Get AED 50 OFF",
        info: "Refer a friend and get AED 50 OFF using code",
        ref_no: "REF50",
        btnText: "Claim",
        offer: true,
        active: false,
        showMoreInfo:true
    },
];

const paymentsCards = [
    {
        title: "Maintenance Fee",
        propertyId: "#PRO50",
        btnText: "Pay",
        amount: 150,
        payment: true,
        active: false,
        alert: "Due Jan 2024",
        alertType: "danger",
        showMoreInfo:true
    },
    {
        title: "Maintenance Fee",
        propertyId: "#PRO50",
        btnText: "Pay",
        amount: 150,
        payment: true,
        active: true,
        alert: "Due Jan 2024",
        alertType: "danger",
        showMoreInfo:true
    },
    {
        title: "Maintenance Fee",
        propertyId: "#PRO50",
        btnText: "Pay",
        amount: 150,
        payment: true,
        active: false,
        alert: "Due Jan 2024",
        alertType: "danger",
        showMoreInfo:true
    },
    {
        title: "Maintenance Fee",
        propertyId: "#PRO50",
        btnText: "Pay",
        amount: 150,
        payment: true,
        active: false,
        alert: "Due Jan 2024",
        alertType: "danger",
        showMoreInfo:true
    },
    {
        title: "Maintenance Fee",
        propertyId: "#PRO50",
        btnText: "Pay",
        amount: 150,
        payment: true,
        active: true,
        alert: "Due Jan 2024",
        alertType: "danger",
        showMoreInfo:true
    },
    {
        title: "Maintenance Fee",
        propertyId: "#PRO50",
        btnText: "Pay",
        amount: 150,
        payment: true,
        active: false,
        alert: "Due Jan 2024",
        alertType: "danger",
        showMoreInfo:true
    },
    {
        title: "Maintenance Fee",
        propertyId: "#PRO50",
        btnText: "Pay",
        amount: 150,
        payment: true,
        active: false,
        alert: "Due Jan 2024",
        alertType: "danger",
        showMoreInfo:true
    },
    {
        title: "Maintenance Fee",
        propertyId: "#PRO50",
        btnText: "Pay",
        amount: 150,
        payment: true,
        active: true,
        alert: "Due Jan 2024",
        alertType: "danger",
        showMoreInfo:true
    },
    {
        title: "Maintenance Fee",
        propertyId: "#PRO50",
        btnText: "Pay",
        amount: 150,
        payment: true,
        active: false,
        alert: "Due Jan 2024",
        alertType: "danger",
        showMoreInfo:true
    },
];

const appointmentsCards = [
    {
        title: "Agent Appointment",
        propertyId: "#PRO50",
        btnText: "Check",
        amount: 150,
        appointment: true,
        active: false,
        alert: "Upcoming in 48H",
        date: "20th Feb 8:30 AM",
        alertType: "success",
        showMoreInfo:true
    },
    {
        title: "Agent Appointment",
        propertyId: "#PRO50",
        btnText: "Check",
        amount: 150,
        appointment: true,
        active: true,
        alert: "Upcoming in 48H",
        date: "20th Feb 8:30 AM",
        alertType: "success",
        showMoreInfo:true
    },
    {
        title: "Agent Appointment",
        propertyId: "#PRO50",
        btnText: "Check",
        amount: 150,
        appointment: true,
        active: false,
        alert: "Upcoming in 48H",
        date: "20th Feb 8:30 AM",
        alertType: "success",
        showMoreInfo:true
    },
    {
        title: "Agent Appointment",
        propertyId: "#PRO50",
        btnText: "Check",
        amount: 150,
        appointment: true,
        active: false,
        alert: "Upcoming in 48H",
        date: "20th Feb 8:30 AM",
        alertType: "success",
        showMoreInfo:true
    },
    {
        title: "Agent Appointment",
        propertyId: "#PRO50",
        btnText: "Check",
        amount: 150,
        appointment: true,
        active: true,
        alert: "Upcoming in 48H",
        date: "20th Feb 8:30 AM",
        alertType: "success",
        showMoreInfo:true
    },
    {
        title: "Agent Appointment",
        propertyId: "#PRO50",
        btnText: "Check",
        amount: 150,
        appointment: true,
        active: false,
        alert: "Upcoming in 48H",
        date: "20th Feb 8:30 AM",
        alertType: "success",
        showMoreInfo:true
    },
    {
        title: "Agent Appointment",
        propertyId: "#PRO50",
        btnText: "Check",
        amount: 150,
        appointment: true,
        active: false,
        alert: "Upcoming in 48H",
        date: "20th Feb 8:30 AM",
        alertType: "success",
        showMoreInfo:true
    },
    {
        title: "Agent Appointment",
        propertyId: "#PRO50",
        btnText: "Check",
        amount: 150,
        appointment: true,
        active: true,
        alert: "Upcoming in 48H",
        date: "20th Feb 8:30 AM",
        alertType: "success",
        showMoreInfo:true
    },
    {
        title: "Agent Appointment",
        propertyId: "#PRO50",
        btnText: "Check",
        amount: 150,
        appointment: true,
        active: false,
        alert: "Upcoming in 48H",
        date: "20th Feb 8:30 AM",
        alertType: "success",
        showMoreInfo:true
    },
];

const HomeTab = () => {
    return (
        <>
            <SliderComponent
                headingWhite="Recent"
                headingBlack="Highlights"
                cards={recentHighlightsCards}
            />
            <SliderComponent
                headingWhite="Offers"
                headingBlack="& Promos"
                cards={offersCards}
            />
            <SliderComponent
                headingWhite="Upcoming"
                headingBlack="Payments"
                cards={paymentsCards}
            />
            <SliderComponent
                headingWhite="Upcoming"
                headingBlack="Appointments"
                cards={appointmentsCards}
            />
        </>
    )
}

export default HomeTab
