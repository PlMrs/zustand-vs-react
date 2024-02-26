import { FC, useState } from "react";

import { usePokemon } from "../../hooks/zustand/poke.zustand.hook";

export const LeftSection: FC = () => {

    const [name, setName] = useState<string>()

    const { index, setPokemon, changeName, changeNameImmer, increaseIndex, decreaseIndex } = usePokemon();

    return (
        <div>
            <div style={styles.pokemonNumberContainer}>
                <p>Pokémon number :<br />{index}</p>
                <div style={styles.pokemonNumberButtonContainer}>
                    <button onClick={decreaseIndex}>-</button>
                    <button onClick={increaseIndex}>+</button>
                </div>
            </div>
            <button onClick={setPokemon} style={styles.setPokemon}>Set Pokemon</button>
            
            <div style={{ marginTop: 80 }}>
                <p>Change name</p>
                <div style={{ display:"flex", flexDirection:"column" }}>
                    <input type="text" onChange={e => setName(e.target.value)}  />
                    <button onClick={() => changeName(name)} style={{ marginTop:20 }}>Changer le nom</button>
                    <button onClick={() => changeNameImmer(name)} style={{ marginTop:20 }}>Changer le nom (avec immer)</button>
                </div>
            </div>

        </div>
    )
}

const styles: {
    [key: string]: React.CSSProperties
} = {
    pokemonNumberContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    pokemonNumberButtonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    setPokemon: {
        marginTop: 20
    }
}