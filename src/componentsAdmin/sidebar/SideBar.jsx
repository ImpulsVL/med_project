import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.scss';

export const SideBar = () => {
    return (
        <div className='sidebar'>
            <div className='header-sidebar'>Специализации</div>
            <div className='diagnosis-components'>
                <div className='diagnosis-item'>
                    Андрология
                </div>
                <div className='diagnosis-item'>
                    Андрология
                </div>
                <div className='diagnosis-item'>
                    Андрология
                </div>
                <div className='diagnosis-item'>
                    Андрология
                </div>
                <div className='diagnosis-item'>
                    Андрология
                </div>
                <div className='diagnosis-item'>
                    Андрология
                </div>
                <div className='diagnosis-item'>
                    Андрология
                </div>
                <div className='diagnosis-item'>
                    Андрология
                </div>
            </div>
        </div>
    );
}

export default SideBar;