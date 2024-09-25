import React from 'react';
import './FigoPage.scss';
import img1 from './pictures/figo.png';
import Header from '../../header/header';

function FigoPage() {
    return (
        <div className='wrapper_figo'>
            <div className='header-1'>
                <Header />
            </div>
            <div className="figo_wrapper">
                <div className="figo_block">
                    <h2 className='figo_tanner'>Миома матки: классификация FIG0</h2>
                </div>
                <div className='pictures_block'>
                    <div className='figo_picture'>
                        <img src={img1} className='figo_img'></img>
                    </div>
                    <h2 className='figo_lead'>Субмукозные миомы - Lsm</h2>
                    <ul className='figo_content_list'>
                        <li className='figo_content_item'>
                            <span>О тип</span>
                            " – узел на ножке, полностью находится в полости матки"
                        </li>
                        <li className='figo_content_item'>
                            <span>1 тип</span>
                            " – меньше 50% узла расположено интрамурально"
                        </li>
                        <li className='figo_content_item'>
                            <span>2 тип</span>
                            " – ≥ 50% узла расположено интрамурально"
                        </li>
                        <li className='figo_content_item'>
                            <span>3 тип</span>
                            " – 100% узла расположено интрамурально, но есть контакт с эндометрием"
                        </li>
                    </ul>
                    <p className='figo_text'>
                        *3 тип отнесен к субмукозным миомам в соответствии с обновленной классификацией 2018 г
                    </p>
                    <h2 className='figo_lead'>Другие миомы - Lo</h2>
                    <ul className='figo_content_list'>
                        <li className='figo_content_item'>
                            <span>4 тип</span>
                            " – интрамуральный узел"
                        </li>
                        <li className='figo_content_item'>
                            <span>5 тип</span>
                            " – субсерозный узел на ≥ 50 % расположен интрамурально"
                        </li>
                        <li className='figo_content_item'>
                            <span>6 тип</span>
                            " – субсерозный узел на меньше 50 % расположен интрамурально"
                        </li>
                        <li className='figo_content_item'>
                            <span>7 тип</span>
                            " – субсерозный узел на ножке"
                        </li>
                        <li className='figo_content_item'>
                            <span>8 тип</span>
                            " – другие типы узлов (шеечное расположение или паразитарные образования)"
                        </li>
                    </ul>
                    <h2 className='figo_lead'>Гибридные миомы</h2>
                    <p className='figo_text'>
                        (контактируют и с эндометрием, и с серозной оболочкой, цифры указываются через дефис)
                    </p>
                    <ul className='figo_content_list'>
                        <li className='figo_content_item'>
                            <span>2-5 тип</span>
                            " – узел расположен субмукозно и субсерозно"
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default FigoPage;