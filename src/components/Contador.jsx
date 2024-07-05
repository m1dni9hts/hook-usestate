// estrutura básica de construção de componente

import react, { useState } from 'react';

function Contador() {
    let [contador, setContador] = useState(50);
    
    return(
        <div>
            {contador}
        </div>
    );

}

export default Contador;