import React from 'react'
const CategoryLink = ({category,isSelected,onClick}) => {
    // console.log("category in link", category);
    console.log("selected cat",isSelected)
    const {name} = category;
  return (
    <div
    onClick={onClick}
    className={'border-2 m-2 p-2 rounded-md cursor-pointer' + (isSelected ? 'border-3 border-indigo-600 bg-indigo-200 rounded-md' : "")}> 
        <h1>{name}</h1>
    </div>
  )
}

export default CategoryLink