import { ActionsTypes } from "../contants/actions_types"
export const setProducts = (products) => {
    return {
        type: ActionsTypes.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProducts = (products) => {
    return {
        type:ActionsTypes.SELECT_PRODUCTS,
        payload:products
    }
}
