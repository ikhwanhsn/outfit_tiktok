import { Splide, SplideSlide } from '@splidejs/react-splide';
import dataSepatu from '../services/dataSepatu';

const Sepatu = ({hide}) => {
    return ( 
        <div className="flex justify-center -mt-14">
            <Splide aria-label="My Outfit" options={{width: 180, rewind:true, pagination:false, arrows:!hide, speed:1000, rewindSpeed:dataSepatu.length*400}}>
                {dataSepatu.map((data, id) => (
                    <SplideSlide key={id}>
                        <img src={data.src} alt={data.alt} width={'110px'} height={'110px'} className='mx-auto'/>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
}
 
export default Sepatu;