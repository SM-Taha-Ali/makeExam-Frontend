const isAuthenticated = localStorage.getItem('isAuthenticated')
const reducer = (state=isAuthenticated, action)=>{
    if (action.type === "login"){
        state = true
        return (state)
    } else if (action.type === "logout"){
        state = false
        return (state)
    } else{
        return state
    }
}

export default reducer