import { FC } from "react";

import { Header } from "../components/Header";
import { LeftSection } from "../components/ReduxB/LeftSection";
import { RightSection } from "../components/ReduxB/RightSection";

export const ReduxB: FC = () => {

    return (
        <div>
            <Header title="Redux" />
            <h1>Pokedex</h1>
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