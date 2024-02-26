import { FC } from "react";
import { useDispatch } from "react-redux";

import { counterSlice } from "../../hooks/redux/counter.redux.slice";

export const LeftSection: FC = () => {

    const dispatch = useDispatch()
    const { increment, decrement, reset } = counterSlice.actions;
    

    return (
        <div style={styles.container}>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(reset())} >Reset</button>
        </div>
    )
}

const styles: {
    [key: string]: React.CSSProperties
} = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: 200
    }
}