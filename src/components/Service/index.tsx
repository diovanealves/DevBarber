import corte1 from '../../assets/corte1.png'
import corte2 from '../../assets/corte2.png'
import corte3 from '../../assets/corte3.png'

const data = [
  { name: 'Corte cabelo', img: corte1, price: '45,00' },
  { name: 'Barba completa', img: corte2, price: '35,00' },
  { name: 'Cabelo e barba', img: corte3, price: '70,,' },
]

export default function Service() {
  return (
    <section className="services">
      <div
        className="servicesContent container"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        <h2>Serviços</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Ornare eget pellentesque proin
          risus. Orci proin morbi vestibulum convallis leo vestibulum mus. Non
          duis augue eros mattis a quis sem sodales.
        </p>
      </div>

      <section className="hairCuts">
        {data.map((haircut, i) => (
          <div
            className="hairCut"
            key={i}
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <img src={haircut.img} alt={haircut.name} />
            <div className="hairCutInfo">
              <strong>{haircut.name}</strong>
              <button>R$ {haircut.price}</button>
            </div>
          </div>
        ))}
      </section>
    </section>
  )
}
