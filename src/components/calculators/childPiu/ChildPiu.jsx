import React, { useState } from 'react';
import './ChildPiu.scss';
import Header from '../../header/header';
function ChildPiu() {
    const [ascites, setAscites] = useState(null);
    const [bilirubin, setBilirubin] = useState(null);
    const [albumin, setAlbumin] = useState(null);
    const [encephalopathy, setEncephalopathy] = useState(null);
    const [ptiType, setPtiType] = useState('pti'); // Состояние для типа ПТИ/ПТВ/МНО
    const [ptiValue, setPtiValue] = useState(null);
    const [result, setResult] = useState('');

    const calculateScore = () => {
        let score = 0;

        // Асцит
        score += ascites || 0;

        // Билирубин
        score += bilirubin || 0;

        // Альбумин
        score += albumin || 0;

        // Печеночная энцефалопатия
        score += encephalopathy || 0;

        // ПТИ/ПТВ/МНО
        score += ptiValue || 0;

        // Определение класса цирроза
        let classResult = '';
        if (score >= 5 && score <= 6) {
            classResult = 'Класс A (Child A)';
        } else if (score >= 7 && score <= 9) {
            classResult = 'Класс B (Child B)';
        } else if (score >= 10 && score <= 15) {
            classResult = 'Класс C (Child C)';
        } else {
            classResult = 'Не все пункты отмечены.';
        }

        setResult(`Сумма баллов: ${score}. ${classResult}`);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        calculateScore();
    };

    return (
        <div className='wrapper_rmi'>
            <div className='header-1'>
                <Header />
            </div>
            <div className="rmi_wrapper">
                <div className="rmi_block">
                    <h2 className='rmi_tanner'>Калькулятор. Классификация по Чайлд-Пью</h2>
                </div>
                <div className='pictures_block'>
                    <form className='form_wrap' onSubmit={handleSubmit}>
                        <div className='form_group'>
                            <label>1. Асцит</label>
                            <div className='radio_group'>
                                <label>
                                    <input
                                        type="radio"
                                        name="ascites"
                                        value={1}
                                        onChange={() => setAscites(1)}
                                    />
                                    <span className="radio_custom"></span>
                                    отсутствует <section className='secretplus'>+1</section>
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="ascites"
                                        value={2}
                                        onChange={() => setAscites(2)}
                                    />
                                    <span className="radio_custom"></span>
                                    мягкий, легко поддаётся лечению<section className='secretplus'>+2</section>
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="ascites"
                                        value={3}
                                        onChange={() => setAscites(3)}
                                    />
                                    <span className="radio_custom"></span>
                                    напряжённый, плохо контролируемый<section className='secretplus'>+3</section>
                                </label>
                            </div>
                        </div>
                        <div className='form_group'>
                            <label>2. Билирубин</label>
                            <div className='radio_group'>
                                <label>
                                    <input
                                        type="radio"
                                        name="bilirubin"
                                        value={1}
                                        onChange={() => setBilirubin(1)}
                                    />
                                    <span className="radio_custom"></span>
                                    менее 2.0 <section className='secretplus'>+1</section>
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="bilirubin"
                                        value={2}
                                        onChange={() => setBilirubin(2)}
                                    />
                                    <span className="radio_custom"></span>
                                    2.0 - 3.0 <section className='secretplus'>+2</section>
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="bilirubin"
                                        value={3}
                                        onChange={() => setBilirubin(3)}
                                    />
                                    <span className="radio_custom"></span>
                                    более 3.0 <section className='secretplus'>+3</section>
                                </label>
                            </div>
                        </div>
                        <div className='form_group'>
                            <label>3. Альбумин, г/л</label>
                            <div className='radio_group'>
                                <label>
                                    <input
                                        type="radio"
                                        name="albumin"
                                        value={1}
                                        onChange={() => setAlbumin(1)}
                                    />
                                    <span className="radio_custom"></span>
                                    более 35 <section className='secretplus'>+1</section>
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="albumin"
                                        value={2}
                                        onChange={() => setAlbumin(2)}
                                    />
                                    <span className="radio_custom"></span>
                                    28 - 35 <section className='secretplus'>+2</section>
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="albumin"
                                        value={3}
                                        onChange={() => setAlbumin(3)}
                                    />
                                    <span className="radio_custom"></span>
                                    менее 28 <section className='secretplus'>+3</section>
                                </label>
                            </div>
                        </div>
                        <div className='form_group'>
                            <label>4. Печеночная энцефалопатия</label>
                            <div className='radio_group'>
                                <label>
                                    <input
                                        type="radio"
                                        name="encephalopathy"
                                        value={1}
                                        onChange={() => setEncephalopathy(1)}
                                    />
                                    <span className="radio_custom"></span>
                                    отсутствует <section className='secretplus'>+1</section>
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="encephalopathy"
                                        value={2}
                                        onChange={() => setEncephalopathy(2)}
                                    />
                                    <span className="radio_custom"></span>
                                    легкая (I-II ст) <section className='secretplus'>+2</section>
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="encephalopathy"
                                        value={3}
                                        onChange={() => setEncephalopathy(3)}
                                    />
                                    <span className="radio_custom"></span>
                                    тяжелая (III-IV ст) (рефрактерная) <section className='secretplus'>+3</section>
                                </label>
                            </div>
                        </div>
                        <div className='form_group'>
                            <label>5. Выберите тип: ПТИ, ПТВ или МНО</label>
                            <select value={ptiType} onChange={(e) => setPtiType(e.target.value)} className='form_input'>
                                <option value="pti">ПТИ</option>
                                <option value="ptv">ПТВ</option>
                                <option value="mno">МНО</option>
                            </select>
                        </div>
                        <div className='form_group'>
                            <label>{ptiType === 'pti' ? 'ПТИ' : ptiType === 'ptv' ? 'ПТВ' : 'МНО'}</label>
                            <div className='radio_group'>
                                {ptiType === 'pti' && (
                                    <>
                                        <label>
                                            <input
                                                type="radio"
                                                name="pti"
                                                value={1}
                                                onChange={() => setPtiValue(1)}
                                            />
                                            <span className="radio_custom"></span>
                                            более 60% <section className='secretplus'>+1</section>
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="pti"
                                                value={2}
                                                onChange={() => setPtiValue(2)}
                                            />
                                            <span className="radio_custom"></span>
                                            40 - 60% <section className='secretplus'>+2</section>
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="pti"
                                                value={3}
                                                onChange={() => setPtiValue(3)}
                                            />
                                            <span className="radio_custom"></span>
                                            менее 40% <section className='secretplus'>+3</section>
                                        </label>
                                    </>
                                )}
                                {ptiType === 'ptv' && (
                                    <>
                                        <label>
                                            <input
                                                type="radio"
                                                name="ptv"
                                                value={1}
                                                onChange={() => setPtiValue(1)}
                                            />
                                            <span className="radio_custom"></span>
                                            1 - 4 сек <section className='secretplus'>+1</section>
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="ptv"
                                                value={2}
                                                onChange={() => setPtiValue(2)}
                                            />
                                            <span className="radio_custom"></span>
                                            4 - 6 сек <section className='secretplus'>+2</section>
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="ptv"
                                                value={3}
                                                onChange={() => setPtiValue(3)}
                                            />
                                            <span className="radio_custom"></span>
                                            более 6 сек <section className='secretplus'>+3</section>
                                        </label>
                                    </>
                                )}
                                {ptiType === 'mno' && (
                                    <>
                                        <label>
                                            <input
                                                type="radio"
                                                name="mno"
                                                value={1}
                                                onChange={() => setPtiValue(1)}
                                            />
                                            <span className="radio_custom"></span>
                                            менее 1.7 <section className='secretplus'>+1</section>
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="mno"
                                                value={2}
                                                onChange={() => setPtiValue(2)}
                                            />
                                            <span className="radio_custom"></span>
                                            1.7 - 2.20 <section className='secretplus'>+2</section>
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="mno"
                                                value={3}
                                                onChange={() => setPtiValue(3)}
                                            />
                                            <span className="radio_custom"></span>
                                            более 2.20 <section className='secretplus'>+3</section>
                                        </label>
                                    </>
                                )}
                            </div>
                        </div>
                        <button type='submit' className='button_calculate'>Рассчитать</button>
                    </form>
                </div>

                <div className='pictures_block'>
                    <h2 className='rmi_lead'>Результаты</h2>
                    {result && <div className='result'>{result}</div>}
                </div>
            </div>
        </div>
    );
}

export default ChildPiu;