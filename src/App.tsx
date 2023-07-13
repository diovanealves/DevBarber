import Header from './components/Header'
import Main from './components/Main'
import About from './components/About'

export default function App() {
  return (
    <>
      <div className="bgHome">
        <Header />
        <Main />
      </div>
      <About />
    </>
  )
}
