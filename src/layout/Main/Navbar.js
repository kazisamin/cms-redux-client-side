import React from "react";
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import { AiFillRead } from "react-icons/ai";


const Navbar = () => {
    return (
        <nav className='h-14 bg-amber-700 rounded-md m-2 max-w-7xl mx-auto px-5'>
            <ul className='h-full  mx-auto flex justify-between items-center gap-3 font-semibold text-yellow-50'>
                <h1>Tech Vise</h1>

                <li className='flex bg-white text-stone-800	 mx-auto h-8 w-full max-w-lg  rounded-md pr-3'>
                    <input
                        className='h-8 rounded-full w-full text-sm ml-5 border-0 focus:ring-0 outline-none '
                        type='text'
                        name='search'
                        id='search'
                    />
                    <button>
                        <BiSearchAlt />
                    </button>
                </li>
                <li>
                    <Link to='/'>Home</Link>
                </li>

                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/dashboard'>Dashboard</Link>
                </li>
                <Link to='/read'>
                    <li title='Readlist' className='bg-amber-900	 p-2 rounded-full'>
                        <AiFillRead className='text-white'></AiFillRead>
                    </li>
                </Link>

            </ul>
        </nav>
    );
};

export default Navbar;
