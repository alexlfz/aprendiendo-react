import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {

    const [name, setName] = useState('midudev')

    return (
        <section className='App'>
            <TwitterFollowCard userName={name}>
                Miguel Angel Durán
            </TwitterFollowCard>
            <TwitterFollowCard  userName="pheralb">
                Pablo Hernandez
            </TwitterFollowCard>

            <button onClick={() => setName('pedromichel')}>
                Cambio nombre
            </button>
           
        </section>
    )
}