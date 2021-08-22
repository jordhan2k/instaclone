const initialState = {
    currentUser: null
}
const userReducer = (state = initialState, action) => {

    return {
        ...state,
        currentUser: action.payload
    }

}



export default userReducer;