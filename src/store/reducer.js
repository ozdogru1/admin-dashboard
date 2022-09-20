const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || null
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case  "LOGIN" : 
        return { user : action.payload}
        case "LOGOUT" : 
        return { user : null}
        default: 
         return state
    }
}