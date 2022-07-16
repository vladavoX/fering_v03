import { Link } from 'react-router-dom';

import './styles/Home.css';

export default function Home() {
  return (
    <>
      <div className="home">    
        <div className="column-left">
          <Link to={"/o-nama"}><button>SRPSKI</button></Link>
        </div>
        <div className="column-right">
          <Link to={"/en/about"}><button>ENGLISH</button></Link>
        </div>
      </div>
    </>
  )
}
