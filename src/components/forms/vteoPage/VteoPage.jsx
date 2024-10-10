import React, {useState} from 'react';
import './VteoPage.scss';
import PDFIcon from '../icons/pdf.svg';
import Header from '../../header/header';

function VteoPage() {
    const [result, setResult] = useState(0);
    const [inPregnant, setInPregnant] = useState('');
    const [afterPregnant, setAfterPregnant] = useState('');
    const [KnownRisksFactor, setKnownRisksCriteria] = useState({
        VTEO: false,
        VTEOSurgery: false,
        Tromb: false,
        Diseases: false,
        Family: false,
        TrombLow: false,
        Age: false,
        Fat30: false,
        Fat40: false,
        Birth3: false,
        Smoking: false,
        Varikoz: false,
        Preeclampsia: false,
        VRTECO: false,
        MultiBirth: false,
        Caesarean: false,
        PlannedCaesarean: false,
        OperativeDelivery: false,
        LongBirth: false,
        AfterbirthBleeding: false,
        EarlyBirth: false,
        DeadBirth: false,
        Operation: false,
        Vomiting: false,
        HyperStim: false,
        Infection: false,
        Immobilized: false,
    });

    const [KnownRisksFactorValue] = useState({
        VTEO: 4,
        VTEOSurgery: 3,
        Tromb: 3,
        Diseases: 3,
        Family: 1,
        TrombLow: 1,
        Age: 1,
        Fat30: 1,
        Fat40: 2,
        Birth3: 1,
        Smoking: 1,
        Varikoz: 1,
        Preeclampsia: 1,
        VRTECO: 1,
        MultiBirth: 1,
        Caesarean: 2,
        PlannedCaesarean: 1,
        OperativeDelivery: 1,
        LongBirth: 1,
        AfterbirthBleeding: 1,
        EarlyBirth: 1,
        DeadBirth: 1,
        Operation: 3,
        Vomiting: 3,
        HyperStim: 4,
        Infection: 1,
        Immobilized: 1,
    });
    const calculate = (e) => {
        e.preventDefault();
        let temp = 0;

        Object.keys(KnownRisksFactor).map((item) => {
            if(KnownRisksFactor[item]) {
                temp += KnownRisksFactorValue[item.toString()];
            }
        });

        setResult(temp);
        console.log(temp);

        interpretate(temp);
    };

    const [riskInterpretation, setRiskInterpretation] = useState('');
    const interpretate = (result) => {
        let interpretationInPregnant = result < 3
            ? "Тромбопрофилактика не требуется. Адекватный питьевой режим и двигательная активность"
            : result < 4
                ? "Рассмотреть возможность тромбопрофилактики с 28 недели беременности."
                : "Рассмотреть возможность тромбопрофилактики с первого триместра беременности.";

        let interpretationAfterPregnant = result < 2
            ? "Тромбопрофилактика не требуется. Адекватный питьевой режим и двигательная активность"
            : result < 3
                ? "Рассмотреть возможность тромбопрофилактики в течение 10 дней. Компрессионный трикотаж. Если известная тромбофилия низкого риска имеется у женщины с семейным анамнезом ВТЭО у родственника первой степени родства, то послеродовая тромбопрофилактика должна продолжаться в течение 6 недель"
                : "Рассмотреть возможность тромбопрофилактики в течение 6 недель. Компрессионный трикотаж или перемежающаяся пневмокомпрессия";

        setInPregnant(interpretationInPregnant);
        setAfterPregnant(interpretationAfterPregnant);
    };
    const handleRisksChange = (e) => {
        const { name, checked } = e.target;
        setKnownRisksCriteria(prev => ({ ...prev, [name]: checked }));
    };

    return (
        <div className='wrapper_forms'>
            <div className='header-1'>
                <Header />
            </div>
            <div className="forms_wrapper">
                <div className="forms_block_header">
                    <h2 className='forms_header'>Оценка риска ВТЭО во время беременности и после родов</h2>
                </div>
                <div className='forms_block'>
                    <form className='form_wrap' onSubmit={calculate}>
                        <h3 className='form_select_lead'>Существующие ранее факторы риска</h3>
                        <label className='form_select_item'>
                            <input
                                className='input-select'
                                type='checkbox'
                                name='VTEO'
                                checked={KnownRisksFactor.VTEO}
                                onChange={handleRisksChange}
                            />
                            Предшествующее ВТЭО (за исключением однократного эпизода, связанного с большим хирургическим вмешательством)
                        </label>
                        <label className='form_select_item'>
                            <input
                                className='input-select'
                                type='checkbox'
                                name='VTEOSurgery'
                                checked={KnownRisksFactor.VTEOSurgery}
                                onChange={handleRisksChange}
                            />
                            Предшествующее ВТЭО, спровоцированное большим хирургическим вмешательством
                        </label>
                        <label className='form_select_item'>
                            <input
                                className='input-select'
                                type='checkbox'
                                name='Tromb'
                                checked={KnownRisksFactor.Tromb}
                                onChange={handleRisksChange}
                            />
                            Подтвержденное наличие тромбофилии высокого риска
                        </label>
                        <label className='form_select_item'>
                            <input
                                className='input-select'
                                type='checkbox'
                                name='Diseases'
                                checked={KnownRisksFactor.Diseases}
                                onChange={handleRisksChange}
                            />
                            Сопутствующие заболевания: онкологическое заболевание, пароксизмальная ночная гемоглобинурия, протезированные клапаны, сердечная недостаточность, серповидноклеточная анемия, наркомания с внутривенным введением наркотиков в настоящее время, активная СКВ, воспалительная артропатия или заболевание кишечника, нефротический синдром, СД 1 типа с нефропатией
                        </label>
                        <label className='form_select_item'>
                            <input
                                className='input-select'
                                type='checkbox'
                                name='Family'
                                checked={KnownRisksFactor.Family}
                                onChange={handleRisksChange}
                            />
                            Семейный анамнез неспровоцированного или связанного с воздействием эстрогена ВТЭО у родственника первой степени родства
                        </label>
                        <label className='form_select_item'>
                            <input
                                className='input-select'
                                type='checkbox'
                                name='TrombLow'
                                checked={KnownRisksFactor.TrombLow}
                                onChange={handleRisksChange}
                            />
                            Известная тромбофилия низкого риска (без ВТЭО)
                        </label>
                        <label className='form_select_item'>
                            <input
                                className='input-select'
                                type='checkbox'
                                name='Age'
                                checked={KnownRisksFactor.Age}
                                onChange={handleRisksChange}
                            />
                            Возраст (≥35 лет)
                        </label>
                        <label className='form_select_item'>
                            <input
                                className='input-select'
                                type='checkbox'
                                name='Fat30'
                                checked={KnownRisksFactor.Fat30}
                                onChange={handleRisksChange}
                            />
                            Ожирение - ИМТ ≥ 30
                        </label>
                        <label className='form_select_item'>
                            <input
                                className='input-select'
                                type='checkbox'
                                name='Fat40'
                                checked={KnownRisksFactor.Fat40}
                                onChange={handleRisksChange}
                            />
                            Ожирение - ИМТ ≥ 40
                        </label>
                        <label className='form_select_item'>
                            <input
                                className='input-select'
                                type='checkbox'
                                name='Birth3'
                                checked={KnownRisksFactor.Birth3}
                                onChange={handleRisksChange}
                            />
                            3 и более родов в анамнезе
                        </label>
                        <label className='form_select_item'>
                            <input
                                className='input-select'
                                type='checkbox'
                                name='Smoking'
                                checked={KnownRisksFactor.Smoking}
                                onChange={handleRisksChange}
                            />
                            Курение
                        </label>
                        <label className='form_select_item'>
                            <input
                                className='input-select'
                                type='checkbox'
                                name='Varikoz'
                                checked={KnownRisksFactor.Varikoz}
                                onChange={handleRisksChange}
                            />
                            Варикозное расширение крупных вен
                        </label>
                        <h3 className='form_select_lead'>Акушерские факторы риска</h3>
                        <label className='form_select_item'>
                            <input
                                className='input-select'
                                type='checkbox'
                                name='Preeclampsia'
                                checked={KnownRisksFactor.Preeclampsia}
                                onChange={handleRisksChange}
                            />
                            Преэклампсия во время текущей беременности
                        </label>
                        <label className='form_select_item'>
                            <input
                                className='input-select'
                                type='checkbox'
                                name='VRTECO'
                                checked={KnownRisksFactor.VRTECO}
                                onChange={handleRisksChange}
                            />
                            ВРТ/ЭКО
                        </label>
                        <label className='form_select_item'>
                            <input
                                className='input-select'
                                type='checkbox'
                                name='MultiBirth'
                                checked={KnownRisksFactor.MultiBirth}
                                onChange={handleRisksChange}
                            />
                            Многоплодная беременность
                        </label>
                        <label className='form_select_item'>
                            <input
                                className='input-select'
                                type='checkbox'
                                name='Caesarean'
                                checked={KnownRisksFactor.Caesarean}
                                onChange={handleRisksChange}
                            />
                            Кесарево сечение в родах
                        </label>
                        <label className='form_select_item'>
                            <input
                                className='input-select'
                                type='checkbox'
                                name='PlannedCaesarean'
                                checked={KnownRisksFactor.PlannedCaesarean}
                                onChange={handleRisksChange}
                            />
                            Плановое кесарево сечение
                        </label>
                        <label className='form_select_item'>
                            <input
                                className='input-select'
                                type='checkbox'
                                name='OperativeDelivery'
                                checked={KnownRisksFactor.OperativeDelivery}
                                onChange={handleRisksChange}
                            />
                            Вагинальное оперативное родоразрешение, в т.ч. с применением ротационных акушерских щипцов
                        </label>
                        <label className='form_select_item'>
                            <input
                                className='input-select'
                                type='checkbox'
                                name='LongBirth'
                                checked={KnownRisksFactor.LongBirth}
                                onChange={handleRisksChange}
                            />
                            Затяжные роды (более 24 ч)
                        </label>
                        <label className='form_select_item'>
                            <input
                                className='input-select'
                                type='checkbox'
                                name='AfterbirthBleeding'
                                checked={KnownRisksFactor.AfterbirthBleeding}
                                onChange={handleRisksChange}
                            />
                            Послеродовое кровотечение (более 1 л или необходимость гемотрансфузии)
                        </label>
                        <label className='form_select_item'>
                            <input
                                className='input-select'
                                type='checkbox'
                                name='EarlyBirth'
                                checked={KnownRisksFactor.EarlyBirth}
                                onChange={handleRisksChange}
                            />
                            Преждевременные роды менее 37 + 0 нед. (при текущей беременности)
                        </label>
                        <label className='form_select_item'>
                            <input
                                className='input-select'
                                type='checkbox'
                                name='DeadBirth'
                                checked={KnownRisksFactor.DeadBirth}
                                onChange={handleRisksChange}
                            />
                            Мертворождение во время текущей беременности
                        </label>
                        <h3 className='form_select_lead'>Преходящие факторы риска</h3>
                        <label className='form_select_item'>
                            <input
                                className='input-select'
                                type='checkbox'
                                name='Operation'
                                checked={KnownRisksFactor.Operation}
                                onChange={handleRisksChange}
                            />
                            Любая операция во время беременности или послеродовой период кроме восстановления промежности (например, аппендэктомия, послеродовая стерилизация)
                        </label>
                        <label className='form_select_item'>
                            <input
                                className='input-select'
                                type='checkbox'
                                name='Vomiting'
                                checked={KnownRisksFactor.Vomiting}
                                onChange={handleRisksChange}
                            />
                            Неукротимая рвота
                        </label>
                        <label className='form_select_item'>
                            <input
                                className='input-select'
                                type='checkbox'
                                name='HyperStim'
                                checked={KnownRisksFactor.HyperStim}
                                onChange={handleRisksChange}
                            />
                            Синдром гиперстимуляции яичников (только в первом триместре)
                        </label>
                        <label className='form_select_item'>
                            <input
                                className='input-select'
                                type='checkbox'
                                name='Infection'
                                checked={KnownRisksFactor.Infection}
                                onChange={handleRisksChange}
                            />
                            Текущая системная инфекция
                        </label>
                        <label className='form_select_item'>
                            <input
                                className='input-select'
                                type='checkbox'
                                name='Immobilized'
                                checked={KnownRisksFactor.Immobilized}
                                onChange={handleRisksChange}
                            />
                            Иммобилизация, обезвоживание
                        </label>
                    </form>
                    <button type='submit' className='button_calculate' onClick={calculate}>Рассчитать</button>
                </div>
                <div className='forms_block'>
                    <div className='forms_result'>
                        <h2 className='form_result_lead'>Результаты</h2>
                        <p className='form_result_item'>Сумма баллов</p>
                        <p className='form_result_item'>{result}</p>
                        <h3 className='form_result_sublead'>Результат во время беременности</h3>
                        <p className='form_result_item'>Категория</p>
                        <p className='form_result_item'>{inPregnant}</p>
                        <h3 className='form_result_sublead'>Результат по послеродовому периоду</h3>
                        <p className='form_result_item'>Категория</p>
                        <p className='form_result_item'>{afterPregnant}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VteoPage;
