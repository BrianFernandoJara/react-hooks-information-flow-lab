import React from "react";

export default function Filter({onCategoryChange, name}) {
    return(
        <select name={name} onChange={onCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
    )
}