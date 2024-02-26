import { FC } from "react";
import { useSelector } from "react-redux";

export const RightSection: FC = () => {

    const count = useSelector((state: any) => state.counter.value);

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