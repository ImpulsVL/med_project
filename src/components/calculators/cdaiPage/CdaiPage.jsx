import React, { useState } from 'react';
import './CdaiPage.scss';
import Header from '../../header/header';

function CdaiPage() {
    const [stoolCount, setStoolCount] = useState(0);
    const [abdominalPain, setAbdominalPain] = useState(0);
    const [generalWellbeing, setGeneralWellbeing] = useState(0);
    const [complications, setComplications] = useState([]);
    const [diarrheaMedication, setDiarrheaMedication] = useState(0);
    const [tumorPresence, setTumorPresence] = useState(0);
    const [hematocrit, setHematocrit] = useState(0);
    const [weightLoss, setWeightLoss] = useState(0);
    const [result, setResult] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Расчет баллов с правильными коэффициентами
        const stoolPoints = stoolCount * 2; // х 2
        const abdominalPainPoints = abdominalPain; // значения уже соответствуют
        const generalWellbeingPoints = generalWellbeing; // значения уже соответствуют
        const complicationsPoints = complications.length * 20; // х 20
        const diarrheaMedicationPoints = diarrheaMedication; // 30 или 0
        const tumorPoints = tumorPresence * 10; // х 10
        const hematocritPoints = hematocrit; // 60 или 0
        const weightLossPoints = weightLoss; // просто добавляется

        const totalScore = stoolPoints + abdominalPainPoints + generalWellbeingPoints + complicationsPoints + diarrheaMedicationPoints + tumorPoints + hematocritPoints + weightLossPoints;

        setResult(totalScore);
    };

    const interpretResult = (score) => {
        if (score < 150) return "Бессимптомная ремиссия";
        if (score < 221) return "Болезнь Крона легкой или умеренной активности";
        if (score < 451) return "Болезнь Крона умеренной или сильной активности";
        return "Сильная активность или скоротечная форма болезни";
    };

    return (
        <div className='wrapper_rmi'>
            <div className='header-1'>
                <Header />
            </div>
            <div className="rmi_wrapper">
                <div className="rmi_block">
                    <h2 className='rmi_tanner'>Калькулятор для оценки активности болезни Крона (CDAI)</h2>
                </div>
                <div className='pictures_block'>
                    <form className='form_wrap' onSubmit={handleSubmit}>
                        <div className="form_group">
                            <label htmlFor="stoolCount">1. Дефекации неоформленным стулом за неделю</label>
                            <input
                                id="stoolCount"
                                className='form_input'
                                type="number"
                                value={stoolCount}
                                onChange={(e) => setStoolCount(Number(e.target.value))}
                                required
                            />
                        </div>
                        <div className='form_group'>
                            <label>2. Средняя оценка боли в животе за семидневный период</label>
                            <div className='radio_group'>
                                {[
                                    { label: 'нет', value: 0 },
                                    { label: 'легкая', value: 35 },
                                    { label: 'умеренная', value: 70 },
                                    { label: 'тяжелая', value: 105 }
                                ].map((pain) => (
                                    <label key={pain.value}>
                                        <input
                                            type="radio"
                                            name="abdominalPain"
                                            value={pain.value}
                                            onChange={() => setAbdominalPain(pain.value)}
                                        />
                                        <span className="radio_custom"></span>
                                        {pain.label} <section className='secretplus'>+{pain.value}</section>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className='form_group'>
                            <label>3. Общее самочувствие в среднем за семидневный период</label>
                            <div className='radio_group'>
                                {[
                                    { label: 'хорошее', value: 0 },
                                    { label: 'слегка нарушено', value: 49 },
                                    { label: 'плохое', value: 98 },
                                    { label: 'очень плохое', value: 147 },
                                    { label: 'ужасное', value: 196 }
                                ].map((wellbeing) => (
                                    <label key={wellbeing.value}>
                                        <input
                                            type="radio"
                                            name="generalWellbeing"
                                            value={wellbeing.value}
                                            onChange={() => setGeneralWellbeing(wellbeing.value)}
                                        />
                                        <span className="radio_custom"></span>
                                        {wellbeing.label} <section className='secretplus'>+{wellbeing.value}</section>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className='form_group'>
                            <label>4. Наличие осложнений</label>
                            {[
                                { label: 'артралгия', value: 20 },
                                { label: 'увеит или ирит', value: 20 },
                                { label: 'узловая эритема, афтозный стоматит или гангренозная пиодермия', value: 20 },
                                { label: 'анальная трещина, фистула или абсцесс', value: 20 },
                                { label: 'фистула другой локализации', value: 20 },
                                { label: 'температура больше 37,5 в последнюю неделю', value: 20 }
                            ].map((complication, index) => (
                                <label key={index}>
                                    <input
                                        type='checkbox'
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                setComplications([...complications, complication.value]);
                                            } else {
                                                setComplications(complications.filter(comp => comp !== complication.value));
                                            }
                                        }}
                                    />
                                    {complication.label} <section className='secretplus'>+{complication.value}</section>
                                </label>
                            ))}
                        </div>
                        <div className='form_group'>
                            <label>5. Прием лоперамида или опиатов по поводу диареи</label>
                            <div className='radio_group'>
                                <label>
                                    <input
                                        type="radio"
                                        name="diarrheaMedication"
                                        value={0}
                                        onChange={() => setDiarrheaMedication(0)}
                                        defaultChecked
                                    />
                                    <span className="radio_custom"></span>
                                    нет <section className='secretplus'>0</section>
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="diarrheaMedication"
                                        value={30}
                                        onChange={() => setDiarrheaMedication(30)}
                                    />
                                    <span className="radio_custom"></span>
                                    Да <section className='secretplus'>+30</section>
                                </label>
                            </div>
                        </div>
                        <div className='form_group'>
                            <label>6. Опухолевидное образование в животе</label>
                            <div className='radio_group'>
                                {[
                                    { label: 'отсутствие опухолевидного образования', value: 0 },
                                    { label: 'возможное опухолевидное образование', value: 20 },
                                    { label: 'определенное опухолевидное образование', value: 50 }
                                ].map((tumor, index) => (
                                    <label key={index}>
                                        <input
                                            type="radio"
                                            name="tumorPresence"
                                            value={tumor.value}
                                            onChange={() => setTumorPresence(tumor.value)}
                                        />
                                        <span className="radio_custom"></span>
                                        {tumor.label} <section className='secretplus'>+{tumor.value}</section>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className='form_group'>
                            <label>7. Гематокрит меньше 0,47 у мужчин или меньше 0,42 у женщин</label>
                            <div className='radio_group'>
                                <label>
                                    <input
                                        type="radio"
                                        name="hematocrit"
                                        value={0}
                                        onChange={() => setHematocrit(0)}
                                        defaultChecked
                                    />
                                    <span className="radio_custom"></span>
                                    нет <section className='secretplus'>0</section>
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="hematocrit"
                                        value={60}
                                        onChange={() => setHematocrit(60)}
                                    />
                                    <span className="radio_custom"></span>
                                    Да <section className='secretplus'>+60</section>
                                </label>
                            </div>
                        </div>
                        <div className="form_group">
                            <label htmlFor="weightLoss">8. Снижение массы тела по отношению к должной</label>
                            <input
                                id="weightLoss"
                                className='form_input'
                                type="number"
                                value={weightLoss}
                                onChange={(e) => setWeightLoss(Number(e.target.value))}
                                required
                            />
                            <label htmlFor="weightLoss">Процент снижения массы</label>
                        </div>
                        <button type='submit' className='button_calculate'>Рассчитать</button>
                    </form>
                </div>

                <div className='pictures_block'>
                    <h2 className='rmi_lead'>Результаты</h2>
                    {result !== null && (
                        <div className='result_display'>
                            <p>Итоговый балл: {result}</p>
                            <p>Интерпретация: {interpretResult(result)}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CdaiPage;