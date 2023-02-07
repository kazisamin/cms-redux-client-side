import { loadPost } from "../actions/postAction";

export const loadPostData = () => {
    return async (dispatch, getState) => {
        const res = await fetch("https://cms-redux-server-side.vercel.app/posts");
        const data = await res.json();

        if (data.data.length) {
            dispatch(loadPost(data.data));
        }
    };
};