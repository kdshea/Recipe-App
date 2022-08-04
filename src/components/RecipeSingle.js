import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const RecipeSingle = () => {


  const [recipes, setRecipes] = useState([])
  const [errors, setErrors] = useState(false)

  const { idMeal } = useParams()

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`/json/v1/1/lookup.php?i=${idMeal}`)
        setRecipes(data.meals[0])
      } catch (err) {
        console.log(err)
        setErrors(true)
      }
    }
    getData()
  }, [])


  console.log('entries',Object.entries(recipes))
  const entries = Object.entries(recipes)
  const ingredients = []
  const measurements = []
  for (let i = 0; i < entries.length; i++ ) {
    if (entries[i][0].includes('strIngredient') && entries[i][1]) {
      ingredients.push(entries[i][1])
    }
  }
  let count = 0
  for (let i = 0; i < entries.length; i++ ) {
    if (entries[i][0].includes('strMeasure') && entries[i][1]) {
      measurements.push(entries[i][1].concat(` ${ingredients[count]} <br>`))
      count ++
    }
  }
  console.log('ingredients->', ingredients)
  console.log('measurements->', measurements)
  
  console.log('recipes.json', recipes)

  return (
    <Container>
      <Row>
        {entries.length > 0
          ?
          recipes.map(recipe => {
            const { strMeal, strMealThumb, idMeal } = recipe
            return (
              <>
                <h1>{strMeal}</h1>
                <Col key={idMeal} md="6">
                  <img className='w-100' src={strMealThumb} alt='Big Mac' />
                  <div>
                    {measurements.forEach(item => {
                      return (item)
                    })}
                  </div>
                </Col>
              </>
            )
          })
          :
          <>
            {errors ? <h2>Something went wrong. Please try again later</h2> : <h2> loading </h2>}
          </>
        }
      </Row>
    </Container >
  )
}

export default RecipeSingle