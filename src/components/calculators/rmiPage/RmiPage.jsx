import React, { useState } from 'react';
import './RmiPage.scss';
import Header from '../../header/header';

function RmiPage() {
    const [ca125, setCa125] = useState('');
    const [menopauseStatus, setMenopauseStatus] = useState('premenopause');
    const [ultrasoundCriteria, setUltrasoundCriteria] = useState({
        multichamberCyst: false,
        solidComponent: false,
        bilateralLesions: false,
        ascites: false,
        metastases: false
    });
    const [rmiIndex, setRmiIndex] = useState(null);
    const [riskInterpretation, setRiskInterpretation] = useState('');

    const calculateRmiIndex = (e) => {
        e.preventDefault();

        const ca125Value = parseFloat(ca125);
        const ultrasoundScore = Object.values(ultrasoundCriteria).filter(Boolean).length;
        const menopauseScore = menopauseStatus === 'premenopause' ? 1 : 3;

        const rmi = ca125Value * ultrasoundScore * menopauseScore;
        const roundedResult = Math.round(rmi);

        setRmiIndex(roundedResult);
        interpretRmiIndex(roundedResult);
    };

    const interpretRmiIndex = (rmi) => {
        let interpretation = rmi < 200 
            ? "Чувствительность 87% и специфичность 97% для рака яичников. " 
            : "";
        
        interpretation += rmi < 250 
            ? "Низкий риск малигнизации. Рекомендована консультация врача." 
            : "Высокий риск малигнизации. Рекомендована консультация онколога.";
        
        setRiskInterpretation(interpretation);
    };

    const handleUltrasoundChange = (e) => {
        const { name, checked } = e.target;
        setUltrasoundCriteria(prev => ({ ...prev, [name]: checked }));
    };

    return (
        <div className='wrapper_rmi'>
            <div className='header-1'>
                <Header />
            </div>
            <div className="rmi_wrapper">
                <div className="rmi_block">
                    <h2 className='rmi_tanner'>Калькулятор для оценки риска эпителиального рака яичников (индекс RMI)</h2>
                </div>
                <div className='pictures_block'>
                    <form className='form_wrap' onSubmit={calculateRmiIndex}>
                        <div className='form_group'>
                            <label>Возрастная категория:</label>
                            <label className='secret'>Постменопауза определяется как отсутствие менструаций в течение одного года и  более или у пациенток 50 лет и старше, перенесших ранее гистерэктомию</label>
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
                        <div className='form_group'>
                            <label>Ультразвуковые критерии</label>
                            <label>
                                <input
                                    type='checkbox'
                                    name='multichamberCyst'
                                    checked={ultrasoundCriteria.multichamberCyst}
                                    onChange={handleUltrasoundChange}
                                />
                                Многокамерное кистозное образование
                            </label>
                            <label>
                                <input
                                    type='checkbox'
                                    name='solidComponent'
                                    checked={ultrasoundCriteria.solidComponent}
                                    onChange={handleUltrasoundChange}
                                />
                                Наличие солидного компонента
                            </label>
                            <label>
                                <input
                                    type='checkbox'
                                    name='bilateralLesions'
                                    checked={ultrasoundCriteria.bilateralLesions}
                                    onChange={handleUltrasoundChange}
                                />
                                Двусторонний характер поражения
                            </label>
                            <label>
                                <input
                                    type='checkbox'
                                    name='ascites'
                                    checked={ultrasoundCriteria.ascites}
                                    onChange={handleUltrasoundChange}
                                />
                                Асцит
                            </label>
                            <label>
                                <input
                                    type='checkbox'
                                    name='metastases'
                                    checked={ultrasoundCriteria.metastases}
                                    onChange={handleUltrasoundChange}
                                />
                                Метастазы
                            </label>
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
                        <button type='submit' className='button_calculate'>Рассчитать</button>
                    </form>
                </div>
                <div className='pictures_block'>
                    <h2 className='rmi_lead'>Результаты</h2>
                    <p>RMI индекс: {rmiIndex !== null ? rmiIndex : '-'}</p>
                    <p>Интерпретация: {riskInterpretation !== '' ? riskInterpretation : '-'}</p>
                </div>
            </div>
        </div>
    );
}

export default RmiPage;