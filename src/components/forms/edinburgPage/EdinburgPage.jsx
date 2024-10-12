import React, { useState, useEffect } from 'react';
import './EdinburgPage.scss';
import PDFIcon from '../icons/pdf.svg';
import Header from '../../header/header';

function ChecklistPage() {
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
        fetch('http://test-asya.ru/api/getPdf?code=pdf1')
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
        let interpretationRisk = result < 12
            ? "Низкая вероятность наличия послеродовой депрессии"
            : "Высокая вероятность наличия послеродовой депрессии. Для подтверждения диагноза и разработки плана лечения необходима тщательная клиническая оценка медицинским работником";
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
                    <h2 className='forms_header'>Чек-лист перед назначением комбинированных гормональных контрацептивов.</h2>
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
                                <h4 className="forms-info-header">1. Я была готова смеяться и видеть светлую сторону происходящего</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="1"
                                        value="0"
                                        onChange={handleRisksChange}
                                        defaultChecked={true}
                                    />
                                    <span className="radio-custom"></span>
                                    0 – так же, как всегда
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="1"
                                        value="1"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    1 – теперь несколько меньше, чем всегда
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="1"
                                        value="2"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    2 – определенно меньше
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="1"
                                        value="3"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    3 – совсем не вижу
                                </label>
                            </div>
                            <div className="radio-group-item">
                                <h4 className="forms-info-header">2. Я смотрела в будущее с удовольствием к окружающим обстоятельствам</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="2"
                                        value="0"
                                        onChange={handleRisksChange}
                                        defaultChecked={true}
                                    />
                                    <span className="radio-custom"></span>
                                    0 – так же, как всегда
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="2"
                                        value="1"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    1 - меньше, чем обычно
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="2"
                                        value="2"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    2 - определенно меньше, чем обычно
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="2"
                                        value="3"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    3 - вряд ли
                                </label>
                            </div>
                            <div className="radio-group-item">
                                <h4 className="forms-info-header">3. Я без надобности винила себя, если что-то происходило неправильно</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="3"
                                        value="0"
                                        onChange={handleRisksChange}
                                        defaultChecked={true}
                                    />
                                    <span className="radio-custom"></span>
                                    0 - нет, никогда
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="3"
                                        value="1"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    1 - нет, не часто
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="3"
                                        value="2"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    2 - да, иногда
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="3"
                                        value="3"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    3 - да, в большинстве случаев
                                </label>
                            </div>
                            <div className="radio-group-item">
                                <h4 className="forms-info-header">4. Мне было тревожно и беспокойно без видимой причины</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="4"
                                        value="0"
                                        onChange={handleRisksChange}
                                        defaultChecked={true}
                                    />
                                    <span className="radio-custom"></span>
                                    0 - нет, нисколько
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="4"
                                        value="1"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    1 - едва ли когда-нибудь
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="4"
                                        value="2"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    2 - да, иногда
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="4"
                                        value="3"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    3 - да, очень часто
                                </label>
                            </div>
                            <div className="radio-group-item">
                                <h4 className="forms-info-header">5. Я чувствовала испуг или панику без значительного повода</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="5"
                                        value="0"
                                        onChange={handleRisksChange}
                                        defaultChecked={true}
                                    />
                                    <span className="radio-custom"></span>
                                    0 - нет, нисколько
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="5"
                                        value="1"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    1 - нет, не много
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="5"
                                        value="2"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    2 - да, иногда
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="5"
                                        value="3"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    3 - да, довольно много
                                </label>
                            </div>
                            <div className="radio-group-item">
                                <h4 className="forms-info-header">6. Обстоятельства были сильнее меня</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="6"
                                        value="0"
                                        onChange={handleRisksChange}
                                        defaultChecked={true}
                                    />
                                    <span className="radio-custom"></span>
                                    0 - нет, я справлялась так же, как всегда
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="6"
                                        value="1"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    1 - нет, большинство времени я справлялась достаточно хорошо
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="6"
                                        value="2"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    2 - да, иногда я не справлялась так же, как обычно
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="6"
                                        value="3"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    3 - да, большинство времени я не была готова справиться с ними вообще
                                </label>
                            </div>
                            <div className="radio-group-item">
                                <h4 className="forms-info-header">7. Я была так несчастна, что даже плохо спала</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="7"
                                        value="0"
                                        onChange={handleRisksChange}
                                        defaultChecked={true}
                                    />
                                    <span className="radio-custom"></span>
                                    0 - нет, нисколько
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="7"
                                        value="1"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    1 - нет, не очень часто
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="7"
                                        value="2"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    2 - да, иногда
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="7"
                                        value="3"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    3 - да, большинство времени
                                </label>
                            </div>
                            <div className="radio-group-item">
                                <h4 className="forms-info-header">8. Я грустила или была несчастна</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="8"
                                        value="0"
                                        onChange={handleRisksChange}
                                        defaultChecked={true}
                                    />
                                    <span className="radio-custom"></span>
                                    0 - нет, нисколько
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="8"
                                        value="1"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    1 - нет, не часто
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="8"
                                        value="2"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    2 - да, достаточно часто
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="8"
                                        value="3"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    3 - да, большинство времени
                                </label>
                            </div>
                            <div className="radio-group-item">
                                <h4 className="forms-info-header">9. Я была так несчастна, что даже плакала</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="9"
                                        value="0"
                                        onChange={handleRisksChange}
                                        defaultChecked={true}
                                    />
                                    <span className="radio-custom"></span>
                                    0 - нет, никогда
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="9"
                                        value="1"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    1 - нет, только случайно
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="9"
                                        value="2"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    2 - да, достаточно часто
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="9"
                                        value="3"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    3 - да, почти всё время
                                </label>
                            </div>
                            <div className="radio-group-item-last">
                                <h4 className="forms-info-header">10. Мысль о нанесении вреда себе возникала у меня</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="10"
                                        value="0"
                                        onChange={handleRisksChange}
                                        defaultChecked={true}
                                    />
                                    <span className="radio-custom"></span>
                                    0 - никогда
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="10"
                                        value="1"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    1 - едва ли
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="10"
                                        value="2"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    2 - иногда
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="10"
                                        value="3"
                                        onChange={handleRisksChange}
                                    />
                                    <span className="radio-custom"></span>
                                    3 - да, достаточно часто
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

export default ChecklistPage;