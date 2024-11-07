import React, { useState, useEffect } from 'react';
import './KrispPage.scss';
import PDFIcon from '../icons/pdf.svg';
import Header from '../../header/header';

function KrispPage() {
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

    const [pdfList, setPdfList] = useState([]); // State to store the list of PDFs

    useEffect(() => {
        // Fetch the PDF URLs from the API
        fetch('http://assistant-admin.pavlov-mc.ru/api/getpdf?code=KrispPage')
            .then(response => response.json())
            .then(data => {
                const pdfs = data.result.map(item => {
                    let url = item.url;

                    // Check if the URL starts with 'http' or 'https', if not, prepend 'http://'
                    if (!url.startsWith('http://') && !url.startsWith('https://')) {
                        url = 'http://' + url;
                    }

                    return { ...item, url }; // Return each item with a corrected URL
                });
                setPdfList(pdfs); // Set the PDF list in state
            })
            .catch(error => console.log('Error fetching PDF URLs:', error));
    }, []);

    const [riskInterpretation, setRiskInterpretation] = useState('');
    const interpretate = (result) => {
        let interpretationRisk = result > 0
            ? "Диагноз преждевременного семяизвержения.Для подтверждения диагноза необходимо обратиться к врачу."
            : "Диагноз преждевременного семяизвержения НЕ подтвержден. но если вас что-то беспокоит, вам стоит обратиться к врачу.";
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
                <h2 className='forms_header'>Критерии преждевременного семяизвержения (КРИПС)</h2>
                <h3>Этот опросник предназначен для оценки вашей сексуальной функции за последние 4 недели и поможет врачу выявить возможные нарушения.</h3>
            </div>
            <div className='forms_block'>
                <form className='form_wrap' onSubmit={calculate}>
                    <div className='radio-group'>
                        <div className="radio-group-item">
                            <h4 className="forms-info-header">1. Ваша эякуляция возникает периодически или постоянно до введения полового члена во влагалище или менее чем через 2 минуты от начала полового акта?</h4>
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
                            <h4 className="forms-info-header">
                                2. Отмечаете ли Вы постоянную или периодическую недостаточность контроля над семяизвержением?</h4>
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
                            <h4 className="forms-info-header">3. Испытываете ли вы беспокойство по поводу состояния эякуляторной функции?</h4>
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
                        <div className="radio-group-item">
                            <h4 className="forms-info-header">4. Отмечаете ли Вы постоянную или периодическую невозможность доставлять сексуальное удовлетворение половой партнерше?</h4>
                            <label>
                                <input
                                    type="radio"
                                    name="4"
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
                                    name="4"
                                    value="1"
                                    onChange={handleRisksChange}
                                />
                                <span className="radio-custom"></span>
                                Да
                            </label>
                        </div>
                        <div className="radio-group-item">
                            <h4 className="forms-info-header">5. Являлось ли состояние Вашей сексуальной функции причиной конфликтных ситуаций с половой партнершей?</h4>
                            <label>
                                <input
                                    type="radio"
                                    name="5"
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
                                    name="5"
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

export default KrispPage;