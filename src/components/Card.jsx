import React from "react";
import star from '../../public/assets/star.png'

export default function(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
   
    
    return (
        <div className="card">
            {badgeText && <div className="card-status">{badgeText}</div>}
            <img src={props.item.coverImg} alt={props.item.title} className="card-img" />
            <div className="card-rating">
                <img src={star} alt="star" />
                <span className="rating">{props.item.stats.rating}</span>
                <span className="location">({props.item.stats.reviewCount}) • {props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p><b>From ${props.item.price}</b>/person</p>
        </div>
    )
}