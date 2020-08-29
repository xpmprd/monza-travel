import React from 'react';
import Mero from "../components/Mero";
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';

export default function ComingSoon() {
    return <Mero>
        <Banner subtitle="page not found">
            <Link to='/' className='btn-primary'>Coming up soon...</Link>
        </Banner>
    </Mero>
}