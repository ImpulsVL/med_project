import React from 'react';
import './BadenPage.scss';
import img1 from './pictures/pto1.svg';
import img2 from './pictures/pto2.svg';
import Header from '../../header/header';

function BadenPage() {
    return (
        <div className='wrapper_baden'>
            <div className='header-1'>
                <Header />
            </div>
            <div className="baden_wrapper">
                <div className="baden_block">
                    <h2 className='baden_header'>Определение степени пролапса тазовых органов (ПТО): POP-Q и Baden-Walker</h2>
                </div>
                <div className='pictures_block'>
                    <h3 className='baden_lead'>Согласно классификации ПТО по Baden-Walker выделяют
                        4 стадии опущения:
                    </h3>
                    <ul className='baden_content_list'>
                        <li className='baden_content_item'>
                            <span>1-я стадия </span>
                            – наиболее пролабирующая точка доходит до половины длины влагалища;
                        </li>
                        <li className='baden_content_item'>
                            <span>2-я стадия </span>
                            – наиболее пролабирующая точка влагалища доходит до гименального кольца (вход во влагалище);
                        </li>
                        <li className='baden_content_item'>
                            <span>3-я стадия </span>
                            – наиболее пролабирующая точка выходит за пределы гименального кольца до половины длины влагалища;
                        </li>
                        <li className='baden_content_item'>
                            <span>4-я стадия </span>
                            – влагалище выпадает полностью.
                        </li>
                    </ul>
                </div>
                <div className='pictures_block'>
                    <div className='baden_row'>
                        <div className='baden_text_and_picture'>
                            <div className='baden_picture'>
                                <img src={img1} className='baden_img'></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pictures_block'>
                    <h3 className='baden_lead'>
                        POP-Q
                    </h3>
                    <ul className='baden_content_list'>
                        <li className='baden_content_item'>
                            <span>Genital hiatus (gh) </span>
                            – половая щель, расстояние между наружным отверстием уретры и задней спайкой.
                        </li>
                        <li className='baden_content_item'>
                            <span>Perineal body (pb) </span>
                            – промежностное тело, расстояние между задней спайкой
                        </li>
                        <li className='baden_content_item'>
                            <span>Total vaginal length (tvl) </span>
                            – общая длина влагалища.
                        </li>
                    </ul>
                    <div className='pto_table'>
                        <div className='pto_table_row'>
                            <p className='pto_table_head_first'>
                                Точка
                            </p>
                            <p className='pto_table_head'>
                                Расположение
                            </p>
                            <p className='pto_table_head_last'>
                                Оценочный интервал
                            </p>
                        </div>
                        <div className='pto_table_row'>
                            <p className='pto_table_cell_first'>
                                Аа
                            </p>
                            <p className='pto_table_cell_spec'>
                                Передняя стенка влагалища: на 3см проксимальнее от входа во влагалище (уретровезикальный сегмент)
                            </p>
                            <p className='pto_table_cell_last'>
                                -3см до +3см
                            </p>
                        </div>
                        <div className='pto_table_row'>
                            <p className='pto_table_cell_first'>
                                Ва
                            </p>
                            <p className='pto_table_cell'>
                                Передняя стенка влагалища
                            </p>
                            <p className='pto_table_cell_last'>
                                -3см до +tvl
                            </p>
                        </div>
                        <div className='pto_table_row'>
                            <p className='pto_table_cell_first'>
                                С
                            </p>
                            <p className='pto_table_cell'>
                                Шейка матки или наиболее дистальная точка купола влагалища
                            </p>
                            <p className='pto_table_cell_last'>
                                -
                            </p>
                        </div>
                        <div className='pto_table_row'>
                            <p className='pto_table_cell_first'>
                                D
                            </p>
                            <p className='pto_table_cell'>
                                Задний свод (не отмечается если была выполнена гистерэктомия)
                            </p>
                            <p className='pto_table_cell_last'>
                                -
                            </p>
                        </div>
                        <div className='pto_table_row'>
                            <p className='pto_table_cell_first'>
                                Ap
                            </p>
                            <p className='pto_table_cell'>

                                Задняя стенка влагалища: на 3см проксимальнее от входа во влагалище
                            </p>
                            <p className='pto_table_cell_last'>
                                -3см до +3см
                            </p>
                        </div>
                        <div className='pto_table_row'>
                            <p className='pto_table_cell_first'>
                                Вp
                            </p>
                            <p className='pto_table_cell'>
                                Задняя стенка влагалища
                            </p>
                            <p className='pto_table_cell_last'>
                                -3см до +tvl
                            </p>
                        </div>
                    </div>
                    <div className='pto_table'>
                        <div className='pto_table_row'>
                            <p className='pto_table_head_first'>
                                Стадия
                            </p>
                            <p className='pto_table_head'>
                                Описание
                            </p>
                        </div>
                        <div className='pto_table_row'>
                            <p className='pto_table_cell_first'>
                                I
                            </p>
                            <p className='pto_table_cell'>
                                Наиболее пролабирующая точка находится на расстоянии более 1 см до гимена
                            </p>
                        </div>
                        <div className='pto_table_row'>
                            <p className='pto_table_cell_first'>
                                II
                            </p>
                            <p className='pto_table_cell_spec'>
                                Наиболее пролабирующая точка находится на уровне 1 см над гименом или выходит за пределы гимена на расстояние не более 1 см
                            </p>
                        </div>
                        <div className='pto_table_row'>
                            <p className='pto_table_cell_first'>
                                III
                            </p>
                            <p className='pto_table_cell'>
                                Наиболее пролабирующая точка выходит за пределы гимена более, чем на 1 см
                            </p>
                        </div>
                        <div className='pto_table_row'>
                            <p className='pto_table_cell_first'>
                                IV
                            </p>
                            <p className='pto_table_cell_spec'>
                                Наиболее пролабирующая точка выходит за пределы гимена на расстояние более, чем tvl -2
                            </p>
                        </div>
                    </div>
                </div>
                <div className='pictures_block'>
                    <div className='baden_row'>
                        <div className='baden_text_and_picture'>
                            <div className='baden_picture'>
                                <img src={img2} className='baden_img'></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pictures_block'>
                    <h3 className='baden_lead'>
                        По локализации ведущей точки пролапса принято выделять следующие виды ПТО:
                    </h3>
                    <ul className='baden_content_list'>
                        <li className='baden_content_item'>
                            <span>Цистоцеле  </span>
                            – опущение мочевого пузыря – опущение передней стенки влагалища,
                        </li>
                        <li className='baden_content_item'>
                            <span>Ректоцеле  </span>
                            – опущение прямой кишки – опущение задней стенки влагалища,
                        </li>
                        <li className='baden_content_item'>
                            <span>Энтероцеле </span>
                            – опущение петель тонкой кишки – опущение заднего свода влагалища,
                        </li>
                        <li className='baden_content_item'>
                            <span>Утероцеле  </span>
                            – опущение матки – апикальный пролапс,
                        </li>
                        <li className='baden_content_item'>
                            <span>Выпадение купола влагалища </span>
                            – апикальный постгистерэктомический пролапс.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default BadenPage;