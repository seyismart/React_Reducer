// Reducer function to handle actions

export const Reducer = (state, action) => {
   
    console.log(state);
    
    
switch (action.type) {
    case 'ADD_NAME':
        return [...state,{
            id: state.length + 1,
            name: action.payload
        }]
        
    case 'DELETE_NAME':
    return{};

case 'UPDATE_NAME':
        break;

    default:
        break;
}
}