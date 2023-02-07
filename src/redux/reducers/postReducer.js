import {
    ADD_POST,

    ADD_TO_POST,
    LOAD_POST,
    POST_LOADED,
    REMOVE_FROM_CART,
    REMOVE_POST,
    UPDATE_POST,
} from "../actionTypes/actionTypes";

const initialState = {
    read: [],
    posts: [],
};

const postReducer = (state = initialState, action) => {
    const selectedPost = state.read.find(
        (post) => post._id === action.payload._id
    );

    switch (action.type) {
        case LOAD_POST:
            return {
                ...state,
                posts: action.payload,
            }
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload],
            };
        case REMOVE_POST:
            return {
                ...state,
                posts: state.posts.filter(
                    (post) => post._id !== action.payload
                ),
            };
        case UPDATE_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload],
            };
        case ADD_TO_POST:
            if (selectedPost) {
                const newRead = state.read.filter(
                    (post) => post._id !== selectedPost._id
                );

                selectedPost.quantity = selectedPost.quantity + 1;

                return {
                    ...state,
                    read: [...newRead, selectedPost],
                };
            }
            return {
                ...state,
                read: [...state.read, { ...action.payload, quantity: 1 }],
            };
        case REMOVE_FROM_CART:
            if (selectedPost.quantity > 1) {
                const newCart = state.cart.filter(
                    (post) => post._id !== selectedPost._id
                );
                selectedPost.quantity = selectedPost.quantity - 1;

                return {
                    ...state,
                    cart: [...newCart, selectedPost],
                };
            }
            return {
                ...state,
                cart: state.cart.filter(
                    (post) => post._id !== action.payload._id
                ),
            };

        case POST_LOADED:
            return {
                ...state,
                posts: action.payload,
            };
        default:
            return state;
    }
};

export default postReducer;
