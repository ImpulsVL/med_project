import React, { useState, useEffect } from 'react';
import './PedtPage.scss';
import PDFIcon from '../icons/pdf.svg';
import Header from '../../header/header';

function PedtPage() {
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
        fetch('http://assistant-admin.pavlov-mc.ru/api/getpdf?code=PedtPage')
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
        let interpretationRisk = result < 9
            ? "низкая вероятность ПЭ"
            : result < 11 ? "возможно наличие ПЭ" : "Наличие ПЭ" ;
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
                    <h2 className='forms_header'>Опросник по диагностике преждевременной эякуляции (PEDT)</h2>
                </div>
                <div className='forms_block'>
                    <div className='pdf-list'>
                        {pdfList.map((pdf, index) => (
                            <a key={index} href={pdf.url} target="_blank" rel="noopener noreferrer">
                                <div className='pdf-item'>
                                    <img src={PDFIcon} alt="" />
                                    {pdf.name}
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
                <div className='forms_block'>
                    <form className='form_wrap' onSubmit={calculate}>
                        <div className='radio-group'>
                            <div className="radio-group-item">
                                <h4 className="forms-info-header">1. Насколько трудно для Вас задерживать эякуляцию?</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="1"
                                        value="0"
                                        onChange={handleRisksChange}
                                        defaultChecked={true}
                                    />
                                    <span className="radio-custom"></span>
                                    0 – Вообще трудно
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="1"
                                        value="1"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    1 – Подчас трудно
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="1"
                                        value="2"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    2 – Умеренно трудно
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="1"
                                        value="3"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    3 – Очень трудно
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="1"
                                        value="4"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    4 – Чрезвычайно трудно
                                </label>
                            </div>
                            <div className="radio-group-item">
                                <h4 className="forms-info-header">2. Вы эякулируете прежде, чем желаете?</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="2"
                                        value="0"
                                        onChange={handleRisksChange}
                                        defaultChecked={true}
                                    />
                                    <span className="radio-custom"></span>
                                    0 - почти никогда или никогда
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="2"
                                        value="1"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    1 - меньше чем в половине случаев
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="2"
                                        value="2"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    2 - приблизительно в половине случаев
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="2"
                                        value="3"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    3 - больше чем в половине случаев
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="2"
                                        value="4"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    4 - Почти всегда или всегда
                                </label>
                            </div>
                            <div className="radio-group-item">
                                <h4 className="forms-info-header">3. Вы эякулируете при очень малой стимуляции?</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="3"
                                        value="0"
                                        onChange={handleRisksChange}
                                        defaultChecked={true}
                                    />
                                    <span className="radio-custom"></span>
                                    0 - почти никогда или никогда
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="3"
                                        value="1"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    1 - меньше чем в половине случаев
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="3"
                                        value="2"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    2 - приблизительно в половине случаев
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="3"
                                        value="3"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    3 - больше чем в половине случаев
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="3"
                                        value="4"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    4 - Почти всегда или всегда
                                </label>
                            </div>
                            <div className="radio-group-item">
                                <h4 className="forms-info-header">4. Вы чувствуете себя расстроенным из-за того, что эякулируете прежде, чем хотите?</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="4"
                                        value="0"
                                        onChange={handleRisksChange}
                                        defaultChecked={true}
                                    />
                                    <span className="radio-custom"></span>
                                    0 - почти никогда или никогда
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="4"
                                        value="1"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    1 - меньше чем в половине случаев
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="4"
                                        value="2"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    2 - приблизительно в половине случаев
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="4"
                                        value="3"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    3 - больше чем в половине случаев
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="4"
                                        value="4"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    4 - Почти всегда или всегда
                                </label>
                            </div>
                            <div className="radio-group-item">
                                <h4 className="forms-info-header">5. Насколько Вы обеспокоены тем, что длительность вашего полового акта оставляет вашего партнера сексуально неудовлетворенным?</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="5"
                                        value="0"
                                        onChange={handleRisksChange}
                                        defaultChecked={true}
                                    />
                                    <span className="radio-custom"></span>
                                    0 - почти никогда или никогда
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="5"
                                        value="1"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    1 - меньше чем в половине случаев
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="5"
                                        value="2"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    2 - приблизительно в половине случаев
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="5"
                                        value="3"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    3 - больше чем в половине случаев
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="5"
                                        value="4"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    4 - Почти всегда или всегда
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

export default PedtPage;