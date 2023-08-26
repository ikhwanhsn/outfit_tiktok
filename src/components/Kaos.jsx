import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import dataKaos from '../services/dataKaos';

const Kaos = ({hide}) => {
    return ( 
        <div className="flex justify-center mb-2 text-white -mt-14">
            <Splide  aria-label="My Outfit" options={{width: 270, rewind:true, pagination:false, arrows:!hide, speed:1000, rewindSpeed:dataKaos.length*400}}>
                {dataKaos.map((data, id) => (
                    <SplideSlide key={id}>
                        <img src={data.src} alt={data.alt} width={'200px'} height={'200px'} className='mx-auto'/>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
}
 
export default Kaos;