import './styles.css'
import { ReactComponent as Youtube } from './youtube.svg'
import { ReactComponent as Insta } from './instagram.svg'
import { ReactComponent as Linkedin } from './linkedin.svg'
function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.youtube.com/channel/UC3twHmWQwtqEO7u-gB_2f7g" target="_new"><Youtube /></a>
                <a href="https://www.linkedin.com/school/devsuperior/" target="_new"><Linkedin /></a>
                <a href="https://www.instagram.com/devsuperior.ig/?hl=pt" target="_new"><Insta /></a>
            </div>
        </footer>
    )
}
export default Footer;