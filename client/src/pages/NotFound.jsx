import { BiError } from 'react-icons/bi';
import './styles/NotFound.css';

export default function NotFound() {
  return (
    <div className="container">
      <BiError />
      <h3>404 PAGE NOT FOUND</h3>
    </div>
  )
}
