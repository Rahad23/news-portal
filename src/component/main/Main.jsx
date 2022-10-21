import React from 'react';
import { Outlet } from 'react-router-dom';

import LeftComponent from '../shared/leftComponent/LeftComponent';
import Right from '../shared/rightComponent/Right';
import Header from './../shared/header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='grid container mx-auto mt-5' style={{gridTemplateColumns:'1.3fr 4fr 2fr'}}>
               <div>
                <Right></Right>
                </div>
               <div>
               <Outlet></Outlet>
               </div>
                <div>
                    <LeftComponent></LeftComponent>
                </div>
            </div>
        </div>
    );
};

export default Main;