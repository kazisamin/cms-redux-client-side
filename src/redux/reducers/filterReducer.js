import { TOGGLE_STOCK, TOGGLE_TAG, TOGGLE_UPLOAD } from "../actionTypes/actionTypes";

export const initialState = {

    filters: {
        tags: [],
        stock: false,
        sorting_value: "",
    },
    keyword: "",

}

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_TAG:
            if (!state.filters.tags.includes(action.payload)) {
                return {
                    ...state,
                    filters: {
                        ...state.filters,
                        tags: [...state.filters.tags, action.payload],
                    }
                }
            }
            else {
                return {
                    ...state,
                    filters: {
                        ...state.filters,
                        tags: state.filters.tags.filter(
                            (tag) => tag !== action.payload
                        ),
                    }
                }
            }

        case TOGGLE_STOCK:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    stock: !state.filters.stock,
                }


            };

        case TOGGLE_UPLOAD:

            return {
                ...state,
                filters: {
                    ...state.filters,
                    sorting_value: action.payload,
                }
            };

        default:
            return state;
    }
};
