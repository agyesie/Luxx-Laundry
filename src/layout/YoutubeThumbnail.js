import React from "react";
import youtubePic from "../assets/images/Youtube.png"

const YoutubeThumbnail = () => {
    return ( 
        <div className="youtubeImg">
            <img src={youtubePic} alt="Youtube Thumbnail" />
        </div>
     );
}
 
export default YoutubeThumbnail;