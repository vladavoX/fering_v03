import { Link } from 'react-router-dom';
import { AiFillCaretDown, AiOutlineMenu, AiOutlinePlus, AiOutlineClose, AiOutlineMinus } from 'react-icons/ai';
import { useState } from 'react';

import "./styles/Header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <nav className="navbar">
      <div className='desktop'>
        <Link to={"/o-nama"}>O nama</Link>
        <div className='dropdown'>
          <Link to={""} className='dropbtn'>Nasi proizvodi <AiFillCaretDown /></Link>
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
        <Link to={"/o-nama"}>Srpski <img src={require('./assets/rs.png')} alt="rs" /></Link>
        <Link to={"/about"}>English <img src={require('./assets/en.png')} alt="en" /></Link>
      </div>

      <div className='mobile'>
        <div className='menubtn' onClick={() => setIsOpen(!isOpen)}>
          {!isOpen ? <AiOutlineMenu /> : <AiOutlineClose />}
        </div>
        {isOpen &&
          <div className='menu-links'>
            <Link to={"/o-nama"}>O nama</Link>
            <Link className='center' to={""} onClick={() => setIsExpanded(!isExpanded)}>Nasi Proizvodi {!isExpanded ? <AiOutlinePlus /> : <AiOutlineMinus /> }</Link>
            {isExpanded &&
              <div className='menu-links-dropdown'>
                <Link to={"/nasi-proizvodi/klub-stolovi"}>Klub Stolovi</Link>
                <Link to={"/nasi-proizvodi/trpezarijski-stolovi"}>Trpezarijski Stolovi</Link>
                <Link to={"/nasi-proizvodi/komode"}>Komode</Link>
                <Link to={"/nasi-proizvodi/industrijski-stolovi"}>Industrijski Stolovi</Link>
                <Link to={"/nasi-proizvodi/biblioteka-polica"}>Biblioteka Polica</Link>
                <Link to={"/nasi-proizvodi/stepenista"}>Stepenista</Link>
                <Link to={"/nasi-proizvodi/ostalo"}>Ostalo</Link>
              </div>
            }
            <Link to={"/materijali"}>Materijali</Link>
            <Link to={"/kontakt"}>Kontakt</Link>
            <Link to={"/o-nama"}>Srpski <img src={require('./assets/rs.png')} alt="rs" /></Link>
            <Link to={"/about"}>English <img src={require('./assets/en.png')} alt="en" /></Link>
          </div>
        }
      </div>
    </nav>
  )
}
