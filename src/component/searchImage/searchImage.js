import React, { useRef, useState } from "react";
import './searchImage.css'

const SearchImage = ({ onSearch }) => {
    const SearchRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        SearchRef.current.value && onSearch(SearchRef.current.value);
    }

    return (
        <div className="searchBar">
            <form onSubmit={handleSubmit}>
                <input ref={SearchRef} type="text" placeholder="Type Something to search ..." />
            </form>
        </div>
    )
}

export default SearchImage;