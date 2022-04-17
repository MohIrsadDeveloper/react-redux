export const rootReducer = (state, action) => {
    let newState = state;
    switch (action.type) {
        case "ADD_FUND":
            return state += action.amount;

        case "WITHDRAW_FUND":
            return state -= action.amount
        default:
            return newState;
    }
}