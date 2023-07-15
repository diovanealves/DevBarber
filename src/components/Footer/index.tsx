import { InstagramLogo, FacebookLogo, TwitterLogo } from '@phosphor-icons/react'
import Logo from '../../assets/logo.svg'

export default function Footer() {
  return (
    <>
      <div className="location">
        <h2>Venha Conhecer</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14644.491210279783!2d-51.97639420597167!3d-23.41993069989337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecd6fb59457ab7%3A0xae4d790f9bb33004!2sCatua%C3%AD%20Shopping%20Maring%C3%A1!5e0!3m2!1spt-BR!2sbr!4v1689376595547!5m2!1spt-BR!2sbr"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <footer className="footer">
        <div className="footerIcons">
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

        <div>
          <img src={Logo} alt="Logo da barbearia DevBarber" />
        </div>

        <p>Copyright 2023 | Dev Barbearia - Todos direitos reservados.</p>
      </footer>
    </>
  )
}
