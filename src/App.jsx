import './App.css'
import { XFollowCard } from './XFollowCard.jsx'
const users = [
    {
        userName: 'Rasen_bunkai',
        name: 'レイセン枯れ'
    },
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán'
    },
    {
        userName: 'pucolab',
        name: 'Pucolab'
    },
    {
        userName: 'MoureDev',
        name: 'Brais Moure'
    }
];
export function App (){
    return (
        <article className='App'>
            {
                users.map((user) => (
                    <XFollowCard
                    key={user.userName}
                    userName={user.userName}
                    name={user.name}
                    />
                ))
            }
       </article>
    )
}