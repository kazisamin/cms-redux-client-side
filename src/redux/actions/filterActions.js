import { TOGGLE_STOCK, TOGGLE_TAG, TOGGLE_UPLOAD } from "../actionTypes/actionTypes"

export const toggleTag = (tagName) => {
    return {
        type: TOGGLE_TAG,
        payload: tagName,

    }
}

export const toggleStock = (brandName) => {
    return {
        type: TOGGLE_STOCK,
        payload: brandName,

    }
}
export const toggleUpload = (uploadType) => {
    return {
        type: TOGGLE_UPLOAD,
        payload: uploadType,

    }
}