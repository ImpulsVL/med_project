import React, { useState } from 'react';
import './IsaPage.scss';
import Header from '../../header/header';

function IsaPage() {

    const [gspg, setGspg] = useState(''); // SHBG input
    const [testesterone, setTestesterone] = useState(''); // Testosterone input
    const [isa, setIsa] = useState(null); // Stores the calculated ISA

    // Function to calculate ISA
    const calculateIsa = (e) => {
        e.preventDefault();

        if (gspg && testesterone) {
            // Free Androgen Index formula: (Total Testosterone / SHBG) * 100
            const isaValue = (parseFloat(testesterone) / parseFloat(gspg)) * 100;
            setIsa(isaValue);
        }
    };

    return (
        <div className='wrapper_imt'>
            <div className='header-1'>
                <Header />
            </div>
            <div className="imt_wrapper">
                <div className="imt_block">
                    <h2 className='imt_tanner'>Калькулятор для расчета индекса свободных андрогенов (ИСА)</h2>
                </div>
                <div className='pictures_block'>
                    <form className='form_wrap' onSubmit={calculateIsa}>
                        <div className="form_group">
                            <label htmlFor="gspg">ГСПГ (SHBG) (нмоль/л)</label>
                            <input
                                id="gspg"
                                className='form_input'
                                type="number"
                                value={gspg}
                                onChange={(e) => setGspg(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form_group">
                            <label htmlFor="testesterone">Тестостерон (общий) (нмоль/л)</label>
                            <input
                                id="testesterone"
                                className='form_input'
                                type="number"
                                value={testesterone}
                                onChange={(e) => setTestesterone(e.target.value)}
                                required
                            />
                        </div>
                        <button type='submit' className='button_calculate'>Рассчитать</button>
                    </form>
                </div>
                <div className='pictures_block'>
                    <h2 className='imt_lead'>Результаты</h2>
                    {isa && <p>Индекс свободных андрогенов (ИСА): {isa.toFixed(2)}%</p>}
                </div>
                <div className='pictures_block'>
                    <p className='imt_lead'>Нормальное значение ИСА у женщин репродуктивного периода: 0,8-11%.</p>
                </div>
            </div>
        </div>
    );
}

export default IsaPage;