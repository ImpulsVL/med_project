import React, {useState} from 'react';
import './PmdrPage.scss';
import PDFIcon from '../icons/pdf.svg';
import Header from '../../header/header';

function PmdrPage() {
    const [result, setResult] = useState(0);
    const [Risk, setRisk] = useState('');
    const [KnownRisksFactor, setKnownRisksCriteria] = useState({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false
    });
    const calculate = (e) => {
        e.preventDefault();
        let temp = 0;

        Object.keys(KnownRisksFactor).map((item) => {
            if(KnownRisksFactor[item]) {
                temp += 1;
            }
        });

        setResult(temp);
        console.log(temp);

        interpretate(temp);
    };

    const [riskInterpretation, setRiskInterpretation] = useState('');
    const interpretate = (result) => {
        let interpretationRisk = result < 5
            ? "Критерии диагноза «предменструальное дисфорическое расстройство» не соблюдаются. Пожалуйста, обратитесь к врачу."
            : "Предменструальное дисфорическое расстройство. Пожалуйста, обратитесь к врачу.";
        setRisk(interpretationRisk);
    };
    const handleRisksChange = (e) => {
        const { name, checked } = e.target;
        setKnownRisksCriteria(prev => ({ ...prev, [name]: checked }));
    };

    return (
        <div className='wrapper_forms'>
            <div className='header-1'>
                <Header />
            </div>
            <div className="forms_wrapper">
                <div className="forms_block_header">
                    <h2 className='forms_header'>Определение диагноза "ПМДР"</h2>
                </div>
                <div className="forms_block">
                    <p>ПМДР — предменструальное дисфорическое расстройство. Симптомы встречаются в большинстве циклов за предшествующий год и выражены настолько, что серьезно ухудшают качество жизни. По крайней мере 5 из них появляются за неделю до начала менструации и сохраняются несколько дней от ее начала.</p>
                </div>
                <div className='forms_block'>
                    <form className='form_wrap' onSubmit={calculate}>
                        <h3 className='form_select_lead'>Выберите симптомы</h3>
                        <label className='form_select_item'>
                            <input
                                className='input-select'
                                type='checkbox'
                                name='1'
                                value="1"
                                checked={KnownRisksFactor[1]}
                                onChange={handleRisksChange}
                            />
                            Эмоциональная лабильность: плаксивость, быстрая смена настроения
                        </label>
                        <label className='form_select_item'>
                            <input
                                className='input-select'
                                type='checkbox'
                                name='2'
                                value="1"
                                checked={KnownRisksFactor[2]}
                                onChange={handleRisksChange}
                            />
                            Гневливость, раздражительность
                        </label>
                        <label className='form_select_item'>
                            <input
                                className='input-select'
                                type='checkbox'
                                name='3'
                                value="1"
                                checked={KnownRisksFactor[3]}
                                onChange={handleRisksChange}
                            />
                            Чувство безысходности, тревоги, самоуничижительные мысли
                        </label>
                        <label className='form_select_item'>
                            <input
                                className='input-select'
                                type='checkbox'
                                name='4'
                                value="1"
                                checked={KnownRisksFactor[4]}
                                onChange={handleRisksChange}
                            />
                            Напряженность, беспокойство, чувство нервозности
                        </label>
                        <label className='form_select_item'>
                            <input
                                className='input-select'
                                type='checkbox'
                                name='5'
                                value="1"
                                checked={KnownRisksFactor[5]}
                                onChange={handleRisksChange}
                            />
                            Трудности с концентрацией внимания
                        </label>
                        <label className='form_select_item'>
                            <input
                                className='input-select'
                                type='checkbox'
                                name='6'
                                value="1"
                                checked={KnownRisksFactor[6]}
                                onChange={handleRisksChange}
                            />
                            Усиление аппетита, склонность к перееданию
                        </label>
                        <label className='form_select_item'>
                            <input
                                className='input-select'
                                type='checkbox'
                                name='7'
                                value="1"
                                checked={KnownRisksFactor[7]}
                                onChange={handleRisksChange}
                            />
                            Снижение интереса к обычным занятиям
                        </label>
                        <label className='form_select_item'>
                            <input
                                className='input-select'
                                type='checkbox'
                                name='8'
                                value="1"
                                checked={KnownRisksFactor[8]}
                                onChange={handleRisksChange}
                            />
                            Быстрая утомляемость, слабость
                        </label>
                        <label className='form_select_item'>
                            <input
                                className='input-select'
                                type='checkbox'
                                name='9'
                                value="1"
                                checked={KnownRisksFactor[9]}
                                onChange={handleRisksChange}
                            />
                            Чувство подавленности или потери контроля
                        </label>
                        <label className='form_select_item'>
                            <input
                                className='input-select'
                                type='checkbox'
                                name='10'
                                value="1"
                                checked={KnownRisksFactor[10]}
                                onChange={handleRisksChange}
                            />
                            Напряжение в молочных железах, вздутие живота, набор веса, боли в мышцах/суставах
                        </label>
                        <label className='form_select_item'>
                            <input
                                className='input-select'
                                type='checkbox'
                                name='11'
                                value="1"
                                checked={KnownRisksFactor[11]}
                                onChange={handleRisksChange}
                            />
                            Нарушения сна
                        </label>
                    </form>
                    <button type='submit' className='button_calculate' onClick={calculate}>Рассчитать</button>
                </div>
                <div className='forms_block'>
                    <div className='forms_result'>
                        <h2 className='form_result_lead'>Результаты</h2>
                        <p className='form_result_item'>Категория</p>
                        <p className='form_result_item'>{Risk}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PmdrPage;