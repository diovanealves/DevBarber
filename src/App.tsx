import AOS from 'aos'
import 'aos/dist/aos.css'

import Header from './components/Header'
import Main from './components/Main'
import About from './components/About'
import Service from './components/Service'
import Footer from './components/Footer'
import Contact from './components/Contact'

AOS.init()

export default function App() {
  return (
    <>
      <div className="bgHome">
        <Header />
        <Main />
      </div>
      <About />
      <Service />
      <Footer />
      <Contact />
    </>
  )
}
