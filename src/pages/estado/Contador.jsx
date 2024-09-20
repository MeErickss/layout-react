import { useState } from "react";
import { Pagina } from "../../components/Pagina";
import { IconMinus, IconPlus } from "@tabler/icons-react";

export function Contador(){

    let [step, setStep] = useState(1)
    let [numero, setNumero] = useState(0)

    return(
        <Pagina titulo="Contador" subtitulo="Conceito de Estado no React">
            <div className="w-full h-full flex flex-col justify-center items-center gap-5">
                    <div className="text-6xl font-black">{numero}</div>
                    <div className="flex gap-5">
                        <button className="rounded-full p-4 bg-blue-600" onClick={() => setNumero(numero-step)}><IconMinus size={30}/></button>
                        <button className="rounded-full p-4 bg-blue-800" onClick={() => setNumero(numero+step)}><IconPlus size={30}/></button>
                    </div>

                <div className="flex items-center gap-5">
                    <button onClick={() => setStep(step-1)} className="rounded-full p-2 bg-purple-600"><IconMinus /></button>
                    <span>{step}</span>
                    <button onClick={() => setStep(step+1)} className="rounded-full p-2 bg-purple-800"><IconPlus /></button>
                </div>
            </div>
        </Pagina>
    )
}