import React, { useState, useEffect } from 'react';
import './MiefPage.scss';
import PDFIcon from '../icons/pdf.svg';
import Header from '../../header/header';

function MiefPage() {
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
        fetch('http://test-asya.ru/api/getpdf?code=MiefPage')
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
        let interpretationRisk = result < 5
            ? "недостаточно данных"
            : result < 11 ? "выраженная эректильная дисфункция" : result < 21 ? "эректильная дисфункция умеренной степени" : "эректильная дисфункция отсутствует";
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
                    <h2 className='forms_header'>Опрос по диагностике эректильной дисфункции (МИЭФ-5)</h2>
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
                    <h4 className="forms-info-header">
                        Информация для врача
                    </h4>
                    <div className='forms-info'>
                        <p>
                            Исследования показывают, что послеродовая депрессия затрагивает по меньшей мере 10% женщин и многие матери,
                            страдающие депрессией, не получают надлежащего лечения. Эти женщины могут справляться с уходом за ребенком и
                            домашними делами, но их качество жизни серьезно страдает, и возможно, что это будет иметь долгосрочные
                            последствия для семьи.
                        </p>
                        <p>
                            Эдинбургская шкала послеродовой депрессии была разработана для помощи медицинским работникам в выявлении матерей,
                            страдающих послеродовой депрессией: это расстройство, более продолжительное, чем «беби-блюз»
                            (который может возникнуть в первую неделю после родов).
                        </p>
                        <p>
                            Шкала состоит из 10 коротких утверждений. Женщина выбирает один из четырех ответов, наиболее точно описывающий то,
                            что она чувствовала в последнюю неделю. Большинство женщин легко заполняют анкету менее чем за пять минут.
                        </p>
                        <p>
                            Ответы оцениваются от 0 до 3 баллов баллам в зависимости от выраженности симптома.
                            Пункты 3, 5–10 оцениваются в обратном порядке (т. е. 3, 2, 1 и 0).
                            Общий балл рассчитывается путем сложения баллов по каждому из 10 пунктов.
                        </p>
                        <p>
                            Женщины, набравшие более 12 баллов, скорее всего, страдают депрессией,
                            и им следует обратиться за медицинской помощью. Для подтверждения диагноза
                            и разработки плана лечения необходима тщательная клиническая оценка медицинским работником.
                            Если женщина набрала суммарно менее 12 баллов, но получила 3 или 2 балла, отвечая на 10 вопрос,
                            обязательно следует рекомендовать консультацию психиатра.
                        </p>
                    </div>
                </div>
                <div className='forms_block'>
                    <form className='form_wrap' onSubmit={calculate}>
                        <div className='radio-group'>
                            <div className="radio-group-item">
                                <h4 className="forms-info-header">1. Как часто у Вас возникала эрекция при сексуальной активности за последнее время?</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="1"
                                        value="0"
                                        onChange={handleRisksChange}
                                        defaultChecked={true}
                                    />
                                    <span className="radio-custom"></span>
                                    0 - Сексуальной активности не было
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="1"
                                        value="1"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    1 - Почти никогда или никогда
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="1"
                                        value="2"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    2 - Изредка (реже, чем в половине случаев)
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="1"
                                        value="3"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    3 - Иногда (примерно в половине случаев)
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="1"
                                        value="4"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    4 - Часто (более, чем в половине случаев)
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="1"
                                        value="5"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    5 - Почти всегда или всегда
                                </label>
                            </div>
                            <div className="radio-group-item">
                                <h4 className="forms-info-header">2. Как часто за последнее время возникающая у Вас эрекция была достаточной для введения полового члена (для начала полового акта)?</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="2"
                                        value="0"
                                        onChange={handleRisksChange}
                                        defaultChecked={true}
                                    />
                                    <span className="radio-custom"></span>
                                    0 - Сексуальной активности не было
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="2"
                                        value="1"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    1 - Почти никогда или никогда
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="2"
                                        value="2"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    2 - Изредка (реже, чем в половине случаев)
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="2"
                                        value="3"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    3 - Иногда (примерно в половине случаев)
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="2"
                                        value="4"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    4 - Часто (более, чем в половине случаев)
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="2"
                                        value="5"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    5 - Почти всегда или всегда
                                </label>
                            </div>
                            <div className="radio-group-item">
                                <h4 className="forms-info-header">3. При половом акте как часто у Вас получалось осуществить введение полового члена (начать половой акт)?</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="3"
                                        value="0"
                                        onChange={handleRisksChange}
                                        defaultChecked={true}
                                    />
                                    <span className="radio-custom"></span>
                                    0 - Сексуальной активности не было
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="3"
                                        value="1"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    1 - Почти никогда или никогда
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="3"
                                        value="2"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    2 - Изредка (реже, чем в половине случаев)
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="3"
                                        value="3"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    3 - Иногда (примерно в половине случаев)
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="3"
                                        value="4"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    4 - Часто (более, чем в половине случаев)
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="3"
                                        value="5"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    5 - Почти всегда или всегда
                                </label>
                            </div>
                            <div className="radio-group-item">
                                <h4 className="forms-info-header">4. Как часто за последнее время Вам удавалось сохранить эрекцию после начала полового акта?</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="4"
                                        value="0"
                                        onChange={handleRisksChange}
                                        defaultChecked={true}
                                    />
                                    <span className="radio-custom"></span>
                                    0 - Сексуальной активности не было
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="4"
                                        value="1"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    1 - Почти никогда или никогда
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="4"
                                        value="2"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    2 - Изредка (реже, чем в половине случаев)
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="4"
                                        value="3"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    3 - Иногда (примерно в половине случаев)
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="4"
                                        value="4"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    4 - Часто (более, чем в половине случаев)
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="4"
                                        value="5"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    5 - Почти всегда или всегда
                                </label>
                            </div>
                            <div className="radio-group-item">
                                <h4 className="forms-info-header">5. Насколько трудным было сохранить эрекцию в течении и до конца полового акта?</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="5"
                                        value="0"
                                        onChange={handleRisksChange}
                                        defaultChecked={true}
                                    />
                                    <span className="radio-custom"></span>
                                    0 - Не пытался совершить половой акт
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="5"
                                        value="1"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    1 - Чрезвычайно трудно
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="5"
                                        value="2"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    2 - Очень трудно
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="5"
                                        value="3"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    3 - Трудно
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="5"
                                        value="4"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    4 – Не очень трудновато
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="5"
                                        value="5"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    5 – Не трудно
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

export default MiefPage;