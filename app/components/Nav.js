import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <aside className="menu">
      <p className="menu-label">
        <NavLink exact activeClassName='active' to='/'>JS30 Projects</NavLink>
      </p>
      <ul className="menu-list">
        <li><NavLink exact activeClassName='active' to='/project-1'>Drum Kit</NavLink></li>
        <li><NavLink exact activeClassName='active' to='/project-2'>Clock</NavLink></li>
        <li><NavLink exact activeClassName='active' to='/project-3'>Project 3</NavLink></li>
        <li><NavLink exact activeClassName='active' to='/project-4'>Project 4</NavLink></li>
        <li><NavLink exact activeClassName='active' to='/project-5'>Project 5</NavLink></li>
        <li><NavLink exact activeClassName='active' to='/project-6'>Project 6</NavLink></li>
        <li><NavLink exact activeClassName='active' to='/project-7'>Project 7</NavLink></li>
        <li><NavLink exact activeClassName='active' to='/project-8'>Project 8</NavLink></li>
        <li><NavLink exact activeClassName='active' to='/project-9'>Project 9</NavLink></li>
        <li><NavLink exact activeClassName='active' to='/project-10'>Project 10</NavLink></li>
        <li><NavLink exact activeClassName='active' to='/project-11'>Project 11</NavLink></li>
        <li><NavLink exact activeClassName='active' to='/project-12'>Project 12</NavLink></li>
        <li><NavLink exact activeClassName='active' to='/project-13'>Project 13</NavLink></li>
        <li><NavLink exact activeClassName='active' to='/project-14'>Project 14</NavLink></li>
        <li><NavLink exact activeClassName='active' to='/project-15'>Project 15</NavLink></li>
      </ul>
    </aside>
  )
}