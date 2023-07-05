import React from 'react'
import './nav.css'
import { NavLink } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
export const Navbarr = () => {
    const navBarStyles = ({isActive}) => {
        return {
            color: isActive ? 'white' : 'rgba(255, 255, 255, 0.5',
            fontSize : isActive? '.56rem' : '.55rem',
            textDecoration: isActive ? 'underline' : 'none',
            fontWeight: isActive? 'regular' : 'normal',
        }
    }
    return (
        <div>
            <nav className='NavigationBar'>
                <ul className='Navbar'>
                    <h1 className='LogoName'>K-NEWS</h1>
                    <section className='Navlinks'>
                    <NavLink to='/' className='links' style={navBarStyles}>HOME</NavLink>
                    <NavLink to='/news' className='links'style={navBarStyles}>NEWS</NavLink>
                    <NavLink to='/agriculture' className='links'style={navBarStyles}>AGRICULTURE</NavLink>
                    <NavLink to='/sports' className='links' style={navBarStyles}>SPORTS</NavLink>
                    <NavLink to='/travel' className='links' style={navBarStyles}>TRAVEL</NavLink>
                    <NavLink to='/culture' className='links' style={navBarStyles}>CULTURE</NavLink>
                    <NavLink to='/future' className='links' style={navBarStyles}>FUTURE</NavLink>
                    </section>
                    <form className='Searchbar'>
                        <FaSearch className='search-icon'/>
                        <input className='Searchbox' type='text' placeholder='search'></input>
                    </form>
                    
                </ul>
            </nav>
        </div>
    )
}