import React, { useState } from 'react';
import './RomaPage.scss';
import Header from '../../header/header';

function RomaPage() {
    const [ca125, setCa125] = useState('');
    const [he4, setHe4] = useState('');
    const [menopauseStatus, setMenopauseStatus] = useState('premenopause'); // default to premenopause
    const [romaIndex, setRomaIndex] = useState(null);
    const [riskInterpretation, setRiskInterpretation] = useState('');

    // Function to calculate ROMA index
    const calculateRomaIndex = (e) => {
        e.preventDefault();

        // Convert inputs to numbers
        const ca125Value = parseFloat(ca125);
        const he4Value = parseFloat(he4);

        // Check if inputs are valid
        if (!isNaN(ca125Value) && !isNaN(he4Value)) {
            let romaValue;

            // Apply different formulas based on menopause status
            if (menopauseStatus === 'premenopause') {
                romaValue = (Math.exp(-12.0 + (2.38 * Math.log(he4Value)) + (0.0626 * Math.log(ca125Value)))) / (1 + Math.exp(-12.0 + (2.38 * Math.log(he4Value)) + (0.0626 * Math.log(ca125Value)))) * 100;
            } else {
                romaValue = (Math.exp(-8.09 + (1.04 * Math.log(he4Value)) + (0.732 * Math.log(ca125Value)))) / (1 + Math.exp(-8.09 + (1.04 * Math.log(he4Value)) + (0.732 * Math.log(ca125Value)))) * 100;
            }

            setRomaIndex(romaValue.toFixed(2));

            // Set risk interpretation based on the calculated value
            if (menopauseStatus === 'premenopause') {
                if (romaValue < 7.39) {
                    setRiskInterpretation('низкий риск эпителиального рака яичников');
                } else {
                    setRiskInterpretation('высокий риск эпителиального рака яичников');
                }
            } else {
                if (romaValue < 25.29) {
                    setRiskInterpretation('низкий риск эпителиального рака яичников');
                } else {
                    setRiskInterpretation('высокий риск эпителиального рака яичников');
                }
            }
        }
    };

    return (
        <div className='wrapper_roma'>
            <div className='header-1'>
                <Header />
            </div>
            <div className="roma_wrapper">
                <div className="roma_block">
                    <h2 className='roma_tanner'>Калькулятор для оценки риска эпителиального рака яичников (индекс ROMA)</h2>
                </div>
                <div className='pictures_block'>
                    <form className='form_wrap' onSubmit={calculateRomaIndex}>
                        <div className='form_group'>
                            <label>Возрастная категория:</label>
                            <div className='radio_group'>
                                <label>
                                    <input
                                        type="radio"
                                        name="menopauseStatus"
                                        value="premenopause"
                                        checked={menopauseStatus === 'premenopause'}
                                        onChange={() => setMenopauseStatus('premenopause')}
                                    />
                                    <span className="radio_custom"></span>
                                    Пременопауза
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="menopauseStatus"
                                        value="postmenopause"
                                        checked={menopauseStatus === 'postmenopause'}
                                        onChange={() => setMenopauseStatus('postmenopause')}
                                    />
                                    <span className="radio_custom"></span>
                                    Постменопауза
                                </label>
                            </div>
                        </div>
                        <div className="form_group">
                            <label htmlFor="ca125">Значение CA125:</label>
                            <input
                                id="ca125"
                                className='form_input'
                                type="number"
                                value={ca125}
                                onChange={(e) => setCa125(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form_group">
                            <label htmlFor="he4">Значение HE4</label>
                            <input
                                id="he4"
                                className='form_input'
                                type="number"
                                value={he4}
                                onChange={(e) => setHe4(e.target.value)}
                                required
                            />
                        </div>
                        <button type='submit' className='button_calculate'>Рассчитать</button>
                    </form>
                </div>
                <div className='pictures_block'>
                    <h2 className='roma_lead'>Результаты</h2>
                    <p>ROMA индекс: {romaIndex !== null ? romaIndex : '-'}</p>
                    <p>Интерпретация: {riskInterpretation !== '' ? riskInterpretation : '-'}</p>
                </div>
                <div className='pictures_block'>
                    <h2 className='roma_lead'>Стратификация риска рака яичников в зависимости от значений индекса ROMA</h2>
                    <p className='roma_lead'>Пременопауза:</p>
                    <p className='roma_lead'>меньше 7,39% - низкий риск эпителиального рака яичников</p>
                    <p className='roma_lead'>больше 7,39% - высокий риск эпителиального рака яичников</p>
                    <p className='roma_lead'></p>
                    <p className='roma_lead'>Постменопауза:</p>
                    <p className='roma_lead'>меньше 25,29% - низкий риск эпителиального рака яичников</p>
                    <p className='roma_lead'>больше 25,29% - высокий риск эпителиального рака яичников</p>
                </div>
            </div>
        </div>
    );
}

export default RomaPage;