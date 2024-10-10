import React, {useState} from 'react';
import './ContraceptsPage.scss';
import Header from '../../header/header';

function ContraceptsPage() {
    return (
        <div className='wrapper_imt'>
            <div className='header-1'>
                <Header/>
            </div>
            <div className="imt_wrapper">
                <div className="imt_block">
                    <h2 className='imt_tanner'>Таблица комбинированных (эстроген-гестагенных) контрацептивов</h2>
                </div>
                <div className="imt_block">
                    <h3 className='imt_tanner'>Монофазные комбинации</h3>
                </div>
                <div className='pictures_block'>
                    <div className='row-item'><p className='column-item'>Торговое<br></br> наименование</p>
                        <p className='column-item'>Прогестин</p>
                        <p className='column-item'>Эстроген</p>
                        <p className='column-item'>Примечание</p></div>
                    <div className='row-item'><p className='column-item'> Джес<br></br> Джес Плюс<br></br>
                        Димиа<br></br> Модэлль Тренд<br></br> Видора микро 24+4<br></br>
                        ПланиЖенс дроспи 20<br></br> Джейна</p>
                        <p className='column-item'>Дроспиренон 3&nbsp;мг</p>
                        <p className='column-item'>Этинилэстрадиол 20&nbsp;мкг</p>
                        <p className='column-item'>режим 24+4</p></div>
                    <div className='row-item'><p className='column-item'> Видора микро 21+7<br></br> Фемисс Анжета
                    </p>
                        <p className='column-item'>Дроспиренон 3&nbsp;мг</p>
                        <p className='column-item'>Этинилэстрадиол 20&nbsp;мкг</p>
                        <p className='column-item'>режим 21+7</p></div>
                    <div className='row-item'><p className='column-item'> Ярина<br></br> Ярина Плюс<br></br>
                        Мидиана<br></br> Делсия<br></br> Изнель 30</p>
                        <p className='column-item'>Дроспиренон 3&nbsp;мг</p>
                        <p className='column-item'>Этинилэстрадиол 30&nbsp;мкг</p>
                        <p className='column-item'>режим 21+7</p></div>
                    <div className='row-item'><p className='column-item'> Жанин<br></br> Силует<br></br> Бонадэ<br></br>
                        Диециклен<br></br> ПланиЖенс дие</p>
                        <p className='column-item'>Диеногест 2&nbsp;мг</p>
                        <p className='column-item'>Этинилэстрадиол 30&nbsp;мкг</p>
                        <p className='column-item'>режим 21+7</p></div>
                    <div className='row-item'><p className='column-item'> Логест<br></br> Линдинет 20<br></br>
                        ПланиЖенс Гесто 30<br></br> Фемисс&nbsp;Гинеста&nbsp;Мини</p>
                        <p className='column-item'>Гестоден 0,075&nbsp;мг</p>
                        <p className='column-item'>Этинилэстрадиол 20&nbsp;мкг</p>
                        <p className='column-item'>режим 21+7</p></div>
                    <div className='row-item'><p className='column-item'> Фемоден<br></br> Линдинет 30<br></br>
                        ПланиЖенс гесто 30 </p>
                        <p className='column-item'>Гестоден 0,075&nbsp;мг</p>
                        <p className='column-item'>Этинилэстрадиол 30&nbsp;мкг</p>
                        <p className='column-item'>режим 21+7</p></div>
                    <div className='row-item'><p className='column-item'> Мерсилон<br></br> Новинет<br></br>
                        Модэлль Овуле<br></br> Мануэль 20<br></br> ПланиЖенс дезо 20 </p>
                        <p className='column-item'>Дезогестрел 0,15&nbsp;мг</p>
                        <p className='column-item'>Этинилэстрадиол 20&nbsp;мкг</p>
                        <p className='column-item'>режим 21+7</p></div>
                    <div className='row-item'><p className='column-item'> Марвелон<br></br> Регулон<br></br>
                        ПланиЖенс дезо 30<br></br> ДЕЛУНА<br></br> Мануэль 30<br></br>
                        Фемисс ВИДЖИНА</p>
                        <p className='column-item'>Дезогестрел 0,15&nbsp;мг</p>
                        <p className='column-item'>Этинилэстрадиол 30&nbsp;мкг</p>
                        <p className='column-item'>режим 21+7</p></div>
                    <div className='row-item'><p className='column-item'> Белара<br></br> ПланиЖенс хло </p>
                        <p className='column-item'>Хлормадинона ацетат 2&nbsp;мг</p>
                        <p className='column-item'>Этинилэстрадиол 30&nbsp;мкг</p>
                        <p className='column-item'>режим 21+7</p></div>
                    <div className='row-item'><p className='column-item'> Диане-35<br></br> Хлое<br></br> Модэлль
                        Пьюр<br></br> ПланиЖенс ципро<br></br> Бэсамэль</p>
                        <p className='column-item'>Ципротерон ацетат 2&nbsp;мг</p>
                        <p className='column-item'>Этинилэстрадиол 35&nbsp;мкг</p>
                        <p className='column-item'>только лечебные показания, не&nbsp;рекомендован для плановой
                            контрацепции,
                            режим&nbsp;21+7</p></div>
                    <div className='row-item'><p className='column-item'> Минизистон 20 фем<br></br> Меллева</p>
                        <p className='column-item'>Левоноргестрел 0,1&nbsp;мг</p>
                        <p className='column-item'>Этинилэстрадиол 20&nbsp;мкг</p>
                        <p className='column-item'>режим 21+7</p></div>
                    <div className='row-item'><p className='column-item'> Модэлль Либера</p>
                        <p className='column-item'>Левоноргестрел 0,1&nbsp;мг</p>
                        <p className='column-item'>Этинилэстрадиол 20&nbsp;мкг</p>
                        <p className='column-item'>режим 84+7 (последние 7&nbsp;таблеток содержат 10&nbsp;мкг
                            этинилэстрадиола)</p></div>
                    <div className='row-item'><p className='column-item'> Микрогинон<br></br> Ригевидон<br></br>
                        ПланиЖенс лево </p>
                        <p className='column-item'>Левоноргестрел 0,15&nbsp;мг</p>
                        <p className='column-item'>Этинилэстрадиол 30&nbsp;мкг</p>
                        <p className='column-item'>режим 21+7</p></div>
                    <div className='row-item'><p className='column-item'> Зоэли<br></br> ПланиЖенс номе</p>
                        <p className='column-item'>Номегэстрола ацетат 2,5&nbsp;мг</p>
                        <p className='column-item'>Эстрадиола гемигидрат 1,55&nbsp;мг</p>
                        <p className='column-item'>режим 24+4</p></div>
                    <div className='row-item'><p className='column-item'> Эстеретта</p>
                        <p className='column-item'>Дроспиренон 3&nbsp;мг</p>
                        <p className='column-item'>Эстетрол 15&nbsp;мг</p>
                        <p className='column-item'>режим 24+4</p></div>
                </div>

                <div className="imt_block">
                    <h3 className='imt_tanner'>Многофазные комбинации</h3>
                </div>

                <div className='pictures_block'>
                    <div className='row-item'><p className='column-item'>Торговое<br></br> наименование</p>
                        <p className='column-item'>Прогестин</p>
                        <p className='column-item'>Эстроген</p>
                        <p className='column-item'>Примечание</p></div>
                    <div className='row-item'><p className='column-item'>Клайра</p>
                        <p className='column-item'>Диеногест 2/3&nbsp;мг</p>
                        <p className='column-item'>Эстрадиола валерат 3/2/1&nbsp;мг</p>
                        <p className='column-item'>одобрено для лечения обильных менструальных кровотечений режим
                            26+2</p></div>
                    <div className='row-item'><p className='column-item'>Три-Мерси</p>
                        <p className='column-item'>Дезогестрел 0,05/0,1/0,15&nbsp;мг</p>
                        <p className='column-item'>Этинилэстрадиол 35/30/30&nbsp;мкг</p>
                        <p className='column-item'>режим 21+7</p></div>
                    <div className='row-item'><p className='column-item'> Триквилар<br></br> Три-регол<br></br>
                        ПланиЖенс трио </p>
                        <p className='column-item'>Левоноргестрел 0,05/0,075/0,125&nbsp;мг</p>
                        <p className='column-item'>Этинилэстрадиол 30/40/30&nbsp;мкг</p>
                        <p className='column-item'>режим 21+7</p></div>
                </div>

                <div className="imt_block">
                    <h3 className='imt_tanner'>Контрацептивное кольцо и пластырь</h3>
                </div>

                <div className='pictures_block'>
                    <div className='row-item'><p className='column-item'>Торговое<br></br> наименование</p>
                        <p className='column-item'>Прогестин</p>
                        <p className='column-item'>Эстроген</p>
                        <p className='column-item'>Примечание</p></div>
                    <div className='row-item'><p className='column-item'> НоваРинг, кольцо
                        вагинальное<br></br> ПланиЖенс ринг,
                        система вагинальная терапевтическая </p>
                        <p className='column-item'>Этоногестрел 11,7&nbsp;мг</p>
                        <p className='column-item'>Этинилэстрадиол 2,7&nbsp;мг</p>
                        <p className='column-item'>0.015&nbsp;мг Этинилэстрадиол&nbsp;+ 0.120&nbsp;мг
                            Этоногестрел/сутки</p></div>
                    <div className='row-item'><p className='column-item'>Евра, пластырь трансдермальный</p>
                        <p className='column-item'>Норэлгестромин 6&nbsp;мг</p>
                        <p className='column-item'>Этинилэстрадиол 600&nbsp;мкг</p>
                        <p className='column-item'>203&nbsp;мкг Норэлгестромин&nbsp;+ 33.9&nbsp;мкг
                            Этинилэстрадиол/сутки</p></div>
                </div>
                <div className="pictures_block">
                    <p>Действующее регистрационное удостоверение на 29.03.2024, источник ГРЛС</p>
                </div>
            </div>
        </div>
    );
}

export default ContraceptsPage;