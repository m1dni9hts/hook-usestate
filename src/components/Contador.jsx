// estrutura básica de construção de componente

import react, { useState } from 'react';

function Contador() {
    let [contador, setContador] = useState(0);
    
    return(
        <div>
            {contador}
        </div>
    );

}

export default Contador;