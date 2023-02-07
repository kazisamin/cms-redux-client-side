import React from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { addToPost, removeFromCart } from "../redux/actions/postAction";

const PostCard = ({ post }) => {
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    return (
        <div className='shadow-lg relative rounded-md border p-3 flex flex-col text-indigo-900'>

            <div className='h-52 w-52 mx-auto'>
                <img src={post.image} alt={post.model} />
            </div>
            <h1 className='font-bold text-center'>{post.title}</h1>
            <p className='text-left mb-3'>{post.description.substring(0, 150)}...</p>
            <div className=' '>

            </div>
            <div className='flex gap-2 mt-5'>
                {!pathname.includes("post") && (
                    <Link to={`/post/${post._id}`}  >
                        <button
                            onClick={() => dispatch(addToPost(post))}
                            className='bg-amber-700 rounded-md py-1 px-2 flex-1 text-white text-bold'
                        >
                            Read Details
                        </button>
                    </Link>
                )}

                {pathname.includes("cart") && (
                    <button
                        title='Remove'
                        onClick={() => dispatch(removeFromCart(post))}
                        className='flex justify-between px-3 bg-red-500 text-white p-1 rounded-full flex-1'
                    >
                        <p>Remove</p>
                        <MdDeleteForever size='25' />
                    </button>
                )}
            </div>
        </div>
    );
};

export default PostCard;
