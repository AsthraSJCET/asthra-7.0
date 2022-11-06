import React from 'react'
import '../stylesheets/MainCard.css'

function MainCard({cardTitle, cardSubTitle}) {
  return (
    <div className="cards" data-speed="4">
        <div className="cards-content">
            <h3 className="cards-title">{cardTitle}</h3>
            <h4 className="cards-subtitle">{cardSubTitle}</h4>
        </div>
        <i className="fa-solid fa-hat-witch cards-icon"></i>
    </div>
  )
}

export default MainCard;