import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const RecipeSingle = () => {
  return (
    <Container as="main">
      <Row>
        <h1> Big Mac </h1>
        <Col md="6">
          <img className='w-100' src="https://www.themealdb.com/images/media/meals/urzj1d1587670726.jpg" alt='Big Mac' />
        </Col>
      </Row>
    </Container>
  )
}

export default RecipeSingle