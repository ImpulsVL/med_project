import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import './DiagnosPageAdmin.scss';
import './DiagnosPageAdminWriteBox.scss'

import { ReactComponent as IconBold } from './icons/Bold.svg';
import { ReactComponent as IconStroke } from './icons/Stroke.svg';
import { ReactComponent as IconDot } from './icons/Dot.svg';
import { ReactComponent as IconNumber } from './icons/Number.svg';
import { ReactComponent as IconNextOption } from './icons/NextOption.svg';
import { ReactComponent as IconBackOption } from './icons/BackOption.svg';

import PlusIconImg from '../diagnosisPageAdmin/icons/plus.svg';
import PlusIconGreenImg from './icons/plus.svg';
import HeaderAdmin from '../headerAdmin/HeaderAdmin';

function DiagnosPageAdmin() {

    const location = useLocation();
    const { diagnosisId, allSpecializations, specialization, currentSpecializationName, current, iddig } = location.state || {};

    console.log(allSpecializations);

    const [showAddExaminationPopup, setShowAddExaminationPopup] = useState(false);
    const [newExamination, setNewExamination] = useState({ name: '', comment: '' });

    const [currentElementId, setCurrentElementId] = useState(null);

    const [showAddTreatmentPopup, setShowAddTreatmentPopup] = useState(false);
    const [newTreatment, setNewTreatment] = useState({ name: '', comment: '' });

    const [showAddRecommendationPopup, setShowAddRecommendationPopup] = useState(false);
    const [newRecommendation, setNewRecommendation] = useState({ name: '', comment: '' });

    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const [deleteItemInfo, setDeleteItemInfo] = useState(null);

    const [editDiagnosisItem, setEditDiagnosisItem] = useState({ name: '', comment: '' });
    const [editDiagnosisItemInfo, setEditDiagnosisItemInfo] = useState(null);

    const [showEditComponentPopup, setShowEditComponentPopup] = useState(false);
    const [editComponent, setEditComponent] = useState({ name: '', comment: '' });

    const [showDeletePopupComponent, setShowDeletePopupComponent] = useState(false);
    const [deleteComponentInfo, setDeleteComponentInfo] = useState(null);

    const [currentComponentId, setCurrentComponentId] = useState(null);

    const [diagnosis, setDiagnosis] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [showEditPopup, setShowEditPopup] = useState(false);
    const [editField, setEditField] = useState(null);
    const [newValue, setNewValue] = useState('');

    useEffect(() => {
        const fetchDiagnosis = async () => {
            if (!diagnosisId) return;

            try {
                const response = await fetch(`http://test-asya.ru/api/diagnosis?id=${diagnosisId}`);
                if (!response.ok) {
                    throw new Error('Ошибка при загрузке данных');
                }
                const { result } = await response.json();
                console.log(result, 'proverka');
                setDiagnosis(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchDiagnosis();
    }, [diagnosisId]);

    const [currentExaminationIndex, setCurrentExaminationIndex] = useState(null);
    const [showAddItemPopup, setShowAddItemPopup] = useState(false);
    const [newItem, setNewItem] = useState({ name: '', comment: '' });

    const [newDrugTreatmentItem, setNewDrugTreatmentItem] = useState({ name: '', comment: '' });
    const [showAddDrugTreatmentPopup, setShowAddDrugTreatmentPopup] = useState(false);

    const [activeTab, setActiveTab] = useState('inspection'); // 'inspection' или 'comments'

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const [activeTab2, setActiveTab2] = useState('inspection'); // 'inspection' или 'comments'

    const handleTabChange2 = (tab) => {
        setActiveTab2(tab);
    };

    const [activeTab3, setActiveTab3] = useState('inspection'); // 'inspection' или 'comments'

    const handleTabChange3 = (tab) => {
        setActiveTab3(tab);
    };

    const [isBold, setIsBold] = useState(false);
    const [isBold2, setIsBold2] = useState(false);
    const [isBold3, setIsBold3] = useState(false);
    const [isBold4, setIsBold4] = useState(false);
    const [isBold5, setIsBold5] = useState(false);
    const [isBold6, setIsBold6] = useState(false);

    const [isItalic, setIsItalic] = useState(false);
    const [isItalic2, setIsItalic2] = useState(false);
    const [isItalic3, setIsItalic3] = useState(false);
    const [isItalic4, setIsItalic4] = useState(false);
    const [isItalic5, setIsItalic5] = useState(false);
    const [isItalic6, setIsItalic6] = useState(false);

    const [isDot, setIsDot] = useState(false);
    const [isNumber, setIsNumber] = useState(false);

    const [isDot2, setIsDot2] = useState(false);
    const [isNumber2, setIsNumber2] = useState(false);

    const [isDot3, setIsDot3] = useState(false);
    const [isNumber3, setIsNumber3] = useState(false);

    const [isDot4, setIsDot4] = useState(false);
    const [isNumber4, setIsNumber4] = useState(false);

    const [isDot5, setIsDot5] = useState(false);
    const [isNumber5, setIsNumber5] = useState(false);

    const [isDot6, setIsDot6] = useState(false);
    const [isNumber6, setIsNumber6] = useState(false);

    const [selectedFormat, setSelectedFormat] = useState('Choose heading');
    const [selectedFormat2, setSelectedFormat2] = useState('Choose heading');
    const [selectedFormat3, setSelectedFormat3] = useState('Choose heading');
    const [selectedFormat4, setSelectedFormat4] = useState('Choose heading');
    const [selectedFormat5, setSelectedFormat5] = useState('Choose heading');
    const [selectedFormat6, setSelectedFormat6] = useState('Choose heading');


    const applyFormat = (format) => {
        setSelectedFormat(format);
        if (format === 'Heading') {
            document.execCommand('formatBlock', false, 'h1');
        } else if (format === 'Subheading') {
            document.execCommand('formatBlock', false, 'h2');
        } else if (format === 'Comment') {
            document.execCommand('fontSize', false, 'small');
            document.execCommand('foreColor', false, 'gray');
        } else if (format === 'Text') {
            ;
            document.execCommand('foreColor', false, 'black');
        } else {
            document.execCommand('formatBlock', false, 'span');
        }
    };

    const applyFormat2 = (format) => {
        setSelectedFormat2(format);
        if (format === 'Heading') {
            document.execCommand('formatBlock', false, 'h1');
        } else if (format === 'Subheading') {
            document.execCommand('formatBlock', false, 'h2');
        } else if (format === 'Comment') {
            document.execCommand('fontSize', false, 'small');
            document.execCommand('foreColor', false, 'gray');
        } else if (format === 'Text') {
            ;
            document.execCommand('foreColor', false, 'black');
        } else {
            document.execCommand('formatBlock', false, 'span');
        }
    };

    const applyFormat3 = (format) => {
        setSelectedFormat3(format);
        if (format === 'Heading') {
            document.execCommand('formatBlock', false, 'h1');
        } else if (format === 'Subheading') {
            document.execCommand('formatBlock', false, 'h2');
        } else if (format === 'Comment') {
            document.execCommand('fontSize', false, 'small');
            document.execCommand('foreColor', false, 'gray');
        } else if (format === 'Text') {
            ;
            document.execCommand('foreColor', false, 'black');
        } else {
            document.execCommand('formatBlock', false, 'span');
        }
    };

    const applyFormat4 = (format) => {
        setSelectedFormat4(format);
        if (format === 'Heading') {
            document.execCommand('formatBlock', false, 'h1');
        } else if (format === 'Subheading') {
            document.execCommand('formatBlock', false, 'h2');
        } else if (format === 'Comment') {
            document.execCommand('fontSize', false, 'small');
            document.execCommand('foreColor', false, 'gray');
        } else if (format === 'Text') {
            ;
            document.execCommand('foreColor', false, 'black');
        } else {
            document.execCommand('formatBlock', false, 'span');
        }
    };

    const applyFormat5 = (format) => {
        setSelectedFormat5(format);
        if (format === 'Heading') {
            document.execCommand('formatBlock', false, 'h1');
        } else if (format === 'Subheading') {
            document.execCommand('formatBlock', false, 'h2');
        } else if (format === 'Comment') {
            document.execCommand('fontSize', false, 'small');
            document.execCommand('foreColor', false, 'gray');
        } else if (format === 'Text') {
            ;
            document.execCommand('foreColor', false, 'black');
        } else {
            document.execCommand('formatBlock', false, 'span');
        }
    };

    const applyFormat6 = (format) => {
        setSelectedFormat6(format);
        if (format === 'Heading') {
            document.execCommand('formatBlock', false, 'h1');
        } else if (format === 'Subheading') {
            document.execCommand('formatBlock', false, 'h2');
        } else if (format === 'Comment') {
            document.execCommand('fontSize', false, 'small');
            document.execCommand('foreColor', false, 'gray');
        } else if (format === 'Text') {
            ;
            document.execCommand('foreColor', false, 'black');
        } else {
            document.execCommand('formatBlock', false, 'span');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            const selection = window.getSelection();
            const parentElement = selection.anchorNode.parentElement;
            if (parentElement.tagName === 'H1' || parentElement.tagName === 'H2') {
                e.preventDefault();
                document.execCommand('formatBlock', false, 'p');
                setSelectedFormat('Text');
            }
        }
    };

    const handleKeyDown2 = (e) => {
        if (e.key === 'Enter') {
            const selection = window.getSelection();
            const parentElement = selection.anchorNode.parentElement;
            if (parentElement.tagName === 'H1' || parentElement.tagName === 'H2') {
                e.preventDefault();
                document.execCommand('formatBlock', false, 'p');
                setSelectedFormat2('Text');
            }
        }
    };

    const handleKeyDown3 = (e) => {
        if (e.key === 'Enter') {
            const selection = window.getSelection();
            const parentElement = selection.anchorNode.parentElement;
            if (parentElement.tagName === 'H1' || parentElement.tagName === 'H2') {
                e.preventDefault();
                document.execCommand('formatBlock', false, 'p');
                setSelectedFormat3('Text');
            }
        }
    };

    const handleKeyDown4 = (e) => {
        if (e.key === 'Enter') {
            const selection = window.getSelection();
            const parentElement = selection.anchorNode.parentElement;
            if (parentElement.tagName === 'H1' || parentElement.tagName === 'H2') {
                e.preventDefault();
                document.execCommand('formatBlock', false, 'p');
                setSelectedFormat4('Text');
            }
        }
    };

    const handleKeyDown5 = (e) => {
        if (e.key === 'Enter') {
            const selection = window.getSelection();
            const parentElement = selection.anchorNode.parentElement;
            if (parentElement.tagName === 'H1' || parentElement.tagName === 'H2') {
                e.preventDefault();
                document.execCommand('formatBlock', false, 'p');
                setSelectedFormat5('Text');
            }
        }
    };

    const handleKeyDown6 = (e) => {
        if (e.key === 'Enter') {
            const selection = window.getSelection();
            const parentElement = selection.anchorNode.parentElement;
            if (parentElement.tagName === 'H1' || parentElement.tagName === 'H2') {
                e.preventDefault();
                document.execCommand('formatBlock', false, 'p');
                setSelectedFormat6('Text');
            }
        }
    };

    const toggleBold = () => {
        document.execCommand('bold');
        setIsBold(!isBold);
    };

    const toggleItalic = () => {
        document.execCommand('italic');
        setIsItalic(!isItalic);
    };

    const toggleBold2 = () => {
        document.execCommand('bold');
        setIsBold2(!isBold2);
    };

    const toggleItalic2 = () => {
        document.execCommand('italic');
        setIsItalic2(!isItalic2);
    };

    const toggleBold3 = () => {
        document.execCommand('bold');
        setIsBold3(!isBold3);
    };

    const toggleItalic3 = () => {
        document.execCommand('italic');
        setIsItalic3(!isItalic3);
    };

    const toggleBold4 = () => {
        document.execCommand('bold');
        setIsBold4(!isBold4);
    };

    const toggleItalic4 = () => {
        document.execCommand('italic');
        setIsItalic4(!isItalic4);
    };

    const toggleBold5 = () => {
        document.execCommand('bold');
        setIsBold5(!isBold5);
    };

    const toggleItalic5 = () => {
        document.execCommand('italic');
        setIsItalic5(!isItalic5);
    };

    const toggleBold6 = () => {
        document.execCommand('bold');
        setIsBold6(!isBold6);
    };

    const toggleItalic6 = () => {
        document.execCommand('italic');
        setIsItalic6(!isItalic6);
    };

    // Логика для отмены действия (Ctrl + Z)
    const handleUndo = () => {
        document.execCommand('undo');
    };

    // Логика для повторения действия (Ctrl + Y)
    const handleRedo = () => {
        document.execCommand('redo');
    };

    const handleUndo2 = () => {
        document.execCommand('undo');
    };

    // Логика для повторения действия (Ctrl + Y)
    const handleRedo2 = () => {
        document.execCommand('redo');
    };

    const handleUndo3 = () => {
        document.execCommand('undo');
    };

    // Логика для повторения действия (Ctrl + Y)
    const handleRedo3 = () => {
        document.execCommand('redo');
    };

    const handleUndo4 = () => {
        document.execCommand('undo');
    };

    // Логика для повторения действия (Ctrl + Y)
    const handleRedo4 = () => {
        document.execCommand('redo');
    };

    const handleUndo5 = () => {
        document.execCommand('undo');
    };

    // Логика для повторения действия (Ctrl + Y)
    const handleRedo5 = () => {
        document.execCommand('redo');
    };

    const handleUndo6 = () => {
        document.execCommand('undo');
    };

    // Логика для повторения действия (Ctrl + Y)
    const handleRedo6 = () => {
        document.execCommand('redo');
    };

    const insertUnorderedList = () => {
        document.execCommand('insertUnorderedList');
        setIsDot(!isDot);
    };

    const insertOrderedList = () => {
        document.execCommand('insertOrderedList');
        setIsNumber(!isNumber);
    };

    const insertUnorderedList2 = () => {
        document.execCommand('insertUnorderedList');
        setIsDot2(!isDot2);
    };

    const insertOrderedList2 = () => {
        document.execCommand('insertOrderedList');
        setIsNumber2(!isNumber2);
    };

    const insertUnorderedList3 = () => {
        document.execCommand('insertUnorderedList');
        setIsDot3(!isDot3);
    };

    const insertOrderedList3 = () => {
        document.execCommand('insertOrderedList');
        setIsNumber3(!isNumber3);
    };

    const insertUnorderedList4 = () => {
        document.execCommand('insertUnorderedList');
        setIsDot4(!isDot4);
    };

    const insertOrderedList4 = () => {
        document.execCommand('insertOrderedList');
        setIsNumber4(!isNumber4);
    };

    const insertUnorderedList5 = () => {
        document.execCommand('insertUnorderedList');
        setIsDot5(!isDot5);
    };

    const insertOrderedList5 = () => {
        document.execCommand('insertOrderedList');
        setIsNumber5(!isNumber5);
    };

    const insertUnorderedList6 = () => {
        document.execCommand('insertUnorderedList');
        setIsDot6(!isDot6);
    };

    const insertOrderedList6 = () => {
        document.execCommand('insertOrderedList');
        setIsNumber6(!isNumber6);
    };

    const handleAddExamination = async () => {
        if (newExamination.name) {
            try {
                const response = await fetch(`http://test-asya.ru/api/addItem?type=survey&name=${encodeURIComponent(newExamination.name)}&comment=${encodeURIComponent(newExamination.comment)}&diagnosis_id=${diagnosisId}`, {
                    method: 'GET',
                });

                if (!response.ok) {
                    throw new Error('Ошибка при добавлении обследования');
                }

                const { data } = await response.json(); // Получаем данные из ответа
                const updatedExaminations = [...diagnosis.survey.items, { ...newExamination, ID: data.ID }]; // Добавляем новый элемент с ID

                setDiagnosis(prev => ({
                    ...prev,
                    survey: { ...prev.survey, items: updatedExaminations }
                }));
                setNewExamination({ name: '', comment: '' });
                setShowAddExaminationPopup(false);
            } catch (error) {
                console.error(error);
                alert(error.message);
            }
        }
    };

    const handleAddItem = async () => {
        if (newItem.name && currentExaminationIndex !== null && currentElementId) {
            try {
                const response = await fetch(`http://test-asya.ru/api/addSubcomponent?element_id=${currentElementId}&name=${encodeURIComponent(newItem.name)}&comment=${encodeURIComponent(newItem.comment)}`, {
                    method: 'GET',
                });

                if (!response.ok) {
                    throw new Error('Ошибка при добавлении компонента');
                }

                const { data } = await response.json(); // Получаем данные из ответа
                const newComponent = { ...newItem, id: data.id }; // Создаем новый компонент с ID

                // Обновляем состояние диагноза, добавляя новый компонент в соответствующий массив
                setDiagnosis(prev => {
                    const updatedSurveyItems = [...prev.survey.items];

                    // Убедитесь, что values инициализирован как массив
                    if (!updatedSurveyItems[currentExaminationIndex].values) {
                        updatedSurveyItems[currentExaminationIndex].values = [];
                    }

                    updatedSurveyItems[currentExaminationIndex].values = [
                        ...updatedSurveyItems[currentExaminationIndex].values,
                        newComponent
                    ];

                    return {
                        ...prev,
                        survey: {
                            ...prev.survey,
                            items: updatedSurveyItems
                        }
                    };
                });

                // Сбрасываем состояние нового элемента и закрываем попап
                setNewItem({ name: '', comment: '' });
                setShowAddItemPopup(false);
            } catch (error) {
                console.error(error);
                alert(error.message);
            }
        }
    };

    const handleAddDrugTreatmentItem = async () => {
        if (newDrugTreatmentItem.name && currentExaminationIndex !== null && currentElementId) {
            try {
                const response = await fetch(`http://test-asya.ru/api/addSubcomponent?element_id=${currentElementId}&name=${encodeURIComponent(newDrugTreatmentItem.name)}&comment=${encodeURIComponent(newDrugTreatmentItem.comment)}`, {
                    method: 'GET',
                });

                if (!response.ok) {
                    throw new Error('Ошибка при добавлении компонента медикаментозного лечения');
                }

                const { data } = await response.json(); // Получаем данные из ответа
                const newComponent = { ...newDrugTreatmentItem, id: data.id }; // Создаем новый компонент с ID

                // Обновляем состояние диагноза, добавляя новый компонент в соответствующий массив
                setDiagnosis(prev => {
                    const updatedDrugTreatmentItems = [...prev.drug_treatment.items];

                    // Убедитесь, что values инициализирован как массив
                    if (!updatedDrugTreatmentItems[currentExaminationIndex].values) {
                        updatedDrugTreatmentItems[currentExaminationIndex].values = [];
                    }

                    updatedDrugTreatmentItems[currentExaminationIndex].values = [
                        ...updatedDrugTreatmentItems[currentExaminationIndex].values,
                        newComponent
                    ];

                    return {
                        ...prev,
                        drug_treatment: {
                            ...prev.drug_treatment,
                            items: updatedDrugTreatmentItems
                        }
                    };
                });

                // Сбрасываем состояние нового элемента и закрываем попап
                setNewDrugTreatmentItem({ name: '', comment: '' });
                setShowAddDrugTreatmentPopup(false);
            } catch (error) {
                console.error(error);
                alert(error.message);
            }
        }
    };

    const [editSource, setEditSource] = useState(null);

    const handleEditComponent = async () => {
        if (currentComponentId && currentElementId) {
            try {
                const response = await fetch(`http://test-asya.ru/api/updateSubcomponent?element_id=${currentElementId}&new_name=${encodeURIComponent(editComponent.name)}&new_comment=${encodeURIComponent(editComponent.comment)}&subcomponent_id=${currentComponentId}`, {
                    method: 'GET',
                });
    
                if (!response.ok) {
                    throw new Error('Ошибка при обновлении компонента');
                }
    
                // Обновляем состояние диагноза
                setDiagnosis(prev => {
                    const updatedSurveyItems = prev.survey.items.map(item => {
                        if (item.ID === currentElementId) {
                            return {
                                ...item,
                                values: item.values.map(comp => {
                                    if (comp.id === currentComponentId) {
                                        return { ...comp, name: editComponent.name, comment: editComponent.comment };
                                    }
                                    return comp;
                                })
                            };
                        }
                        return item;
                    });
    
                    const updatedDrugTreatmentItems = prev.drug_treatment.items.map(item => {
                        if (item.ID === currentElementId) {
                            return {
                                ...item,
                                values: item.values.map(comp => {
                                    if (comp.id === currentComponentId) {
                                        return { ...comp, name: editComponent.name, comment: editComponent.comment };
                                    }
                                    return comp;
                                })
                            };
                        }
                        return item;
                    });
    
                    return {
                        ...prev,
                        survey: {
                            ...prev.survey,
                            items: updatedSurveyItems
                        },
                        drug_treatment: {
                            ...prev.drug_treatment,
                            items: updatedDrugTreatmentItems
                        }
                    };
                });
    
                setEditComponent({ name: '', comment: '' });
                setShowEditComponentPopup(false);
            } catch (error) {
                console.error(error);
                alert(error.message);
            }
        }
    };

    const handleEditComponentClick = (index, type, componentId) => {
        setCurrentExaminationIndex(index);
        setCurrentElementId(type === 'survey' ? diagnosis.survey.items[index].ID : diagnosis.drug_treatment.items[index].ID); // Установите ID элемента
        setCurrentComponentId(componentId); // Установите ID компонента
        setShowEditComponentPopup(true); // Покажите попап для редактирования
    };

    const handleDeleteComponent = async () => {
        if (currentComponentId && currentElementId) {
            try {
                const response = await fetch(`http://test-asya.ru/api/deleteSubcomponent?element_id=${currentElementId}&subcomponent_id=${currentComponentId}`, {
                    method: 'GET',
                });
    
                if (!response.ok) {
                    throw new Error('Ошибка при удалении компонента');
                }
    
                // Обновляем состояние диагноза
                setDiagnosis(prev => {
                    const updatedSurveyItems = prev.survey.items.map(item => {
                        if (item.ID === currentElementId) {
                            return {
                                ...item,
                                values: item.values.filter(comp => comp.id !== currentComponentId)
                            };
                        }
                        return item;
                    });
    
                    const updatedDrugTreatmentItems = prev.drug_treatment.items.map(item => {
                        if (item.ID === currentElementId) {
                            return {
                                ...item,
                                values: item.values.filter(comp => comp.id !== currentComponentId)
                            };
                        }
                        return item;
                    });
    
                    return {
                        ...prev,
                        survey: {
                            ...prev.survey,
                            items: updatedSurveyItems
                        },
                        drug_treatment: {
                            ...prev.drug_treatment,
                            items: updatedDrugTreatmentItems
                        }
                    };
                });
    
                setShowDeletePopupComponent(false);
            } catch (error) {
                console.error(error);
                alert(error.message);
            }
        }
    };

    const handleDeleteComponentClick = (index, type, componentId) => {
        setCurrentExaminationIndex(index);
        setCurrentElementId(type === 'survey' ? diagnosis.survey.items[index].ID : diagnosis.drug_treatment.items[index].ID); // Установите ID элемента
        setCurrentComponentId(componentId); // Установите ID компонента
        setShowDeletePopupComponent(true); // Покажите попап для удаления
    };

    const handleAddComponentClick = (index, type) => {
        setCurrentExaminationIndex(index);
        setCurrentElementId(type === 'survey' ? diagnosis.survey.items[index].ID : diagnosis.drug_treatment.items[index].ID); // Установите ID элемента
        if (type === 'survey') {
            setShowAddItemPopup(true);
        } else if (type === 'drug_treatment') {
            setShowAddDrugTreatmentPopup(true);
        }
    };

    const handleAddTreatment = async () => {
        if (newTreatment.name) {
            try {
                const response = await fetch(`http://test-asya.ru/api/addItem?type=drug_treatment&name=${encodeURIComponent(newTreatment.name)}&comment=${encodeURIComponent(newTreatment.comment)}&diagnosis_id=${diagnosisId}`, {
                    method: 'GET',
                });

                if (!response.ok) {
                    throw new Error('Ошибка при добавлении медикаментозного лечения');
                }

                const { data } = await response.json(); // Получаем данные из ответа
                const updatedTreatments = [...diagnosis.drug_treatment.items, { ...newTreatment, ID: data.ID }]; // Добавляем новый элемент с ID

                setDiagnosis(prev => ({
                    ...prev,
                    drug_treatment: { ...prev.drug_treatment, items: updatedTreatments }
                }));
                setNewTreatment({ name: '', comment: '' });
                setShowAddTreatmentPopup(false);
            } catch (error) {
                console.error(error);
                alert(error.message);
            }
        }
    };

    const handleAddRecommendation = async () => {
        if (newRecommendation.name) {
            try {
                const response = await fetch(`http://test-asya.ru/api/addItem?type=recommendation&name=${encodeURIComponent(newRecommendation.name)}&comment=${encodeURIComponent(newRecommendation.comment)}&diagnosis_id=${diagnosisId}`, {
                    method: 'GET',
                });

                if (!response.ok) {
                    throw new Error('Ошибка при добавлении рекомендации');
                }

                const { data } = await response.json(); // Получаем данные из ответа
                const updatedRecommendations = [...diagnosis.recommendations.items, { ...newRecommendation, ID: data.ID }]; // Добавляем новый элемент с ID

                setDiagnosis(prev => ({
                    ...prev,
                    recommendations: { ...prev.recommendations, items: updatedRecommendations }
                }));
                setNewRecommendation({ name: '', comment: '' });
                setShowAddRecommendationPopup(false);
            } catch (error) {
                console.error(error);
                alert(error.message);
            }
        }
    };

    const handleDeleteClick = (type, itemId) => {
        setDeleteItemInfo({ type, itemId });
        setShowDeletePopup(true);
    };

    console.log(iddig, '111111111');

    const handleDeleteDiagnosis = async () => {
        if (deleteItemInfo) {
            const { type, itemId } = deleteItemInfo;
            const diagnosisId = iddig;
            try {
                const response = await fetch(`http://test-asya.ru/api/deleteItem?type=${type}&item_id=${itemId}&diagnosis_id=${diagnosisId}`, {
                    method: 'GET',
                });

                if (!response.ok) {
                    throw new Error('Ошибка при удалении элемента');
                }


                console.log(type, 'lol');

                // Обновляем состояние диагноза, удаляя элемент
                setDiagnosis(prev => {
                    const adjustedType = type === 'recommendation' ? 'recommendations' : type;

                    const updatedItems = prev[adjustedType].items.filter(item => item.ID !== itemId); // Удаляем элемент по ID

                    return {
                        ...prev,
                        [adjustedType]: {
                            ...prev[adjustedType],
                            items: updatedItems
                        }
                    };
                });

                setShowDeletePopup(false);
                setDeleteItemInfo(null);
            } catch (error) {
                console.error('Ошибка сети:', error);
                alert(error.message);
            }
        }
    };

    const handleEditDiagnosisItem = async () => {
        if (editDiagnosisItemInfo) {
            const { type, itemId } = editDiagnosisItemInfo;
            const diagnosisId = iddig; // ID диагноза

            try {
                const response = await fetch(`http://test-asya.ru/api/updateItem?type=${type}&item_id=${itemId}&diagnosis_id=${diagnosisId}&name=${encodeURIComponent(editDiagnosisItem.name)}&comment=${encodeURIComponent(editDiagnosisItem.comment)}`, {
                    method: 'GET',
                });

                if (!response.ok) {
                    throw new Error('Ошибка при обновлении элемента');
                }

                // Обновляем состояние диагноза, изменяя элемент
                setDiagnosis(prev => {
                    const adjustedType = type === 'recommendation' ? 'recommendations' : type;

                    const updatedItems = prev[adjustedType].items.map(item => {
                        if (item.ID === itemId) {
                            return { ...item, name: editDiagnosisItem.name, comment: editDiagnosisItem.comment };
                        }
                        return item;
                    });

                    return {
                        ...prev,
                        [adjustedType]: {
                            ...prev[adjustedType],
                            items: updatedItems
                        }
                    };
                });

                setEditDiagnosisItem({ name: '', comment: '' });
                setEditDiagnosisItemInfo(null);
            } catch (error) {
                console.error(error);
                alert(error.message);
            }
        }
    };

    const handleEdit = async () => {
        try {
            const response = await fetch(`http://test-asya.ru/api/updateDiagnosis?id=${diagnosisId}&name=${encodeURIComponent(editField === 'name' ? newValue : diagnosis?.name)}&code=${encodeURIComponent(editField === 'code' ? newValue : diagnosis?.code)}&sort=${encodeURIComponent(editField === 'sort' ? newValue : diagnosis?.sort)}`, {
                method: 'GET',
            });

            if (!response.ok) {
                throw new Error('Ошибка при обновлении диагноза');
            }

            // Обновляем состояние диагноза, чтобы отобразить изменения
            setDiagnosis(prev => ({
                ...prev,
                name: editField === 'name' ? newValue : prev.name,
                code: editField === 'code' ? newValue : prev.code,
                sort: editField === 'sort' ? newValue : prev.sort,
            }));

            setShowEditPopup(false);
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    };

    // Функция для открытия попапа редактирования
    const openEditPopup = (field) => {
        setEditField(field);
        setNewValue(field === 'code' ? diagnosis?.code : field === 'name' ? diagnosis?.name : diagnosis?.sort);
        setShowEditPopup(true);
    };

    const [uploadType, setUploadType] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [isTypeRecommend, setIsTypeRecommend] = useState(true);
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(event.target.files[0]);
        handleUpload(event.target.files[0]);
    };

    const [isLoading, setIsLoading] = useState(false);

    const handleUpload = async (file) => {
        if (!file) {
            alert('Пожалуйста, выберите файл.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        const url = `http://test-asya.ru/api/addPdf?type=${uploadType}&diagnosis_id=${diagnosisId}&fileName=${encodeURIComponent(file.name)}&isTypeRecommend=${isTypeRecommend}`;
        setIsLoading(true);
        try {
            const response = await fetch(url, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Ошибка при загрузке файла');
            }

            const result = await response.json();
            console.log(result);

            // Обновляем состояние в зависимости от uploadType и isTypeRecommend
            setDiagnosis(prev => {
                const updatedDiagnosis = { ...prev };

                if (uploadType === 'survey') {
                    if (isTypeRecommend) {
                        updatedDiagnosis.survey.files.recommended.push({ id: result.data.file_id, name: file.name, url: result.data.url });
                    } else {
                        updatedDiagnosis.survey.files.not_recommended.push({ id: result.data.file_id, name: file.name, url: result.data.url });
                    }
                } else if (uploadType === 'medical_treatment') {
                    if (isTypeRecommend) {
                        updatedDiagnosis.drug_treatment.files.recommended.push({ id: result.data.file_id, name: file.name, url: result.data.url });
                    } else {
                        updatedDiagnosis.drug_treatment.files.not_recommended.push({ id: result.data.file_id, name: file.name, url: result.data.url });
                    }
                } else if (uploadType === 'recommendation') {
                    if (isTypeRecommend) {
                        updatedDiagnosis.recommendations.files.recommended.push({ id: result.data.file_id, name: file.name, url: result.data.url });
                    } else {
                        updatedDiagnosis.recommendations.files.not_recommended.push({ id: result.data.file_id, name: file.name, url: result.data.url });
                    }
                }

                return updatedDiagnosis;
            });

            alert('Файл успешно загружен!');
        } catch (error) {
            console.error(error);
            alert(error.message);
        } finally {
            setIsLoading(false);
            fileInputRef.current.value = '';
        }
    };

    const handleButtonClick = (type, recommend) => {
        setUploadType(type);
        setIsTypeRecommend(recommend);
        fileInputRef.current.click(); // Открываем диалог выбора файла
    };

    const handleOpenPdf = (url) => {
        window.open(`${url}`, '_blank'); // Открываем PDF в новой вкладке
    };

    const handleDeletePdf = async (fileId, upType, isTypeRecommend) => {
        const url = `http://test-asya.ru/api/deletePdf?file_id=${fileId}`;

        if (window.confirm('Вы уверены, что хотите удалить этот файл?')) {
            setIsLoading(true);
            try {
                const response = await fetch(url, {
                    method: 'GET',
                });

                if (!response.ok) {
                    throw new Error('Ошибка при удалении файла');
                }

                const result = await response.json();

                console.log(upType, 'Вопросы есть');
                console.log(fileId, 'вопросы есть?');
                console.log(isTypeRecommend, 'вопросы есть?');

                // Обновляем состояние, удаляя файл из списка
                setDiagnosis(prev => {
                    const updatedDiagnosis = { ...prev };

                    if (upType === 'survey') {
                        if (isTypeRecommend) {
                            updatedDiagnosis.survey.files.recommended = updatedDiagnosis.survey.files.recommended.filter(file => file.id !== fileId);
                        } else {
                            updatedDiagnosis.survey.files.not_recommended = updatedDiagnosis.survey.files.not_recommended.filter(file => file.id !== fileId);
                        }
                    } else if (upType === 'medical_treatment') {
                        if (isTypeRecommend) {
                            updatedDiagnosis.drug_treatment.files.recommended = updatedDiagnosis.drug_treatment.files.recommended.filter(file => file.id !== fileId);
                        } else {
                            updatedDiagnosis.drug_treatment.files.not_recommended = updatedDiagnosis.drug_treatment.files.not_recommended.filter(file => file.id !== fileId);
                        }
                    } else if (upType === 'recommendation') {
                        if (isTypeRecommend) {
                            updatedDiagnosis.recommendations.files.recommended = updatedDiagnosis.recommendations.files.recommended.filter(file => file.id !== fileId);
                        } else {
                            updatedDiagnosis.recommendations.files.not_recommended = updatedDiagnosis.recommendations.files.not_recommended.filter(file => file.id !== fileId);
                        }
                    }

                    return updatedDiagnosis;
                });

                alert('Файл успешно удален!');
            } catch (error) {
                console.error(error);
                alert(error.message);
            } finally {
                setIsLoading(false);
            }
        }
    };

    const textRefs = {
        surveyRec: useRef(null),
        surveyNonRec: useRef(null),
        drug_treatmentRec: useRef(null),
        drug_treatmentNonRec: useRef(null),
        recommendRec: useRef(null),
        recommendNonRec: useRef(null),
    };

    const handleSaveChanges = async (type, isRecommendation) => {

        console.log(type);

        console.log(isRecommendation);

        const comment = isRecommendation
            ? textRefs[`${type}Rec`].current.innerHTML
            : textRefs[`${type}NonRec`].current.innerHTML;

        const formData = new FormData();
        formData.append('id', diagnosisId); // ID диагноза
        formData.append('type', type); // Тип (survey, drug_treatment, recommendations)
        formData.append('isRecommendation', isRecommendation ? 'true' : 'false'); // Рекомендация
        formData.append('comment', comment); // Комментарий

        try {
            const response = await fetch('http://test-asya.ru/api/updateComment', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Ошибка при сохранении изменений');
            }

            const result = await response.json();
            console.log(result);
            alert('Изменения успешно сохранены!');
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    };

    console.log(diagnosis, 'spec');

    if (loading) {
        return <div>Загрузка...</div>;
    }

    if (error) {
        return <div>Ошибка: {error}</div>;
    }

    return (
        <div className='wrapper-diagnos'>
            <div className='sidebar'>
                <div className='header-sidebar'>Специализации</div>
                <div className='diagnosis-components'>
                    <Link
                        to={`/admin`}
                        className='diagnosis-item'>
                        Админ страница
                    </Link>
                    {allSpecializations ? (
                        allSpecializations.map((spec, index) => (
                            <Link
                                to={`/admin/specialization/${spec.name}`}
                                state={{ specialization: spec, allSpecializations }}
                                className={`diagnosis-item ${current === spec.name ? 'active' : ''}`}
                                key={index}
                            >
                                {spec.name}
                            </Link>
                        ))
                    ) : (
                        <div>Специализации не найдены</div>
                    )}
                </div>
            </div>
            <div className='main-content'>
                <div className='header-1'>
                    <div className='header-block'>
                        <HeaderAdmin />
                        <div className='count-wrapper'>
                            <div className='count-block'>
                                Количество посещений: {diagnosis.visitsCount}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-container-diagnos">
                    <div className='description-wrapper'>
                        <div className='description-block'>
                            {/* <div className='description-spec'>
                                <div className='description-text'>Специализации:</div>
                                <div className='spec-items'>
                                    <div className='spec-item'>
                                        Андрология
                                    </div>
                                    <div className='spec-item'>
                                        Гинекология
                                    </div>
                                </div>
                                <div className='change-button'>Изменить</div>
                            </div> */}
                            <div className='description-code'>
                                <div className='description-text'>Код диагноза:</div>
                                <div className='code-item'>
                                    {diagnosis?.code}
                                </div>
                                <div className='change-button' onClick={() => openEditPopup('code')}>Изменить</div>
                            </div>
                            <div className='description-name'>
                                <div className='description-text'>Название диагноза:</div>
                                <div className='name-item'>
                                    {diagnosis?.name}
                                </div>
                                <div className='change-button' onClick={() => openEditPopup('name')}>Изменить</div>
                            </div>
                            <div className='description-sort'>
                                <div className='description-text'>Расположение диагноза:</div>
                                <div className='sort-item'>
                                    {diagnosis.sort}
                                </div>
                                <div className='change-button' onClick={() => openEditPopup('sort')}>Изменить</div>
                            </div>
                        </div>
                        {/* <div className='save-button-block'>
                            <div className='save-button'>
                                Сохранить изменения
                            </div>
                        </div> */}
                    </div>
                    <div className='diagnos-plates-admin'>
                        <div className='inspection-plate-admin'>
                            <div className='inspection-headers-admin'>
                                <div
                                    className={`main-header-admin ${activeTab === 'inspection' ? 'headCheck' : ''}`}
                                    onClick={() => handleTabChange('inspection')}
                                >
                                    Обследования
                                </div>
                                <div
                                    className={`comment-header-admin ${activeTab === 'comments' ? 'headCheck' : ''}`}
                                    onClick={() => handleTabChange('comments')}
                                >
                                    Комментарии к обследованиям
                                </div>
                            </div>
                            <div className='inspection-body-admin' style={{ display: activeTab === 'inspection' ? 'block' : 'none' }}>
                                <div className='save-button' onClick={() => setShowAddExaminationPopup(true)}>
                                    <img src={PlusIconImg} alt="" />
                                    Добавление обследования
                                </div>
                                <div className='inspection-admin-items'>
                                    {diagnosis.survey.items.length > 0 ? (
                                        diagnosis.survey.items.map((survey, index) => (
                                            <div className='inspection-admin-item' key={index}>
                                                <div className='inspection-admin-block'>
                                                    <div className='inspection-head-text-admin'>
                                                        {survey.name}
                                                        <div className='inspection-comment-text-admin'>
                                                            {survey.comment}
                                                        </div>
                                                    </div>
                                                    <div className='create-component-button' onClick={() => handleAddComponentClick(index, 'survey')}>
                                                        <img src={PlusIconGreenImg} alt="" />
                                                        Добавление компонента
                                                    </div>
                                                    <div className='inspection-components-text-admin'>
                                                        {survey.values?.length > 0 ? (
                                                            survey.values.map((item, itemIndex) => (
                                                                <div className='inspection-component-text-admin' key={itemIndex}>
                                                                    <li>
                                                                        {item.name}
                                                                        <div className='inspection-components-comment-text-admin'>
                                                                            {item.comment}
                                                                        </div>
                                                                    </li>
                                                                    <div className='micro-change' onClick={() => {
                                                                        setEditComponent({ name: item.name, comment: item.comment });
                                                                        setCurrentComponentId(item.id);
                                                                        setShowEditComponentPopup(true);
                                                                        setEditSource('survey');
                                                                        handleEditComponentClick(index, 'survey', item.id);
                                                                    }}>
                                                                        Изменить
                                                                    </div>
                                                                    <div className='micro-delete' onClick={() => {
                                                                        setDeleteComponentInfo({ elementId: currentElementId, componentId: item.id, type: 'survey' });
                                                                        setShowDeletePopupComponent(true);
                                                                        handleDeleteComponentClick(index, 'survey', item.id);
                                                                    }}>
                                                                        Удалить
                                                                    </div>
                                                                </div>
                                                            ))
                                                        ) : (
                                                            <div className='no-items-message'>Нет компонентов обследования</div>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className='crud-admin-buttons'>
                                                    <div className='admin-change-button' onClick={() => {
                                                        setEditDiagnosisItem({ name: survey.name, comment: survey.comment });
                                                        setEditDiagnosisItemInfo({ type: 'survey', itemId: survey.ID });
                                                    }}>
                                                        Изменить
                                                    </div>
                                                    <div className='admin-delete-button' onClick={() => handleDeleteClick('survey', survey.ID)}>
                                                        Удалить
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className='no-examinations-message'>Нет обследований</div>
                                    )}
                                </div>
                            </div>
                            <div className='inspection-body-admin-comments' style={{ display: activeTab === 'comments' ? 'flex' : 'none' }}>
                                <div className='recomend-block-section'>
                                    <div className='recomend-text-head'>
                                        Рекомендовано
                                    </div>
                                    <div className='write_option'>
                                        <div className='option_wrapper'>
                                            <div className='option_panel'>
                                                <div className='button_comments'>
                                                    <button className='button_comments_force'>
                                                        <div className='button_comments_options'>
                                                            <select
                                                                className="custom-select"
                                                                value={selectedFormat}
                                                                onChange={(e) => applyFormat(e.target.value)}
                                                            >
                                                                <option value="Choose heading">Choose heading</option>
                                                                <option value="Heading">Заголовок</option>
                                                                <option value="Subheading">Подзаголовок</option>
                                                                <option value="Text">Текст</option>
                                                                <option value="Comment">Комментарий</option>
                                                            </select>
                                                        </div>
                                                    </button>
                                                </div>
                                                <button
                                                    className={`option_bold ${isBold ? 'active' : ''}`}
                                                    onClick={toggleBold}
                                                >
                                                    <IconBold />
                                                </button>
                                                <button
                                                    className={`option_stroke ${isItalic ? 'active' : ''}`}
                                                    onClick={toggleItalic}
                                                >
                                                    <IconStroke />
                                                </button>
                                                <button className={`option_dot ${isDot ? 'active' : ''}`} onClick={insertUnorderedList}>
                                                    <IconDot />
                                                </button>
                                                <button className={`option_number ${isNumber ? 'active' : ''}`} onClick={insertOrderedList}>
                                                    <IconNumber />
                                                </button>
                                                <button
                                                    className='option_back'
                                                    onClick={handleUndo} // Логика Ctrl + Z
                                                >
                                                    <IconBackOption />
                                                </button>
                                                <button
                                                    className='option_next'
                                                    onClick={handleRedo} // Логика Ctrl + Y
                                                >
                                                    <IconNextOption />
                                                </button>
                                            </div>
                                            <div className='button-save' onClick={() => handleSaveChanges('survey', true)}>
                                                Сохранить изменения
                                            </div>
                                        </div>
                                        <div className='write_wrapper'>
                                            <div
                                                className='write_wrapper_box'
                                                contentEditable="true"
                                                ref={textRefs.surveyRec}
                                                onKeyDown={handleKeyDown}
                                            >
                                                <div dangerouslySetInnerHTML={{ __html: diagnosis.survey.comment.recomendation }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='section-under-box'>
                                        <div className='list-pdf'>
                                            {diagnosis.survey.files.recommended.map((file, index) => (
                                                <div className='item-item-pdf' key={index} onClick={() => handleOpenPdf(file.url)}>
                                                    <div className='item-pdf'>
                                                        {file.name}
                                                    </div>
                                                    <div className='delete-pdf' onClick={(e) => { e.stopPropagation(); handleDeletePdf(file.id, 'survey', true); }}>
                                                        X
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className='buttons-under-box'>
                                            <div className='add-pdf' onClick={() => handleButtonClick('survey', true)}>
                                                Добавить PDF (Recommendations)
                                            </div>
                                            {/* <div className='button-save-pdf'>
                                                Сохранить
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className='non-recomend-block-section'>
                                    <div className='recomend-text-head'>
                                        Не рекомендовано
                                    </div>
                                    <div className='write_option'>
                                        <div className='option_wrapper'>
                                            <div className='option_panel'>
                                                <div className='button_comments'>
                                                    <button className='button_comments_force'>
                                                        <div className='button_comments_options'>
                                                            <select
                                                                className="custom-select"
                                                                value={selectedFormat}
                                                                onChange={(e) => applyFormat2(e.target.value)}
                                                            >
                                                                <option value="Choose heading">Choose heading</option>
                                                                <option value="Heading">Заголовок</option>
                                                                <option value="Subheading">Подзаголовок</option>
                                                                <option value="Text">Текст</option>
                                                                <option value="Comment">Комментарий</option>
                                                            </select>
                                                        </div>
                                                    </button>
                                                </div>
                                                <button
                                                    className={`option_bold ${isBold2 ? 'active' : ''}`}
                                                    onClick={toggleBold2}
                                                >
                                                    <IconBold />
                                                </button>
                                                <button
                                                    className={`option_stroke ${isItalic2 ? 'active' : ''}`}
                                                    onClick={toggleItalic2}
                                                >
                                                    <IconStroke />
                                                </button>
                                                <button className={`option_dot ${isDot2 ? 'active' : ''}`} onClick={insertUnorderedList2}>
                                                    <IconDot />
                                                </button>
                                                <button className={`option_number ${isNumber2 ? 'active' : ''}`} onClick={insertOrderedList2}>
                                                    <IconNumber />
                                                </button>
                                                <button
                                                    className='option_back'
                                                    onClick={handleUndo2} // Логика Ctrl + Z
                                                >
                                                    <IconBackOption />
                                                </button>
                                                <button
                                                    className='option_next'
                                                    onClick={handleRedo2} // Логика Ctrl + Y
                                                >
                                                    <IconNextOption />
                                                </button>
                                            </div>
                                            <div className='button-save' onClick={() => handleSaveChanges('survey', false)}>
                                                Сохранить изменения
                                            </div>
                                        </div>
                                        <div className='write_wrapper'>
                                            <div
                                                className='write_wrapper_box'
                                                contentEditable="true"
                                                ref={textRefs.surveyNonRec}
                                                onKeyDown={handleKeyDown2}
                                            >
                                                <div dangerouslySetInnerHTML={{ __html: diagnosis.survey.comment.notrecomendation }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='section-under-box'>
                                        <div className='list-pdf'>
                                            {diagnosis.survey.files.not_recommended.map((file, index) => (
                                                <div className='item-item-pdf' key={index} onClick={() => handleOpenPdf(file.url)}>
                                                    <div className='item-pdf'>
                                                        {file.name}
                                                    </div>
                                                    <div className='delete-pdf' onClick={(e) => { e.stopPropagation(); handleDeletePdf(file.id, 'survey', false); }}>
                                                        X
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className='buttons-under-box'>
                                            <div className='add-pdf' onClick={() => handleButtonClick('survey', false)}>
                                                Добавить PDF (Not Recommendations)
                                            </div>
                                            {/* <div className='button-save-pdf'>
                                                Сохранить
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='medical_treatment-plate-admin'>
                            <div className='medical_treatment-headers-admin'>
                                <div
                                    className={`main-header-admin ${activeTab2 === 'inspection' ? 'headCheck' : ''}`}
                                    onClick={() => handleTabChange2('inspection')}
                                >
                                    Медикоментозное лечение
                                </div>
                                <div
                                    className={`comment-header-admin ${activeTab2 === 'comments' ? 'headCheck' : ''}`}
                                    onClick={() => handleTabChange2('comments')}
                                >
                                    Комментарии к Медикоментозному лечению
                                </div>
                            </div>
                            <div className='medical_treatment-body-admin' style={{ display: activeTab2 === 'inspection' ? 'block' : 'none' }}>
                                <div className='save-button spec-med-treat' onClick={() => setShowAddTreatmentPopup(true)}>
                                    <img src={PlusIconImg} alt="" />
                                    Добавление медикоментозного лечения
                                </div>
                                <div className='medical_treatment-admin-items'>
                                    {diagnosis.drug_treatment.items.length > 0 ? (
                                        diagnosis.drug_treatment.items.map((drug_treatment, index) => (
                                            <div className='medical_treatment-admin-item' key={index}>
                                                <div className='medical_treatment-admin-block'>
                                                    <div className='medical_treatment-head-text-admin'>
                                                        {drug_treatment.name}
                                                        <div className='medical_treatment-comment-text-admin'>
                                                            {drug_treatment.comment}
                                                        </div>
                                                    </div>
                                                    <div className='create-component-button' onClick={() => handleAddComponentClick(index, 'drug_treatment')}>
                                                        <img src={PlusIconGreenImg} alt="" />
                                                        Добавление компонента
                                                    </div>
                                                    <div className='medical_treatment-components-text-admin'>
                                                        {drug_treatment.values?.length > 0 ? (
                                                            drug_treatment.values.map((item, itemIndex) => (
                                                                <div className='medical_treatment-component-text-admin' key={itemIndex}>
                                                                    <li>
                                                                        {item.name}
                                                                        <div className='medical_treatment-components-comment-text-admin'>
                                                                            {item.comment}
                                                                        </div>
                                                                    </li>
                                                                    <div className='micro-change' onClick={() => {
                                                                        setEditComponent({ name: item.name, comment: item.comment });
                                                                        setCurrentComponentId(item.id);
                                                                        setEditSource('drug_treatment');
                                                                        setShowEditComponentPopup(true);
                                                                        handleEditComponentClick(index, 'drug_treatment', item.id);
                                                                    }}>
                                                                        Изменить
                                                                    </div>
                                                                    <div className='micro-delete' onClick={() => {
                                                                        setDeleteComponentInfo({ elementId: currentElementId, componentId: item.id, type: 'drug_treatment' });
                                                                        setShowDeletePopupComponent(true);
                                                                        handleDeleteComponentClick(index, 'drug_treatment', item.id);
                                                                    }}>
                                                                        Удалить
                                                                    </div>
                                                                </div>
                                                            ))
                                                        ) : (
                                                            <div className='no-items-message'>Нет компонентов медикамента</div>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className='crud-admin-buttons'>
                                                    <div className='admin-change-button' onClick={() => {
                                                        setEditDiagnosisItem({ name: drug_treatment.name, comment: drug_treatment.comment });
                                                        setEditDiagnosisItemInfo({ type: 'drug_treatment', itemId: drug_treatment.ID });
                                                    }}>
                                                        Изменить
                                                    </div>
                                                    <div className='admin-delete-button' onClick={() => handleDeleteClick('drug_treatment', drug_treatment.ID)}>
                                                        Удалить
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className='no-medication-message'>Нет медикаментов</div>
                                    )}
                                </div>
                            </div>
                            <div className='medical_treatment-body-admin-comments' style={{ display: activeTab2 === 'comments' ? 'flex' : 'none' }}>
                                <div className='recomend-block-section'>
                                    <div className='recomend-text-head'>
                                        Рекомендовано
                                    </div>
                                    <div className='write_option'>
                                        <div className='option_wrapper'>
                                            <div className='option_panel'>
                                                <div className='button_comments'>
                                                    <button className='button_comments_force'>
                                                        <div className='button_comments_options'>
                                                            <select
                                                                className="custom-select"
                                                                value={selectedFormat}
                                                                onChange={(e) => applyFormat3(e.target.value)}
                                                            >
                                                                <option value="Choose heading">Choose heading</option>
                                                                <option value="Heading">Заголовок</option>
                                                                <option value="Subheading">Подзаголовок</option>
                                                                <option value="Text">Текст</option>
                                                                <option value="Comment">Комментарий</option>
                                                            </select>
                                                        </div>
                                                    </button>
                                                </div>
                                                <button
                                                    className={`option_bold ${isBold3 ? 'active' : ''}`}
                                                    onClick={toggleBold3}
                                                >
                                                    <IconBold />
                                                </button>
                                                <button
                                                    className={`option_stroke ${isItalic3 ? 'active' : ''}`}
                                                    onClick={toggleItalic3}
                                                >
                                                    <IconStroke />
                                                </button>
                                                {/* <button className='option_link'>
                                                                        <IconLink />
                                                                    </button> */}
                                                <button className={`option_dot ${isDot ? 'active' : ''}`} onClick={insertUnorderedList3}>
                                                    <IconDot />
                                                </button>
                                                <button className={`option_number ${isNumber ? 'active' : ''}`} onClick={insertOrderedList3}>
                                                    <IconNumber />
                                                </button>
                                                <button
                                                    className='option_back'
                                                    onClick={handleUndo3} // Логика Ctrl + Z
                                                >
                                                    <IconBackOption />
                                                </button>
                                                <button
                                                    className='option_next'
                                                    onClick={handleRedo3} // Логика Ctrl + Y
                                                >
                                                    <IconNextOption />
                                                </button>
                                            </div>
                                            <div className='button-save' onClick={() => handleSaveChanges('drug_treatment', true)}>
                                                Сохранить изменения
                                            </div>
                                        </div>
                                        <div className='write_wrapper'>
                                            <div
                                                className='write_wrapper_box'
                                                contentEditable="true"
                                                ref={textRefs.drug_treatmentRec} // Присваиваем референс блоку с текстом
                                                onKeyDown={handleKeyDown3}
                                            >
                                                <div dangerouslySetInnerHTML={{ __html: diagnosis.drug_treatment.comment.recomendation }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='section-under-box'>
                                        <div className='list-pdf'>
                                            {diagnosis.drug_treatment.files.recommended.map((file, index) => (
                                                <div className='item-item-pdf' key={index} onClick={() => handleOpenPdf(file.url)}>
                                                    <div className='item-pdf'>
                                                        {file.name}
                                                    </div>
                                                    <div className='delete-pdf' onClick={(e) => { e.stopPropagation(); handleDeletePdf(file.id, 'medical_treatment', true); }}>
                                                        X
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className='buttons-under-box'>
                                            <div className='add-pdf' onClick={() => handleButtonClick('medical_treatment', true)}>
                                                Добавить PDF (Recommendations)
                                            </div>
                                            {/* <div className='button-save-pdf'>
                                                Сохранить
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className='non-recomend-block-section'>
                                    <div className='recomend-text-head'>
                                        Не рекомендовано
                                    </div>
                                    <div className='write_option'>
                                        <div className='option_wrapper'>
                                            <div className='option_panel'>
                                                <div className='button_comments'>
                                                    <button className='button_comments_force'>
                                                        <div className='button_comments_options'>
                                                            <select
                                                                className="custom-select"
                                                                value={selectedFormat}
                                                                onChange={(e) => applyFormat4(e.target.value)}
                                                            >
                                                                <option value="Choose heading">Choose heading</option>
                                                                <option value="Heading">Заголовок</option>
                                                                <option value="Subheading">Подзаголовок</option>
                                                                <option value="Text">Текст</option>
                                                                <option value="Comment">Комментарий</option>
                                                            </select>
                                                        </div>
                                                    </button>
                                                </div>
                                                <button
                                                    className={`option_bold ${isBold4 ? 'active' : ''}`}
                                                    onClick={toggleBold4}
                                                >
                                                    <IconBold />
                                                </button>
                                                <button
                                                    className={`option_stroke ${isItalic4 ? 'active' : ''}`}
                                                    onClick={toggleItalic4}
                                                >
                                                    <IconStroke />
                                                </button>
                                                {/* <button className='option_link'>
                                                                        <IconLink />
                                                                    </button> */}
                                                <button className={`option_dot ${isDot ? 'active' : ''}`} onClick={insertUnorderedList4}>
                                                    <IconDot />
                                                </button>
                                                <button className={`option_number ${isNumber ? 'active' : ''}`} onClick={insertOrderedList4}>
                                                    <IconNumber />
                                                </button>
                                                <button
                                                    className='option_back'
                                                    onClick={handleUndo4} // Логика Ctrl + Z
                                                >
                                                    <IconBackOption />
                                                </button>
                                                <button
                                                    className='option_next'
                                                    onClick={handleRedo4} // Логика Ctrl + Y
                                                >
                                                    <IconNextOption />
                                                </button>
                                            </div>
                                            <div className='button-save' onClick={() => handleSaveChanges('drug_treatment', false)}>
                                                Сохранить изменения
                                            </div>
                                        </div>
                                        <div className='write_wrapper'>
                                            <div
                                                className='write_wrapper_box'
                                                contentEditable="true"
                                                ref={textRefs.drug_treatmentNonRec} // Присваиваем референс блоку с текстом
                                                onKeyDown={handleKeyDown4}
                                            >
                                                <div dangerouslySetInnerHTML={{ __html: diagnosis.drug_treatment.comment.notrecomendation }} />                                            </div>
                                        </div>
                                    </div>
                                    <div className='section-under-box'>
                                        <div className='list-pdf'>
                                            {diagnosis.drug_treatment.files.not_recommended.map((file, index) => (
                                                <div className='item-item-pdf' key={index} onClick={() => handleOpenPdf(file.url)}>
                                                    <div className='item-pdf'>
                                                        {file.name}
                                                    </div>
                                                    <div className='delete-pdf' onClick={(e) => { e.stopPropagation(); handleDeletePdf(file.id, 'medical_treatment', false); }}>
                                                        X
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className='buttons-under-box'>
                                            <div className='add-pdf' onClick={() => handleButtonClick('medical_treatment', false)}>
                                                Добавить PDF (Not Recommendations)
                                            </div>
                                            {/* <div className='button-save-pdf'>
                                                Сохранить
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='recomend-plate-admin'>
                            {/* <div className='recomend-headers-admin'>
                                <div className='main-header-admin headCheck'>
                                    Рекомендации
                                </div>
                                <div className='comment-header-admin'>
                                    Комментарии к рекомендациям
                                </div>
                            </div> */}
                            <div className='recomend-headers-admin'>
                                <div
                                    className={`main-header-admin ${activeTab3 === 'inspection' ? 'headCheck' : ''}`}
                                    onClick={() => handleTabChange3('inspection')}
                                >
                                    Рекомендации
                                </div>
                                <div
                                    className={`comment-header-admin ${activeTab3 === 'comments' ? 'headCheck' : ''}`}
                                    onClick={() => handleTabChange3('comments')}
                                >
                                    Комментарии к рекомендациям
                                </div>
                            </div>
                            <div className='recomend-body-admin' style={{ display: activeTab3 === 'inspection' ? 'block' : 'none' }}>
                                <div className='save-button' onClick={() => setShowAddRecommendationPopup(true)}>
                                    <img src={PlusIconImg} alt="" />
                                    Добавление рекомендаций
                                </div>
                                <div className='recomend-admin-items'>
                                    {diagnosis.recommendations.items.length > 0 ? (
                                        diagnosis.recommendations.items.map((recommendation, index) => (
                                            <div className='recomend-admin-item' key={index}>
                                                <div className='recomend-admin-block'>
                                                    <div className='recomend-head-text-admin'>
                                                        {recommendation.name}
                                                        <div className='recomend-comment-text-admin'>
                                                            {recommendation.comment}
                                                        </div>
                                                    </div>
                                                    {/* <div className='create-component-button'>
                                                        <img src={PlusIconGreenImg} alt="" />
                                                        Добавление компонента
                                                    </div> */}
                                                    <div className='recomend-components-text-admin'>
                                                        {recommendation.values?.length > 0 ? (
                                                            recommendation.values.map((item, itemIndex) => (
                                                                <div className='recomend-component-text-admin' key={itemIndex}>
                                                                    <li>
                                                                        {item.name}
                                                                        <div className='recomend-components-comment-text-admin'>
                                                                            {item.comment}
                                                                        </div>
                                                                    </li>
                                                                    <div className='micro-change'>
                                                                        Изменить
                                                                    </div>
                                                                    <div className='micro-delete'>
                                                                        Удалить
                                                                    </div>
                                                                </div>
                                                            ))

                                                        ) : (
                                                            <div className='no-items-message'>У рекомендаций нет должно быть компонентов</div>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className='crud-admin-buttons'>
                                                    <div className='admin-change-button' onClick={() => {
                                                        setEditDiagnosisItem({ name: recommendation.name, comment: recommendation.comment });
                                                        setEditDiagnosisItemInfo({ type: 'recommendation', itemId: recommendation.ID });
                                                    }}>
                                                        Изменить
                                                    </div>
                                                    <div className='admin-delete-button' onClick={() => handleDeleteClick('recommendation', recommendation.ID)}>
                                                        Удалить
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className='no-recommendations-message'>Нет рекомендаций</div>
                                    )}
                                </div>
                            </div>
                            <div className='recomend-body-admin-comments' style={{ display: activeTab3 === 'comments' ? 'flex' : 'none' }}>
                                <div className='recomend-block-section'>
                                    <div className='recomend-text-head'>
                                        Рекомендовано
                                    </div>
                                    <div className='write_option'>
                                        <div className='option_wrapper'>
                                            <div className='option_panel'>
                                                <div className='button_comments'>
                                                    <button className='button_comments_force'>
                                                        <div className='button_comments_options'>
                                                            <select
                                                                className="custom-select"
                                                                value={selectedFormat}
                                                                onChange={(e) => applyFormat5(e.target.value)}
                                                            >
                                                                <option value="Choose heading">Choose heading</option>
                                                                <option value="Heading">Заголовок</option>
                                                                <option value="Subheading">Подзаголовок</option>
                                                                <option value="Text">Текст</option>
                                                                <option value="Comment">Комментарий</option>
                                                            </select>
                                                        </div>
                                                    </button>
                                                </div>
                                                <button
                                                    className={`option_bold ${isBold5 ? 'active' : ''}`}
                                                    onClick={toggleBold5}
                                                >
                                                    <IconBold />
                                                </button>
                                                <button
                                                    className={`option_stroke ${isItalic5 ? 'active' : ''}`}
                                                    onClick={toggleItalic5}
                                                >
                                                    <IconStroke />
                                                </button>
                                                {/* <button className='option_link'>
                                                                        <IconLink />
                                                                    </button> */}
                                                <button className={`option_dot ${isDot ? 'active' : ''}`} onClick={insertUnorderedList5}>
                                                    <IconDot />
                                                </button>
                                                <button className={`option_number ${isNumber ? 'active' : ''}`} onClick={insertOrderedList5}>
                                                    <IconNumber />
                                                </button>
                                                <button
                                                    className='option_back'
                                                    onClick={handleUndo5} // Логика Ctrl + Z
                                                >
                                                    <IconBackOption />
                                                </button>
                                                <button
                                                    className='option_next'
                                                    onClick={handleRedo5} // Логика Ctrl + Y
                                                >
                                                    <IconNextOption />
                                                </button>
                                            </div>
                                            <div className='button-save' onClick={() => handleSaveChanges('recommend', true)}>
                                                Сохранить изменения
                                            </div>
                                        </div>
                                        <div className='write_wrapper'>
                                            <div
                                                className='write_wrapper_box'
                                                contentEditable="true"
                                                ref={textRefs.recommendRec} // Присваиваем референс блоку с текстом
                                                onKeyDown={handleKeyDown5}
                                            >
                                                <div dangerouslySetInnerHTML={{ __html: diagnosis.recommendations.comment.recomendation }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='section-under-box'>
                                        <div className='list-pdf'>
                                            {diagnosis.recommendations.files.recommended.map((file, index) => (
                                                <div className='item-item-pdf' key={index} onClick={() => handleOpenPdf(file.url)}>
                                                    <div className='item-pdf'>
                                                        {file.name}
                                                    </div>
                                                    <div className='delete-pdf' onClick={(e) => { e.stopPropagation(); handleDeletePdf(file.id, 'recommendation', true); }}>
                                                        X
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className='buttons-under-box'>
                                            <div className='add-pdf' onClick={() => handleButtonClick('recommendation', true)}>
                                                Добавить PDF (Recommendations)
                                            </div>
                                            {/* <div className='button-save-pdf'>
                                                Сохранить
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className='non-recomend-block-section'>
                                    <div className='recomend-text-head'>
                                        Не рекомендовано
                                    </div>
                                    <div className='write_option'>
                                        <div className='option_wrapper'>
                                            <div className='option_panel'>
                                                <div className='button_comments'>
                                                    <button className='button_comments_force'>
                                                        <div className='button_comments_options'>
                                                            <select
                                                                className="custom-select"
                                                                value={selectedFormat}
                                                                onChange={(e) => applyFormat6(e.target.value)}
                                                            >
                                                                <option value="Choose heading">Choose heading</option>
                                                                <option value="Heading">Заголовок</option>
                                                                <option value="Subheading">Подзаголовок</option>
                                                                <option value="Text">Текст</option>
                                                                <option value="Comment">Комментарий</option>
                                                            </select>
                                                        </div>
                                                    </button>
                                                </div>
                                                <button
                                                    className={`option_bold ${isBold6 ? 'active' : ''}`}
                                                    onClick={toggleBold6}
                                                >
                                                    <IconBold />
                                                </button>
                                                <button
                                                    className={`option_stroke ${isItalic6 ? 'active' : ''}`}
                                                    onClick={toggleItalic6}
                                                >
                                                    <IconStroke />
                                                </button>
                                                {/* <button className='option_link'>
                                                                        <IconLink />
                                                                    </button> */}
                                                <button className={`option_dot ${isDot ? 'active' : ''}`} onClick={insertUnorderedList6}>
                                                    <IconDot />
                                                </button>
                                                <button className={`option_number ${isNumber ? 'active' : ''}`} onClick={insertOrderedList6}>
                                                    <IconNumber />
                                                </button>
                                                <button
                                                    className='option_back'
                                                    onClick={handleUndo6} // Логика Ctrl + Z
                                                >
                                                    <IconBackOption />
                                                </button>
                                                <button
                                                    className='option_next'
                                                    onClick={handleRedo6} // Логика Ctrl + Y
                                                >
                                                    <IconNextOption />
                                                </button>
                                            </div>
                                            <div className='button-save' onClick={() => handleSaveChanges('recommend', false)}>
                                                Сохранить изменения
                                            </div>
                                        </div>
                                        <div className='write_wrapper'>
                                            <div
                                                className='write_wrapper_box'
                                                contentEditable="true"
                                                ref={textRefs.recommendNonRec} // Присваиваем референс блоку с текстом
                                                onKeyDown={handleKeyDown6}
                                            >
                                                <div dangerouslySetInnerHTML={{ __html: diagnosis.recommendations.comment.notrecomendation }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='section-under-box'>
                                        <div className='list-pdf'>
                                            {diagnosis.recommendations.files.not_recommended.map((file, index) => (
                                                <div className='item-item-pdf' key={index} onClick={() => handleOpenPdf(file.url)}>
                                                    <div className='item-pdf'>
                                                        {file.name}
                                                    </div>
                                                    <div className='delete-pdf' onClick={(e) => { e.stopPropagation(); handleDeletePdf(file.id, 'recommendation', false); }}>
                                                        X
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className='buttons-under-box'>
                                            <div className='add-pdf' onClick={() => handleButtonClick('recommendation', false)}>
                                                Добавить PDF (Not Recommendations)
                                            </div>
                                            {/* <div className='button-save-pdf'>
                                                Сохранить
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <input
                    type="file"
                    id="fileInput"
                    ref={fileInputRef}
                    name="file"
                    style={{ display: 'none' }}
                    accept="application/pdf"
                    onChange={handleFileChange}
                    disabled={isLoading}
                />
                {/* Лоадер */}
                {isLoading && (
                    <div className="loader-overlay">
                        <div className="loader"></div>
                        <div className='loader-text'>Идет загрузка</div>
                    </div>
                )}
            </div>
            {showAddExaminationPopup && (
                <div className="popup-overlay">
                    <div className="popup spec">
                        <h2>Добавить обследование</h2>
                        <input
                            type="text"
                            value={newExamination.name}
                            onChange={(e) => setNewExamination({ ...newExamination, name: e.target.value })}
                            placeholder="Название обследования"
                            required
                        />
                        <input
                            type="text"
                            value={newExamination.comment}
                            onChange={(e) => setNewExamination({ ...newExamination, comment: e.target.value })}
                            placeholder="Комментарий к обследованию (необязательно)"
                        />
                        <div className="popup-buttons">
                            <button className='popup-button-add' onClick={handleAddExamination}>Добавить обследование</button>
                            <button className='popup-button-close' onClick={() => setShowAddExaminationPopup(false)}>Закрыть</button>
                        </div>
                    </div>
                </div>
            )}
            {showAddItemPopup && (
                <div className="popup-overlay">
                    <div className="popup spec">
                        <h2>Добавить компонент обследованию</h2>
                        <input
                            type="text"
                            value={newItem.name}
                            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                            placeholder="Название компонента"
                            required
                        />
                        <input
                            type="text"
                            value={newItem.comment}
                            onChange={(e) => setNewItem({ ...newItem, comment: e.target.value })}
                            placeholder="Комментарий к компоненту (необязательно)"
                        />

                        <div className="popup-buttons">
                            <button className='popup-button-add' onClick={handleAddItem}>Добавить компонент</button>
                            <button className='popup-button-close' onClick={() => setShowAddItemPopup(false)}>Закрыть</button>
                        </div>
                    </div>
                </div>
            )}
            {showAddDrugTreatmentPopup && (
                <div className="popup-overlay">
                    <div className="popup spec">
                        <h2>Добавить компонент медикаментозного лечения</h2>
                        <input
                            type="text"
                            value={newDrugTreatmentItem.name}
                            onChange={(e) => setNewDrugTreatmentItem({ ...newDrugTreatmentItem, name: e.target.value })}
                            placeholder="Название компонента"
                            required
                        />
                        <input
                            type="text"
                            value={newDrugTreatmentItem.comment}
                            onChange={(e) => setNewDrugTreatmentItem({ ...newDrugTreatmentItem, comment: e.target.value })}
                            placeholder="Комментарий к компоненту (необязательно)"
                        />

                        <div className="popup-buttons">
                            <button className='popup-button-add' onClick={handleAddDrugTreatmentItem}>Добавить компонент</button>
                            <button className='popup-button-close' onClick={() => setShowAddDrugTreatmentPopup(false)}>Закрыть</button>
                        </div>
                    </div>
                </div>
            )}
            {showEditComponentPopup && (
                <div className="popup-overlay">
                    <div className="popup">
                        <h2>Изменить компонент</h2>
                        <input
                            type="text"
                            value={editComponent.name}
                            onChange={(e) => setEditComponent({ ...editComponent, name: e.target.value })}
                            placeholder="Новое имя"
                            required
                        />
                        <input
                            type="text"
                            value={editComponent.comment}
                            onChange={(e) => setEditComponent({ ...editComponent, comment: e.target.value })}
                            placeholder="Новый комментарий (необязательно)"
                        />
                        <div className="popup-buttons">
                            <button className='popup-button-add' onClick={handleEditComponent}>Сохранить изменения</button>
                            <button className='popup-button-close' onClick={() => setShowEditComponentPopup(false)}>Закрыть</button>
                        </div>
                    </div>
                </div>
            )}
            {showDeletePopupComponent && (
                <div className="popup-overlay">
                    <div className="popup">
                        <h2>Вы уверены, что хотите удалить компонент?</h2>
                        <div className="popup-buttons">
                            <button className='popup-button-delete' onClick={handleDeleteComponent}>Удалить</button>
                            <button className='popup-button-close' onClick={() => setShowDeletePopupComponent(false)}>Закрыть</button>
                        </div>
                    </div>
                </div>
            )}
            {showAddTreatmentPopup && (
                <div className="popup-overlay">
                    <div className="popup spec">
                        <h2>Добавить медикоментозное лечение</h2>
                        <input
                            type="text"
                            value={newTreatment.name}
                            onChange={(e) => setNewTreatment({ ...newTreatment, name: e.target.value })}
                            placeholder="Название лечения"
                            required
                        />
                        <input
                            type="text"
                            value={newTreatment.comment}
                            onChange={(e) => setNewTreatment({ ...newTreatment, comment: e.target.value })}
                            placeholder="Комментарий к лечению (необязательно)"
                        />
                        <div className="popup-buttons">
                            <button className='popup-button-add' onClick={handleAddTreatment}>Добавить лечение</button>
                            <button className='popup-button-close' onClick={() => setShowAddTreatmentPopup(false)}>Закрыть</button>
                        </div>
                    </div>
                </div>
            )}
            {showAddRecommendationPopup && (
                <div className="popup-overlay">
                    <div className="popup spec">
                        <h2>Добавить рекомендацию</h2>
                        <input
                            type="text"
                            value={newRecommendation.name}
                            onChange={(e) => setNewRecommendation({ ...newRecommendation, name: e.target.value })}
                            placeholder="Название рекомендации"
                            required
                        />
                        <input
                            type="text"
                            value={newRecommendation.comment}
                            onChange={(e) => setNewRecommendation({ ...newRecommendation, comment: e.target.value })}
                            placeholder="Комментарий к рекомендации (необязательно)"
                        />
                        <div className="popup-buttons">
                            <button className='popup-button-add' onClick={handleAddRecommendation}>Добавить рекомендацию</button>
                            <button className='popup-button-close' onClick={() => setShowAddRecommendationPopup(false)}>Закрыть</button>
                        </div>
                    </div>
                </div>
            )}

            {showDeletePopup && (
                <div className="popup-overlay">
                    <div className="popup">
                        <h2>Вы уверены, что хотите удалить {deleteItemInfo?.type === 'survey' ? 'обследование' : deleteItemInfo?.type === 'drug_treatment' ? 'медикаментозное лечение' : 'рекомендацию'}?</h2>
                        <div className="popup-buttons">
                            <button className='popup-button-delete' onClick={handleDeleteDiagnosis}>Удалить</button>
                            <button className='popup-button-close' onClick={() => setShowDeletePopup(false)}>Закрыть</button>
                        </div>
                    </div>
                </div>
            )}

            {editDiagnosisItemInfo && (
                <div className="popup-overlay">
                    <div className="popup">
                        <h2>Изменить {editDiagnosisItemInfo.type === 'survey' ? 'обследование' : editDiagnosisItemInfo.type === 'drug_treatment' ? 'медикоментозное лечение' : 'рекомендацию'}</h2>
                        <input
                            type="text"
                            value={editDiagnosisItem.name}
                            onChange={(e) => setEditDiagnosisItem({ ...editDiagnosisItem, name: e.target.value })}
                            placeholder="Новое имя"
                            required
                        />
                        <input
                            type="text"
                            value={editDiagnosisItem.comment}
                            onChange={(e) => setEditDiagnosisItem({ ...editDiagnosisItem, comment: e.target.value })}
                            placeholder="Новый комментарий (необязательно)"
                        />
                        <div className="popup-buttons">
                            <button className='popup-button-add' onClick={handleEditDiagnosisItem}>Сохранить изменения</button>
                            <button className='popup-button-close' onClick={() => setEditDiagnosisItemInfo(null)}>Закрыть</button>
                        </div>
                    </div>
                </div>
            )}

            {showEditPopup && (
                <div className="popup-overlay">
                    <div className="popup">
                        <h2>Изменить {editField}</h2>
                        <input
                            type="text"
                            value={newValue}
                            onChange={(e) => setNewValue(e.target.value)}
                            placeholder={`Новое ${editField}`}
                            required
                        />
                        <div className="popup-buttons">
                            <button className='popup-button-add' onClick={handleEdit}>Сохранить изменения</button>
                            <button className='popup-button-close' onClick={() => setShowEditPopup(false)}>Закрыть</button>
                        </div>
                    </div>
                </div>
            )}
        </div >
    );
}

export default DiagnosPageAdmin;