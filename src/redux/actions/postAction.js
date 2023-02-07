import {
    ADD_POST,
    ADD_TO_POST,
    LOAD_POST,
    POST_LOADED,
    REMOVE_FROM_CART,
    REMOVE_POST,
    UPDATE_POST,
} from "../actionTypes/actionTypes";

export const loadPost = (data) => {
    return {
        type: LOAD_POST,
        payload: data,
    };
};


export const addPost = (post) => {
    return {
        type: ADD_POST,
        payload: post,
    };
};

export const removePost = (id) => {
    return {
        type: REMOVE_POST,
        payload: id,
    };
};

export const updatePost = (id) => {
    return {
        type: UPDATE_POST,
        payload: id,
    };
};

export const addToPost = (post) => {
    return {
        type: ADD_TO_POST,
        payload: post,
    };
};



export const removeFromCart = (post) => {
    return {
        type: REMOVE_FROM_CART,
        payload: post,
    };
};

export const loaded = (posts) => {
    return {
        type: POST_LOADED,
        payload: posts,
    };
};
