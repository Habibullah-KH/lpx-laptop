import Nav from './component/Nav'
import Hero from './component/Hero'
import ProductsView from './component/ProductsView'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Showcase from './component/Showcase';

gsap.registerPlugin(ScrollTrigger)
const App = () => {
  return (
    <>
    <Nav/>
    <Hero/>
    <ProductsView/>
    <Showcase/>
    </>
  )
}

export default App