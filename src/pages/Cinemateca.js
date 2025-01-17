import React from "react";
import "./Cinemateca.css";

const frameImage = "/Hand_Frame.png";

const Cinemateca = () => {
    const imageUrl = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2F1ynajlz6p8e91.jpg&f=1&nofb=1&ipt=7eb651add995748084dedf3addea7f75534ae75ab43fe4f83d7907aaba443a48&ipo=images";

    return (
        <div className="cinemateca-container">
            <div className="movie-title">Date: TBD, 20:00 UTC+1 </div>
            
            <div className="image-frame-container">
                <img src={frameImage} alt="Frame" />
                <img src={imageUrl} alt="Showcase" />
            </div>
            
            <img src="/electricskull.gif" className="bottom-right-image" />
        </div>
    );
};

export default Cinemateca;
