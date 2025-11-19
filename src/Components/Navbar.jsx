import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from '../assets/user.png'
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {

    const { user, logoutUser } = use(AuthContext);
    console.log(user);

    const handleLogout = () => {
        logoutUser().then (() => {
            alert('Logout Successfully')
        })
    }
    return (
        <div className='flex justify-between items-center'>
            <div className="">{user && user.email}</div>
            <div className="nav flex gap-5 text-accent">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className="flex gap-4 items-center">
                <img src={userIcon} alt="" />
                {
                    user ? <button onClick={handleLogout} className='btn btn-primary'>Logout</button> : <Link to="/auth/login" className='btn btn-primary'>Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;