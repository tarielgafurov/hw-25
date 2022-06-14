import { useSelector } from 'react-redux';
import './App.css';
import SecondComponent from './components/SecondComponent';
import User from './components/user';

function App() {
  const a = useSelector(state=>state.user.isValid)
  const setSecondComponent = useSelector(state => state.user.secondComponent)

  return (
    <div className="App">
      {a && <User/>}
      {setSecondComponent && <SecondComponent/>}
    </div>
  );
}

export default App;
