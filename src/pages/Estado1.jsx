import { useState } from "react"
import { Pagina } from "../componets/Pagina"

export function Estado1(){

    const [num, setNum] = useState(0)
    const [texto, setTexto] = useState("teste")


    function incrementar(){
        setNum(num+1)
    }
    return(
         <Pagina titulo="Estado 1" subtitulo="Conceito de Estado">
            <div>
                <div>{num}</div>
                <button className="bg-zinc-600 p-4 rounded-md" onClick={incrementar}>Incrementar</button>
            </div>

            <div>
                <input className="bg-zinc-400 rounded-md" type="text"
                value={texto} 
                onChange={(e) => setTexto(e.target.value)} />
                
                <button className="bg-zinc-600 p-4 rounded-md" onClick={() => setTexto("")}>ok</button>
                <span>{texto}</span>
            </div>
         </Pagina>
    )
}