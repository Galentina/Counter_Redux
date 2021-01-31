const initialState = {
    counters: [
        {id: 1, number: 10},
        {id: 2, number: 20},
        {id: 3, number: 30},
    ]
};



const counter = (state = initialState, action) =>{
    switch (action.type) {
        case 'DELETE_COUNTER': {
            const newCounters = state.counters.filter(el => (el.id !== action.payload.id));
            console.log(newCounters);
            return {...state, counters: newCounters};
        }

        case 'PLUS': {
            const newCounters = state.counters.map(el => {
                    if (el.id === action.payload.id) return {...el, number: el.number + 1};
                    else return el;
                }
            );
            return {...state, counters: newCounters};
        }

        case 'MINUS': {
            const newCounters = state.counters.map(el => {
                    if (el.id === action.payload.id) return {...el, number: el.number - 1};
                    else return el;
                }
            );
            return {...state, counters: newCounters};
        }

        default:
            return state;
    }

}

export default counter;