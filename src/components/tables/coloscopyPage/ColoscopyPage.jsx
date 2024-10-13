import React, { useState } from 'react';
import './ColoscopyPage.scss';
import Header from '../../header/header';

function ColoscopyPage() {
    return (
        <div className='wrapper_imt'>
            <div className='header-1'>
                <Header />
            </div>
            <div className="imt_wrapper">
                <div className="imt_block">
                    <h2 className='imt_tanner'>Международная классификация кольпоскопических терминов</h2>
                </div>
                <div className="pictures_block">
                    <p>Рио-де-Жанейро, 2011, IFCPC</p>
                </div>
                <div className="pictures_block">
                    <p>Общие положения</p>
                    <ul><li>Адекватная/неадекватная картина (с указанием причины, например объективная оценка цервикса затруднена из-за воспаления, кровотечения, рубцовых изменений и т.д.)</li>
                        <li>Граница (стык) между многослойным плоским и цилиндрическим эпителием: визуализируется полностью; частично; не визуализируется</li>
                        <li>Зона трансформации: тип I, II, III.</li></ul>
                </div>
                <div className="pictures_block">
                    <p>Нормальные кольпоскопические картины</p>
                    <ul><li><ul>Многослойный плоский эпителий (оригинальный):<li>Зрелый</li><li>Атрофический</li></ul></li>
                        <li><ul>Цилиндрический эпителий:<li>Эктопия</li></ul></li>
                        <li><ul>Метапластический эпителий:<li>Наботовы кисты</li><li>Открытые железы (крипты)</li></ul></li>
                        <li>Децидуоз (при беременности)</li></ul>
                </div>
                <div className='pictures_block'>
                <p>Аномальные кольпоскопические картины</p>
                    <div className='row-item1'>
                        
                        <p className='column-item-header1'>Общие принципы</p>
                        <p className='column-item1'>Локализация поражения: в пределах или вне зоны трансформации; соответствие с циферблатом
                            Размеры области поражения: в процентном соотношении с цервиксом</p>
                    </div>

                    <div className='row-item1'>
                        <p className='column-item-header1'>Степень I (слабовыраженное поражение)</p>
                        <p className='column-item1'>
                            <ul>
                                <li>Тонкий ацетобелый эпителий с неровными нечеткими краями</li>
                            </ul>
                        </p>
                        <p className='column-item1'>
                            <ul>
                                <li>Нежная мозаика</li>
                                <li>Нежная пунктация</li>
                            </ul>
                        </p>
                    </div>

                    <div className='row-item1'>
                        <p className='column-item-header1'>Степень II (выраженное поражение)</p>
                        <p className='column-item1'>
                            <ul>
                                <li>Плотный ацетобелый эпителий с четкими контурами</li>
                                <li>Быстрое побеление</li>
                                <li>Ацетобелый плотный ободок вокруг открытых желез (крипт)</li>
                            </ul>
                        </p>

                        <p className='column-item1'>
                            <ul>
                                <li>Грубая мозаика</li>
                                <li>Грубая пунктация</li>
                                <li>Внутри поражения - контуры более плотного ацетобелого участка (внутренние границы)</li>
                                <li>Признак бугристости (гребня)</li>
                            </ul>
                        </p>
                    </div>

                    <div className='row-item1'>
                        <p className='column-item-header1'>Неспецифические признаки</p>
                        <p className='column-item1'>
                            <ul>
                                <li>Лейкоплакия (кератоз, гиперкератоз)</li>
                                <li>Эрозия</li>
                                <li>Окрашивание раствором Люголя (проба Шиллера): йодопозитивное/йоднегативное.</li>
                            </ul>
                        </p>
                    </div>

                    <div className='row-item1'>
                        <p className='column-item-header1'>Степень II</p>
                        <p className='column-item1'>
                            <ul>
                                <li>Атипические сосуды
                                Дополнительные признаки:</li>
                                <li>"ломкие" сосуды</li>
                                <li>неровная поверхность</li>
                                <li>экзофитное поражение</li>
                                <li>области некроза, изъязвления</li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div className="pictures_block">
                    <p>Другие кольпоскопические картины</p>
                    <ul><li>Врожденная зона трансформации</li>
                        <li>Кондиломы</li>
                        <li>Последствия раннее проведенного лечения</li>
                        <li>Стеноз</li>
                        <li>Врожденные аномалии</li>
                        <li>Воспаление</li>
                        <li>Полипы</li>
                        <li>Эндометриоз</li></ul>
                </div>
            </div>
        </div>
    );
}

export default ColoscopyPage;