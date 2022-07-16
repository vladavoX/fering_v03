import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <div className="container">    
        <div className="column">
          <Link to={"/o-nama"}><button>ULAZ</button></Link>
        </div>
        <div className="column">
          <Link to={"/en/about"}><button>ENTER</button></Link>
        </div>
      </div>
    </>
  )
}
