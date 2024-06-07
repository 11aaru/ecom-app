import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data';
import Product from './Product';


const SearchItem = () => {
  // console.log(useParams)

  const { term } = useParams();

  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const filteredData = () => {
      const data = items.filter((p) => p.title.toLocaleLowerCase().includes(term.toLocaleLowerCase()));
      //console.log(data)

      setFilterData(data)
    }
    filteredData()
  

  }, [term])



return (
  <Product items={filterData}/>
)
}

export default SearchItem