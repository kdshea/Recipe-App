import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'


const CategorySingle = () => {


  const [ recipes, setRecipes ] = useState([])
  const [ errors, setErrors ] = useState(false)

  const { strCategory } = useParams()

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`/json/v1/1/filter.php?c=${strCategory}`)
        setRecipes(data.meals)
      } catch (err) {
        console.log(err)
        setErrors(true)
      }
    }
    getData()
  }, [])


  return (
    <Container>
      <h1>Recipes</h1>
      <Row>
        {recipes.length > 0
          ?
          recipes.map(recipe => {
            const { strMeal, strMealThumb, idMeal } = recipe
            return (
              <Col key={idMeal}>
                <Link to={`/${strCategory}/${idMeal}`}>
                  <Card>
                    <Card.Img variant='top' src={strMealThumb}></Card.Img>
                    <Card.Body className='bg-light' >
                      <Card.Title className='text-center mb-0'> {strMeal} </Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
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

export default CategorySingle