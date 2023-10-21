import './App.css';
import ImageGenerator from './Components/ImageGenerator/ImageGenerator';

function App() {
console.log(process.env)
  const apiKey=process.env.REACT_APP_API_KEY
  
  return (
    <div>
      <ImageGenerator api={apiKey}/>
    </div>
  );
}

export default App;
