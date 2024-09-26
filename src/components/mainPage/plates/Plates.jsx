import React from 'react';
import { Link } from 'react-router-dom';
import './Plates.scss';

export const Plates = () => {
    return (
        <div className='plates_wrapper'>
            <Link className='diagnosis_plate' to='/diagnosis'>
                <div className='force_diagnosis_plate'></div>
                <div className='text_diagnosis_plate'>Популярные диагнозы</div>
                <div className='count_diagnosis_plate'>15</div>
            </Link>
            <Link className='diagnosis_plate' to='#'>
                <div className='force_diagnosis_plate'></div>
                <div className='text_diagnosis_plate'>Урология</div>
                <div className='count_diagnosis_plate'>28</div>
            </Link>
            <Link className='diagnosis_plate' to='#'>
                <div className='force_diagnosis_plate'></div>
                <div className='text_diagnosis_plate'>Андрология</div>
                <div className='count_diagnosis_plate'>17</div>
            </Link>
            <Link className='diagnosis_plate' to='#'>
                <div className='force_diagnosis_plate'></div>
                <div className='text_diagnosis_plate'>Гинекология</div>
                <div className='count_diagnosis_plate'>391</div>
            </Link>
            <Link className='diagnosis_plate' to='#'>
                <div className='force_diagnosis_plate'></div>
                <div className='text_diagnosis_plate'>Дерматология</div>
                <div className='count_diagnosis_plate'>57</div>
            </Link>
            <Link className='diagnosis_plate' to='#'>
                <div className='force_diagnosis_plate'></div>
                <div className='text_diagnosis_plate'>Педиатрия</div>
                <div className='count_diagnosis_plate'>41</div>
            </Link>
            <Link className='diagnosis_plate' to='#'>
                <div className='force_diagnosis_plate'></div>
                <div className='text_diagnosis_plate'>Терапия</div>
                <div className='count_diagnosis_plate'>85</div>
            </Link>
            <Link className='diagnosis_plate' to='#'>
                <div className='force_diagnosis_plate'></div>
                <div className='text_diagnosis_plate'>Эндокринология</div>
                <div className='count_diagnosis_plate'>111</div>
            </Link>
            <Link className='diagnosis_plate' to='#'>
                <div className='force_diagnosis_plate'></div>
                <div className='text_diagnosis_plate'>Акушерство</div>
                <div className='count_diagnosis_plate'>167</div>
            </Link>
        </div>
    );
};

export default Plates;