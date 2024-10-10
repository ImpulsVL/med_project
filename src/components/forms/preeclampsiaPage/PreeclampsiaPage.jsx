import React, {useState} from 'react';
import './PreeclampsiaPage.scss';
import PDFIcon from '../icons/pdf.svg';
import Header from '../../header/header';

function PreeclampsiaPage() {
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
        11: false,
        12: false,
        13: false,
        14: false,
        15: false
    });

    const [KnownRisksFactorValue] = useState({
        1: 2,
        2: 2,
        3: 2,
        4: 2,
        5: 2,
        6: 2,
        7: 1,
        8: 1,
        9: 1,
        10: 1,
        11: 1,
        12: 1,
        13: 1
    });
    const calculate = (e) => {
        e.preventDefault();
        let temp = 0;

        Object.keys(KnownRisksFactor).map((item) => {
            if(KnownRisksFactor[item]) {
                temp += KnownRisksFactorValue[item.toString()];
            }
        });

        setResult(temp);
        console.log(temp);

        interpretate(temp);
    };

    const [riskInterpretation, setRiskInterpretation] = useState('');
    const interpretate = (result) => {
        let interpretationRisk = result < 2
            ? "Низкий риск преэклампсии по личным данным"
            : "Высокий риск преэклампсии по личным данным. Рекомендован прием ацетилсалициловой кислоты с 12 недель беременности до 36 недель беременности по 150 мг/сутки вечером.";

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
                    <h2 className='forms_header'>Определение группы риска развития преэклампсии</h2>
                </div>
                <div className='forms_block'>
                    <form className='form_wrap' onSubmit={calculate}>
                        <h3 className='form_select_lead'>Факторы высокого риска</h3>
                        <label className='form_select_item'>
                            <input
                                className='input-select'
                                type='checkbox'
                                name='1'
                                checked={KnownRisksFactor[1]}
                                onChange={handleRisksChange}
                            />
                            Предшествующая беременность с преэклампсией, особенно с ранним началом и неблагоприятным исходом.
                        </label>
                        <label className='form_select_item'>
                            <input
                                className='input-select'
                                type='checkbox'
                                name='2'
                                checked={KnownRisksFactor[2]}
                                onChange={handleRisksChange}
                            />
                            Многоплодная беременность.
                        </label>
                        <label className='form_select_item'>
                            <input
                                className='input-select'
                                type='checkbox'
                                name='3'
                                checked={KnownRisksFactor[3]}
                                onChange={handleRisksChange}
                            />
                            Хроническая гипертония.
                        </label>
                        <label className='form_select_item'>
                            <input
                                className='input-select'
                                type='checkbox'
                                name='4'
                                checked={KnownRisksFactor[4]}
                                onChange={handleRisksChange}
                            />
                            Сахарный диабет 1 или 2 типа
                        </label>
                        <label className='form_select_item'>
                            <input
                                className='input-select'
                                type='checkbox'
                                name='5'
                                checked={KnownRisksFactor[5]}
                                onChange={handleRisksChange}
                            />
                            Хроническое заболевание почек.
                        </label>
                        <label className='form_select_item'>
                            <input
                                className='input-select'
                                type='checkbox'
                                name='6'
                                checked={KnownRisksFactor[6]}
                                onChange={handleRisksChange}
                            />
                            Аутоиммунные заболевания с потенциальными сосудистыми осложнениями (антифосфолипидный синдром, системная красная волчанка).
                        </label>
                        <h3 className='form_select_lead'>Умеренные факторы риска</h3>
                        <label className='form_select_item'>
                            <input
                                className='input-select'
                                type='checkbox'
                                name='7'
                                checked={KnownRisksFactor[7]}
                                onChange={handleRisksChange}
                            />
                            Первая беременность (настоящая беременность первая или в анамнезе ни одной беременности ≥24 недели)
                        </label>
                        <label className='form_select_item'>
                            <input
                                className='input-select'
                                type='checkbox'
                                name='8'
                                checked={KnownRisksFactor[8]}
                                onChange={handleRisksChange}
                            />
                            Ожирение (индекс массы тела ≥30 кг/м2).
                        </label>
                        <label className='form_select_item'>
                            <input
                                className='input-select'
                                type='checkbox'
                                name='9'
                                checked={KnownRisksFactor[9]}
                                onChange={handleRisksChange}
                            />
                            Семейный анамнез преэклампсии у матери или сестры.
                        </label>
                        <label className='form_select_item'>
                            <input
                                className='input-select'
                                type='checkbox'
                                name='10'
                                checked={KnownRisksFactor[10]}
                                onChange={handleRisksChange}
                            />
                            Возраст ≥ 35 лет.
                        </label>
                        <label className='form_select_item'>
                            <input
                                className='input-select'
                                type='checkbox'
                                name='11'
                                checked={KnownRisksFactor[11]}
                                onChange={handleRisksChange}
                            />
                            Социально-демографические характеристики (низкий социально-экономический уровень).
                        </label>
                        <label className='form_select_item'>
                            <input
                                className='input-select'
                                type='checkbox'
                                name='12'
                                checked={KnownRisksFactor[12]}
                                onChange={handleRisksChange}
                            />
                            Личные факторы риска (например, предыдущая беременность с низким весом при рождении, предыдущий неблагоприятный исход беременности (например, мертворождение), интервал >10 лет между беременностями)
                        </label>
                        <label className='form_select_item'>
                            <input
                                className='input-select'
                                type='checkbox'
                                name='13'
                                checked={KnownRisksFactor[13]}
                                onChange={handleRisksChange}
                            />
                            ЭКО
                        </label>
                    </form>
                    <button type='submit' className='button_calculate' onClick={calculate}>Рассчитать</button>
                </div>
                <div className='forms_block'>
                    <div className='forms_result'>
                        <h2 className='form_result_lead'>Результаты</h2>
                        <p className='form_result_item'>Сумма баллов</p>
                        <p className='form_result_item'>{result}</p>
                        <p className='form_result_item'>Категория</p>
                        <p className='form_result_item'>{Risk}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PreeclampsiaPage;