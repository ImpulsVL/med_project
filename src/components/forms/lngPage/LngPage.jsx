import React, {useState} from 'react';
import './LngPage.scss';
import PDFIcon from '../icons/pdf.svg';
import Header from '../../header/header';

function LngPage() {
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

    const [riskInterpretation, setRiskInterpretation] = useState('');
    const interpretate = (result) => {
        let interpretationRisk = result < 12
            ? "Низкая вероятность наличия послеродовой депрессии"
            : "Высокая вероятность наличия послеродовой депрессии. Для подтверждения диагноза и разработки плана лечения необходима тщательная клиническая оценка медицинским работником";
        if(KnownRisksFactorValue[10] > 1) {
            interpretationRisk = "Высокая вероятность наличия послеродовой депрессии. За вопрос №10 получено " + KnownRisksFactorValue[10] + " балла, рекомендуется консультация психиатра";
        }
        setRisk(interpretationRisk);
    };
    const handleRisksChange = (e) => {
        const { name } = e.target;
        // setKnownRisksCriteria(prev => ({ ...prev, [name]: checked }));
        setKnownRisksFactorValue(val => ({ ...val, [name]: Number(e.target.value)}))
        console.log(e.target.value);
    };

    return (
        <div className='wrapper_forms'>
            <div className='header-1'>
                <Header />
            </div>
            <div className="forms_wrapper">
                <div className="forms_block_header">
                    <h2 className='forms_header'>Чек-лист перед установкой ЛНГ-ВМС</h2>
                </div>
                <div className='forms_block'>
                    <div className='pdf-list'>
                        <a href="">
                            <div className='pdf-item'>
                                <img src={PDFIcon} alt=""/>
                                Чек-лист перед установкой ЛНГ-ВМС
                            </div>
                        </a>
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

                        <div className="table-item">— После родов/аборта/выкидыша прошло менее 6 недель?</div>
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

                        <div className="table-item">— Переносили ли Вы инсульт, тромбоз вен нижних конечностей или легких, инфаркт миокарда или другие серьезные заболевания сердечно-сосудистой системы?</div>
                        <div className="table-item"></div>
                        <div className="table-item"></div>

                        <div className="table-item">— Диагностировали ли Вам системную красную волчанку, при этом антифосфолипидные антитела обнаружены или результат теста на антитела не известен?</div>
                        <div className="table-item"></div>
                        <div className="table-item"></div>

                        <div className="table-item">— Имеется ли у Вас какое-либо из перечисленных заболеваний: цирроз, инфекционное/опухолевое/холестатическое заболевание печени?</div>
                        <div className="table-item"></div>
                        <div className="table-item"></div>

                        <div className="table-item">— Диагностировали ли у Вас рак молочной железы?</div>
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LngPage;