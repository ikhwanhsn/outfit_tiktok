import { Splide, SplideSlide } from '@splidejs/react-splide';
import dataSepatu from '../services/dataSepatu';

const Sepatu = () => {
    return ( 
        <div className="flex justify-center -mt-16">
            <Splide aria-label="My Outfit" options={{width: 200, rewind:true, pagination:false}}>
                {dataSepatu.map((data, id) => (
                    <SplideSlide key={id}>
                        <img src={data.src} alt={data.alt} width={'150px'} height={'150px'} className='mx-auto'/>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
}
 
export default Sepatu;