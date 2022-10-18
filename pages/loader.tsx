import { NextPage } from 'next';
import { useEffect } from 'react';
import ReactLoading from 'react-loading';

const Loader: NextPage = () => {

    useEffect(() => {

    },[])
    return(
        <div className='flex justify-center mx-auto my-64 max-w-2xl'>
            <ReactLoading type={"bubbles"} color={"#000"} height={20} width={50} />
        </div>
    )
}

export default Loader