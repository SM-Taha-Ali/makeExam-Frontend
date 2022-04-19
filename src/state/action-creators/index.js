export const authLogin = () => {
    return (dispatch)=>{
        dispatch({
            type: 'login',
            payload: true
        })
    }
}


export const authLogout = () => {
    return (dispatch)=>{
        dispatch({
            type: 'logout',
            payload: false
        })
    }
}