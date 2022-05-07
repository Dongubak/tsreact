import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from '../../app/store';
import Counter from "../../components/Counter";
import { decrease, increase, increaseAmount } from "./counterSlice";

function CounterContainer() {
    const count:number = useSelector((state: RootState) => state.counterReducer.count);
    const dispatch:AppDispatch = useDispatch();
    const onIncrease: (() => void) = () => {
        dispatch(increase())
    }
    const onDecrease: (() => void) = () => {
        dispatch(decrease())
    }

    return(
        <Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease}/>
    )
}

export default CounterContainer;