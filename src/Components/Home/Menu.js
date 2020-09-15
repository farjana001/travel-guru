import React from 'react';
import {  Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Logo.png';
import Destination from '../Destination/Destination';

const Menu = () => {
    return (
        <>
        <style type="text/css">
        {`
        .btn-link {
          color: black;
        }
        .btn-primary {
            background-color: #f9a51a;
            border-radius: 5px;
            border: none;
            color: black
        }
        .btn-primary:hover{
            background-color: #af7009;
        }
        .btn-xxl {
            padding: 0.4rem 1.5rem;
        }
        `}
      </style>
        <div className='container menu-bar p-3'>
            <div className="row d-flex justify-content-between align-items-center">
                <div className="logo"><Link to="/home"><img className='img-fluid logo' src={logo} alt="" /></Link></div>
                <div className="">
                  <input className='search-input' type="text" name="" id="" placeholder='Search your destination'/>
                </div>
                <div><Link className="menu-item" to="/home">Home</Link>
                    <Link className="menu-item" to="/news">News</Link>
                    <Link className="menu-item" to="/destination">destination</Link>
                    <Link className="menu-item" to="/blog">Blog</Link>
                    <Link className="menu-item" to="/contact">Contact</Link>
                    <Button variant="primary" size="xxl">Login</Button>
                </div>
            </div>
        </div>
        </>
    );
};

export default Menu;