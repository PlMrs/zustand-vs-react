import { FC } from "react";

import { Header } from "../components/Header";
import { LeftSection } from "../components/ZustandB/LeftSection";
import { RightSection } from "../components/ZustandB/RightSection";

export const ZustandB: FC = () => {

    return (
        <div>
            <Header title="Zustand" />
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