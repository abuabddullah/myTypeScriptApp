import './App.css';
import DeclareTypes4Props from './components/DeclareTypes4Props';
import DeclareTypes4UseState from './components/DeclareTypes4UseState';
import DeclareTypes4Events from './components/DeclareTypes4Events';
import AllTutorial from './components/AllTutorial';
import TsxToDoApp from './components/TsxToDoApp';

// let arrOfObj = [{name:"Asif", age:20}, {name:"Khan", age:30}]

function App() {
  return (
    <div className="">
      <h1>Welcom to REACT-TYPESCRIPT project</h1>

      {/* <AllTutorial /> */}
      <TsxToDoApp />

    </div>
  );
}

export default App;
