import React from 'react';
import { Link } from 'react-router-dom';
import img from "../../../assets/images/download__1_-removebg-preview.png";

const Navbar = () => {
    return (
        // <div>
        //     <div className="navbar bg-inherit py-1 mt-2">
        //         <div className="flex-1">
        //             <img src={img} alt="" />
        //             <a className="btn btn-ghost normal-case text-2xl font-bold">La Uncion</a>
        //         </div>
        //         <div className="flex-none gap-2">
        //             <div className='mx-4 flex' >
        //                 <h2>Mon-Set 9.00 am-19.00 pm <br />Sunday closed</h2>
        //             </div>
        //             <div className='mx-4'>
        //                 <h2>5 Green Ave, Path. <br /> Dhaka, Bangladesh</h2>
        //             </div>
        //             <div className='mx-4'>
        //                 <h2> <span className='text-2xl font-semibold'>+1 222 333-44-55</span> <br /> Call us for enquiry</h2>
        //             </div>
        //             <div className='mx-4' >

        //                 {/* {user?.uid ?
        //                     <>
        //                         <button onClick={handleLogOut} className='btn btn-primary'>Sign out</button>
        //                     </>
        //                     : <button className='btn btn-primary'><Link to="/login">Log In</Link></button>} */}
        //             </div>
        //         </div>
        //     </div>
        //     <div className="navbar bg-base-100">
        //         <div className="flex-none">
        //             <ul className="menu menu-horizontal px-1">
        //                 <li><Link to="/">Home</Link></li>
        //                 <li><a>About us</a></li>
        //                 <li><a>Blog</a></li>
        //                 <li><a>Contact Us</a></li>
        //                 {/* {user?.uid ?
        //                     <>
        //                         < li > <Link to="/dashboard">Deshboard</Link></li>
        //                     </>
        //                     : <button className='btn btn-primary opacity-0'><Link to="/">Log In</Link></button>} */}


        //             </ul>
        //         </div>
        //     </div>
        // </div >
        <div className='fixed top-10 right-20 bg-opacity-90'>
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn opacity-60 border border-black m-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block  w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></label>
                <ul tabIndex={0} className="dropdown-content bg-black bg-opacity-60 text-white z-[1] menu p-2 shadow  rounded-box w-52">
                    <li><div className="flex-1 items-center">
                        <img className='w-32' src={img} alt="" />
                    </div></li>
                    <li>
                        <h1><a className="btn btn-ghost normal-case text-2xl font-bold">La Uncion</a></h1>
                    </li>
                    <li><Link to="/">Home</Link></li>
                    <li><a>About Us</a></li>
                    <li><a>Special Recipes</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Contact Us</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Contact Us</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;