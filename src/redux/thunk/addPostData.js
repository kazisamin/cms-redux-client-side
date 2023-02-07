import { addPost } from "../actions/postAction";

const addPostData = (post) => {
    return async (dispatch, getState) => {

        const res = await fetch("https://cms-redux-server-side.vercel.app/post", {
            method: "POST",
            body: JSON.stringify(post),
            headers: {
                "Content-type": "application/json"
            }
        });
        const data = await res.json();


        if (data.acknowledged) {
            dispatch(addPost({
                _id: data.insertedId,
                ...post,

            })
            );
        }
    };
}

export default addPostData;