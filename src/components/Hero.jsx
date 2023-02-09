import React from "react";
import photoGrid from '../../public/assets/photo-grid.png'

export default function() {
    return(
        <section className="hero">
            <img src={photoGrid} alt="Photo grid" className="hero-img"/>
            <div className="hero-desc">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home</p>
            </div>
        </section>
    )
}