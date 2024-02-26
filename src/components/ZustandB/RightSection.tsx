import { FC } from "react";
import { usePokemon } from "../../hooks/zustand/poke.zustand.hook";

export const RightSection: FC = () => {

    const { pokemon } = usePokemon();
    
    return (
        <div style={styles.container}>
            { pokemon && (
                <div style={styles.pokemonContainer}>
                    <p style={styles.pokemonName}>{pokemon?.species?.name}</p>
                    <img src={pokemon?.sprites?.front_default} style={styles.pokemonImg} />
                    <audio controls key={Math.random()}>
                        <source src={pokemon?.cries?.latest} />
                    </audio>
                    <div>
                        <p>Types :</p>
                        <ul>
                            {pokemon?.types?.map((type: any, index: number) => (<li key={index}>{type.type.name}</li>))}
                        </ul>
                    </div>
                </div>
            ) }
        </div>
    )
}

const styles: {
    [key: string]: React.CSSProperties
} = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    pokemonContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    pokemonName: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30
    },
    pokemonImg: {
        width: 200,
        height: 200
    }
}