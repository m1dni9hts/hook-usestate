// estrutura básica de construção de componente

import react, { useState } from 'react';

function Contador() {
    let [contador, setContador] = useState(0);
    let incrementar = () => {
        setContador(contador + 1); // vontador + 1
    }
    
    return(
        <div>
           <button onClick={incrementar}>contar + 1</button> 
           {contador}
        </div>
    );

}

export default Contador;