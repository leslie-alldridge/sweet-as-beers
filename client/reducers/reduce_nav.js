export default function(state = 'showListing', action){
    switch(action.type){
        case "NAVIGATE":
        return action.target
    }
    return state
}