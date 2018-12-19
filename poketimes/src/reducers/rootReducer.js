const initState = {
    posts: [], 
    blogs: ""
}

const newState = {
    posts: [
        {id: '1', title: 'Suirtle Laid an Egg', body: 'Lorem ipsum dolor sit amet const'}, 
        {id: '2', title: 'Charmander Laid an Egg', body: 'Lorem ipsum dolor sit amet const'}, 
        {id: '3', title: 'a Helix Fossil was Found', body: 'Lorem ipsum dolor sit amet const'}
    ],
    blogs: "Bloggers"
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_POST'){
        console.log("DELETED")
    }
    else if (action.type === 'GET_POSTS'){
        console.log(action);
        state = newState;
    }
    return state;
}


export default rootReducer