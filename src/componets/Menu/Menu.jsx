import { NavLink } from "react-router-dom" 
import { IconAddressBook, IconHome, IconInfoCircle,  } from "@tabler/icons-react"


export function Menu(){
    const getEstilo = (props) => {
        let estilo = "flex gap-3 text-slate-700 px-3 py-4 hover:bg-slate-200 hover:bg-slate-700"

        let ativo = "border-r-4 border-solid border-slate-800"

        let final = props.isActive ? estilo +ativo : estilo

        return final
    }
    return(
        <aside className="bg-slate-300 w-60 h-screen">

            <header className="flex justify-center items-center px-1 py-5 border-b-2 border-solid border-slate-200">
                <span className="font-bold">React Rotas</span>
            </header>

            <nav className="flex flex-col">
                <NavLink to="Home" className={getEstilo}>
                    <IconHome/>
                    Home
                </NavLink>

                <NavLink to="Contato" className={getEstilo}>
                    <IconAddressBook/>
                    Contato
                </NavLink>

                <NavLink to="Sobre" className={getEstilo}>
                    <IconInfoCircle/>
                    Sobre
                </NavLink>
            </nav>

            <footer className="absolute bottom-0 p-2 flex justify-center items-center">
                <span>Desenvolvimento Web 2</span>
            </footer>
        </aside>
    )
}
