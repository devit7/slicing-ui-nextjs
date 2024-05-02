import {FC} from 'react';
import Image  from 'next/image';

// dalam membuat component, kita bisa membuat sebuah 
// interface untuk menentukan tipe data yang akan digunakan
interface BannerPropsType {
    title: string;
    subtitle: string;
}

const Banner:FC<BannerPropsType> = (props) => {
    const {title, subtitle} = props;
    return ( 
        <div className='h-[735px] flex flex-col items-center justify-center w-screen bg-red-500'>
            {title}
            <br />
            {subtitle}

            <Image
                src=''
                alt='gk keload'
            />
        </div>
     );
}
 
export default Banner;