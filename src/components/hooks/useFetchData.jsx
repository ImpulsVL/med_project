import { useState, useEffect } from 'react';

function useFetchData(id, endpoint) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) return;

        const fetchData = async () => {
            try {
                const response = await fetch(`http://assistant-admin.pavlov-mc.ru/api/getdiagnosis?id=${id}`);
                if (!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`);
                }

                const textResponse = await response.text();
                let result;
                try {
                    result = JSON.parse(textResponse);
                } catch (error) {
                    throw new Error('Invalid JSON response from server');
                }

                if (result && result.result) {
                    const data = (result.result);
                    setData(data);
                } else {
                    throw new Error('Invalid data format from server.');
                }
            } catch (error) {
                setError(error.message);
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, loading, error };
}

export default useFetchData;