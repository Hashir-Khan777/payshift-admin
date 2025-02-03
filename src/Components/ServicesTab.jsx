import React from 'react'
// import SliderComponent from './SliderComponent';
import ServiceSliderComponent from './ServiceSliderCom'


const recentHighlightsCards = [
    {
        title: "Agent viewing Registration",
        info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum officia dolores minus non placeat ipsum nihil porro commodi molestiae odio?Lorem ipsum dolor sit amet.",
        btnText: "Explore",
        active: false,
        showMoreInfo:true
    },
    {
        title: "Agent viewing Registration",
        info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum officia dolores minus non placeat ipsum nihil porro commodi molestiae odio?Lorem ipsum dolor sit amet.",
        btnText: "Explore",
        active: false,
        showMoreInfo:true
    },
    {
        title: "Agent viewing Registration",
        info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum officia dolores minus non placeat ipsum nihil porro commodi molestiae odio?Lorem ipsum dolor sit amet.",
        btnText: "Explore",
        active: false,
        showMoreInfo:true
    },
    
    {
        title: "Agent viewing Registration",
        info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum officia dolores minus non placeat ipsum nihil porro commodi molestiae odio?Lorem ipsum dolor sit amet.",
        btnText: "Explore",
        active: false,
        showMoreInfo:true
    },
    
    {
        title: "Agent viewing Registration",
        info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum officia dolores minus non placeat ipsum nihil porro commodi molestiae odio?Lorem ipsum dolor sit amet.",
        btnText: "Explore",
        active: false,
        showMoreInfo:true
    },
    
    {
        title: "Agent viewing Registration",
        info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum officia dolores minus non placeat ipsum nihil porro commodi molestiae odio?Lorem ipsum dolor sit amet.",
        btnText: "Explore",
        active: false,
        showMoreInfo:true
    },
    
];



const ServicesTab = () => {
  return (
    <>
    <p></p>
       <ServiceSliderComponent
                headingWhite="Customer Care"
                headingBlack="Service"
                cards={recentHighlightsCards}
            />
       <ServiceSliderComponent
                headingWhite="Facility Management"
                headingBlack="Services"
                cards={recentHighlightsCards}
            />
       <ServiceSliderComponent
                headingWhite="Resident"
                headingBlack="Services"
                cards={recentHighlightsCards}
            />
    </>
  )
}

export default ServicesTab
