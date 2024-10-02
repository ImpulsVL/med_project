import React from 'react';
import './HurtPage.scss';
import img1 from './pictures/mild-pain.svg';
import img2 from './pictures/mild-pain2.svg';
import img3 from './pictures/no-pain.svg';
import img4 from './pictures/slight-pain.svg';
import img5 from './pictures/strong-pain.svg';
import img6 from './pictures/very-strong-pain.svg';
import Header from '../../header/header';

function HurtPage() {
    return (
        <div className='wrapper_hurt'>
            <div className='header-1'>
                <Header />
            </div>
            <div className="hurt_wrapper">
                <div className="hurt_block">
                    <h2 className='hurt_header'>Оценка степени и переносимости боли</h2>
                </div>
                <div className='pictures_block'>
                    <h3 className='hurt_lead'>
                        Описание степени боли с помощью слов
                    </h3>
                    <div class="pain-scale-container">
                        <div class="numbers">
                            <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span>
                            <span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>
                        </div>
                        <div class="scale-line"></div>
                        <div class="pain-labels">
                            <span class="label-0">Боль отсутствует</span>
                            <span class="label-2">Лёгкая боль</span>
                            <span class="label-4">Умеренная боль</span>
                            <span class="label-6">Сильная боль</span>
                            <span class="label-8">Очень сильная боль</span>
                            <span class="label-10">Невыносимая боль</span>
                        </div>
                    </div>
                </div>
                <div className='pictures_block'>
                    <h3 className='hurt_lead'>
                        Шкала лиц Вонга-Бейкера
                    </h3>
                    <div className='pictures_block_hurt'>
                        <div className='hurt_item'>
                            <img src={img3} className='hurt_img' />
                            <span>Боль отсутствует</span>
                        </div>
                        <div className='hurt_item'>
                            <img src={img4} className='hurt_img' />
                            <span>
                                Лёгкая боль
                            </span>
                        </div>
                        <div className='hurt_item'>
                            <img src={img1} className='hurt_img' />
                            <span>Умеренная боль</span>
                        </div>
                        <div className='hurt_item'>
                            <img src={img2} className='hurt_img' />
                            <span>Сильная боль</span>
                        </div>
                        <div className='hurt_item'>
                            <img src={img5} className='hurt_img' />
                            <span>Очень сильная боль</span>
                        </div>
                        <div className='hurt_item'>
                            <img src={img6} className='hurt_img' />
                            <span>Невыносимая боль</span>
                        </div>
                    </div>
                </div>
                <div className='pictures_block'>
                    <h3 className='hurt_lead'>
                        Шкала переносимости боли
                    </h3>
                    <div class="pain-scale-container">
                        <div class="numbers">
                            <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span>
                            <span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>
                        </div>
                        <div class="scale-line"></div>
                        <div class="pain-labels">
                            <span class="label-0">Боль отсутствует</span>
                            <span class="label-2">Боль можно игнорировать</span>
                            <span class="label-4">Мешает деятельности</span>
                            <span class="label-6">Мешает концентрироваться</span>
                            <span class="label-8">Мешает основным потребностям</span>
                            <span class="label-10">Необходим постельный режим</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HurtPage;