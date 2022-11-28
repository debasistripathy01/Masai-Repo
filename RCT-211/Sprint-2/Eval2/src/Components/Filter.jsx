import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";


const Filter = () => {

  const [searchParams, setSearchParams] = useSearchParams();


  const initialFilter = searchParams.getAll("category");

  const [category, setCategory ] = useState(initialFilter || []);

  const handleFilter=(e)=>{
    const newCategory = [...category];

    if(newCategory.includes(e.target.value)){
      newCategory.splice(newCategory.indexOf(e.target.value), 1);
    }
    else{
      newCategory.push(e.target.value);
    }
    setCategory(newCategory);
  }

  useEffect(()=>{
    if(category){
      let params = {};
      category && (params.category= category)
      setSearchParams(params)
    }
  }, [category, setSearchParams])
  // DO NOT CHANGE THE ORDER of the category filters: ie. Sneakers, Loafers, Canvas, Boots
  //in the UI
  return (
    <div>
      <h3>Filters</h3>
      <div>Category</div>
      <div data-testid="filter-category">
        <div>
          <input type="checkbox" value="Sneakers" onChange={handleFilter} checked={category.includes("Sneakers")} />
          <label>Sneakers</label>
        </div>
        <div>
          <input type="checkbox" value="Loafers" onChange={handleFilter} checked={category.includes("Loafers")} />
          <label>Loafers</label>
        </div>
        <div>
          <input type="checkbox" value="Canvas" onChange={handleFilter} checked={category.includes("Canvas")} />
          <label>Canvas</label>
        </div>
        <div>
          <input type="checkbox" value="Boots" onChange={handleFilter} checked={category.includes("Boots")} />
          <label>Boots</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
