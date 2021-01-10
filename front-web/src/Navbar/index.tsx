import './styles.css'
import { ReactComponent as Logo } from './logo_delivery.svg'
function Navbar() {
    return (
        <nav className="main-navbar">
            <Logo />
            <a className="logo-text" href="home">FAST DELIVER</a>
        </nav>
    )
}
export default Navbar;