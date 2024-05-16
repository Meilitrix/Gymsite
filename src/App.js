import './App.css';

import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Gallery from './Components/Gallery';
import Reviews from './Components/Reviews';

import Footer from './Components/Footer';
import Bmicalc from './Components/Bmicalc';

function App() {
  return (
    <div className='bg-gray-900 h-screen w-full'>
   <Navbar />
   <Hero/>
<Bmicalc/>
   <Reviews />
   <Gallery />
   <Footer />
 
   </div>
   
  );
}

export default App;
