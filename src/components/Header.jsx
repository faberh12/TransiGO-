import './Header.css'
import Logo from '/imagen1.avif'


export default function Header() {
    return(
        <header>
            <img src={Logo} alt="logo prueba" width={50} height={50} />
            <nav>
                <ul>
                    <li>About</li>
                    <li>Contact us</li>
                </ul>
                <section>
                <button>Login</button>
                <button>register</button>
            </section>
            </nav>
        </header>
    )
}