import React from "react";
import './ImageShow.css';

const ImageShow = ({Image}) =>{
    return(
        <img src={Image.urls.small} alt={Image.alt_description}/>
    )
}

export default ImageShow;