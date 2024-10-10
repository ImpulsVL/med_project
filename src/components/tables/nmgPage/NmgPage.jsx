import React, { useState } from 'react';
import './NmgPage.scss';
import Header from '../../header/header';

function NmgPage() {
    return (
        <div className='wrapper_imt'>
            <div className='header-1'>
                <Header />
            </div>
            <div className="imt_wrapper">
                <div className="imt_block">
                    <h2 className='imt_tanner'>Дозы НМГ для профилактики ВТЭО во время беременности и после родов</h2>
                </div>
                <div className='pictures_block'>
                    <div className='row-item'><p className='column-item'>Масса тела, кг</p>
                        <p className='column-item'>
                            Эноксапарины</p>
                        <p className='column-item'>Далтепарин</p>
                        <p className='column-item'>Надропарин</p></div>
                    <div className='row-item'><p className='column-item'> Профилактические дозы**<br></br></p>
                        <p className='column-item'></p>
                        <p className='column-item'></p>
                        <p className='column-item'></p>
                    </div>
                    <div className='row-item'><p className='column-item'> меньше 50 <br></br></p>
                        <p className='column-item'>
                            20 мг ежедневно</p>
                        <p className='column-item'>
                            2500 ЕД ежедневно</p>
                        <p className='column-item'>2850 МЕ ежедневно</p>
                    </div>
                    <div className='row-item'><p className='column-item'> 50—90 <br></br></p>
                        <p className='column-item'>
                            40 мг ежедневно</p>
                        <p className='column-item'>
                            5000 ЕД ежедневно</p>
                        <p className='column-item'>5700 МЕ ежедневно</p>
                    </div>
                    <div className='row-item'><p className='column-item'> 91—130 <br></br></p>
                        <p className='column-item'>
                            60 мг ежедневно*</p>
                        <p className='column-item'>
                            7500 ЕД ежедневно*</p>
                        <p className='column-item'>
                            7600 МЕ ежедневно</p>
                    </div>
                    <div className='row-item'><p className='column-item'> 131—170 <br></br></p>
                        <p className='column-item'>
                            80 мг ежедневно*</p>
                        <p className='column-item'>
                            10000 ЕД ежедневно*</p>
                        <p className='column-item'>
                            9500 МЕ ежедневно</p>
                    </div>
                    <div className='row-item'><p className='column-item'> больше 170 <br></br></p>
                        <p className='column-item'>
                            0,6 мг/кг/сут*</p>
                        <p className='column-item'>
                            75 ЕД/кг/сут*</p>
                        <p className='column-item'>
                            86 ЕД/кг/сут</p>
                    </div>
                    <div className='row-item'><p className='column-item'> Высокая профилактическая (промежуточная) доза при массе тела 50—90 кг <br></br></p>
                        <p className='column-item'>
                            40 мг каждые 12ч</p>
                        <p className='column-item'>
                            5000 ЕД каждые 12 ч</p>
                        <p className='column-item'>
                            5700 МЕ каждые 12 ч</p>
                    </div>
                    <div className='row-item'><p className='column-item'>Терапевтическая доза***<br></br></p>
                        <p className='column-item'>
                            1 мг/кг каждые 12 ч до родов; 1,5 мг/кг ежедневно после родов</p>
                        <p className='column-item'>
                            100 ЕД/кг каждые 12 ч или 200 ЕД/кг ежедневно после родов</p>
                        <p className='column-item'>
                            86 ЕД/кг каждые 12 ч</p>
                    </div>

                </div>
                <div className="pictures_block">
                    <p>Примечание. * — доза может быть разделена на две; ** — если клиренс креатинина менее 30 мл/мин, следует применять более низкие дозы эноксапарина и далтепарина; *** — при дефиците антитромбина могут потребоваться более высокие дозы НМГ (скорректированные по массе тела: 75 или 100% от терапевтической дозы) исходя из уровней анти-Ха-активности.</p>
                </div>
            </div>
        </div>
    );
}

export default NmgPage;