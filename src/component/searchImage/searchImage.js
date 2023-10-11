import React, { useState } from "react";

const SearchImage = ({onSearch}) => {
    const [input, setInput] = useState('');
    const handleInput = (e) =>{
        console.log("fgfdgd");
        setInput(e.target.value);
        //setInput(e.target.value.replace(/[a-z]/,''));
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        input && onSearch(input);
    }

    return(
        <form onSubmit={handleSubmit}> 
        <input type="text" value={input} onChange={handleInput}/>
        </form>
    )
}

export default SearchImage;