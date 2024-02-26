import { FC, useState } from "react";
import { useDispatch, useSelector  } from "react-redux";

import { pokeSlice, setPokemon } from "../../hooks/redux/poke.redux.slice";

export const LeftSection: FC = () => {

    const [name, setName] = useState<string>()

    const dispatch = useDispatch()
    const {increaseIndex, decreaseIndex, changeName} = pokeSlice.actions;
    const index = useSelector((state: any) => state.poke.index);

    return (
        <div>
            <div style={styles.pokemonNumberContainer}>
                <p>Pokémon number :<br />{index}</p>
                <div style={styles.pokemonNumberButtonContainer}>
                    <button onClick={() => dispatch(decreaseIndex())}>-</button>
                    <button onClick={() => dispatch(increaseIndex())}>+</button>
                </div>
            </div>
            <button onClick={() => dispatch(setPokemon(index) as any)} style={styles.setPokemon}>Set Pokemon</button>
            
            <div style={{ marginTop: 80 }}>
                <p>Change name</p>
                <input type="text" onChange={e => setName(e.target.value)}  />
                <button onClick={() => dispatch(changeName(name))}>Changer le nom</button>
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