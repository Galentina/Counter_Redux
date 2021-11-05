const initialState = {
    counters: [
        {id: 1, number: 10},
        {id: 2, number: 20},
        {id: 3, number: 30},
        {id: 4, number: 40},
    ]
};



const counter = (state = initialState, action) =>{
    switch (action.type) {

        case 'ADD_COUNTER': {
            console.log(action.payload);
            return {...state, counters: action.payload};
        }
        case 'DELETE_COUNTER': {
            return {...state, counters: action.payload};
        }

        case 'PLUS': {
            console.log("id1", action.payload);
            return {...state, counters: action.payload};
        }

        case 'MINUS': {
            return {...state, counters: action.payload};
        }

        default:
            return state;
    }

}

export default counter;
