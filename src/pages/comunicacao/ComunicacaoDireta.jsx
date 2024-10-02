import { Pagina } from "../../components/Pagina"
import { PaiDireta } from "./direta/PaiDireta"

export function ComunicacaoDireta(){
    return(
        <Pagina titulo="Comunicação Direta" subtitulo="Exemplo de comunicação DIRETA entre componentes">
            <PaiDireta></PaiDireta>
        </Pagina>
    )       
}