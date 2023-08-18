import '@splidejs/react-splide/css';
import Kaos from './components/Kaos';
import Topi from './components/Topi';
import Celana from './components/Celana';
import Sepatu from './components/Sepatu';

function App() {

  return (
    <div className="flex flex-col items-center w-full h-screen bg-gray-500">
      <Topi/>
      <Kaos/>
      <Celana/>
      <Sepatu/>
    </div>
  )
}

export default App
