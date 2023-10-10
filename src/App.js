import React from "react";
import SearchImage from "./component/searchImage/searchImage";

function App(){

  function handleSearch(query){
    console.log(query);
  }

  return(
    <div>
      <SearchImage onSearch = {handleSearch}/>
    </div>
  )

}

export default App;