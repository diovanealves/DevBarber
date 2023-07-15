import WhatsappLogo from '../../assets/whatssapp.svg'

export default function Contact() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=5511000000000&text=Quero%20fazer%20um%20agendamento%20hoje!"
      target="_blank"
      className="btnWhatsapp"
      rel="noreferrer"
      data-aos="zoom-in-up"
      data-aos-delay="200"
    >
      <img
        src={WhatsappLogo}
        alt="Botão para entrar em contato pelo Whatsapp"
      />
      <span className="tooltipText">Agende seu horário</span>
    </a>
  )
}
