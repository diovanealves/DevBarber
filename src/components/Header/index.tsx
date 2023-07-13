import { InstagramLogo, FacebookLogo, TwitterLogo } from '@phosphor-icons/react'
import Logo from '../../assets/logo.svg'

export default function Header() {
  return (
    <header>
      <nav className="headerContent container">
        <div className="headerIcon">
          <a href="#">
            <InstagramLogo />
          </a>
          <a href="#">
            <FacebookLogo weight="fill" />
          </a>
          <a href="#">
            <TwitterLogo />
          </a>
        </div>

        <div className="headerLogo">
          <img src={Logo} alt="Logo da Barbearia" />
        </div>

        <div>
          <a href="#" className="headerButton">
            Agendar horário
          </a>
        </div>
      </nav>
    </header>
  )
}
