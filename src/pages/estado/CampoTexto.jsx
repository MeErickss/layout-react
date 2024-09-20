import { useState } from "react";
import { Pagina } from "../../components/Pagina";

export function CampoTexto(){

    const [texto, setTexto] = useState("")

    return(
        <Pagina titulo="Campo de Texto" subtitulo="Conceito de Estado no React">
            <div className="flex flex-col gap-4">
                <input className="bg-black rounded-md" onChange={(e) => setTexto(e.target.value)} type="text" placeholder="Campo de Texto" value={texto}/>
                <button onClick={() => setTexto("")}
                className="bg-purple-400 rounded-md p-2"
                >Limpar</button>

                <span className="text-2xl">{texto}</span>
            </div>
        </Pagina>
    )
}