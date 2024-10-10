import React, {useState} from 'react';
import './DiagnosticsPage.scss';
import PDFIcon from '../icons/pdf.svg';
import Header from '../../header/header';

function DiagnosticsPage() {
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
                    <h2 className='forms_header'>Опрос для оценки обильности менструальных кровотечений</h2>
                </div>
                <div className='forms_block'>
                    <div className='question-list'>
                        <div className="question-list-item">
                            <h3 className="question-list-header">1. Насколько обильны Ваши кровотечения?</h3>
                            <p>— Меняете ли Вы санитарные средства ночью/просыпаетесь ли для того, чтобы сменить прокладки?</p>
                            <p>— Во время дней наиболее обильного кровотечения промокают ли полностью Ваши средства защиты после 2 ч?</p>
                        </div>
                        <div className="question-list-item">
                            <h3 className="question-list-header">2. Влияет ли это на Ваше физическое состояние?</h3>
                            <p>— Наблюдаете ли вы выделение больших сгустков во время менструации?</p>
                            <p>— Была ли у вас выявлена анемия или дефицит железа?</p>
                        </div>
                        <div className="question-list-item">
                            <h3 className="question-list-header">3. Влияет ли это на качество жизни?</h3>
                            <p>— Вынуждены ли Вы специально организовывать Вашу социальную жизнь в эти дни?</p>
                            <p>— Беспокоитесь ли Вы о неприятных моментах, связанных с кровотечением?</p>
                        </div>
                        <button>
                            Распечатать
                        </button>
                    </div>
                </div>
                <div className="forms_block">
                    <h3 className="question-list-header">Интерпретация</h3>
                    <p><color>Хотя бы 1 положительный ответ</color> позволяет предположить наличие обильных менструаций</p>
                </div>
            </div>
        </div>
    );
}

export default DiagnosticsPage;