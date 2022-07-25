import { GET_USERDATA } from "../action/userAction"

const intitialState = {
    users: []
}

const userReducer = (state = intitialState, action) => {


    switch (action.type) {
        case GET_USERDATA:
            return { ...state, users: action.payload }

        default: return state

    }



}
export default userReducer