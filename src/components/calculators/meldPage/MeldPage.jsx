import React, { useState } from 'react';
import './MeldPage.scss';
import Header from '../../header/header';


function MeldPage() {
    const [creatinine, setCreatinine] = useState('');
    const [bilirubin, setBilirubin] = useState('');
    const [inr, setInr] = useState('');
    const [dialysis, setDialysis] = useState(false);
    const [result, setResult] = useState(null);
    const [survivalRate, setSurvivalRate] = useState('');

    const calculateMELD = (e) => {
        e.preventDefault();

        const creatinineNum = parseFloat(creatinine);
        const bilirubinNum = parseFloat(bilirubin);
        const inrNum = parseFloat(inr);

        const creatinineValue = dialysis ? 4 : creatinineNum;

        const meld = 11.2 * Math.log(inrNum) + 9.57 * Math.log(creatinineValue) + 3.78 * Math.log(bilirubinNum) + 6.43;

        setResult(meld);

        let survival;
        if (meld < 9) {
            survival = '2.9%';
        } else if (meld >= 10 && meld <= 19) {
            survival = '5.7%';
        } else if (meld >= 20 && meld <= 29) {
            survival = '23.5%';
        } else if (meld >= 30 && meld <= 39) {
            survival = '60%';
        } else {
            survival = '81%';
        }
        setSurvivalRate(survival);
    };
    return (
        <div className='wrapper_imt'>
            <div className='header-1'>
                <Header />
            </div>
            <div className="imt_wrapper">
                <div className="imt_block">
                    <h2 className='imt_tanner'>Шкала MELD</h2>
                </div>
                <div className='pictures_block'>
                    <form className='form_wrap' onSubmit={calculateMELD}>
                        <div className="form_group">
                            <label htmlFor="creatinine">Креатинин плазмы</label>
                            <input
                                id="creatinine"
                                className='form_input'
                                type="number"
                                value={creatinine}
                                onChange={(e) => setCreatinine(e.target.value)}
                                required
                            />
                            <label>мг/дл</label>
                        </div>
                        <div className="form_group">
                            <label htmlFor="bilirubin">Билирубин</label>
                            <input
                                id="bilirubin"
                                className='form_input'
                                type="number"
                                value={bilirubin}
                                onChange={(e) => setBilirubin(e.target.value)}
                                required
                            />
                            <label>мг/дл</label>
                        </div>
                        <div className="form_group">
                            <label htmlFor="inr">МНО</label>
                            <input
                                id="inr"
                                className='form_input'
                                type="number"
                                value={inr}
                                onChange={(e) => setInr(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form_group">
                            <label htmlFor="dialysis">Диализ дважды за предыдущую неделю</label>
                            <select
                                id="dialysis"
                                className='form_input'
                                value={dialysis ? 'yes' : 'no'}
                                onChange={(e) => setDialysis(e.target.value === 'yes')}
                            >
                                <option value="no">Нет</option>
                                <option value="yes">Да</option>
                            </select>
                        </div>
                        <button type='submit' className='button_calculate'>Готово</button>
                    </form>
                </div>
                <div className='pictures_block'>
                    <h2 className='imt_lead'>Результаты</h2>
                    {result !== null && (
                        <>
                            <p>Индекс MELD: {result.toFixed(2)}</p>
                            <p>3-х месячная выживаемость: {survivalRate}</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MeldPage;