import React, { useState, useEffect } from 'react';
import './InjectionPage.scss';
import PDFIcon from '../icons/pdf.svg';
import Header from '../../header/header';

function InjectionPage() {
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
        fetch('http://test-asya.ru/api/getpdf?code=InjectionPage')
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
                    <h2 className='forms_header'>Чек-лист перед использованием прогестиновых инъекционных контрацептивов</h2>
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
                    <div className="forms-table">
                        <div className="table-header no-left">Вопрос</div>
                        <div className="table-header">Да</div>
                        <div className="table-header">Нет</div>

                        <div className="table-item">— Есть ли у Вас ребенок в возрасте до 6 недель, находится ли он на грудном вскармливании; Используете ли Вы метод лактационной аменореи?</div>
                        <div className="table-item"></div>
                        <div className="table-item"></div>

                        <div className="table-item">— У Вас повышено артериальное давление?</div>
                        <div className="table-item"></div>
                        <div className="table-item"></div>

                        <div className="table-item">— Болели ли Вы диабетом в течение предыдущих 20 лет? Есть ли у Вас диабетическое повреждение артериальных сосудов, органов зрения, почек или нервной системы?</div>
                        <div className="table-item"></div>
                        <div className="table-item"></div>

                        <div className="table-item">— Имеется ли у Вас какое-либо из перечисленных заболеваний: цирроз, инфекционное/опухолевое/холестатическое заболевание печени? Наблюдали ли Вы необычный желтый оттенок белков глаз в период приема КОК?</div>
                        <div className="table-item"></div>
                        <div className="table-item"></div>

                        <div className="table-item">— Переносили ли Вы инсульт, тромбоз вен нижних конечностей или легких, инфаркт миокарда или другие серьезные заболевания сердечно-сосудистой системы?</div>
                        <div className="table-item"></div>
                        <div className="table-item"></div>

                        <div className="table-item">— Относитесь ли Вы к группе повышенного риска по сердечным заболеваниями (сужение артерий сердца) или инсульту (курение, повышенное артериальное давление, диабет и т.д.)?</div>
                        <div className="table-item"></div>
                        <div className="table-item"></div>

                        <div className="table-item">— Сообщал ли Вам врач, что Вы относитесь к группе повышенного риска по сердечным заболеваниям (сужение артерий сердца) или инсульту (курение, повышенное артериальное давление, диабет и т.д.)?</div>
                        <div className="table-item"></div>
                        <div className="table-item"></div>

                        <div className="table-item">— Диагностировали ли у Вас антифосфолипидный синдром?</div>
                        <div className="table-item"></div>
                        <div className="table-item"></div>

                        <div className="table-item">— Диагностировали ли у Вас значительное снижение числа тромбоцитов?</div>
                        <div className="table-item"></div>
                        <div className="table-item"></div>

                        <div className="table-item">— Диагностировали ли у Вас рак молочной железы?</div>
                        <div className="table-item"></div>
                        <div className="table-item"></div>

                        <div className="table-item">— Бывают ли у Вас вагинальные кровотечения без установленного диагноза?</div>
                        <div className="table-item"></div>
                        <div className="table-item"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InjectionPage;