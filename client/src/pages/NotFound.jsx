import { BiError } from 'react-icons/bi';
import { AiOutlineHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import './styles/NotFound.css';

export default function NotFound() {
  return (
    <>
      <div className="not-found">
        <BiError className='error-icon' />
        <h2>404 PAGE NOT FOUND</h2>
        <Link className='back-home' to={"/"}><button>Back to <AiOutlineHome className='home-icon' /></button></Link>
      </div>
    </>
  )
}
