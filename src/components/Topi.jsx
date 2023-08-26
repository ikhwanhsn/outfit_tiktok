import { Splide, SplideSlide } from '@splidejs/react-splide';
import dataTopi from '../services/dataTopi';

const Topi = ({hide, random}) => {
    return ( 
        <div className="flex justify-center mt-16 mb-2">
            <Splide aria-label="My Outfit" options={{width: 170, rewind:true, pagination:false, arrows:!hide, speed:1000, rewindSpeed:dataTopi.length*400, autoplay: random, interval:300}}>
                {dataTopi.map((data, id) => (
                    <SplideSlide key={id}>
                        <img src={data.src} alt={data.alt} width={'100px'} height={'100px'} className='mx-auto'/>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
}
 
export default Topi;