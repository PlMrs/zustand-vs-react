import { FC } from "react";
import { useCounter } from "../../hooks/zustand/counter.zustand.hook";

export const RightSection: FC = () => {

    const { count } = useCounter();

    return (
        <div>
            <p style={styles.text}>Counter from left</p>
            <p style={styles.text}>{count}</p>
        </div>
    )
}
const styles: {
    [key: string]: React.CSSProperties
} = {
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    }
}