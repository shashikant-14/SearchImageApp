import React, { useState } from "react";
import SearchImage from "./component/searchImage/searchImage";
import { searchImages } from "./API/searchAPI";
import ImageList from "./component/ImageList/ImageList";

function App() {
  const [images, setImages] = useState([]);

  async function handleSearch(query) {
    const result = await searchImages(query);
    console.log(result);
    result?.length && setImages(result);
  }

  return (
    <>
      <SearchImage onSearch={handleSearch} />
      <ImageList Images={images} />
    </>
  )

}

export default App;