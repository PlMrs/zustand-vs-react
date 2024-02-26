import { CSSProperties } from 'react'
import './App.css'

function App() {

  return (
    <div style={styles.container}>
      <div>
        <h1>Zustand</h1>
        <ul>
          <li><a href='/zustandA'>Go to Zustand Counter</a></li>
          <li><a href='/zustandB'>Go to Zustand Pokedex</a></li>
        </ul>
      </div>
      <div>
        <h1>Redux toolkit</h1>
        <ul>
          <li><a href='/reduxA'>Go to Redux Toolkit Counter</a></li>
          <li><a href='/reduxB'>Go to Redux Toolkit Pokedex</a></li>
        </ul>
      </div>
    </div>
  )
}

const styles: {
  [key: string]: CSSProperties
} = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  }
}

export default App
