import { FC } from "react";

import { useCounter } from "../../hooks/zustand/counter.zustand.hook";

export const LeftSection: FC = () => {
    
    const {increment, decrement, reset} = useCounter();

    return (
        <div style={styles.container}>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
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