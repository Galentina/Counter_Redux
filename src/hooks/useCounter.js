import {useDispatch, useSelector} from "react-redux";
import {counterActions} from "../redux/actions";


export const useCounter = () =>{
    const selector = (state) => state.counter.counters;
    const counters = useSelector(selector);
    const dispatch = useDispatch();

    const plusButtonHandler = (id) => {
        console.log("id", id);
        console.log(counterActions.mathPlus(id));
        let newCounter = counters.map(el => el.id === id ? {...el, number: el.number + 1} : el)
        dispatch(counterActions.mathPlus(newCounter));
    }

    const minusButtonHandler = (id) => {
        let newCounters = counters.map(el => el.id === id ? {...el, number: el.number - 1} : el);
        dispatch(counterActions.mathMinus(newCounters));
    }

    const addButtonHandler = (newNumber) => {
        const newId = counters[counters.length-1].id +1;
        let newCounters = counters;
        newCounters.push({id: newId, number: Number(newNumber)});
        dispatch(counterActions.addCounter(newCounters));
    }

    const deleteButtonHandler = (id) => {
        let newCounters = counters;
        newCounters = newCounters.filter(el => (el.id !== id));
        dispatch(counterActions.delCounter(newCounters));
    }

    return {
        counters,
        plusButtonHandler,
        minusButtonHandler,
        addButtonHandler,
        deleteButtonHandler
    }
}
