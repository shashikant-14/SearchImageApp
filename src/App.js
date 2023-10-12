import React, { useState } from "react";
import SearchImage from "./component/searchImage/searchImage";
import { searchImages } from "./API/searchAPI";
import ImageList from "./component/ImageList/ImageList";
import './App.css'

const debounce = (CBF,delay = 500)=>{
  let timer = null;
  return function (...params){
      
      clearTimeout(timer);
      timer = setTimeout(() => {
          CBF.apply(this,params);
      }, delay);

  }
}

function App() {
  const [images, setImages] = useState([]);

  async function handleSearch(query) {
    const result = await searchImages(query);
    console.log(result);
    result?.length && setImages(result);
  }

  const debounceCall = debounce(handleSearch,500);

  return (
    <div className="appContainer">
      <h1>Image Search App</h1>
      <SearchImage onSearch={debounceCall} />
      <ImageList Images={images} />
    </div>
  )

}

export default App;