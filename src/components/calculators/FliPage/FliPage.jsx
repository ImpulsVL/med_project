import React, { useState } from 'react';
import './FliPage.scss';
import Header from '../../header/header';
function FliPage() {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [waist, setWaist] = useState('');
    const [ggt, setGgt] = useState('');
    const [triglycerides, setTriglycerides] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');

    const calculateFLI = (e) => {
        e.preventDefault();
        setError('');

        if (waist < 20 || waist > 240) {
            setError('Окружность талии должна быть от 20 до 240 см.');
            return;
        }

        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters);

        const lp = 0.953 * Math.log(triglycerides) + 0.139 * bmi + 0.718 * Math.log(ggt) + 0.053 * waist - 15.745;

        const fli = (Math.exp(lp) / (1 + Math.exp(lp))) * 100;

        setResult(fli);
    };

    return (
        <div className='wrapper_imt'>
            <div className='header-1'>
                <Header />
            </div>
            <div className="imt_wrapper">
                <div className="imt_block">
                    <h2 className='imt_tanner'>Индекс стеатоза печени FLI. Калькулятор</h2>
                </div>
                <div className='pictures_block'>
                    <form className='form_wrap' onSubmit={calculateFLI}>
                        <div className="form_group">
                            <label htmlFor="height">Рост</label>
                            <input
                                id="height"
                                className='form_input'
                                type="number"
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                                required
                            />
                            <label>см</label>
                        </div>
                        <div className="form_group">
                            <label htmlFor="weight">Вес</label>
                            <input
                                id="weight"
                                className='form_input'
                                type="number"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                                required
                            />
                            <label>кг</label>
                        </div>
                        <div className="form_group">
                            <label htmlFor="waist">Окружность талии</label>
                            <input
                                id="waist"
                                className='form_input'
                                type="number"
                                value={waist}
                                onChange={(e) => setWaist(e.target.value)}
                                required
                            />
                            <label>см</label>
                        </div>
                        <div className="form_group">
                            <label htmlFor="ggt">Гамма-глутамилтранспептидаза</label>
                            <input
                                id="ggt"
                                className='form_input'
                                type="number"
                                value={ggt}
                                onChange={(e) => setGgt(e.target.value)}
                                required
                            />
                            <label>ед/л</label>
                        </div>
                        <div className="form_group">
                            <label htmlFor="triglycerides">Триглицериды</label>
                            <input
                                id="triglycerides"
                                className='form_input'
                                type="number"
                                value={triglycerides}
                                onChange={(e) => setTriglycerides(e.target.value)}
                                required
                            />
                            <label>мг/дл</label>
                        </div>
                        <button type='submit' className='button_calculate'>Готово</button>
                    </form>
                    {error && <p className="error_message">{error}</p>}
                </div>
                <div className='pictures_block'>
                    <h2 className='imt_lead'>Результаты</h2>
                    {result !== null && (
                        <>
                            <p>Индекс стеатоза печени FLI: {result.toFixed(2)}</p>
                            {result < 30 && <p>Результат свидетельствует об отсутствии стеатоза печени.</p>}
                            {result >= 30 && result < 60 && <p>Неопределенный результат.</p>}
                            {result >= 60 && <p> Вероятность стеатоза больше  78 %.</p>}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default FliPage;