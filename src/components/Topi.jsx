import { Splide, SplideSlide } from '@splidejs/react-splide';
import dataTopi from '../services/dataTopi';

const Topi = () => {
    return ( 
        <div className="flex justify-center mb-2">
            <Splide aria-label="My Outfit" options={{width: 200, rewind:true, pagination:false}}>
                {dataTopi.map((data, id) => (
                    <SplideSlide key={id}>
                        <img src={data.src} alt={data.alt} width={'150px'} height={'150px'} className='mx-auto'/>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
}
 
export default Topi;