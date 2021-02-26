import './App.css';
import Footer from './component/footer/footer';
import Login from './component/login/Login';
import Main from './component/main/Main';
import Navigation from './component/navbar/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Main/>
      <Footer></Footer>
    </div>
  );
}

export default App;
