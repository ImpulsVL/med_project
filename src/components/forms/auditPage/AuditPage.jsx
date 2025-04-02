import React, { useState } from 'react';
import './AuditPage.scss';
import Header from '../../header/header';

function AuditPage() {
    const [answers, setAnswers] = useState(Array(10).fill(0));
    const [totalScore, setTotalScore] = useState(0);
    const [riskLevel, setRiskLevel] = useState('');

    const handleAnswerChange = (index, value) => {
        const newAnswers = [...answers];
        newAnswers[index] = parseInt(value, 10);
        setAnswers(newAnswers);
    };

    const calculateScores = () => {
        const total = answers.reduce((sum, value) => sum + value, 0);
        setTotalScore(total);

        if (total <= 7) {
            setRiskLevel('низкий уровень риска');
        } else if (total >= 8 && total <= 15) {
            setRiskLevel('угрожающее здоровью потребление');
        } else if (total >= 16 && total <= 19) {
            setRiskLevel('злоупотребление алкоголя');
        } else {
            setRiskLevel('возможная зависимость');
        }
    };

    return (
        <div className='wrapper_forms'>
            <div className='header-1'>
                <Header />
            </div>
            <div className="forms_wrapper">
                <div className="forms_block_header">
                    <h2 className='forms_header'>Тест употребления алкоголя AUDIT</h2>
                </div>
                <div className='forms_block'>
                    <form className='form_wrap'>
                        <div className='radio-group'>
                            <div className="radio-group-item">
                                <h4 className="forms-info-header">1. Как часто Вы употребляете напитки с содержанием алкоголя?</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="1"
                                        value="0"
                                        checked={answers[0] === 0}
                                        onChange={() => handleAnswerChange(0, 0)}
                                    />
                                    <span className="radio-custom"></span>
                                    0 – Никогда
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="1"
                                        value="1"
                                        checked={answers[0] === 1}
                                        onChange={() => handleAnswerChange(0, 1)}
                                    />
                                    <span className="radio-custom"></span>
                                    1 – Примерно раз в месяц или реже
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="1"
                                        value="2"
                                        checked={answers[0] === 2}
                                        onChange={() => handleAnswerChange(0, 2)}
                                    />
                                    <span className="radio-custom"></span>
                                    2 – 2-4 раза в месяц
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="1"
                                        value="3"
                                        checked={answers[0] === 3}
                                        onChange={() => handleAnswerChange(0, 3)}
                                    />
                                    <span className="radio-custom"></span>
                                    3 – 2-3 раза в неделю
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="1"
                                        value="4"
                                        checked={answers[0] === 4}
                                        onChange={() => handleAnswerChange(0, 4)}
                                    />
                                    <span className="radio-custom"></span>
                                    4 – 4 раза в неделю или чаще
                                </label>
                            </div>
                            <div className="radio-group-item">
                                <h4 className="forms-info-header">2. Сколько единиц алкоголя вы обычно выпиваете за раз?</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="2"
                                        value="0"
                                        checked={answers[1] === 0}
                                        onChange={() => handleAnswerChange(1, 0)}
                                    />
                                    <span className="radio-custom"></span>
                                    0 – 1-2
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="2"
                                        value="1"
                                        checked={answers[1] === 1}
                                        onChange={() => handleAnswerChange(1, 1)}
                                    />
                                    <span className="radio-custom"></span>
                                    1 – 3-4
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="2"
                                        value="2"
                                        checked={answers[1] === 2}
                                        onChange={() => handleAnswerChange(1, 2)}
                                    />
                                    <span className="radio-custom"></span>
                                    2 – 5-6
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="2"
                                        value="3"
                                        checked={answers[1] === 3}
                                        onChange={() => handleAnswerChange(1, 3)}
                                    />
                                    <span className="radio-custom"></span>
                                    3 – 7-9
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="2"
                                        value="4"
                                        checked={answers[1] === 4}
                                        onChange={() => handleAnswerChange(1, 4)}
                                    />
                                    <span className="radio-custom"></span>
                                    4 – 10+
                                </label>
                            </div>
                            <div className="radio-group-item">
                                <h4 className="forms-info-header">3. Как часто Вы выпиваете 6 и более единиц алкоголя за раз?</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="3"
                                        value="0"
                                        checked={answers[2] === 0}
                                        onChange={() => handleAnswerChange(2, 0)}
                                    />
                                    <span className="radio-custom"></span>
                                    0 – Никогда
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="3"
                                        value="1"
                                        checked={answers[2] === 1}
                                        onChange={() => handleAnswerChange(2, 1)}
                                    />
                                    <span className="radio-custom"></span>
                                    1 – Реже раза в месяц
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="3"
                                        value="2"
                                        checked={answers[2] === 2}
                                        onChange={() => handleAnswerChange(2, 2)}
                                    />
                                    <span className="radio-custom"></span>
                                    2 – Раз в месяц
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="3"
                                        value="3"
                                        checked={answers[2] === 3}
                                        onChange={() => handleAnswerChange(2, 3)}
                                    />
                                    <span className="radio-custom"></span>
                                    3 – Раз в неделю
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="3"
                                        value="4"
                                        checked={answers[2] === 4}
                                        onChange={() => handleAnswerChange(2, 4)}
                                    />
                                    <span className="radio-custom"></span>
                                    4 – Каждый и почти каждый день
                                </label>
                            </div>
                            <div className="radio-group-item">
                                <h4 className="forms-info-header">4. Как часто за последний год случалось так, что, начав употреблять алкоголь, Вы уже не могли остановиться?</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="4"
                                        value="0"
                                        checked={answers[3] === 0}
                                        onChange={() => handleAnswerChange(3, 0)}
                                    />
                                    <span className="radio-custom"></span>
                                    0 – Никогда
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="4"
                                        value="1"
                                        checked={answers[3] === 1}
                                        onChange={() => handleAnswerChange(3, 1)}
                                    />
                                    <span className="radio-custom"></span>
                                    1 – Реже раза в месяц
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="4"
                                        value="2"
                                        checked={answers[3] === 2}
                                        onChange={() => handleAnswerChange(3, 2)}
                                    />
                                    <span className="radio-custom"></span>
                                    2 – Раз в месяц
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="4"
                                        value="3"
                                        checked={answers[3] === 3}
                                        onChange={() => handleAnswerChange(3, 3)}
                                    />
                                    <span className="radio-custom"></span>
                                    3 – Раз в неделю
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="4"
                                        value="4"
                                        checked={answers[3] === 4}
                                        onChange={() => handleAnswerChange(3, 4)}
                                    />
                                    <span className="radio-custom"></span>
                                    4 – Каждый или почти каждый день
                                </label>
                            </div>
                            <div className="radio-group-item">
                                <h4 className="forms-info-header">5. Как часто за последний год из-за употребления алкоголя Вы не делали чего-то, чего от Вас ожидали?</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="5"
                                        value="0"
                                        checked={answers[4] === 0}
                                        onChange={() => handleAnswerChange(4, 0)}
                                    />
                                    <span className="radio-custom"></span>
                                    0 – Никогда
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="5"
                                        value="1"
                                        checked={answers[4] === 1}
                                        onChange={() => handleAnswerChange(4, 1)}
                                    />
                                    <span className="radio-custom"></span>
                                    1 – Реже раза в месяц
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="5"
                                        value="2"
                                        checked={answers[4] === 2}
                                        onChange={() => handleAnswerChange(4, 2)}
                                    />
                                    <span className="radio-custom"></span>
                                    2 – Раз в месяц
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="5"
                                        value="3"
                                        checked={answers[4] === 3}
                                        onChange={() => handleAnswerChange(4, 3)}
                                    />
                                    <span className="radio-custom"></span>
                                    3 – Раз в неделю
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="5"
                                        value="4"
                                        checked={answers[4] === 4}
                                        onChange={() => handleAnswerChange(4, 4)}
                                    />
                                    <span className="radio-custom"></span>
                                    4 – Каждый или почти каждый день
                                </label>
                            </div>
                            <div className="radio-group-item">
                                <h4 className="forms-info-header">6. Как часто за последний год наутро после обильного употребления алкоголя Вам требовался какой-нибудь содержащий напиток, чтобы преодолеть похмелье?</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="6"
                                        value="0"
                                        checked={answers[5] === 0}
                                        onChange={() => handleAnswerChange(5, 0)}
                                    />
                                    <span className="radio-custom"></span>
                                    0 – Никогда
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="6"
                                        value="1"
                                        checked={answers[5] === 1}
                                        onChange={() => handleAnswerChange(5, 1)}
                                    />
                                    <span className="radio-custom"></span>
                                    1 – Реже раза в месяц
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="6"
                                        value="2"
                                        checked={answers[5] === 2}
                                        onChange={() => handleAnswerChange(5, 2)}
                                    />
                                    <span className="radio-custom"></span>
                                    2 – Раз в месяц
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="6"
                                        value="3"
                                        checked={answers[5] === 3}
                                        onChange={() => handleAnswerChange(5, 3)}
                                    />
                                    <span className="radio-custom"></span>
                                    3 – Раз в неделю
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="6"
                                        value="4"
                                        checked={answers[5] === 4}
                                        onChange={() => handleAnswerChange(5, 4)}
                                    />
                                    <span className="radio-custom"></span>
                                    4 – Каждый или почти каждый день
                                </label>
                            </div>
                            <div className="radio-group-item">
                                <h4 className="forms-info-header">7. Как часто за последний год из-за употребления алкоголя Вы испытывали чувство вины или сожаления?</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="7"
                                        value="0"
                                        checked={answers[6] === 0}
                                        onChange={() => handleAnswerChange(6, 0)}
                                    />
                                    <span className="radio-custom"></span>
                                    0 – Никогда
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="7"
                                        value="1"
                                        checked={answers[6] === 1}
                                        onChange={() => handleAnswerChange(6, 1)}
                                    />
                                    <span className="radio-custom"></span>
                                    1 – Реже раза в месяц
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="7"
                                        value="2"
                                        checked={answers[6] === 2}
                                        onChange={() => handleAnswerChange(6, 2)}
                                    />
                                    <span className="radio-custom"></span>
                                    2 – Раз в месяц
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="7"
                                        value="3"
                                        checked={answers[6] === 3}
                                        onChange={() => handleAnswerChange(6, 3)}
                                    />
                                    <span className="radio-custom"></span>
                                    3 – Раз в неделю
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="7"
                                        value="4"
                                        checked={answers[6] === 4}
                                        onChange={() => handleAnswerChange(6, 4)}
                                    />
                                    <span className="radio-custom"></span>
                                    4 – Каждый или почти каждый день
                                </label>
                            </div>
                            <div className="radio-group-item">
                                <h4 className="forms-info-header">8. Как часто за последний год случалось так, что наутро после употребления алкоголя Вы не помнили происходившего накануне вечером?</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="8"
                                        value="0"
                                        checked={answers[7] === 0}
                                        onChange={() => handleAnswerChange(7, 0)}
                                    />
                                    <span className="radio-custom"></span>
                                    0 – Никогда
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="8"
                                        value="1"
                                        checked={answers[7] === 1}
                                        onChange={() => handleAnswerChange(7, 1)}
                                    />
                                    <span className="radio-custom"></span>
                                    1 – Реже раза в месяц
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="8"
                                        value="2"
                                        checked={answers[7] === 2}
                                        onChange={() => handleAnswerChange(7, 2)}
                                    />
                                    <span className="radio-custom"></span>
                                    2 – Раз в месяц
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="8"
                                        value="3"
                                        checked={answers[7] === 3}
                                        onChange={() => handleAnswerChange(7, 3)}
                                    />
                                    <span className="radio-custom"></span>
                                    3 – Раз в неделю
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="8"
                                        value="4"
                                        checked={answers[7] === 4}
                                        onChange={() => handleAnswerChange(7, 4)}
                                    />
                                    <span className="radio-custom"></span>
                                    4 – Каждый или почти каждый день
                                </label>
                            </div>
                            <div className="radio-group-item">
                                <h4 className="forms-info-header">9. Вы сами или кто-то другой получал травмы в результате употребления алкоголя?</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="9"
                                        value="0"
                                        checked={answers[8] === 0}
                                        onChange={() => handleAnswerChange(8, 0)}
                                    />
                                    <span className="radio-custom"></span>
                                    0 – Нет
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="9"
                                        value="2"
                                        checked={answers[8] === 2}
                                        onChange={() => handleAnswerChange(8, 2)}
                                    />
                                    <span className="radio-custom"></span>
                                    2 – Да, но не в течение последнего года
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="9"
                                        value="4"
                                        checked={answers[8] === 4}
                                        onChange={() => handleAnswerChange(8, 4)}
                                    />
                                    <span className="radio-custom"></span>
                                    4 – Да, в течение последнего года
                                </label>
                            </div>
                            <div className="radio-group-item">
                                <h4 className="forms-info-header">10. Бывало ли так, что близкий человек, друг, врач или кто-то другой беспокоился об употреблении Вами алкоголя либо советовал его сократить?</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="10"
                                        value="0"
                                        checked={answers[9] === 0}
                                        onChange={() => handleAnswerChange(9, 0)}
                                    />
                                    <span className="radio-custom"></span>
                                    0 – Нет
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="10"
                                        value="2"
                                        checked={answers[9] === 2}
                                        onChange={() => handleAnswerChange(9, 2)}
                                    />
                                    <span className="radio-custom"></span>
                                    2 – Да, но не в течение последнего года
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="10"
                                        value="4"
                                        checked={answers[9] === 4}
                                        onChange={() => handleAnswerChange(9, 4)}
                                    />
                                    <span className="radio-custom"></span>
                                    4 – Да, в течение последнего года
                                </label>
                            </div>
                        </div>
                    </form>
                    <button type='submit' className='button_calculate' onClick={calculateScores}>Рассчитать</button>
                </div>
                <div className='forms_block'>
                    <div className='forms_result'>
                        <h2 className='form_result_lead'>Результаты</h2>
                        <p className='form_result_item'>Сумма баллов: {totalScore}</p>
                        <p className='form_result_item'>Уровень риска: {riskLevel}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuditPage;