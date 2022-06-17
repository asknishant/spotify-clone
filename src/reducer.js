
export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //token: 'dee9010422db46afa5572d06b3a007a3'
};

const reducer = (state, action) => {
    console.log(action)
    switch(action.type) {
        case 'SET_USER': 
        return {
            ...state,
            user: action.user
        };

        case 'SET_TOKEN': 
        return {
            ...state,
            token: action.token,
        };

        case 'SET_PLAYLISTS': 
        return {
            ...state,
            playlists: action.playlists
        }
        default: 
            return state;
    }
}

export default reducer;