import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export const FilterComp = () => {
    
    //WHenever page refresh,  Check if URL had any data, before setting the data to an empty array
    const [ searchParams, setSearchParams ] = useSearchParams();


    const initialCategory = searchParams.getAll("category");

    const initalSort = searchParams.getAll("sort")
    const [ category, setCategory] = useState(initialCategory || [])
    // console.log(initialCategory)
    const [ sort, setSort] = useState(initalSort[0] || "");

    const handleFilterCheckBox=(e)=>{
        const newCategories = [...category];

        if(newCategories.includes(e.target.value)){
            // remove it 
            newCategories.splice(newCategories.indexOf(e.target.value),1)
        }
        else{
            newCategories.push(e.target.value)
            // else add it in the category array

        }
        setCategory(newCategories)
    }

    const handleSortOut=(e)=>{
        setSort(e.target.value)
    }

    // console.log(category)

    // If the category changes update the values in the URL

    useEffect(()=>{
        let params = {};
        params.category = category;
        setSearchParams(params)
        sort && (params.sort = sort)
    },[category, setSearchParams, sort])

  return (
    <div>
        <h3>
            Filter Component
        </h3>
        <div>
            <div>
                <input checked={category.includes("Novel")} type="checkbox" value="Novel" onChange={handleFilterCheckBox} />
                <label>Novel</label>
            </div>
            <div>
                {/* <input type="checkbox" vlaue="Motivational" onChange={handleFilterCheckBox} /> */}
                <input checked={category.includes("Motivational")} type="checkbox" value="Motivational" onChange={handleFilterCheckBox}/>
                <label>Motivational</label>
            </div>
            <div>
                <input checked={category.includes("Science_Fiction")} type="checkbox" value="Science_Fiction" onChange={handleFilterCheckBox} />
                <label>Science Fiction</label>
            </div>
            <div>
                <input checked={category.includes("Thriller")} type="checkbox" value="Thriller" onChange={handleFilterCheckBox} />
                <label>Thriller</label>
            </div>
        </div>
        <h3>Sort Component</h3>
        <div onChange={handleSortOut}>
            <input type="radio" value="asc" defaultChecked={sort==="asc"} name="Sort By" />
            <label>Ascending</label>
            <br />
            <input type="radio" value="dsc" name="Sort By" defaultChecked={sort==="dsc"} />
            <label>Descending</label>
        </div>
    </div>
  )
}
