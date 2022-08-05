import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='text-center'>
      <h1>Not Found</h1>
      <Link to="/">Back to Category Page</Link>
    </div>
  )
}

export default NotFound