import { NavLink } from "react-router-dom" 
import { IconAddressBook, IconHome, IconInfoCircle,  } from "@tabler/icons-react"


export function Menu(){
    const getEstilo = (props) => {
        let estilo = "flex gap-3 text-slate-700 px-3 py-4 hover:text-white hover:bg-slate-700 "

        let ativo = "border-r-4 border-solid border-slate-800"

        let final = props.isActive ? estilo + ativo : estilo

        return final
    }
    return(
        <aside className="bg-black-300 w-60 h-screen">

            <header className="flex gap-1 justify-center items-center px-1 py-5 border-b-2 border-solid border-slate-200">
                <span className="font-bold">React Rotas</span>
            </header>

            <nav className="flex flex-col">
                <NavLink to="home" className={getEstilo}> <IconHome/> Home </NavLink>

                <NavLink to="contato" className={getEstilo}> <IconAddressBook/> Contato </NavLink>

                <NavLink to="sobre" className={getEstilo}> <IconInfoCircle/> Sobre </NavLink>

                <NavLink to="estado1" className={getEstilo}> <IconInfoCircle/> Estado 1 </NavLink>
            </nav>

            <footer className="absolute bottom-0 p-2">
                <span>Desenvolvimento Web 2</span>
            </footer>
        </aside>
    )
}
