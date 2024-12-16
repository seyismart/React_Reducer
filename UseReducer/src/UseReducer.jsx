// Reducer function to handle actions

export const Reducer = (state, action) => {
     
switch (action.type) {
    case 'ADD_NAME':
        return [...state,{
            id: state.length + 1,
            name: action.payload
        }]
        
    case "DELETE_NAME":
        return state.filter(item => item.id !== action.payload.id)


case 'UPDATE_NAME':
        break;

    default:
        return state 
}
}

let arr = [2,3,45,100]
arr.filter(res => res > 2)