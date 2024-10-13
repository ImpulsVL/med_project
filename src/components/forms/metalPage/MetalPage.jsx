import React, { useState, useEffect } from 'react';
import './MetalPage.scss';
import PDFIcon from '../icons/pdf.svg';
import Header from '../../header/header';

function MetalPage() {
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
        fetch('http://test-asya.ru/api/getpdf?code=MetalPage')
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
                    <h2 className='forms_header'>Чек-лист перед установкой металлсодержащего ВМК</h2>
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

                        <div className="table-item">— Есть ли у Вас основания подозревать, что вы беременны в настоящее время?</div>
                        <div className="table-item"></div>
                        <div className="table-item"></div>

                        <div className="table-item">— У Вас были роды/аборт/выкидыш в течение последних 6 недель?</div>
                        <div className="table-item"></div>
                        <div className="table-item"></div>

                        <div className="table-item">— Послеродовый или послеабортный период сопровождался инфекцией?</div>
                        <div className="table-item"></div>
                        <div className="table-item"></div>

                        <div className="table-item">— За последние 6 месяцев у Вас было более 1 полового партнера?</div>
                        <div className="table-item"></div>
                        <div className="table-item"></div>

                        <div className="table-item">— Тесты на ИППП (гонорея, хламидиоз) у Вас и у Ваших партнеров за последний год дали положительный результат?</div>
                        <div className="table-item"></div>
                        <div className="table-item"></div>

                        <div className="table-item">— Бывают ли у Вас вагинальные кровотечения без установленного диагноза?</div>
                        <div className="table-item"></div>
                        <div className="table-item"></div>

                        <div className="table-item">— Диагностировали ли Вам злокачественные опухоли половых органов (влагалища и вульвы, шейки матки и матки, яичников), включая пузырный занос и хорионэпителиому?</div>
                        <div className="table-item"></div>
                        <div className="table-item"></div>

                        <div className="table-item">— Имеется ли у Вас туберкулез органов малого таза или другое воспалительное заболевание матки и придатков?</div>
                        <div className="table-item"></div>
                        <div className="table-item"></div>

                        <div className="table-item">— Диагностировали ли у Вас миому матки, деформирующую полость? Другие врожденные или приобретенные заболевания, вызвавшие деформацию полости матки?</div>
                        <div className="table-item"></div>
                        <div className="table-item"></div>

                        <div className="table-item">— Диагностировали ли у Вас тяжелую или позднюю стадию ВИЧ-инфекции (СПИД)?</div>
                        <div className="table-item"></div>
                        <div className="table-item"></div>

                        <div className="table-item">— Диагностировали ли у Вас значительное снижение уровня тромбоцитов?</div>
                        <div className="table-item"></div>
                        <div className="table-item"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MetalPage;