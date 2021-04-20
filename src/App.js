import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import MainContent from './Components/MainContent/MainContent';
import Homepage from './Components/Homepage/Homepage';

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Home></Home>
            <Footer></Footer>
            <MainContent></MainContent>
            <Homepage></Homepage>
        </div>
    );
}

export default App;
