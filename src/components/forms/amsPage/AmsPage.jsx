import React, { useState, useEffect } from 'react';
import './AmsPage.scss';
import PDFIcon from '../icons/pdf.svg';
import Header from '../../header/header';

function AmsPage() {
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
        fetch('http://test-asya.ru/api/getpdf?code=AmsPage')
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
        let interpretationRisk = result < 26
            ? "отсутствует дефицит тестостерона"
            : result < 50 ? "слабые симптомы андрогенного дефицита" : "тяжелые симптомы андрогенного дефицита" ;
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
                    <h2 className='forms_header'>Опрос по симптомам старения у мужчин (AMS)</h2>
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
                                <h4 className="forms-info-header">1. Ухудшение общего самочувствия (общее здоровья, субъективное восприятие здоровья)</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="1"
                                        value="1"
                                        onChange={handleRisksChange}
                                        defaultChecked={true}
                                    />
                                    <span className="radio-custom"></span>
                                    1 - Нет
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="1"
                                        value="2"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    2 - Слабо
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="1"
                                        value="3"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    3 - Средне
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="1"
                                        value="4"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    4 - Сильно
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="1"
                                        value="5"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    5 – Чрезвычайно сильно
                                </label>
                            </div>
                            <div className="radio-group-item">
                                <h4 className="forms-info-header">2. Жалобы на суставы и мышцы (боли в пояснице, суставах, конечностях, спине)</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="2"
                                        value="1"
                                        onChange={handleRisksChange}
                                        defaultChecked={true}
                                    />
                                    <span className="radio-custom"></span>
                                    1 - Нет
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="2"
                                        value="2"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    2 - Слабо
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="2"
                                        value="3"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    3 - Средне
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="2"
                                        value="4"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    4 - Сильно
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="2"
                                        value="5"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    5 – Чрезвычайно сильно
                                </label>
                            </div>
                            <div className="radio-group-item">
                                <h4 className="forms-info-header">3. Сильное потоотделение (неожиданное/внезапное потоотделение, ощущение жара независимо от напряжения)</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="3"
                                        value="1"
                                        onChange={handleRisksChange}
                                        defaultChecked={true}
                                    />
                                    <span className="radio-custom"></span>
                                    1 - Нет
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="3"
                                        value="2"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    2 - Слабо
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="3"
                                        value="3"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    3 - Средне
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="3"
                                        value="4"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    4 - Сильно
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="3"
                                        value="5"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    5 – Чрезвычайно сильно
                                </label>
                            </div>
                            <div className="radio-group-item">
                                <h4 className="forms-info-header">4. Нарушения сна (нарушения засыпания, нарушение процесса сна, слишком раннее пробуждение с чувством усталости, плохой сон, бессонница)</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="4"
                                        value="1"
                                        onChange={handleRisksChange}
                                        defaultChecked={true}
                                    />
                                    <span className="radio-custom"></span>
                                    1 - Нет
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="4"
                                        value="2"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    2 - Слабо
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="4"
                                        value="3"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    3 - Средне
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="4"
                                        value="4"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    4 - Сильно
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="4"
                                        value="5"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    5 – Чрезвычайно сильно
                                </label>
                            </div>
                            <div className="radio-group-item">
                                <h4 className="forms-info-header">5. Повышенная потребность во сне, частая усталость</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="5"
                                        value="1"
                                        onChange={handleRisksChange}
                                        defaultChecked={true}
                                    />
                                    <span className="radio-custom"></span>
                                    1 - Нет
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="5"
                                        value="2"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    2 - Слабо
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="5"
                                        value="3"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    3 - Средне
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="5"
                                        value="4"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    4 - Сильно
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="5"
                                        value="5"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    5 – Чрезвычайно сильно
                                </label>
                            </div>
                            <div className="radio-group-item">
                                <h4 className="forms-info-header">6. Раздражительность (Вы агрессивны, легко сердитесь по мелочам, находитесь в плохом настроении)</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="6"
                                        value="1"
                                        onChange={handleRisksChange}
                                        defaultChecked={true}
                                    />
                                    <span className="radio-custom"></span>
                                    1 - Нет
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="6"
                                        value="2"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    2 - Слабо
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="6"
                                        value="3"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    3 - Средне
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="6"
                                        value="4"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    4 - Сильно
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="6"
                                        value="5"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    5 – Чрезвычайно сильно
                                </label>
                            </div>
                            <div className="radio-group-item">
                                <h4 className="forms-info-header">7. Нервозность (внутреннее напряжение, внутреннее беспокойство, невозможность усидеть на месте)</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="7"
                                        value="1"
                                        onChange={handleRisksChange}
                                        defaultChecked={true}
                                    />
                                    <span className="radio-custom"></span>
                                    1 - Нет
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="7"
                                        value="2"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    2 - Слабо
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="7"
                                        value="3"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    3 - Средне
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="7"
                                        value="4"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    4 - Сильно
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="7"
                                        value="5"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    5 – Чрезвычайно сильно
                                </label>
                            </div>
                            <div className="radio-group-item">
                                <h4 className="forms-info-header">8. Тревожность (паника)</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="8"
                                        value="1"
                                        onChange={handleRisksChange}
                                        defaultChecked={true}
                                    />
                                    <span className="radio-custom"></span>
                                    1 - Нет
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="8"
                                        value="2"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    2 - Слабо
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="8"
                                        value="3"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    3 - Средне
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="8"
                                        value="4"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    4 - Сильно
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="8"
                                        value="5"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    5 – Чрезвычайно сильно
                                </label>
                            </div>
                            <div className="radio-group-item">
                                <h4 className="forms-info-header">9. Физическое истощение/снижение энергии (общее снижение заниматься делами и достигать целей, спад активности, отсутствие желания что-либо предпринимать, ощущение, что меньше сделано и достигнуто, необходимость заставлять себя что-либо предпринимать)</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="9"
                                        value="1"
                                        onChange={handleRisksChange}
                                        defaultChecked={true}
                                    />
                                    <span className="radio-custom"></span>
                                    1 - Нет
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="9"
                                        value="2"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    2 - Слабо
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="9"
                                        value="3"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    3 - Средне
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="9"
                                        value="4"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    4 - Сильно
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="9"
                                        value="5"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    5 – Чрезвычайно сильно
                                </label>
                            </div>
                            <div className="radio-group-item">
                                <h4 className="forms-info-header">10. Снижение мышечной силы (чувство слабости)</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="10"
                                        value="1"
                                        onChange={handleRisksChange}
                                        defaultChecked={true}
                                    />
                                    <span className="radio-custom"></span>
                                    1 - Нет
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="10"
                                        value="2"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    2 - Слабо
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="10"
                                        value="3"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    3 - Средне
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="10"
                                        value="4"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    4 - Сильно
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="10"
                                        value="5"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    5 – Чрезвычайно сильно
                                </label>
                            </div>
                            <div className="radio-group-item">
                                <h4 className="forms-info-header">11. Депрессивное настроение (уныние, грусть, плаксивость, нехватка мотивации, перепады настроения, ощущение бессмысленности)</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="11"
                                        value="1"
                                        onChange={handleRisksChange}
                                        defaultChecked={true}
                                    />
                                    <span className="radio-custom"></span>
                                    1 - Нет
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="11"
                                        value="2"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    2 - Слабо
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="11"
                                        value="3"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    3 - Средне
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="11"
                                        value="4"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    4 - Сильно
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="11"
                                        value="5"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    5 – Чрезвычайно сильно
                                </label>
                            </div>
                            <div className="radio-group-item">
                                <h4 className="forms-info-header">12. Ощущение, что вершина жизненного пути позади</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="12"
                                        value="1"
                                        onChange={handleRisksChange}
                                        defaultChecked={true}
                                    />
                                    <span className="radio-custom"></span>
                                    1 - Нет
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="12"
                                        value="2"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    2 - Слабо
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="12"
                                        value="3"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    3 - Средне
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="12"
                                        value="4"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    4 - Сильно
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="12"
                                        value="5"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    5 – Чрезвычайно сильно
                                </label>
                            </div>
                            <div className="radio-group-item">
                                <h4 className="forms-info-header">13. Чувство физического опустошения, достигнут нижний предел («дошел до ручки»)</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="13"
                                        value="1"
                                        onChange={handleRisksChange}
                                        defaultChecked={true}
                                    />
                                    <span className="radio-custom"></span>
                                    1 - Нет
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="13"
                                        value="2"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    2 - Слабо
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="13"
                                        value="3"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    3 - Средне
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="13"
                                        value="4"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    4 - Сильно
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="13"
                                        value="5"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    5 – Чрезвычайно сильно
                                </label>
                            </div>
                            <div className="radio-group-item">
                                <h4 className="forms-info-header">14. Замедление роста волос на лице</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="14"
                                        value="1"
                                        onChange={handleRisksChange}
                                        defaultChecked={true}
                                    />
                                    <span className="radio-custom"></span>
                                    1 - Нет
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="14"
                                        value="2"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    2 - Слабо
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="14"
                                        value="3"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    3 - Средне
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="14"
                                        value="4"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    4 - Сильно
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="14"
                                        value="5"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    5 – Чрезвычайно сильно
                                </label>
                            </div>
                            <div className="radio-group-item">
                                <h4 className="forms-info-header">15. Снижение потенции</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="15"
                                        value="1"
                                        onChange={handleRisksChange}
                                        defaultChecked={true}
                                    />
                                    <span className="radio-custom"></span>
                                    1 - Нет
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="15"
                                        value="2"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    2 - Слабо
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="15"
                                        value="3"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    3 - Средне
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="15"
                                        value="4"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    4 - Сильно
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="15"
                                        value="5"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    5 – Чрезвычайно сильно
                                </label>
                            </div>
                            <div className="radio-group-item">
                                <h4 className="forms-info-header">16. Сниженное число утренних эрекций</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="16"
                                        value="1"
                                        onChange={handleRisksChange}
                                        defaultChecked={true}
                                    />
                                    <span className="radio-custom"></span>
                                    1 - Нет
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="16"
                                        value="2"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    2 - Слабо
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="16"
                                        value="3"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    3 - Средне
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="16"
                                        value="4"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    4 - Сильно
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="16"
                                        value="5"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    5 – Чрезвычайно сильно
                                </label>
                            </div>
                            <div className="radio-group-item">
                                <h4 className="forms-info-header">17. Ослабление полового влечения (удовольствие в сексе, желание заниматься сексом)</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="17"
                                        value="1"
                                        onChange={handleRisksChange}
                                        defaultChecked={true}
                                    />
                                    <span className="radio-custom"></span>
                                    1 - Нет
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="17"
                                        value="2"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    2 - Слабо
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="17"
                                        value="3"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    3 - Средне
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="17"
                                        value="4"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    4 - Сильно
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="17"
                                        value="5"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    5 – Чрезвычайно сильно
                                </label>
                            </div>
                        </div>
                    </form>
                    <button type='submit' className='button_calculate' onClick={calculate}>Посчитать баллы</button>
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

export default AmsPage;