import React, { useEffect, } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "../../components/PostCard";
import { toggleTag, toggleUpload } from "../../redux/actions/filterActions";
import { loadPostData } from "../../redux/thunk/fetchPosts";




const Home = () => {

    const dispatch = useDispatch();
    const filters = useSelector((state) => state.filter.filters);
    const { sorting_value, tags, } = filters;
    const posts = useSelector((state) => state.post.posts)

    useEffect(() => {
        dispatch(loadPostData());

    }, [dispatch]);


    const activeClass = "text-white  bg-indigo-500 border-white";
    let content;

    if (posts.length) {
        content = posts.map((post) => (
            <PostCard key={post._id} post={post}></PostCard>
        ));
    }

    if (posts.length && tags.length) {
        content = posts

            .filter((post) => {
                if (tags.length) {
                    return tags.includes(post.tag);
                }
                return post;
            })
            .map((post) => <PostCard key={post.model} post={post} />);
    }


    if (sorting_value === "highest") {
        posts.sort((a, b) => new Date(b.date) - new Date(a.date))

            .map((post) =>
                <PostCard key={post._id} post={post}></PostCard>)

    }

    else if (sorting_value === "lowest") {
        posts.sort((a, b) => new Date(a.date) - new Date(b.date))

            .map((post) =>
                <PostCard key={post._id} post={post}></PostCard>)
    };


    return (
        <div className='max-w-7xl gap-14 mx-auto mb-72'>
            <div className='mb-10 flex justify-end gap-5'>
                <button className={'px-3 py-2 font-semibold disabled'}>
                    filter by Tag :
                </button>
                <button onClick={() => dispatch(toggleTag("hot"))} className={`border px-3 py-2 rounded-full font-semibold ${tags.includes("hot") ? activeClass : null}`}>
                    Hot
                </button>
                <button onClick={() => dispatch(toggleTag("new"))} className={`border px-3 py-2 rounded-full font-semibold ${tags.includes("new") ? activeClass : null}`}>
                    New
                </button>

                <select className="border rounded-md p-2" name="Sort by Upload" id="" onChange={(event) => dispatch(toggleUpload(event.target.value))}>
                    <option value={"highest"} className={`border px-3 py-2 rounded-full font-semibold ${sorting_value.includes("highest") ? activeClass : null}`}>
                        Latest Upload
                    </option>
                    <option value={"lowest"} className={`border px-3 py-2 rounded-full font-semibold ${sorting_value.includes("lowest") ? activeClass : null}`}>
                        Older Upload
                    </option>
                </select>

            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14'>
                {content}
            </div>
        </div >
    );
};

export default Home;
