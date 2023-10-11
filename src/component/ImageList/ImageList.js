import React from "react";
import ImageShow from "../ImageShow/ImageShow";

const ImageList = ({ Images }) => {

    const resultImage = Images.length > 0 && Images.map((image, index) => (
        <div key={image.id}>
            <ImageShow Image={image} />
        </div>
    ));

    return (
        <div>
            {resultImage}
        </div>
    )
}

export default ImageList;