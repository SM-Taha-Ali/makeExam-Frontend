import React, { useEffect } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import classes from "./SideBar.module.css"


const SideBar = () => {

  let location = useLocation();
  useEffect(() => {
  }, [location]);

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

  return (
    <>
      <div className='position-relative'>
      <div id="mySidenav" className={`${classes.sidenav}`}>
        <span href="" className={`${classes.closebtn}`} onClick={closeNav}>×</span>
        <Link className='' aria-current="page" to="/admin/pastpapers">Past Papers</Link>
      </div>
      <div id='main'>
        <Outlet />
      </div>
    </div>
    </>

  )
}

export default SideBar