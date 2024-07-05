import react, { useState } from 'react';

function Alterar() {
    const [texto, setTexto] = useState(true);
    const alterar = () => {
        setTexto(!texto);
    }
    
    return(
        <div>
           <button onClick={alterar}>alterar texto</button> 
           {texto ? <p>Texto A</p> : <p>Texto B</p>}
        </div>
    );

}

export default Alterar;