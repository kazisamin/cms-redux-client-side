import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useLoaderData } from 'react-router-dom';
import editPostData from '../../redux/thunk/editPostData';


const UpdatePost = () => {
    const { reset } = useForm();
    const post = useLoaderData();
    const { tag, _id } = post;
    const dispatch = useDispatch();



    const handleUpdatePost = event => {
        const form = event.target;
        const tag = form.tag.value;

        const post = {

            tag: tag,

        };
        dispatch(editPostData(post, _id));
        reset();
    }
    return (
        <div className='flex justify-center items-center h-full'>



            <form onSubmit={handleUpdatePost} className='shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-xl justify-between bg-white'>

                <label className='mb-2 ' htmlFor='title'>
                    Old Post Tag
                </label>
                <input name="name" type="text" disabled placeholder="Post Tag" defaultValue={post.tag} className="input w-full input-bordered" />
                <input name="tag" type="text" placeholder="Put New Tag Name" className="input w-full input-bordered" />
                <br />
                <input className='btn  w-full' type="submit" value="Change Now" />
            </form>



        </div >
    );
};

export default UpdatePost;