import { ChevronDown, ExternalLink, Search, User} from "lucide-react"
import Logo from "../../assets/logo.png"

import "./style.css"

export function Menu(){
    return(
        <nav>
            <img src={Logo}/>
            <ul>
                <li>Jogos <ChevronDown size={20}/></li>
                <li>Boletim</li>
                <li>Vídeos</li>
                <li>Downloads</li>
                <li>Loja <ExternalLink size={15}/></li>
                <li>Suporte <ExternalLink size={15}/></li>
            </ul>
            <div className="container">
                <button>OBTER LAUNCHER</button>
                <Search/>
                <div><User size={15}/></div>
            </div>
            
        </nav>
    )
}