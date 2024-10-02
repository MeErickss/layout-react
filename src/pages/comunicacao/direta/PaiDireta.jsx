import { useState } from "react"
import { FilhoDireta } from "./FilhoDireta"

export function PaiDireta(){

    const [nome, setNome] = useState("")

    return(
        <div className={`w-full flex flex-col items-center p-7 rounded-md bg-blue-500 text-white`}>
            <div className="flex gap-3">

            <button className="bg-purple-500 px-4 py-2 text-white hover:bg-purple-600 rounded-md" onClick={() => setNome("Jõao")}>Jõao</button>
            <button className="bg-purple-500 px-4 py-2 text-white hover:bg-purple-600 rounded-md" onClick={() => setNome("Maria")}>Maria</button>
            <button className="bg-purple-500 px-4 py-2 text-white hover:bg-purple-600 rounded-md" onClick={() => setNome("José")}>José</button>

            </div>
            <span className="text-4xl p-5">{nome}</span>
            <FilhoDireta texto={nome}></FilhoDireta>
        </div>
    )    
}