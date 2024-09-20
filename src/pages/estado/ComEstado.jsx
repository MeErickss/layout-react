import { useState } from "react";
import { Pagina } from "../../components/Pagina"

export function ComEstado(){

    let [numero, setNumero] = useState(0)
    
    return(
        <Pagina titulo="Com Estado" subtitulo="Conceito de Estado">
            <div className="flex flex-col gap-4">
                <span className="text-2xl">{numero}</span>
                <button onClick={() => setNumero(numero+1)}
                    className="bg-purple-400 rounded-md p-2"
                >Incrementar</button>
            </div>
        </Pagina>
    )
}