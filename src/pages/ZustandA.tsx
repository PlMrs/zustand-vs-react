import { FC } from "react";

import { Header } from "../components/Header";
import { LeftSection } from "../components/ZustandA/LeftSection";
import { RightSection } from "../components/ZustandA/RightSection";

export const ZustandA: FC = () => {

    return (
        <div>
            <Header title="Zustand" />
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