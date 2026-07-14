import React from 'react'
import './Header.css'
import { Button, Input } from 'antd'
import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate()

    function gotologinpage() {
        setMenuOpen(false); // optional: close menu if open
        navigate("/login");  // redirect to login page
    }
    return (
        <>
            <div className='header_main_div'>
                <div className='subdiv1_header_main_div'>
                    <div><img src='https://cdn.dribbble.com/userupload/37341581/file/original-9113cad5b22499c67f4b80e1e4211f05.jpg?resize=1024x768&vertical=center' alt='logo' className='logo_header_main_div'></img></div>
                    <div><h3>Holidays planner</h3></div>
                </div>
                <div className='subdiv2_header_main_div'>
                    <div className="menu_toggle" onClick={() => setMenuOpen(!menuOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <ul className={`ul1_header_main_div ${menuOpen ? "open" : ""}`}>

                        <li><input type='search' placeholder=' 🔍Explore By Destination ' className='search_header_main_div' /></li>
                        <NavLink
                            to="/"
                            onClick={() => setMenuOpen(false)}

                            className={({ isActive }) =>
                                isActive ? "li_ul1_header_main_div active" : "li_ul1_header_main_div"
                            }
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/About"
                            onClick={() => setMenuOpen(false)}

                            className={({ isActive }) =>
                                isActive ? "li_ul1_header_main_div active" : "li_ul1_header_main_div"
                            }
                        >
                            About
                        </NavLink>

                        <NavLink
                            to="/Services"
                            onClick={() => setMenuOpen(false)}

                            className={({ isActive }) =>
                                isActive ? "li_ul1_header_main_div active" : "li_ul1_header_main_div"
                            }
                        >
                            Service
                        </NavLink>

                        <NavLink
                            to="/Contact"
                            onClick={() => setMenuOpen(false)}

                            className={({ isActive }) =>
                                isActive ? "li_ul1_header_main_div active" : "li_ul1_header_main_div"
                            }
                        >
                            Contact
                        </NavLink>

                        <div className='div_ul1_header_main_div'>

                            <button className="btn_login" onClick={gotologinpage}>Login</button>
                        </div>



                    </ul>
                </div>
            </div>




        </>
    )
}

export default Header