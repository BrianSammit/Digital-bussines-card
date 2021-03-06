import './App.css';
import Info from './components/info'
import About from './components/about'
import Interest from './components/interest'
import Footer from './components/footer'

function App() {
  return (
    <div className="app">
      <main>
        <Info />
        <About />
        <Interest />
        <Footer />
      </main>
    </div>
  );
}

export default App;
