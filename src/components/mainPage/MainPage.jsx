import React from 'react';
import './MainPage.scss';
import SearchItem from "./searchItem/SearchItem";
import Plates from "./plates/Plates";
import { useNavigate } from 'react-router-dom';
import Header from '../header/header';

function MainPage() {
    return (
        <div className='wrapper'>
            <div className='header-1'>
                <Header />
            </div>
            <div className="main-container">
                <div className='text_main'>
                    Поддержка принятия решений в медицинской практике
                </div>
                <div className='SearchItem'>
                    <SearchItem/>
                </div>
                <div className='Plates'>
                    <Plates />
                </div>
            </div>
        </div>
    );
}

export default MainPage;