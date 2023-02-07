import { updatePost } from "../actions/postAction";

const editPostData = (post, id) => {
    console.log(id)

    return async (dispatch, getState) => {
        const res = await fetch(`https://cms-redux-server-side.vercel.app/post/${id}`,
            {

                method: "PUT",
                body: JSON.stringify(post),
                headers: {
                    "Content-type": "application/json",
                },
            });
        const data = await res.json();

        if (data.acknowledged) {
            dispatch(updatePost(id))
        }

    }
}

export default editPostData;