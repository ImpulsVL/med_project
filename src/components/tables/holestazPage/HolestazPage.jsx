import React, { useState } from 'react';
import './HolestazPage.scss';
import Header from '../../header/header';

function HolestazPage() {
    return (
        <div className='wrapper_imt'>
            <div className='header-1'>
                <Header />
            </div>
            <div className="imt_wrapper">
                <div className="imt_block">
                    <h2 className='imt_tanner'>Дифференциальная диагностика внутрипеченочного холестаза беременных</h2>
                </div>
                <div className='pictures_block'>
                    <div className='row-item'><p className='column-item'>Симптомы</p>
                        <p className='column-item'>
                            ВХБ</p>
                        <p className='column-item'>
                            Острая жировая печень беременных</p>
                        <p className='column-item'>
                            HELLP-синдром,
                            преэклампсия</p>
                        <p className='column-item'>Острый вирусный гепатит</p></div>
                    <div className='row-item'><p className='column-item'> Срок беременности</p>
                        <p className='column-item'>
                            2-3 триместр</p>
                        <p className='column-item'>
                            3 триместр</p>
                        <p className='column-item'>2-3 триместр, после родов</p>
                        <p className='column-item'>любой срок</p></div>
                    <div className='row-item'><p className='column-item'> Наследственная отягощенность</p>
                        <p className='column-item'>
                            Часто</p>
                        <p className='column-item'>
                            Нет</p>
                        <p className='column-item'>Редко</p>
                        <p className='column-item'>Нет</p></div>
                    <div className='row-item'><p className='column-item'> Наличие преэклампсии</p>
                        <p className='column-item'>
                            Нет</p>
                        <p className='column-item'>
                            50%</p>
                        <p className='column-item'>50%</p>
                        <p className='column-item'>
                            Нет</p></div>
                    <div className='row-item'><p className='column-item'> Клинические проявления</p>
                        <p className='column-item'>
                            Кожный зуд<br></br>
                            Экскориации<br></br>
                            Желтуха<br></br>
                            Редко геморрагический синдром<br></br></p>
                        <p className='column-item'>
                            Тошнота<br></br>
                            Рвота<br></br>
                            Боль в животе (50% в эпигастрии)<br></br>
                            Слабость<br></br>
                            Отсутствие аппетита<br></br>
                            Желтуха<br></br>
                            Признаки энцефалопатии<br></br></p>
                        <p className='column-item'>Боль в животе(в эпигастрии, правом подреберье)
                            Тошнота<br></br>
                            Рвота<br></br>
                            Слабость<br></br>
                            Головная боль<br></br>
                            Желтуха<br></br>
                            Зрительные нарушения<br></br>
                            Возможно признаки отека головного мозга<br></br></p>
                        <p className='column-item'>
                            Слабость<br></br>
                            Лихорадка<br></br>
                            Боль в суставах<br></br>
                            Интоксикация<br></br>
                            Желтуха<br></br>
                            Признаки энцефалопатии<br></br>
                            Геморрагический синдром<br></br></p></div>
                    <div className='row-item'><p className='column-item'>Данные УЗИ органов брюшной полости</p>
                        <p className='column-item'>Норма</p>
                        <p className='column-item'>Жировая инфильтрация</p>
                        <p className='column-item'>Подкапсульные гематомы печени</p>
                        <p className='column-item'>Норма, снижение эхогенности ткани печени</p></div>
                    <div className='row-item'><p className='column-item'>Лабораторные признаки Кумбс-отрицательной гемолитической анемии (снижение уровня гемоглобина, шизоцитоз, повышенный уровень ЛДГ, отрицательные пробы Кумбса)</p>
                        <p className='column-item'>Нет</p>
                        <p className='column-item'>Нет</p>
                        <p className='column-item'>Да</p>
                        <p className='column-item'>Нет</p></div>
                    <div className='row-item'><p className='column-item'>Тромбоцитопения</p>
                        <p className='column-item'>Нет</p>
                        <p className='column-item'>Нет</p>
                        <p className='column-item'>Да</p>
                        <p className='column-item'>
                            Может быть</p></div>
                    <div className='row-item'><p className='column-item'>Повышение уровня желчных кислот в крови</p>
                        <p className='column-item'>Всегда</p>
                        <p className='column-item'>Нет</p>
                        <p className='column-item'>Нет</p>
                        <p className='column-item'>
                            Может быть</p></div>
                    <div className='row-item'><p className='column-item'>Синдром цитолиза (повышение уровня АЛТ, АСТ)</p>
                        <p className='column-item'>Может быть разной степени выраженности</p>
                        <p className='column-item'>Может быть разной степени выраженности</p>
                        <p className='column-item'>Может быть разной степени выраженности</p>
                        <p className='column-item'>
                            Всегда более 10N</p></div>
                    <div className='row-item'><p className='column-item'>Другие биохимические изменения при синдроме холестаза (повышение уровня ГТП, ЩФ, общего билирубина)</p>
                        <p className='column-item'>Может быть</p>
                        <p className='column-item'>Может быть</p>
                        <p className='column-item'>Может быть</p>
                        <p className='column-item'>
                            Может быть</p></div>
                    <div className='row-item'><p className='column-item'>Острая печеночная недостаточность</p>
                        <p className='column-item'>Нет</p>
                        <p className='column-item'>Редко</p>
                        <p className='column-item'>Да</p>
                        <p className='column-item'>
                            Может быть</p></div>
                    <div className='row-item'><p className='column-item'>Полиорганные нарушения</p>
                        <p className='column-item'>Нет</p>
                        <p className='column-item'>Может быть</p>
                        <p className='column-item'>Может быть</p>
                        <p className='column-item'>
                            Может быть</p></div>
                    <div className='row-item'><p className='column-item'>Маркеры вирусных гепатитов</p>
                        <p className='column-item'>Отрицательные</p>
                        <p className='column-item'>Отрицательные</p>
                        <p className='column-item'>Отрицательные</p>
                        <p className='column-item'>
                            Положительные (HBsAg, anti-HBcore IgM, anti-HCV, anti-HAV IgM, anti-HEV IgM)</p></div>
                    <div className='row-item'><p className='column-item'>Материнская смертность (%)</p>
                        <p className='column-item'>0</p>
                        <p className='column-item'>7-18</p>
                        <p className='column-item'>1-25</p>
                        <p className='column-item'>
                            10-20</p></div>
                    <div className='row-item'><p className='column-item'>Перинатальная смертность (%)</p>
                        <p className='column-item'>0,4-1,4</p>
                        <p className='column-item'>9-23</p>
                        <p className='column-item'>11</p>
                        <p className='column-item'>
                            0,5-4</p></div>
                    <div className='row-item'><p className='column-item'>Рецидив при последующих беременностях (%)</p>
                        <p className='column-item'>45-70</p>
                        <p className='column-item'>20-70</p>
                        <p className='column-item'>4-19</p>
                        <p className='column-item'>
                            Нет</p></div>
                </div>
            </div>
        </div>
    );
}

export default HolestazPage;