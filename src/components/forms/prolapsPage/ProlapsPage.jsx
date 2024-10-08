import React, {useState} from 'react';
import './ProlapsPage.scss';
import PDFIcon from '../icons/pdf.svg';
import Header from '../../header/header';

function ProlapsPage() {
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
                    <h2 className='forms_header'>Анкеты для пациентов с пролапсом гениталий</h2>
                </div>
                <div className='forms_block'>
                    <div className='pdf-list'>
                        <a href="">
                            <div className='pdf-item'>
                                <img src={PDFIcon} alt=""/>
                                Анкета PISQ 12
                            </div>
                        </a>
                        <a href="">
                            <div className='pdf-item'>
                                <img src={PDFIcon} alt=""/>
                                Анкета ICIQ – SF
                            </div>
                        </a>
                        <a href="">
                            <div className='pdf-item'>
                                <img src={PDFIcon} alt=""/>
                                Анкета PFDI-20
                            </div>
                        </a>
                        <a href="">
                            <div className='pdf-item'>
                                <img src={PDFIcon} alt=""/>
                                Анкета PFIQ-7
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProlapsPage;