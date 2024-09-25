import React, { useState } from 'react';
import './ImtPage.scss';
import Header from '../../header/header';

function ImtPage() {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const [category, setCategory] = useState('');
    const [normalWeightRange, setNormalWeightRange] = useState('');

    const calculateBmi = (e) => {
        e.preventDefault();
        const heightInMeters = height / 100;
        const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);

        setBmi(bmiValue);
        let category = '';
        let normalWeightMin = (18.5 * (heightInMeters * heightInMeters)).toFixed(1);
        let normalWeightMax = (24.9 * (heightInMeters * heightInMeters)).toFixed(1);
        setNormalWeightRange(`${normalWeightMin} кг - ${normalWeightMax} кг`);

        if (bmiValue < 16) {
            category = 'Выраженный дефицит массы тела';
        } else if (bmiValue >= 16 && bmiValue <= 18.4) {
            category = 'Недостаточная (дефицит) масса тела';
        } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
            category = 'Норма';
        } else if (bmiValue >= 25 && bmiValue <= 29.9) {
            category = 'Избыточная масса тела (предожирение)';
        } else if (bmiValue >= 30 && bmiValue <= 34.9) {
            category = 'Ожирение первой степени';
        } else if (bmiValue >= 35 && bmiValue <= 39.9) {
            category = 'Ожирение второй степени';
        } else {
            category = 'Ожирение третьей степени (морбидное)';
        }

        setCategory(category);
    };

    return (
        <div className='wrapper_imt'>
            <div className='header-1'>
                <Header />
            </div>
            <div className="imt_wrapper">
                <div className="imt_block">
                    <h2 className='imt_tanner'>Калькулятор для расчета индекса массы тела (ИМТ)</h2>
                </div>
                <div className='pictures_block'>
                    <form className='form_wrap' onSubmit={calculateBmi}>
                        <div className="form_group">
                            <label htmlFor="height">Рост (см)</label>
                            <input
                                id="height"
                                className='form_input'
                                type="number"
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form_group">
                            <label htmlFor="weight">Вес (кг)</label>
                            <input
                                id="weight"
                                className='form_input'
                                type="number"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                                required
                            />
                        </div>
                        <button type='submit' className='button_calculate'>Готово</button>
                    </form>
                </div>
                <div className='pictures_block'>
                    <h2 className='imt_lead'>Результаты</h2>
                    <p>Индекс массы тела: {bmi}</p>
                    <p>Категория: {category}</p>
                    <p>Диапазон нормального веса: {normalWeightRange}</p>
                </div>
                <div className='pictures_block'>
                    <p className='imt_lead'>Индекс массы тела является показателем отношения веса и роста человека.</p>
                </div>
                <div className='pictures_block'>
                    <h2 className='imt_lead'>Сводная таблица значений</h2>
                    <ul className='imt_content_list'>
                        <li className='imt_content_item'>
                            <span>менее 16</span>
                            – Выраженный дефицит массы тела
                        </li>
                        <li className='imt_content_item'>
                            <span>16—18,4</span>
                            – Недостаточная (дефицит) масса тела
                        </li>
                        <li className='imt_content_item'>
                            <span>18,5—24,9</span>
                            – Норма
                        </li>
                        <li className='imt_content_item'>
                            <span>25—29,9</span>
                            – Избыточная масса тела (предожирение)
                        </li>
                        <li className='imt_content_item'>
                            <span>30—34,4</span>
                            – Ожирение первой степени
                        </li>
                        <li className='imt_content_item'>
                            <span>35—39,9</span>
                            – Ожирение второй степени
                        </li>
                        <li className='imt_content_item'>
                            <span>40 и более</span>
                            – Ожирение третьей степени (морбидное)
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ImtPage;