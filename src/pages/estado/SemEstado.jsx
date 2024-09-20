import { useState } from "react";
import { Pagina } from "../../components/Pagina";

export function SemEstado(){    

    const [numero, setNumero] = useState(0)

    function incrementar(){
        setNumero(numero+1)
        console.log(numero)
    }

    return(
        <Pagina titulo="Sem Estado" subtitulo="Conceito de Estado">
            <div className="flex flex-col gap-4">
                <span className="text-2xl">{numero}</span>
                <button onClick={incrementar}
                    className="bg-purple-400 rounded-md p-2"
                >Incrementar</button>
            </div>
        </Pagina>
    )
}