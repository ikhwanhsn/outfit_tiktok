import { Splide, SplideSlide } from '@splidejs/react-splide';
import dataCelana from '../services/dataCelana';

const Celana = () => {
    return ( 
        <div className="flex justify-center -mt-24">
            <Splide aria-label="My Outfit" options={{width: 370, rewind:true, pagination:false}}>
                {dataCelana.map((data, id) => (
                    <SplideSlide key={id}>
                        <img src={data.src} alt={data.alt} width={'350  px'} height={'350px'} className='mx-auto'/>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
}
 
export default Celana;