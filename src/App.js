import logo from './logo.svg';
import Navbar from './Components/Navbar';
import Main from './Components/Main'
import cardData from './Components/cardData'
import './App.css';

function App() {

  const data=cardData.map(item=>{
    return <Main
    key={item.id}
    {...item}
    />
  })
  return (
    <div className="App">
      <Navbar/>
      {data}
    </div>
  );
}

export default App;
