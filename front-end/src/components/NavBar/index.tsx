import "./style.css"
import logo from "../../assets/img/transferir.png"


function NavBar() {

    return (
        <>
            <header>
                <div className="notas-header">
                    <img src={logo} alt="notesBR" />
                    <h1>Notes BR</h1>
                    <p>
                        Desenvolvido por
                        <a target="_blank" href="https://www.instagram.com/brunoandradee__/"> @brunoandradee__</a>
                    </p>
                </div>
            </header>
        </>
    )
}

export default NavBar;
