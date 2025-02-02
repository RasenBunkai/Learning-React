import './App.css'
import { XFollowCard } from './XFollowCard.jsx'

export function App (){
    return (
        <article className='App'>
       <XFollowCard
        userName="Rasen_bunkai"
        name="レイセン枯れ"
       />
       <XFollowCard
        userName="midudev"
        name="Miguel Ángel Durán"
       />
       <XFollowCard
        userName="pucolab"
        name="Pucolab"
        />
        <XFollowCard
        userName="MoureDev"
        name="Brais Moure"
        />
       </article>
    )
}