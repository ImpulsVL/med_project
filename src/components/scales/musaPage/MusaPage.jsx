import React from 'react';
import './MusaPage.scss';
import img1 from './pictures/1.svg';
import img2 from './pictures/2.svg';
import img3 from './pictures/3.svg';
import img4 from './pictures/4.svg';
import img5 from './pictures/5.svg';
import img6 from './pictures/6.svg';
import img10 from './pictures/10.svg';
import img8 from './pictures/8.svg';
import img9 from './pictures/9.svg';
import Header from '../../header/header';

function MusaPage() {
    return (
        <div className='wrapper_musa'>
            <div className='header-1'>
                <Header />
            </div>
            <div className="musa_wrapper">
                <div className="musa_block">
                    <h2 className='musa_header'>Ультразвуковые признаки аденомиоза, MUSA 2022</h2>
                </div>

                {/* Прямые признаки */}
                <div className='pictures_block_musa'>
                    <h3 className='musa_lead'>Прямые признаки</h3>
                    <div className='musa_item'>
                        <img src={img2} className='musa_img' />
                        <span>Кисты миометрия</span>
                    </div>
                    <div className='musa_item'>
                        <img src={img3} className='musa_img' />
                        <span>Кисты Гиперэхогенные островки (фиброзные включения в миометрии)</span>
                    </div>
                    <div className='musa_item'>
                        <img src={img5} className='musa_img' />
                        <span>Субэндометриальные линии</span>
                    </div>
                </div>

                {/* Косвенные признаки */}
                <div className='pictures_block_musa'>
                    <h3 className='musa_lead'>Косвенные признаки</h3>
                    <div className='musa_item'>
                        <img src={img1} className='musa_img' />
                        <span>Асимметричное утолщение стенок матки</span>
                    </div>
                    <div className='musa_item'>
                        <img src={img4} className='musa_img' />
                        <span>Веерообразные тени</span>
                    </div>
                    <div className='musa_item'>
                        <img src={img6} className='musa_img' />
                        <span>Перпендикулярные эндометрию сосуды, пересекающие очаг поражения</span>
                    </div>
                    <div className='musa_item'>
                        <img src={img8} className='musa_img' />
                        <span>Прерванная переходная зона</span>
                    </div>
                    <div className='musa_item'>
                        <img src={img9} className='musa_img' />
                        <span>Нерегулярная переходная зона</span>
                    </div>
                    <div className='musa_item'>
                        <img src={img10} className='musa_img' />
                        <span>Шаровидная матка</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MusaPage;