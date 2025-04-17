import React, { useState } from 'react';
import './PopUp.scss';

function PopUp() {
    const env = process.env;

    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');

    const [textArea, setTextArea] = useState('');
    const [textArea2, setTextArea2] = useState('');
    const [textArea3, setTextArea3] = useState('');
    const [textArea4, setTextArea4] = useState('');
    const [textArea5, setTextArea5] = useState('');
    const [textArea6, setTextArea6] = useState('');

    const [errorInput, setErrorInput] = useState('');
    const [errorInput1, setErrorInput1] = useState('');
    const [errorInput2, setErrorInput2] = useState('');
    const [errorInput3, setErrorInput3] = useState('');

    const [error, setError] = useState('');
    const [pdfFile1, setPdfFile1] = useState(null);
    const [pdfFile2, setPdfFile2] = useState(null);
    const [pdfFile3, setPdfFile3] = useState(null);

    const resetForm = () => {
        setInput1('');
        setInput2('');
        setInput3('');
        setTextArea('');
        setTextArea2('');
        setTextArea3('');
        setTextArea4('');
        setTextArea5('');
        setTextArea6('');
        setPdfFile1(null);
        setPdfFile2(null);
        setPdfFile3(null);
        setErrorInput('');
        setErrorInput1('');
        setErrorInput2('');
        setErrorInput3('');
        setError('');
    };

    const togglePopUp = () => {
        setIsOpen(!isOpen);
        resetForm();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type === 'application/pdf') {
            setPdfFile1(file);
            setError('');
        } else {
            setError('Пожалуйста, выберите файл PDF.');
        }
    };

    const handleFileChange2 = (e) => {
        const file2 = e.target.files[0];
        if (file2 && file2.type === 'application/pdf') {
            setPdfFile2(file2);
            setError('');
        } else {
            setError('Пожалуйста, выберите файл PDF.');
        }
    };

    const handleFileChange3 = (e) => {
        const file3 = e.target.files[0];
        if (file3 && file3.type === 'application/pdf') {
            setPdfFile3(file3);
            setError('');
        } else {
            setError('Пожалуйста, выберите файл PDF.');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let hasError = false;

        if (!input1) {
            setErrorInput1('Это поле обязательно для заполнения');
            hasError = true;
        } else {
            setErrorInput1('');
        }

        if (!input2) {
            setErrorInput2('Это поле обязательно для заполнения');
            hasError = true;
        } else {
            setErrorInput2('');
        }

        if (!input3) {
            setErrorInput3('Это поле обязательно для заполнения');
            hasError = true;
        } else {
            setErrorInput3('');
        }

        if (hasError) return;

        setIsLoading(true);

        const formData = new FormData();
        formData.append('diagnosisName', input1);
        formData.append('fullName', input2);
        formData.append('code', input3);
        formData.append('description', textArea);
        formData.append('description2', textArea2);
        formData.append('description3', textArea3);
        formData.append('descriptionComment', textArea4);
        formData.append('descriptionComment2', textArea5);
        formData.append('descriptionComment3', textArea6);
        if (pdfFile1) formData.append('pdfFile1', pdfFile1);
        if (pdfFile2) formData.append('pdfFile2', pdfFile2);
        if (pdfFile3) formData.append('pdfFile3', pdfFile3);

        try {
            const response = await fetch(`${env.REACT_APP_APP_API_PROTOCOL}://${env.REACT_APP_DOMEN_NAME}/api/sendNewDiagnos`, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Ошибка при отправке данных');
            }

            const result = await response.json();
            console.log(result);

            resetForm();
            setIsOpen(false);
            alert("Данные успешно отправлены!");
        } catch (error) {
            setErrorInput('Произошла ошибка при отправке данных.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <button className='button green' onClick={togglePopUp}>
                Предложить новый диагноз
            </button>

            {isOpen && (
                <div className='popup'>
                    <div className='popup-content'>
                        <span className='close' onClick={togglePopUp}>&times;</span>
                        <form className='form_popup' onSubmit={handleSubmit}>
                            {errorInput && <div className='error-message1'>{errorInput}</div>}
                            <div className='form-double'>
                                <div className='form'>
                                    <div className='popup-text'>Название диагноза</div>
                                    <input
                                        className={`input-popup-double ${errorInput1 ? 'input-error' : ''}`}
                                        type='text'
                                        placeholder='Введите название диагноза'
                                        value={input1}
                                        onChange={(e) => setInput1(e.target.value)}
                                    />
                                    {errorInput1 && <div className='error-message1'>{errorInput1}</div>}
                                </div>
                                <div className='form'>
                                    <div className='popup-text'>Код МКБ</div>
                                    <input
                                        className={`input-popup-double ${errorInput3 ? 'input-error' : ''}`}
                                        type='text'
                                        placeholder='Введите код МКБ'
                                        value={input3}
                                        onChange={(e) => setInput3(e.target.value)}
                                    />
                                    {errorInput3 && <div className='error-message1'>{errorInput3}</div>}
                                </div>
                            </div>
                            <div className='popup-text'>ФИО</div>
                            <input
                                className={`input-popup ${errorInput2 ? 'input-error' : ''}`}
                                type='text'
                                placeholder='Введите ФИО'
                                value={input2}
                                onChange={(e) => setInput2(e.target.value)}
                            />
                            {errorInput2 && <div className='error-message1'>{errorInput2}</div>}
                            <div className='form-double'>
                                <div className='form'>
                                    <div className='popup-text'>Описание обследования</div>
                                    <textarea
                                        className='textarea-popup-double'
                                        placeholder='Введите описание обследования'
                                        value={textArea}
                                        onChange={(e) => setTextArea(e.target.value)}
                                    />
                                </div>
                                <div className='form'>
                                    <div className='popup-text'>Комментарии к обследованию</div>
                                    <textarea
                                        className='textarea-popup-double'
                                        placeholder='Введите комментарии к обследованию'
                                        value={textArea4}
                                        onChange={(e) => setTextArea4(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className='popup-text'>Загрузите PDF файл к обследованию</div>
                            <div className='popup-pdf'>
                                <input
                                    className='input-file'
                                    type='file'
                                    accept='application/pdf'
                                    onChange={handleFileChange}
                                />
                                {pdfFile1 && (
                                    <div className='pdf-preview'>
                                        <div>Загруженный pdf файл:</div>
                                        <label className='pdf-file-popup'>{pdfFile1.name}</label>
                                    </div>
                                )}
                            </div>

                            <div className='form-double'>
                                <div className='form'>
                                    <div className='popup-text'>Описание медикоментозного лечения</div>
                                    <textarea
                                        className='textarea-popup-double'
                                        placeholder='Введите описание медикоментозного лечения'
                                        value={textArea2}
                                        onChange={(e) => setTextArea2(e.target.value)}
                                    />
                                </div>
                                <div className='form'>
                                    <div className='popup-text'>Комментарии к мед. лечению</div>
                                    <textarea
                                        className='textarea-popup-double'
                                        placeholder='Введите описание медикоментозного лечения'
                                        value={textArea5}
                                        onChange={(e) => setTextArea5(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className='popup-text'>Загрузите PDF файл к мед. лечению</div>
                            <div className='popup-pdf'>
                                <input
                                    className='input-file'
                                    type='file'
                                    accept='application/pdf'
                                    onChange={handleFileChange2}
                                />
                                {pdfFile2 && (
                                    <div className='pdf-preview'>
                                        <div>Загруженный pdf файл:</div>
                                        <label className='pdf-file-popup'>{pdfFile2.name}</label>
                                    </div>
                                )}
                            </div>

                            <div className='form-double'>
                                <div className='form'>
                                    <div className='popup-text'>Описание рекомендаций</div>
                                    <textarea
                                        className='textarea-popup-double'
                                        placeholder='Введите описание рекомендаций'
                                        value={textArea3}
                                        onChange={(e) => setTextArea3(e.target.value)}
                                    />
                                </div>
                                <div className='form'>
                                    <div className='popup-text'>Комментарии к рекомендациям</div>
                                    <textarea
                                        className='textarea-popup-double'
                                        placeholder='Введите комментарии к рекомендациям'
                                        value={textArea6}
                                        onChange={(e) => setTextArea6(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className='popup-text'>Загрузите PDF файл к рекомендациям</div>
                            <div className='popup-pdf'>
                                <input
                                    className='input-file'
                                    type='file'
                                    accept='application/pdf'
                                    onChange={handleFileChange3}
                                />
                                {pdfFile3 && (
                                    <div className='pdf-preview'>
                                        <div>Загруженный pdf файл:</div>
                                        <label className='pdf-file-popup'>{pdfFile3.name}</label>
                                    </div>
                                )}
                            </div>
                            <button className={`button-popup ${isLoading ? 'button-popup-disabled' : ''}`} type='submit' disabled={isLoading}>{isLoading ? 'Отправка...' : 'Отправить'}</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PopUp;