import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {

    const midudev = {isFollowing: true, userName: 'midudev'}

    return (
        <section className='App'>
            <TwitterFollowCard {... midudev}>
                Miguel Angel Durán
            </TwitterFollowCard>
            <TwitterFollowCard isFollowing={false} userName="pheralb">
                Pablo Hernandez
            </TwitterFollowCard>
           
        </section>
    )
}