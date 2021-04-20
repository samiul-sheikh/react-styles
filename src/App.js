import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import MainContent from './Components/MainContent/MainContent';

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Home></Home>
            <MainContent></MainContent>
            <Footer></Footer>
        </div>
    );
}

export default App;
