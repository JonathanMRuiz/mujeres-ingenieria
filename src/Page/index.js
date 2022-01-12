import IndexNavbar from '../Components/IndexNavbar';
import Mision from '../Components/Mision';
import Activities from '../Components/Activities';
import Home from '../Components/Home';
import'./index.css'
import History from '../Components/History';
import UsPage from '../Components/UsPage';
import Footer from '../Components/Footer';


const Index = () => {
    return (
        <div>
            <IndexNavbar/>
        <div className="container">
            <Home/>
            <Mision/>
            <Activities/>
            <UsPage/>
            <History/>
            <Footer/>
            
        </div>
        </div>
    )
}

export default Index;
