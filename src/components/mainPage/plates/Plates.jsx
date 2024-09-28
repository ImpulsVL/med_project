import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Plates.scss';

export const Plates = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); // Состояние для индикации загрузки
    const [error, setError] = useState(null); // Состояние для хранения ошибок

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://test-asya.ru/api/testapi.php');
                if (!response.ok) {
                    throw new Error(`Ошибка: ${response.status}`);
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false); // Убираем индикацию загрузки после завершения запроса
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Загрузка...</div>; // Отображаем индикатор загрузки
    }

    if (error) {
        return <div>Ошибка: {error}</div>; // Отображаем сообщение об ошибке
    }

    return (
        <div className='plates_wrapper'>
            {data.map((item, index) => (
                <Link
                    className='diagnosis_plate'
                    to={`/diagnosis/${item.code}`}// передаем code в URL
                    state={{ displayName: item.name, codeName: item.code }}
                    key={index}
                >
                    <div className='force_diagnosis_plate'></div>
                    <div className='text_diagnosis_plate'>{item.name}</div>
                    <div className='count_diagnosis_plate'>{item.itemsCount}</div>
                </Link>
            ))}
        </div>
    );
};

export default Plates;