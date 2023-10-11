import React, { useState } from "react";
import SearchImage from "./component/searchImage/searchImage";
import { searchImages } from "./API/searchAPI";
import ImageList from "./component/ImageList/ImageList";
import './App.css'

function App() {
  const [images, setImages] = useState([]);

  async function handleSearch(query) {
    const result = await searchImages(query);
    console.log(result);
    result?.length && setImages(result);
  }

  return (
    <div className="appContainer">
      <SearchImage onSearch={handleSearch} />
      <ImageList Images={images} />
    </div>
  )

}

export default App;