import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import dataKaos from '../services/dataKaos';

const Kaos = () => {
    return ( 
        <div className="flex justify-center mb-2 -mt-20 text-white">
            <Splide  aria-label="My Outfit" options={{width: 320, rewind:true, pagination:false}}>
                {dataKaos.map((data, id) => (
                    <SplideSlide key={id}>
                        <img src={data.src} alt={data.alt} width={'250px'} height={'250px'} className='mx-auto'/>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
}
 
export default Kaos;