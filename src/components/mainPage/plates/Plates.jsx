import React, { useEffect, useState, useRef } from 'react'
import './Plates.scss'

export const Plates = () => {
    return (
        <div className='plates_wrapper'>
            <a className='diagnosis_plate' href='/diagnosis'>
                <div className='force_diagnosis_plate'></div>
                <div className='text_diagnosis_plate'>Популярные диагнозы</div>
                <div className='count_diagnosis_plate'>15</div>
            </a>
            <a className='diagnosis_plate' href='#'>
                <div className='force_diagnosis_plate'></div>
                <div className='text_diagnosis_plate'>Урология</div>
                <div className='count_diagnosis_plate'>28</div>
            </a>
            <a className='diagnosis_plate' href='#'>
                <div className='force_diagnosis_plate'></div>
                <div className='text_diagnosis_plate'>Андрология</div>
                <div className='count_diagnosis_plate'>17</div>
            </a>
            <a className='diagnosis_plate' href='#'>
                <div className='force_diagnosis_plate'></div>
                <div className='text_diagnosis_plate'>Гинекология</div>
                <div className='count_diagnosis_plate'>391</div>
            </a>
            <a className='diagnosis_plate' href='#'>
                <div className='force_diagnosis_plate'></div>
                <div className='text_diagnosis_plate'>Дерматология</div>
                <div className='count_diagnosis_plate'>57</div>
            </a>
            <a className='diagnosis_plate' href='#'>
                <div className='force_diagnosis_plate'></div>
                <div className='text_diagnosis_plate'>Педиатрия</div>
                <div className='count_diagnosis_plate'>41</div>
            </a>
            <a className='diagnosis_plate' href='#'>
                <div className='force_diagnosis_plate'></div>
                <div className='text_diagnosis_plate'>Терапия</div>
                <div className='count_diagnosis_plate'>85</div>
            </a>
            <a className='diagnosis_plate' href='#'>
                <div className='force_diagnosis_plate'></div>
                <div className='text_diagnosis_plate'>Эндокринология</div>
                <div className='count_diagnosis_plate'>111</div>
            </a>
            <a className='diagnosis_plate' href='#'>
                <div className='force_diagnosis_plate'></div>
                <div className='text_diagnosis_plate'>Акушерство</div>
                <div className='count_diagnosis_plate'>167</div>
            </a>
        </div>
      );
    };

export default Plates