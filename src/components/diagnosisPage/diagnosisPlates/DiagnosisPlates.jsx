import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './DiagnosisPlates.scss';

export const DiagnosisPlates = () => {
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
                if (parsedResult.items) {
                    setDiagnoses(parsedResult.items);
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
        <div className='diagnosis_plates_wrapper'>
            {diagnoses.map((diagnosis, index) => (
                <Link className='diagnosis_plate_second_page' to={`/diagnos/${diagnosis.id}`} key={index} state={{ code: diagnosis.code, name: diagnosis.name }}>
                    <div className='force_diagnosis_plate_second_page'></div>
                    <div className='code_diagnosis_plate_second_page'>{diagnosis.code}</div>
                    <div className='text_diagnosis_plate_second_page'>{diagnosis.name}</div>
                </Link>
            ))}
        </div>
    );
};

export default DiagnosisPlates;