import { useEffect, useState } from 'react'

import axios from 'axios'


const CategoryIndex = () => {

  const [categories, setCategories] = useState([])


  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/json/v1/1/categories.php')
        setCategories(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  useEffect(() => {
    console.log(categories)
  }, [categories])


  return (
    <p> CategoryIndex Component</p>
  )
}

export default CategoryIndex