import React from 'react'

const Search = ({ onChange, onReset, value }) => (
  <div>
    <input
      type="text"
      onChange={onChange}
      placeholder="Enter pokemon name..."
      autoFocus
      value={value}
    />
    <button type="button" className="search__reset" onClick={onReset}>
      Reset
    </button>
  </div>
)

export default Search
