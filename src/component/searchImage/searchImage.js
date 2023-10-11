import React, { useState } from "react";
import './searchImage.css'

const SearchImage = ({ onSearch }) => {
    const [input, setInput] = useState('');
    const handleInput = (e) => {
        console.log("fgfdgd");
        setInput(e.target.value);
        //setInput(e.target.value.replace(/[a-z]/,''));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        input && onSearch(input);
    }

    return (
        <div className="searchBar">
            <form onSubmit={handleSubmit}>
                <label>Search for the Image</label>
                <input type="text" value={input} onChange={handleInput} />
            </form>
        </div>
    )
}

export default SearchImage;