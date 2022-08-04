// import logo from './logo.svg';
import './App.css';
import Aside from './Components/Aside/Aside';
import NavBar from './Components/NavBar/NavBar'



// import Main from './Components/Main/Main';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
    <>
     <div className='bodyFlex'>
            <NavBar />
            <Aside />
     </div>
     {/* <Main /> */}
    </>
  );
}

export default App;
