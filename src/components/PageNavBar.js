import { Link } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const PageNavBar = () => {
  return (
    <Navbar expand="sm">
      <Navbar.Brand className='btn .ml-10' as={Link} to="/"> Home </Navbar.Brand>
    </Navbar>
  )
}

export default PageNavBar