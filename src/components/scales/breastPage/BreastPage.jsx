import React from 'react';
import './BreastPage.scss';
import { useNavigate } from 'react-router-dom';
import img1 from './pictures/I-1.svg';
import img2 from './pictures/I-2.svg';
import img3 from './pictures/I-3.svg';
import img4 from './pictures/I-4.svg';
import img5 from './pictures/II-1.svg';
import img6 from './pictures/II-2.svg';
import img7 from './pictures/III.svg';
import img8 from './pictures/Advanced.svg';
import img9 from './pictures/Frontal.svg';
import Header from '../../header/header';


function BreastPage() {
    return (
        <div className='wrapper_ludwig'>
            <div className='header-1'>
                <Header />
            </div>
            <div className="breast_wrapper">
                <div className="breast_block">
                    <h2 className='header_ludwig'>Шкала определения степени алопеции</h2>
                </div>
                <div className='pictures_block'>
                    <div className='ludwig_row'>
                        <div className='ludwig_item'>
                            <div className='ludwig_picture'>
                                <img src={img1} className='ludwig_img'></img>
                            </div>
                            <span className='ludwig_text'>
                                I-1
                            </span>
                        </div>
                        <div className='ludwig_item'>
                            <div className='ludwig_picture'>
                                <img src={img2} className='ludwig_img'></img>
                            </div>
                            <span className='ludwig_text'>
                                I-2
                            </span>
                        </div>
                        <div className='ludwig_item'>
                            <div className='ludwig_picture'>
                                <img src={img3} className='ludwig_img'></img>
                            </div>
                            <span className='ludwig_text'>
                                I-3
                            </span>
                        </div>
                        <div className='ludwig_item'>
                            <div className='ludwig_picture'>
                                <img src={img4} className='ludwig_img'></img>
                            </div>
                            <span className='ludwig_text'>
                                I-4
                            </span>
                        </div>
                    </div>
                    <div className='ludwig_row'>
                        <div className='ludwig_item'>
                            <div className='ludwig_picture'>
                                <img src={img5} className='ludwig_img'></img>
                            </div>
                            <span className='ludwig_text'>
                                II-1
                            </span>
                        </div>
                        <div className='ludwig_item'>
                            <div className='ludwig_picture'>
                                <img src={img6} className='ludwig_img'></img>
                            </div>
                            <span className='ludwig_text'>
                                II-2
                            </span>
                        </div>
                        <div className='ludwig_item'>
                            <div className='ludwig_picture'>
                                <img src={img7} className='ludwig_img'></img>
                            </div>
                            <span className='ludwig_text'>
                                III
                            </span>
                        </div>
                    </div>
                    <div className='ludwig_row'>
                        <div className='ludwig_item'>
                            <div className='ludwig_picture'>
                                <img src={img8} className='ludwig_img'></img>
                            </div>
                            <span className='ludwig_text'>
                                Тотальная
                            </span>
                        </div>
                        <div className='ludwig_item'>
                            <div className='ludwig_picture'>
                                <img src={img9} className='ludwig_img'></img>
                            </div>
                            <span className='ludwig_text'>
                                Лобная
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BreastPage;