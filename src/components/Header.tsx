import { CSSProperties, FC } from "react";

export const Header: FC<{ title: string }> = ({ title }) => {

    return (
        <header style={styles.header}>
            <h1 style={styles.title}>{title}</h1>
            <a href="/" style={styles.link}>Go to HomePage</a>
        </header>
    )
}

const styles: {
    [key: string]: CSSProperties
} = {
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    title: {
        margin: 0,
        textAlign: 'left'
    },
    link: {
        marginLeft: 150
    }
}