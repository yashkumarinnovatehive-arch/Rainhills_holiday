import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BookingBar from './components/BookingBar';
import About from './components/About';
import Facilities from './components/Facilities';
import Rooms from './components/Rooms';
import Experience from './components/Experience';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Location from './components/Location';
import Footer from './components/Footer';
import MobileBottomBar from './components/MobileBottomBar';

function App() {
  return (
    <div className="font-sans antialiased text-forest-950 bg-cream-100 selection:bg-accent-gold selection:text-forest-950">
      <Navbar />
      
      <main>
        <Hero />
        <BookingBar />
        <About />
        <Facilities />
        <Rooms />
        <Experience />
        <Gallery />
        <Reviews />
        <Location />
      </main>

      <Footer />
      <MobileBottomBar />
    </div>
  );
}

export default App;
