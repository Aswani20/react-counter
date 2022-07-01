// const ADD_TODO="ADD_TODO"
// const DELETE_TODO="DELETE_TODO"

// //Action
// export const addTodoAction = (payload) =>{
//     return {
//         type: ADD_TODO,
//         payload: payload
//     }
// }
// export const deleteTodoAction = (payload) =>{
//     return {
//         type: DELETE_TODO,
//         payload: payload
//     }
// }

// //INITIAL STATE
// const initialState = {
//     todos:[],
    
// }

// //Reducer
// export const todoreducer = (state = initialState, action)=>{

//     switch (action.type) {
//         case ADD_TODO:
//             return{...state, todos:[...state.todos,action.payload]}
//         case DELETE_TODO:
//             return{...state, todos:[...state.todos.filter((item,index) =>index !== action.payload)]}  
    
//         default:
//             return state
//     }
// }