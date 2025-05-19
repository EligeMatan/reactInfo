// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './styles/scss/App.scss';
import Header from './components/Header'
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Sidebar position='left' />
      <Content />
      <Sidebar position='right' />
      <Footer />
    </>
  )
}

export default App
