import React from 'react';

const NavComponent = () => {
  return (
    <nav>
      <a href="#" className="nav-logo"><span className="nav-dot"></span>AM / Principal Engineer</a>
      <ul className="nav-links">
        <li><a href="#expertise">Expertise</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#articles">Writing</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a href="mailto:armando.musto@gmail.com" className="nav-cta">Hire Me</a>
    </nav>
  )
}

export default NavComponent;