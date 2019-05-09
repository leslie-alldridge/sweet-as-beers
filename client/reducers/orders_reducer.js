export default function(state = [], action){
    switch(action.type){
        case "SAVE_CART":
        console.log('saving cart');
        
        return [
            ...state, action
        ]
    }
    return state
}