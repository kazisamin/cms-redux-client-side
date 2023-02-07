import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostRead = () => {
    const post = useLoaderData();

    const { title, description, image, tag } = post;
    return (
        <div className='max-w-7xl gap-14 mx-auto my-10 flex justify-center'>
            <div className="shadow-lg p-10 rounded-md flex flex-wrap  gap-3 max-w-3xl justify-center bg-white">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        <div className="badge badge-secondary">{tag}</div>
                    </h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostRead;