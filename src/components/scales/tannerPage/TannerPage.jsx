import React from 'react';
import './TannerPage.scss';
import img1 from './pictures/lvl1.svg';
import img2 from './pictures/lvl1 (1).svg';
import img3 from './pictures/lvl2.svg';
import img4 from './pictures/lvl2 (1).svg';
import img5 from './pictures/lvl3.svg';
import img6 from './pictures/lvl3 (1).svg';
import img7 from './pictures/lvl4.svg';
import img8 from './pictures/lvl4 (1).svg';
import img9 from './pictures/lvl5.svg';
import img10 from './pictures/lvl5 (1).svg';
import Header from '../../header/header';

function TannerPage() {
    return (
        <div className='wrapper'>
            <div className='header-1'>
                <Header />
            </div>
            <div className="tanner_wrapper">
                <div className="tanner_block">
                    <h2 className='header_tanner'>Оценка развития молочных желез, шкала Таннера</h2>
                </div>
                <div className='pictures_block'>
                    <div className='pictures_block_tanner'>
                        <div className='tanner_column'>
                            <div className='top_picture_tanner'>
                                <img src={img1} className='tanner_img' alt='Уровень 1 Верхний' />
                            </div>
                            <div className='bottom_picture_tanner'>
                                <img src={img2} className='tanner_img' alt='Уровень 1 Нижний' />
                            </div>
                            <span>Уровень 1</span>
                        </div>
                        <div className='tanner_column'>
                            <div className='top_picture_tanner'>
                                <img src={img3} className='tanner_img' alt='Уровень 2 Верхний' />
                            </div>
                            <div className='bottom_picture_tanner'>
                                <img src={img4} className='tanner_img' alt='Уровень 2 Нижний' />
                            </div>
                            <span>Уровень 2</span>
                        </div>
                        <div className='tanner_column'>
                            <div className='top_picture_tanner'>
                                <img src={img5} className='tanner_img' alt='Уровень 3 Верхний' />
                            </div>
                            <div className='bottom_picture_tanner'>
                                <img src={img6} className='tanner_img' alt='Уровень 3 Нижний' />
                            </div>
                            <span>Уровень 3</span>
                        </div>
                        <div className='tanner_column'>
                            <div className='top_picture_tanner'>
                                <img src={img7} className='tanner_img' alt='Уровень 4 Верхний' />
                            </div>
                            <div className='bottom_picture_tanner'>
                                <img src={img8} className='tanner_img' alt='Уровень 4 Нижний' />
                            </div>
                            <span>Уровень 4</span>
                        </div>
                        <div className='tanner_column'>
                            <div className='top_picture_tanner'>
                                <img src={img9} className='tanner_img' alt='Уровень 5 Верхний' />
                            </div>
                            <div className='bottom_picture_tanner'>
                                <img src={img10} className='tanner_img' alt='Уровень 5 Нижний' />
                            </div>
                            <span>Уровень 5</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TannerPage;