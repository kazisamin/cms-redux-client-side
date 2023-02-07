import React from "react";
import { useSelector } from "react-redux";
import ReadingList from "./ReadingList";

const Read = () => {
    const read = useSelector((state) => state.post.read);
    return (
        <div className="mb-96"><h1 className="text-center font-extrabold text-2xl">Your Reading History: </h1>

            <div className=' max-w-7xl gap-14 mx-auto my-10'>

                {read
                    .sort((a, b) => b - a)
                    .map((post) => (
                        <ReadingList key={post.title} post={post} />
                    ))}

            </div>

        </div>
    );
};

export default Read;
