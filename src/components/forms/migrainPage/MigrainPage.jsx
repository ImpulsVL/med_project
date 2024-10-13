import React, { useState, useEffect } from 'react';
import './MigrainPage.scss';
import PDFIcon from '../icons/pdf.svg';
import Header from '../../header/header';

function MigrainPage() {
    const [result, setResult] = useState(0);
    const [Risk, setRisk] = useState('');
    const [KnownRisksFactorValue, setKnownRisksFactorValue] = useState({
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
        10: 0
    });
    const calculate = (e) => {
        e.preventDefault();
        let temp = 0;

        Object.values(KnownRisksFactorValue).map((item) => {
            temp += Number(item);
        });

        setResult(temp);
        console.log(temp);

        interpretate(temp);
    };

    const [riskInterpretation, setRiskInterpretation] = useState('');
    const interpretate = (result) => {
        let interpretationRisk = result > 1
            ? "Вероятность мигрени составляет 93 %. Для подтверждения диагноза стоит обратиться к врачу."
            : "Диагноз мигрень не подтвержден. Но если вы чувствуете себя плохо, стоит обратиться к врачу.";
        if (KnownRisksFactorValue[10] > 1) {
            interpretationRisk = "Высокая вероятность наличия послеродовой депрессии. За вопрос №10 получено " + KnownRisksFactorValue[10] + " балла, рекомендуется консультация психиатра";
        }
        setRisk(interpretationRisk);
    };
    const handleRisksChange = (e) => {
        const { name } = e.target;
        // setKnownRisksCriteria(prev => ({ ...prev, [name]: checked }));
        setKnownRisksFactorValue(val => ({ ...val, [name]: Number(e.target.value) }))
        console.log(e.target.value);
    };

    return (
        <div className='wrapper_forms'>
            <div className='header-1'>
                <Header />
            </div>
            <div className="forms_wrapper">
                <div className="forms_block_header">
                    <h2 className='forms_header'>Экспресс-диагностика мигренозной головной боли</h2>
                </div>
                <div className='forms_block'>
                    <form className='form_wrap' onSubmit={calculate}>
                        <div className='radio-group'>
                            <div className="radio-group-item">
                                <h4 className="forms-info-header">1. За последние три месяца ограничивала ли головная боль вашу обычную деятельность на день и дольше?</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="1"
                                        value="0"
                                        onChange={handleRisksChange}
                                        defaultChecked={true}
                                    />
                                    <span className="radio-custom"></span>
                                    Нет
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="1"
                                        value="1"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    Да
                                </label>
                            </div>
                            <div className="radio-group-item">
                                <h4 className="forms-info-header">2. Сопровождается ли головная боль чувством тошноты или рвотой?</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="2"
                                        value="0"
                                        onChange={handleRisksChange}
                                        defaultChecked={true}
                                    />
                                    <span className="radio-custom"></span>
                                    Нет
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="2"
                                        value="1"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    Да
                                </label>
                            </div>
                            <div className="radio-group-item">
                                <h4 className="forms-info-header">3. Сопровождается ли головная боль непереносимостью света?</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="3"
                                        value="0"
                                        onChange={handleRisksChange}
                                        defaultChecked={true}
                                    />
                                    <span className="radio-custom"></span>
                                    Нет
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="3"
                                        value="1"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    Да
                                </label>
                            </div>
                        </div>
                    </form>
                    <button type='submit' className='button_calculate' onClick={calculate}>Рассчитать</button>
                </div>
                <div className='forms_block'>
                    <div className='forms_result'>
                        <h2 className='form_result_lead'>Результаты</h2>
                        <p className='form_result_item'>{Risk}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MigrainPage;