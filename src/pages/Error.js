import React from 'react';
import Mero from "../components/Mero";
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';

export default function Error() {
    return <Mero>
        <Banner title='404' subtitle="page not found">
            <Link to='/' className='btn-primary'>Return Home</Link>
        </Banner>
    </Mero>
}