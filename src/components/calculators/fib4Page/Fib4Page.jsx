import React, { useState } from 'react';
import './Fib4Page.scss';
import Header from '../../header/header';

function Fib4Page() {
    const [age, setAge] = useState('');
    const [plt, setPlt] = useState('');
    const [ast, setAst] = useState('');
    const [alt, setAlt] = useState('');
    const [result, setResult] = useState(null);
    const [category, setCategory] = useState('');

    const calculateFIB4 = (e) => {
        e.preventDefault();

        const ageNum = parseFloat(age);
        const pltNum = parseFloat(plt);
        const astNum = parseFloat(ast);
        const altNum = parseFloat(alt);

        const fib4 = ageNum * (astNum / pltNum) * Math.sqrt(altNum);

        setResult(fib4);

        if (fib4 > 3.25) {
            setCategory('Стадия фиброза F3-F4');
        } else if (fib4 < 1.45) {
            setCategory('Стадия фиброза F0-F2');
        } else {
            setCategory('Сомнительный результат');
        }
    };

    return (
        <div className='wrapper_imt'>
            <div className='header-1'>
                <Header />
            </div>
            <div className="imt_wrapper">
                <div className="imt_block">
                    <h2 className='imt_tanner'>Индекс фиброза FIB-4. Калькулятор</h2>
                </div>
                <div className='pictures_block'>
                    <form className='form_wrap' onSubmit={calculateFIB4}>
                        <div className="form_group">
                            <label htmlFor="age">Возраст</label>
                            <input
                                id="age"
                                className='form_input'
                                type="number"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                required
                            />
                            <label>лет</label>
                        </div>
                        <div className="form_group">
                            <label htmlFor="trombo">Тромбоциты</label>
                            <input
                                id="trombo"
                                className='form_input'
                                type="number"
                                value={plt}
                                onChange={(e) => setPlt(e.target.value)}
                                required
                            />
                            <label>10^9</label>
                        </div>
                        <div className="form_group">
                            <label htmlFor="aspar">Аспартатаминотрансфераза</label>
                            <input
                                id="aspar"
                                className='form_input'
                                type="number"
                                value={ast}
                                onChange={(e) => setAst(e.target.value)}
                                required
                            />
                            <label>ед/л</label>
                        </div>
                        <div className="form_group">
                            <label htmlFor="alan">Аланинаминотрансфераза</label>
                            <input
                                id="alan"
                                className='form_input'
                                type="number"
                                value={alt}
                                onChange={(e) => setAlt(e.target.value)}
                                required
                            />
                            <label>ед/л</label>
                        </div>
                        <button type='submit' className='button_calculate'>Готово</button>
                    </form>
                </div>
                <div className='pictures_block'>
                    <h2 className='imt_lead'>Результаты</h2>
                    {result !== null && (
                        <>
                            <p>Индекс фиброза FIB-4: {result.toFixed(2)}</p>
                            <p>Категория: {category}</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Fib4Page;