import React, { useState, useEffect } from 'react';
import './HadsPage.scss';
import Header from '../../header/header';

function HadsPage() {

    const [answers, setAnswers] = useState(Array(14).fill(0));
    const [anxietyScore, setAnxietyScore] = useState(0);
    const [depressionScore, setDepressionScore] = useState(0);
    const [anxietyLevel, setAnxietyLevel] = useState('');
    const [depressionLevel, setDepressionLevel] = useState('');

    const handleAnswerChange = (index, value) => {
        const newAnswers = [...answers];
        newAnswers[index] = parseInt(value, 10);
        setAnswers(newAnswers);
    };

    const calculateScores = () => {
        const anxiety = answers.slice(0, 7).reduce((sum, value) => sum + value, 0);
        setAnxietyScore(anxiety);

        const depression = answers.slice(7).reduce((sum, value) => sum + value, 0);
        setDepressionScore(depression);

        if (anxiety <= 7) {
            setAnxietyLevel('норма');
        } else if (anxiety >= 8 && anxiety <= 10) {
            setAnxietyLevel('субклинически выраженная тревога');
        } else {
            setAnxietyLevel('клинически выраженная тревога');
        }

        // Определение уровня депрессии
        if (depression <= 7) {
            setDepressionLevel('норма');
        } else if (depression >= 8 && depression <= 10) {
            setDepressionLevel('субклинически выраженная депрессия');
        } else {
            setDepressionLevel('клинически выраженная депрессия');
        }
    };

    return (
        <div className='wrapper_forms'>
            <div className='header-1'>
                <Header />
            </div>
            <div className="forms_wrapper">
                <div className="forms_block_header">
                    <h2 className='forms_header'>Госпитальная шкала тревоги и депрессии, HADS</h2>
                </div>
                <div className='forms_block'>
                    <form className='form_wrap'>
                        <div className='radio-group'>
                            <div className="radio-group-item">
                                <h4 className="forms-info-header">1. Я испытываю напряжение, мне не по себе</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="1"
                                        value="0"
                                        checked={answers[0] === 0}
                                        onChange={() => handleAnswerChange(0, 0)}
                                    />
                                    <span className="radio-custom"></span>
                                    0 – совсем не испытываю
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
                                    1 – время от времени, иногда
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
                                    2 – часто
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
                                    3 – все время
                                </label>
                            </div>
                            <div className="radio-group-item">
                                <h4 className="forms-info-header">2. Я испытываю страх, кажется что что-то ужасное может вот-вот случиться</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="2"
                                        value="0"
                                        checked={answers[1] === 0}
                                        onChange={() => handleAnswerChange(1, 0)}
                                    />
                                    <span className="radio-custom"></span>
                                    0 – совсем не испытываю
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
                                    1 - иногда, но это меня не беспокоит
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
                                    2 - да, это так, но страх не очень велик
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
                                    3 - определенно это так, но страх очень велик
                                </label>
                            </div>
                            <div className="radio-group-item">
                                <h4 className="forms-info-header">3. Меня беспокоят тревожные мысли</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="3"
                                        value="0"
                                        checked={answers[2] === 0}
                                        onChange={() => handleAnswerChange(2, 0)}
                                    />
                                    <span className="radio-custom"></span>
                                    0 - совсем не беспокоят
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
                                    1 - только время от времени и не так часто
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
                                    2 - большую часть времени
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
                                    3 - постоянные мысли крутятся у меня в голове
                                </label>
                            </div>
                            <div className="radio-group-item">
                                <h4 className="forms-info-header">4. Я легко могу присесть и расслабиться</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="4"
                                        value="0"
                                        checked={answers[3] === 0}
                                        onChange={() => handleAnswerChange(3, 0)}
                                    />
                                    <span className="radio-custom"></span>
                                    0 - определенно, это так
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
                                    1 - наверное, это так
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
                                    2 - лишь изредка это так
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
                                    3 - совсем не могу
                                </label>
                            </div>
                            <div className="radio-group-item">
                                <h4 className="forms-info-header">5. Я испытываю внутреннее напряжение или дрожь</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="5"
                                        value="0"
                                        checked={answers[4] === 0}
                                        onChange={() => handleAnswerChange(4, 0)}
                                    />
                                    <span className="radio-custom"></span>
                                    0 - совсем не испытываю
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
                                    1 - иногда
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
                                    2 - часто
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
                                    3 - очень часто
                                </label>
                            </div>
                            <div className="radio-group-item">
                                <h4 className="forms-info-header">6. Я испытываю неусидчивость, мне постоянно нужно двигаться</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="6"
                                        value="0"
                                        checked={answers[5] === 0}
                                        onChange={() => handleAnswerChange(5, 0)}
                                    />
                                    <span className="radio-custom"></span>
                                    0 - совсем не испытываю
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
                                    1 - лишь изредка это так
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
                                    2 - наверное, это так
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
                                    3 - определенно, это так
                                </label>
                            </div>
                            <div className="radio-group-item">
                                <h4 className="forms-info-header">7. У меня бывает внезапное чувство паники</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="7"
                                        value="0"
                                        checked={answers[6] === 0}
                                        onChange={() => handleAnswerChange(6, 0)}
                                    />
                                    <span className="radio-custom"></span>
                                    0 - совсем не бывает
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
                                    1 - не так уж часто
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
                                    2 - довольно часто
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
                                    3 - очень часто
                                </label>
                            </div>
                            <div className="radio-group-item">
                                <h4 className="forms-info-header">8. То, что приносило мне большое удовольствие, и сейчас вызывает у меня такое же чувство</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="8"
                                        value="0"
                                        checked={answers[7] === 0}
                                        onChange={() => handleAnswerChange(7, 0)}
                                    />
                                    <span className="radio-custom"></span>
                                    0 - определенно, это так
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
                                    1 - наверное, это так
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
                                    2 - лишь в очень малой степени это так
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
                                    3 - совсем не так
                                </label>
                            </div>
                            <div className="radio-group-item">
                                <h4 className="forms-info-header">9. Я способен рассмеяться и увидеть в том или ином событии смешное</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="9"
                                        value="0"
                                        checked={answers[8] === 0}
                                        onChange={() => handleAnswerChange(8, 0)}
                                    />
                                    <span className="radio-custom"></span>
                                    0 - определенно, это так
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="9"
                                        value="1"
                                        checked={answers[8] === 1}
                                        onChange={() => handleAnswerChange(8, 1)}
                                    />
                                    <span className="radio-custom"></span>
                                    1 - наверное, это так
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
                                    2 - лишь в очень малой степени это так
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="9"
                                        value="3"
                                        checked={answers[8] === 3}
                                        onChange={() => handleAnswerChange(8, 3)}
                                    />
                                    <span className="radio-custom"></span>
                                    3 - совсем не так
                                </label>
                            </div>
                            <div className="radio-group-item">
                                <h4 className="forms-info-header">10. Я испытываю бодрость</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="10"
                                        value="0"
                                        checked={answers[9] === 0}
                                        onChange={() => handleAnswerChange(9, 0)}
                                    />
                                    <span className="radio-custom"></span>
                                    0 - практически все время
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="10"
                                        value="1"
                                        checked={answers[9] === 1}
                                        onChange={() => handleAnswerChange(9, 1)}
                                    />
                                    <span className="radio-custom"></span>
                                    1 - иногда
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
                                    2 - очень редко
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="10"
                                        value="3"
                                        checked={answers[9] === 3}
                                        onChange={() => handleAnswerChange(9, 3)}
                                    />
                                    <span className="radio-custom"></span>
                                    3 - совсем не испытываю
                                </label>
                            </div>
                            <div className="radio-group-item">
                                <h4 className="forms-info-header">11. Мне кажется, что я стал все делать очень медленно</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="11"
                                        value="0"
                                        checked={answers[10] === 0}
                                        onChange={() => handleAnswerChange(10, 0)}
                                    />
                                    <span className="radio-custom"></span>
                                    0 - совсем нет
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="11"
                                        value="1"
                                        checked={answers[10] === 1}
                                        onChange={() => handleAnswerChange(10, 1)}
                                    />
                                    <span className="radio-custom"></span>
                                    1 - иногда
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="11"
                                        value="2"
                                        checked={answers[10] === 2}
                                        onChange={() => handleAnswerChange(10, 2)}
                                    />
                                    <span className="radio-custom"></span>
                                    2 - часто
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="11"
                                        value="3"
                                        checked={answers[10] === 3}
                                        onChange={() => handleAnswerChange(10, 3)}
                                    />
                                    <span className="radio-custom"></span>
                                    3 - практически все время
                                </label>
                            </div>
                            <div className="radio-group-item">
                                <h4 className="forms-info-header">12. Я не слежу за своей внешностью</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="12"
                                        value="0"
                                        checked={answers[11] === 0}
                                        onChange={() => handleAnswerChange(11, 0)}
                                    />
                                    <span className="radio-custom"></span>
                                    0 - слежу, как и раньше
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="12"
                                        value="1"
                                        checked={answers[11] === 1}
                                        onChange={() => handleAnswerChange(11, 1)}
                                    />
                                    <span className="radio-custom"></span>
                                    1 - может быть, я стал меньше уделять этому времени
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="12"
                                        value="2"
                                        checked={answers[11] === 2}
                                        onChange={() => handleAnswerChange(11, 2)}
                                    />
                                    <span className="radio-custom"></span>
                                    2 - не уделяю этому столько времени, сколько нужно
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="12"
                                        value="3"
                                        checked={answers[11] === 3}
                                        onChange={() => handleAnswerChange(11, 3)}
                                    />
                                    <span className="radio-custom"></span>
                                    3 - определенно, это так
                                </label>
                            </div>
                            <div className="radio-group-item">
                                <h4 className="forms-info-header">13. Я считаю, что мои дела (занятия, увлечения) могут принести мне чувство удовлетворения</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="13"
                                        value="0"
                                        checked={answers[12] === 0}
                                        onChange={() => handleAnswerChange(12, 0)}
                                    />
                                    <span className="radio-custom"></span>
                                    0 - точно так же, как и обычно
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="13"
                                        value="1"
                                        checked={answers[12] === 1}
                                        onChange={() => handleAnswerChange(12, 1)}
                                    />
                                    <span className="radio-custom"></span>
                                    1 - да, но не в той степени, как раньше
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="13"
                                        value="2"
                                        checked={answers[12] === 2}
                                        onChange={() => handleAnswerChange(12, 2)}
                                    />
                                    <span className="radio-custom"></span>
                                    2 - значительно меньше, чем обычно
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="13"
                                        value="3"
                                        checked={answers[12] === 3}
                                        onChange={() => handleAnswerChange(12, 3)}
                                    />
                                    <span className="radio-custom"></span>
                                    3 - совсем не так
                                </label>
                            </div>
                            <div className="radio-group-item-last">
                                <h4 className="forms-info-header">14. Я могу получить удовольствие от хорошей книги, радио- или телепрограммы</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="14"
                                        value="0"
                                        checked={answers[13] === 0}
                                        onChange={() => handleAnswerChange(13, 0)}
                                    />
                                    <span className="radio-custom"></span>
                                    0 - часто
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="14"
                                        value="1"
                                        checked={answers[13] === 1}
                                        onChange={() => handleAnswerChange(13, 1)}
                                    />
                                    <span className="radio-custom"></span>
                                    1 - иногда
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="14"
                                        value="2"
                                        checked={answers[13] === 2}
                                        onChange={() => handleAnswerChange(13, 2)}
                                    />
                                    <span className="radio-custom"></span>
                                    2 - редко
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="14"
                                        value="3"
                                        checked={answers[13] === 3}
                                        onChange={() => handleAnswerChange(13, 3)}
                                    />
                                    <span className="radio-custom"></span>
                                    3 - очень редко
                                </label>
                            </div>
                        </div>
                    </form>
                    <button type='submit' className='button_calculate' onClick={calculateScores}>Рассчитать</button>
                </div>
                <div className='forms_block'>
                    <div className='forms_result'>
                        <h2 className='form_result_lead'>Результаты</h2>
                        <p className='form_result_item'>Сумма баллов тревоги: {anxietyScore}</p>
                        <p className='form_result_item'>Уровень тревоги: {anxietyLevel}</p>
                        <p className='form_result_item'>Сумма баллов депрессии: {depressionScore}</p>
                        <p className='form_result_item'>Уровень депрессии: {depressionLevel}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HadsPage;