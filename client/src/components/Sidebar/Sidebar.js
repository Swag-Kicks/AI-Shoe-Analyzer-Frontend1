import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ show, handleClose }) => {

   return (
      <>
         <div >
            <Offcanvas show={show} onHide={handleClose} placement='end' className='side__bar'>
               <Offcanvas.Header closeButton>
                  <div className="logo mt-100">
                     <a href="index.html">
                        <img src="assets/img/logo/logo.png" alt="logo" />
                     </a>
                  </div>
               </Offcanvas.Header>

               <Offcanvas.Body>

                  <section>
                     <div className="p-0">
                        <div className="sidebar__content">

                           <div className='side_navBar'>
                              <div className='about iconAdd'>
                                 <NavLink to="/">Home </NavLink>
                              </div>
                              <div className='about iconAdd'>
                                 <NavLink to="/about">About Us </NavLink>
                              </div>
                              <div className='about iconAdd'>
                                 <NavLink to="/services">Services </NavLink>
                              </div>
                              <div className='about iconAdd'>
                                 <NavLink to="/develop">Develop </NavLink>
                              </div>
                              <div className='about iconAdd'>
                                 <NavLink to="/price">Pricing </NavLink>
                              </div>
                              <div className='about iconAdd'>
                                 <NavLink to="/contact">Contact Us </NavLink>
                              </div>
                              <div className='about iconAdd'>
                                 <NavLink to="/login">Login</NavLink>
                              </div>
                              <div className='about iconAdd'>
                                 <NavLink to="/signup">Signup </NavLink>
                              </div>
                           </div>

                        </div>
                     </div>
                  </section>

               </Offcanvas.Body>
            </Offcanvas>
         </div>
      </>
   );
};

export default Sidebar;
