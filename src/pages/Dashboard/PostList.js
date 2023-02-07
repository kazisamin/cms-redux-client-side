import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import deletePostData from "../../redux/thunk/deletePostData";
import editPostData from "../../redux/thunk/editPostData";
import { loadPostData } from "../../redux/thunk/fetchPosts";

const PostList = () => {

    const posts = useSelector((state) => state.post.posts);
    const dispatch = useDispatch();

    const handleModify = event => {
        event.preventDefault();
        const form = event.target;
        const tag = form.tag.value;

        const post = {

            tag: tag,

        };
        dispatch(editPostData(post));
    }

    useEffect(() => {
        dispatch(loadPostData());
    });

    return (
        <div class='flex flex-col justify-center items-center h-full w-full '>
            <div class='w-full max-w-7xl mx-auto rounded-lg  bg-white shadow-lg border border-gray-200'>
                <header class='px-5 py-4 border-b border-gray-100'>
                    <div class='font-semibold text-gray-800'>Posts</div>
                </header>

                <div class='overflow-x-auto p-3'>
                    <table class='table-auto w-full'>
                        <thead class='text-xs font-semibold uppercase text-gray-400 bg-gray-50'>
                            <tr>
                                <th></th>
                                <th class='p-2'>
                                    <div class='font-semibold text-left'>Post Name</div>
                                </th>
                                <th class='p-2'>
                                    <div class='font-semibold text-left'>Tag</div>
                                </th>


                                <th class='p-2'>
                                    <div class='font-semibold text-center'>Delete</div>
                                </th>
                                <th class='p-2'>
                                    <div class='font-semibold text-center'>Edit</div>
                                </th>
                            </tr>
                        </thead>

                        <tbody class='text-sm divide-y divide-gray-100'>
                            {posts.map(({ title, tag, _id }) => (
                                <tr>
                                    <td class='p-2'>
                                        <input type='checkbox' class='w-5 h-5' value='id-1' />
                                    </td>
                                    <td class='p-2'>
                                        <div class='font-medium text-gray-800'>{title}</div>
                                    </td>
                                    <td class='p-2'>
                                        <div class='text-left capitalize'>{tag}</div>
                                    </td>


                                    <td class='p-2'>
                                        <div class='flex justify-center'>
                                            <button onClick={() => dispatch(deletePostData(_id))} >
                                                <svg
                                                    class='w-8 h-8 hover:text-blue-600 rounded-full hover:bg-gray-100 p-1'
                                                    fill='none'
                                                    stroke='currentColor'
                                                    viewBox='0 0 24 24'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                >
                                                    <path
                                                        stroke-linecap='round'
                                                        stroke-linejoin='round'
                                                        stroke-width='2'
                                                        d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                                                    ></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                    <td class='p-2'>
                                        <div class='flex justify-center'>
                                            {/* <button onClick={() => dispatch(editpost(_id))} >
                        Edit
                      </button> */}

                                            <div className="card-actions justify-end">
                                                <Link to={`/dashboard/update/${_id}`}> <label

                                                    className="btn btn-sm text-white"

                                                >Edit Now</label>
                                                </Link>

                                            </div>
                                            <>
                                                <input type="checkbox" id="modify-modal" className="modal-toggle" />
                                                <div className="modal">
                                                    <div className="modal-box relative">
                                                        <label htmlFor="modify-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                                                        <form onSubmit={handleModify} className='grid grid-cols-1 gap-3 mt-10'>


                                                            <input name="name" type="text" disabled placeholder="Your Name" defaultValue={title} className="input w-full input-bordered" />
                                                            <input name="brand" type="text" placeholder="Brand Name" className="input w-full input-bordered" />
                                                            <br />
                                                            <input className='btn  w-full' type="submit" value="Change Now" />
                                                        </form>
                                                    </div>
                                                </div>
                                            </>

                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>


        </div>


        // </section>


    );
};

export default PostList;
