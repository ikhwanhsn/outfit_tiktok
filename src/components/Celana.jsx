import { Splide, SplideSlide } from '@splidejs/react-splide';
import dataCelana from '../services/dataCelana';

const Celana = ({hide}) => {
    return ( 
        <div className="flex justify-center -mt-20">
            <Splide aria-label="My Outfit" options={{width: 320, rewind:true, pagination:false, arrows:!hide, speed:1000, rewindSpeed:dataCelana.length*400}}>
                {dataCelana.map((data, id) => (
                    <SplideSlide key={id}>
                        <img src={data.src} alt={data.alt} width={'300px'} height={'300px'} className='mx-auto'/>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
}
 
export default Celana;