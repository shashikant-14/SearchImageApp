import React, { useEffect, useState } from "react";
import SearchImage from "./component/searchImage/searchImage";
import { searchImages } from "./API/searchAPI";
import ImageList from "./component/ImageList/ImageList";
import './App.css'

const debounce = (CBF,delay = 500)=>{
  let timer = null;
  return function (...params){
      let context = this;
      let parameters = params;
      clearTimeout(timer);
      timer = setTimeout(() => {
          CBF.apply(context,parameters);
      }, delay);

  }
}

function App() {
  const [images, setImages] = useState([]);
  const [page,setPage] = useState(1);

  async function handleSearch(query,page) {
    const result = await searchImages(query,page);
    console.log(result);
    result?.length && setImages(result);
  }

  const debounceCall = debounce(handleSearch,500);

  useEffect(()=>{
    debounceCall(document.getElementById('searchInput').value,page);
  },[page]);

  return (
    <div className="appContainer">
      <h1>Image Search App</h1>
      <SearchImage onSearch={debounceCall} />
      <ImageList Images={images} />
      <div>
        {page>1 && <button onClick={()=>{setPage(prev=>prev-1)}}>Previous</button>}
        {page<10 && <button onClick={()=>{setPage(prev=>prev+1)}}>Next</button>}
      </div>
    </div>
  )

}

export default App;