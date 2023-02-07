import { removePost } from "../actions/postAction";

const deletePostData = (id) => {
    console.log(id)
    return async (dispatch, getState) => {
        const res = await fetch(`https://cms-redux-server-side.vercel.app/post/${id}`, {
            method: "DELETE",

            headers: {
                "Content-type": "application/json",
            },
        });
        const data = await res.json();

        if (data.acknowledged) {
            dispatch(removePost(id))
        }

    }
}

export default deletePostData;