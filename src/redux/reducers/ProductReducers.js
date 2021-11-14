import { ActionsTypes } from "../contants/actions_types"
const initinalState = {
    products: [{
        id: 1,
        title: "sagar",
        description: "Developer"
    }]
}

export const productReducer = (state = initinalState, { type, payload }) => {
    switch (type) {
        case ActionsTypes.SET_PRODUCTS:
            return state;
        default:
            return state
    }
}