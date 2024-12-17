import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CountBlock.scss';

export const CountBlock = () => {
    return (
        <div className='count-wrapper'>
            <div className='count-block'>
                Количество посещений: 1
            </div>
        </div>
    );
}

export default CountBlock;