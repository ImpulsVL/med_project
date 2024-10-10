import React, {useState} from 'react';
import './VteoPage.scss';
import Header from '../../header/header';

function VteoPage() {
    return (
        <div className='wrapper_imt'>
            <div className='header-1'>
                <Header/>
            </div>
            <div className="imt_wrapper">
                <div className="container">
                    <div className="imt_block">
                        <h2 className='imt_tanner'>Профилактика ВТЭО при наличии тромбофилии и/или ВТЭО во время беременности и после родов</h2>
                    </div>
                    <div className="table">
                        <div className='row-item'>
                            <p className='column-item-header'>Степень риска</p>
                            <p className='column-item-header'>Анамнез</p>
                            <p className='column-item-header'>Способ профилактики</p></div>
                        <div className='row-item'>
                            <p className='column-item'>Очень высокий</p>
                            <div className='column-item'>
                                <ul>
                                    <li>Перенесенное ранее ВТЭО на фоне длительного приема оральных антикоагулянтов</li>
                                    <li>Дефицит антитромбина-III</li>
                                    <li>АФС с ВТЭО в анамнезе</li>
                                </ul>
                            </div>
                            <div className='column-item'>
                                <ul>
                                    <li>Во время беременности назначить НМГ в терапевтических дозах</li>
                                    <li>В послеродовом периоде продолжить применение НМГ в терапевтических дозах по
                                        крайней мере на
                                        протяжении 6
                                        недель или до возобновления терапии оральными антикоагулянтами
                                    </li>
                                    <li>Женщины этой группы обязательно должны быть консультированы специалистами,
                                        изучающими проблемы
                                        гемостаза
                                        во
                                        время беременности
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='row-item'>
                            <p className='column-item'>Высокий</p>
                            <div className='column-item'>
                                <ul>
                                    <li>ВТЭО в анамнезе (за исключением одного случая ВТЭО, ассоциированного с большим
                                        оперативным
                                        вмешательством)
                                    </li>
                                </ul>
                            </div>
                            <div className='column-item'>
                                <ul>
                                    <li>Во время беременности и в течение 6 недель после родов назначить НМГ в
                                        профилактических дозах
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='row-item'>
                            <p className='column-item'>Умеренный</p>
                            <div className='column-item'>
                                <ul>
                                    <li>Бессимптомная тромбофилия высокого риска</li>
                                    <li>Однократное ВТЭО в анамнезе, ассоциированное с большим оперативным
                                        вмешательством, без
                                        тромбофилии,
                                        семейного анамнеза или других факторов риска
                                    </li>
                                </ul>
                            </div>
                            <div className='column-item'>
                                <ul>
                                    <li>Во время беременности и в течение 6 недель после родов назначить НМГ в
                                        профилактических дозах
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='row-item'>
                            <p className='column-item'>Низкий</p>
                            <div className='column-item'>
                                <ul>
                                    <li>Бессимптомная тромбофилия низкого риска</li>
                                </ul>
                            </div>
                            <div className='column-item'>
                                <ul>
                                    <li>Учитывать как фактор риска при индивидуальной оценке риска ВТЭО во время
                                        беременности и в
                                        послеродовом
                                        периоде
                                    </li>
                                    <li>Во время беременности не назначать рутинную профилактику НМГ</li>
                                    <li>При наличии других факторов риска в течение 10 дней после родов (или 6 недель
                                        при наличии
                                        семейного
                                        анамнеза) применять НМГ в профилактических дозах
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VteoPage;