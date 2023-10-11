import React from "react";


const ImageShow = ({Image}) =>{
    return(
        <img src={Image.urls.small} alt={Image.alt_description}/>
    )
}

export default ImageShow;