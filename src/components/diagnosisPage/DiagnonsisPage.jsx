import React, { useEffect, useState } from 'react';
import './DiagnosisPage.scss';
import DiagnosisPlates from "./diagnosisPlates/DiagnosisPlates";
import { ReactComponent as IconBack } from './diagnosisPlates/icons/Back.svg'
import { Link, useNavigate, useLocation, useParams } from 'react-router-dom';
import Header from '../header/header';

function DiagnosisPage() {
    const location = useLocation();
    const { displayName } = location.state || { displayName: 'Популярные диагнозы' };

    const { code } = useParams(); // получаем параметр code из URL
    const [diagnoses, setDiagnoses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDiagnoses = async () => {
            try {
                // Делаем запрос с параметром code
                const response = await fetch(`http://test-asya.ru/api/testapi2.php?CODE=${code}`);
                if (!response.ok) {
                    throw new Error(`Ошибка: ${response.status}`);
                }
                const result = await response.json();
                
                // Парсим поле result как JSON
                const parsedResult = JSON.parse(result.result);

                // Проверяем наличие items в parsedResult и сохраняем его в состоянии
                if (parsedResult) {
                    setDiagnoses(parsedResult);
                } else {
                    throw new Error('Диагнозы не найдены');
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchDiagnoses();
    }, [code]); // Параметр code в зависимости useEffect

    if (loading) {
        return <div>Загрузка...</div>;
    }

    if (error) {
        return <div>Ошибка: {error}</div>;
    }

    return (
        <div className='second_wrapper'>
            <div className='header-1'>
                <Header />
            </div>
            <div className="main-container_second_page ">
                <Link to='/'>
                    <a className='back_wrapper'>
                        <div className='icon_back'>
                            <IconBack id="back_icon" />
                        </div>
                        <div className='back_button_text'>
                            Специальности
                        </div>
                    </a>
                </Link>
                <div className='text_main_second_page'>
                    {diagnoses.section}
                </div>
                <div className='Plates'>
                    <DiagnosisPlates diagnoses = {diagnoses.items}/>
                </div>
            </div>
        </div>
    );
}

export default DiagnosisPage;