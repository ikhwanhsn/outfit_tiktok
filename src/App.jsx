import '@splidejs/react-splide/css';
import Kaos from './components/Kaos';
import Topi from './components/Topi';
import Celana from './components/Celana';
import Sepatu from './components/Sepatu';
import {FcBusinessman, FcBusinesswoman} from 'react-icons/fc'
import {TbEye} from 'react-icons/tb'
import {GiPerspectiveDiceSixFacesRandom} from 'react-icons/gi'
import { useState } from 'react';

function App() {
  const [hide, setHide] = useState(false);
  const [random, setRandom] = useState(false);
  const [woman, setWoman] = useState(false);

  const handleHide = () => {
    setHide(true);
    setTimeout(() => {
      setHide(false)
    },3000)
  }

  return (
    <div className="flex flex-col items-center w-full h-screen bg-gray-500">
      {!hide && <button className='absolute flex items-center gap-2 px-2 py-2 rounded-md top-3 left-3 bg-slate-400' onClick={() => setWoman(!woman)}>
        {!woman? <FcBusinessman className='scale-[1.7]'/> : <FcBusinesswoman className='scale-[1.7]'/>}
      </button>}
      {!hide && <TbEye className='absolute scale-[2] top-5 right-5 cursor-pointer' onClick={handleHide}/>}
      {!hide && <button className="absolute flex items-center gap-2 px-2 py-1 rounded-md cursor-pointer bg-slate-400 top-3 right-14" onClick={() => setRandom(true)}>
        <GiPerspectiveDiceSixFacesRandom className='scale-150'/>
        <p>Random</p>
      </button>}
      <Topi hide={hide} random={random}/>
      <Kaos hide={hide}/>
      <Celana hide={hide}/>
      <Sepatu hide={hide}/>
    </div>
  )
}

export default App
