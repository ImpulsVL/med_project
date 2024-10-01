import React, { useState } from 'react';
import './IntensivePage.scss';
import img1 from './pictures/1.svg';
import img2 from './pictures/2.svg';
import img3 from './pictures/3.svg';
import img4 from './pictures/4.svg';
import img5 from './pictures/5.svg';
import img1t from './pictures/1t.svg';
import img2t from './pictures/2t.svg';
import img3t from './pictures/3t.svg';
import img4t from './pictures/4t.svg';
import Header from '../../header/header';

function IntensivePage() {
    const [pads, setPads] = useState({
        day1: 0, day2: 0, day3: 0, day4: 0, day5: 0,
        night1: 0, night2: 0, night3: 0, night4: 0, night5: 0
    });
    const [tampons, setTampons] = useState({
        regular1: 0, super1: 0, superplus1: 0,
        regular2: 0, super2: 0, superplus2: 0,
        regular3: 0, super3: 0, superplus3: 0,
        regular4: 0, super4: 0, superplus4: 0
    });

    const handleInputChange = (e, type, key) => {
        const value = parseInt(e.target.value) || 0; // Убедитесь, что значение число

        if (type === 'pads') {
            setPads(prev => ({ ...prev, [key]: value }));
        } else if (type === 'tampons') {
            setTampons(prev => ({ ...prev, [key]: value }));
        }
    };

    const calculateTotal = () => {
        const padWeights = [1, 2, 3, 4, 5]; // Вес для прокладок
        const tamponWeights = {
            1: { regular: 0.5, super: 1, superplus: 1 },
            2: { regular: 1, super: 1.5, superplus: 2 },
            3: { regular: 1.5, super: 3, superplus: 6 },
            4: { regular: 4, super: 8, superplus: 12 }
        };

        let totalPads = 0;
        let totalTampons = 0;

        // Расчет общего количества для прокладок
        Object.keys(pads).forEach(key => {
            const padIndex = parseInt(key.replace(/\D/g, '')) - 1;
            const padValue = pads[key] || 0; // Убедитесь, что это число
            totalPads += padValue * padWeights[padIndex];
        });

        // Расчет общего количества для тампонов
        Object.keys(tampons).forEach(key => {
            const tamponIndex = parseInt(key.replace(/\D/g, '')); // Индекс тампона
            const type = key.replace(/\d/g, '').toLowerCase(); // Тип тампона
            const tamponValue = tampons[key] || 0; // Убедитесь, что это число
            // Проверяем, существует ли тип тампона для этого индекса
            if (tamponWeights[tamponIndex] && tamponWeights[tamponIndex][type]) {
                totalTampons += tamponValue * tamponWeights[tamponIndex][type];
            }
        });

        const total = Math.min((totalPads + totalTampons) / 80 * 100, 100); // Приведение к процентам
        return total; // Возвращение итогового значения
    };


    return (
        <div className='wrapper_intensive'>
            <div className='header-1'>
                <Header />
            </div>
            <div className="intensive_wrapper">
                <div className="intensive_block">
                    <h2 className='intensive_tanner'>Оценка интенсивности маточных кровотечений (PBAC, Hihman, Janssen)</h2>
                </div>
                <div className='tools_group'>
                    <div className='tools_content'>
                        <h2 className='header_secret'>Прокладки</h2>
                        <div className='tools_table_pads'>
                            <div className='table_pads_header'>
                                <span className='header_item_pr'>Прокладка</span>
                                <div className='header_pads'>
                                    <span className='header_item_pr'>Тип прокладки</span>
                                    <span className='header_item_pr'>Кол-во прокладок</span>
                                </div>
                            </div>
                            {[img1, img2, img3, img4, img5].map((imgSrc, index) => (
                                <div key={index} className='table_pads_row'>
                                    <div className='pads_picture'>
                                        <img src={imgSrc} className='intensive_img' alt={`Прокладка ${index + 1}`} />
                                    </div>
                                    <div className='pads_info'>
                                        <div className='pads_info_item'>
                                            <span className='info_item_span'>Дневные</span>
                                            <div className='info_item_left'>
                                                <input className='info_item_input' type='number' onChange={(e) => handleInputChange(e, 'pads', `day${index + 1}`)} />
                                            </div>
                                        </div>
                                        <div className='pads_info_item'>
                                            <span className='info_item_span'>Ночные</span>
                                            <div className='info_item_left'>
                                                <input className='info_item_input' type='number' onChange={(e) => handleInputChange(e, 'pads', `night${index + 1}`)} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='tools_content'>
                        <h2 className='header_secret'>Тампоны</h2>
                        <div className='tools_table_pads'>
                            <div className='table_pads_header'>
                                <span className='header_item_pr'>Тампон</span>
                                <div className='header_pads'>
                                    <span className='header_item_pr'>Тип тампона</span>
                                    <span className='header_item_pr'>Кол-во тампонов</span>
                                </div>
                            </div>
                            {[img1t, img2t, img3t, img4t].map((imgSrc, index) => (
                                <div key={index} className='table_pads_row'>
                                    <div className='pads_picture'>
                                        <img src={imgSrc} className='intensive_img' alt={`Тампон ${index + 1}`} />
                                    </div>
                                    <div className='pads_info'>
                                        {['regular', 'super', 'superplus'].map((type, tIndex) => (
                                            <div key={tIndex} className='pads_info_item'>
                                                <span className='info_item_span'>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
                                                <div className='info_item_left'>
                                                    <input className='info_item_input' type='number' onChange={(e) => handleInputChange(e, 'tampons', `${type}${index + 1}`)} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='tools_group_result'>
                    <div className='start_result_line'>
                        <span className='result_line_name'>Нормальные менструации</span>
                        <div className='result_line_picture'></div>
                        <span className='result_line_number'>0 мл</span>
                    </div>
                    <div className='result_line_bg'>
                        <div className='result_line_progress' style={{ width: `${calculateTotal()}%` }} />
                    </div>
                    <div className='end_result_line'>
                        <span className='result_line_name'>Обильные менструации</span>
                        <div className='result_line_picture'></div>
                        <span className='result_line_number'>80 мл</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IntensivePage;