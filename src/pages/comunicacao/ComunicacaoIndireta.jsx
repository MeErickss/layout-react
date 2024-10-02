import { Pagina } from "../../components/Pagina"
import { FilhoIndireta } from "./indireta/FilhoIndireta"
import { PaiIndireta } from "./indireta/PaiIndireta"

export function ComunicacaoIndireta(){
    return(
        <Pagina titulo="Comunicação Indireta" subtitulo="Exemplo de comunicação INDIRETA entre componentes">
            <PaiIndireta></PaiIndireta>
        </Pagina>
    )
}