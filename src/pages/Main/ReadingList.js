import React from 'react';

const ReadingList = ({ post }) => {
    return (
        <div >
            <div className="overflow-x-auto w-full ">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Title</th>
                            <th>Tag</th>
                            <th>Details</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={post.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{post.title}</div>
                                        <div className="text-sm opacity-50">{post.description.slice(0, 50)}...</div>
                                    </div>
                                </div>
                            </td>
                            <td>

                                <p>{post.tag}</p>
                            </td>

                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                            <td>Remove</td>
                        </tr>






                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default ReadingList;