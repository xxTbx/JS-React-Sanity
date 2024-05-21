/* eslint-disable prettier/prettier */
import { NavLink } from 'react-router-dom';

export default function Nav( {activeUser} ) {
  return (
    <>
      <NavLink id="nav1" /* activeclassname og classname hentet fra link 6 */
        to="/"
        activeclassname="active"
        className="notActive"
      >
        Mikro LMS
      </NavLink>
    <p>{activeUser}</p>
      <NavLink id="nav2" to="/Kurs" activeclassname="active" className="notActive">
        Kurs
      </NavLink>
      <NavLink id="nav3" to="/Ny" activeclassname="active" className="notActive">
        Nytt Kurs
      </NavLink>
    </>
  )
}