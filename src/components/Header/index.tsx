import { InstagramLogo, FacebookLogo, TwitterLogo } from '@phosphor-icons/react'
import Logo from '../../assets/logo.svg'

export default function Header() {
  return (
    <header>
      <nav className="headerContent container">
        <div className="headerIcon" data-aos="fade-down">
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

        <div className="headerLogo" data-aos="fade-down" data-aos-delay="250">
          <img
            data-aos="flip-up"
            data-aos-delay="250"
            data-aos-duration="700"
            src={Logo}
            alt="Logo da Barbearia"
          />
        </div>

        <div data-aos="fade-down">
          <a
            href="https://api.whatsapp.com/send?phone=5511000000000&text=Quero%20fazer%20um%20agendamento%20hoje!"
            target="_blank"
            className="headerButton"
            rel="noreferrer"
          >
            Agendar horário
          </a>
        </div>
      </nav>
    </header>
  )
}
