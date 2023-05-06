import logo from './logo.svg';
import './App.css';
import CustomButton from './co/CustomButton';
import Calendar from './co/Calendar';
function App() {
  return (
    <div className="App">
      <CustomButton a={'wordd'}/>
      <CustomButton a={'wordd'}/>
      <CustomButton a={"why"}/>
      <CustomButton a={"why"}/>
      <CustomButton a={'wordd'}/>
      <Calendar />
    </div>
  );
}

export default App;
