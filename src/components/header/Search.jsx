import React from 'react';

const Search = ({value, handleInputChange}) => {
    return (
        <div className="search">
            <input type="text" placeholder="Поиск авто" className="search__input" value={value} onChange={(e) => handleInputChange(e.target.value)} />
        </div>
    );
}

export default Search;