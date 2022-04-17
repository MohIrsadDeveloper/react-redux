const addFundActionCreator = (amount) => {
    return {
        type: "ADD_FUND",
        amount : amount,
    }
}

const withdrawFundActionCreator = (amount) => {
    return {
        type: "WITHDRAW_FUND",
        amount : amount,
    }
}

module.exports = {
    addFundActionCreator,
    withdrawFundActionCreator
}