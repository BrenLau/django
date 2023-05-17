import './App.css';
import CreateEmail from './components/CreateEmail/CreateEmail';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

function App() {

  return (
    <div className="App">
      <img className='background' src={images['image1.jpg']}></img>
      <CreateEmail></CreateEmail>

    </div>
  );
}

export default App;
