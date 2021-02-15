import './App.css';
import Header from "./Components/Header"
import Footer from './Components/Footer';
import FilterAndCard  from "./Components/FilterAndCard"
function App() {

  return (
    <div className="container-fluid bgDiv pt-4">
    <Header />
    <FilterAndCard />
    <Footer />
     </div>
  );
}
export default App;