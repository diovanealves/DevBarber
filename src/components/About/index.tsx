import Images from '../../assets/images.svg'

export default function About() {
  return (
    <section className="about">
      <div className="container aboutContent">
        <div>
          <img
            src={Images}
            alt="Imagens mostrando alguns de nossos cortes de cabelo"
          />
        </div>

        <div className="aboutDescription">
          <h2>Sobre</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Ornare eget pellentesque
            proin risus. Orci proin morbi vestibulum convallis leo vestibulum
            mus. Non duis augue eros mattis a quis sem sodales.
          </p>
          <p>
            Horário de funcionamento: <strong>09:00</strong> ás{' '}
            <strong>19:00</strong>
          </p>
        </div>
      </div>
    </section>
  )
}
