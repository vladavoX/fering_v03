import { Link } from 'react-router-dom';
import { AiFillCaretDown, AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';

import "./styles/Header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className='desktop'>
        <Link to={"/o-nama"}>O nama</Link>
        <div className='dropdown'>
          <Link to={"/nasi-proizvodi"} className='dropbtn'>Nasi proizvodi <AiFillCaretDown /></Link>
          <div className='dropdown-content'>
            <Link to={"/nasi-proizvodi/klub-stolovi"}>Klub Stolovi</Link>
            <Link to={"/nasi-proizvodi/trpezarijski-stolovi"}>Trpezarijski Stolovi</Link>
            <Link to={"/nasi-proizvodi/komode"}>Komode</Link>
            <Link to={"/nasi-proizvodi/industrijski-stolovi"}>Industrijski Stolovi</Link>
            <Link to={"/nasi-proizvodi/biblioteka-polica"}>Biblioteka Polica</Link>
            <Link to={"/nasi-proizvodi/stepenista"}>Stepenista</Link>
            <Link to={"/nasi-proizvodi/ostalo"}>Ostalo</Link>
          </div>
        </div>
        <Link to={"/materijali"}>Materijali</Link>
        <Link to={"/kontakt"}>Kontakt</Link>
      </div>

      <div className='mobile'>
        <div className='menubtn'>
          <AiOutlineMenu />
        </div>
        {isOpen ? 
          <div></div> : <div></div> 
        }
      </div>
    </nav>
  )
}
