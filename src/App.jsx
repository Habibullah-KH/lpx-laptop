import Nav from './component/Nav'
import Hero from './component/Hero'
import ProductsView from './component/ProductsView'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Showcase from './component/Showcase';
import Performance from './component/Performance';
import Features from './component/Features';
import Highlight from './component/Highlight';
import Footer from './component/Footer';

gsap.registerPlugin(ScrollTrigger)
const App = () => {
  return (
    <main>
    <Nav/>
    <Hero/>
    <ProductsView/>
    <Showcase/>
    <Performance/>
    <Features/>
    <Highlight/>
    <Footer/>
    </main>
  )
}

export default App