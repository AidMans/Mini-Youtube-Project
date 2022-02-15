import React from 'react';

const SearchBar = ({handleFormSubmit}) => {
    const [searchTerm, setSearchTerm] = React.useState("");

    return (
        <div className="searchbar">
            <form onSubmit={(e) => {
                e.preventDefault();
                handleFormSubmit(searchTerm);
            }}>
                <p>Search for <span>Youtube</span> videos</p>
                <input
                    onChange={(e) => setSearchTerm(e.target.value)}
                    type="text"
                    value={searchTerm}
                />
            </form>
        </div>
    )
}

export default SearchBar;