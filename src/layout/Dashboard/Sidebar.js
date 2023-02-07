import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className='col-span-2 bg-amber-700 text-white h-[calc(100vh-25px)] p-5 rounded-md'>
            <ul className='flex gap-3  flex-col h-full'>
                <li className="text-center font-extrabold text-2xl">Admin Dashboard</li>
                <Link className="btn" to='/dashboard'>
                    Post List
                </Link>

                <Link className="btn" to='add-post'> Add Post </Link>


                <Link className="btn" to='/'> Back to Home </Link>

            </ul>
        </div>
    );
};

export default Sidebar;
