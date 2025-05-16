import {useState} from 'react';
import Button from './components/Button';

function App(){
    const [contador, setContador] = useState(0);

    const Incrementar =() => setContador(contador + 1);
    const Decrementar =() => setContador(contador - 1);
    const Reset =() => setContador(0);
    
    return (
        <>
        <h1 className='text-3xl'> contador: {contador}</h1>
        <Button text={'Incrementar'} funcionalidad={()=> setContador(Incrementar)}/>
        <Button text={'Decrementar'} funcionalidad={()=> setContador(Decrementar)}/>
        <Button text={'Resetear'} funcionalidad={()=> setContador(Reset)}/>



        {/* <button onClick={()=>setContador(contador + 1)} className='bg-emerald-500 px-4 py-2 hover:bg-emerald-700 rounded-lg'>Incrementar</button>
        <button onClick={()=>setContador(contador - 1)} className='bg-red-500 px-4 py-2 hover:bg-red-700 rounded-lg'>Decrementar</button>
        <button onClick={()=>setContador(0)} className='bg-sky-500 px-4 py-2 hover:bg-sky-700 rounded-lg'>Resetear</button> */}
        </>
    )
}
export default App;