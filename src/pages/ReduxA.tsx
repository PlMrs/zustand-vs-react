import { FC } from "react";

import { Header } from "../components/Header";
import { LeftSection } from "../components/ReduxA/LeftSection";
import { RightSection } from "../components/ReduxA/RightSection";

export const ReduxA: FC = () => {

    return (
        <div>
            <Header title="Redux" />
            <h1>Counter</h1>
            <div style={styles.container}>
                <LeftSection />
                <RightSection />
            </div>
        </div>
    )
}

const styles: {
    [key: string]: React.CSSProperties
} = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
}