import React, { useState } from 'react';
import './Medical_treatmentPlate.scss';
import { ReactComponent as OpenRadio } from './icons/OpenRadio.svg';
import { ReactComponent as IconBook } from './icons/Book.svg';
import { ReactComponent as IconCheck } from './icons/Check.svg';
import CommentPlate from '../commentPlate/CommentPlate';
import { useParams } from 'react-router-dom';
import useFetchData from '../../hooks/useFetchData'; // Импортируем кастомный хук

function Medical_treatmentPlate({ onToggleCommentPlate, diagnos, onSelectionChange, onChange, isActive }) {
    const { id } = useParams();
    const treatmentData = diagnos.items;
    const comment = diagnos.comment;
    const files = diagnos.files;

    const [showCommentPlate, setShowCommentPlate] = useState(false);
    const [expandedItems, setExpandedItems] = useState({});
    const [selectedItems, setSelectedItems] = useState([]); // For selected parent and child items

    const [count, setCount] = useState(0);
    const handleCountChange = () => {
        onChange(selectedItems)
    }

    const toggleExpand = (index) => {
        setExpandedItems(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    const toggleCommentPlate = () => {
        setShowCommentPlate(!showCommentPlate);
    };

    const handleToggleCommentPlate = () => {
        onToggleCommentPlate(treatmentData, 'drug_treatment');
        toggleCommentPlate();
    };

    // const handleParentClick = (treatment) => {
    //     const isSelected = selectedItems.some(item => item.parent === treatment.name);
    //     let updatedSelection = [];

    //     if (isSelected) {
    //         // Unselect parent and all children
    //         updatedSelection = selectedItems.filter(item => item.parent !== treatment.name);
    //     } else {
    //         // Select parent and all children
    //         updatedSelection = [
    //             ...selectedItems,
    //             { parent: treatment.name, children: [...treatment.values] }
    //         ];
    //     }

    //     setSelectedItems(updatedSelection);
    //     onSelectionChange(updatedSelection);
    //     onChange(updatedSelection);
    // };

    const handleParentClick = (treatment) => {
        const isSelected = selectedItems.some(item => item.parent === treatment.name);
        let updatedSelection = [];

        if (isSelected) {
            // Unselect parent and all children
            updatedSelection = selectedItems.filter(item => item.parent !== treatment.name);
        } else {
            // Select parent and all children, including comments
            updatedSelection = [
                ...selectedItems,
                { parent: treatment.name, comment: treatment.comment, children: [] }
            ];
        }

        setSelectedItems(updatedSelection);
        onSelectionChange(updatedSelection);
        onChange(updatedSelection);
    };

    // const handleChildClick = (treatment, value) => {
    //     const parentItem = selectedItems.find(item => item.parent === treatment.name);
    //     const isChildSelected = parentItem?.children.includes(value);

    //     let updatedSelection = [];

    //     if (isChildSelected) {
    //         // Unselect specific child
    //         updatedSelection = selectedItems.map(item => {
    //             if (item.parent === treatment.name) {
    //                 return {
    //                     ...item,
    //                     children: item.children.filter(child => child !== value)
    //                 };
    //             }
    //             return item;
    //         }).filter(item => item.children.length > 0);
    //     } else {
    //         if (parentItem) {
    //             // Add child to already selected parent
    //             updatedSelection = selectedItems.map(item => {
    //                 if (item.parent === treatment.name) {
    //                     return {
    //                         ...item,
    //                         children: [...item.children, value]
    //                     };
    //                 }
    //                 return item;
    //             });
    //         } else {
    //             // Select both parent and child
    //             updatedSelection = [
    //                 ...selectedItems,
    //                 { parent: treatment.name, children: [value] }
    //             ];
    //         }
    //     }

    //     setSelectedItems(updatedSelection);
    //     onSelectionChange(updatedSelection);
    //     onChange(updatedSelection);
    // };

    const handleChildClick = (treatment, value) => {
        const parentItem = selectedItems.find(item => item.parent === treatment.name);
        const isChildSelected = parentItem?.children.some(child => child.name === value.name);

        let updatedSelection = [];

        if (isChildSelected) {
            // Unselect specific child
            updatedSelection = selectedItems.map(item => {
                if (item.parent === treatment.name) {
                    return {
                        ...item,
                        children: item.children.filter(child => child.name !== value.name)
                    };
                }
                return item;
            }).filter(item => item.children.length > 0 || item.parent);
        } else {
            if (parentItem) {
                // Add child to already selected parent, including comments
                updatedSelection = selectedItems.map(item => {
                    if (item.parent === treatment.name) {
                        return {
                            ...item,
                            children: [...item.children, { name: value.name, comment: value.comment }]
                        };
                    }
                    return item;
                });
            } else {
                // Select both parent and child, including comments
                updatedSelection = [
                    ...selectedItems,
                    {
                        parent: treatment.name,
                        comment: treatment.comment, // Include parent comment
                        children: [{ name: value.name, comment: value.comment }]
                    }
                ];
            }
        }

        setSelectedItems(updatedSelection);
        onSelectionChange(updatedSelection);
        onChange(updatedSelection);
    };

    const renderTreatmentItems = () => {
        return treatmentData?.map((treatment, index) => {
            const isParentSelected = selectedItems.some(item => item.parent === treatment.name);

            return (
                <div className='medical_medical_treatment' key={index}>
                    <div>
                        <div
                            className={`medical_treatment_info ${isParentSelected ? 'selected' : ''}`}
                        >
                            <div className={`check_icon ${isParentSelected ? 'selected' : ''}`}
                                onClick={() => handleParentClick(treatment)}><IconCheck /></div>

                            <div className={`medical_medical_info ${isParentSelected ? 'selected' : ''}`}
                                onClick={() => handleParentClick(treatment)}>{treatment.name}
                                <div className='medical_treatment_comments'>
                                    {treatment.comment}
                                </div>
                            </div>

                            <div className='block_open_radio'>
                                <button
                                    className={`openRadio_icon ${expandedItems[index] ? 'rotated' : ''}`}
                                    onClick={() => toggleExpand(index)}
                                >
                                    <OpenRadio />
                                </button>
                            </div>
                        </div>
                    </div>
                    {expandedItems[index] && (
                        <div className='radio_wrapper'>
                            {treatment.values.map((value, i) => {
                                // const isChildSelected = selectedItems.some(item => item.parent === treatment.name && item.children.includes(value.name));
                                const isChildSelected = selectedItems.some(item => item.parent === treatment.name && item.children.some(child => child.name === value.name));

                                return (
                                    <div
                                        className={`radio_info ${isChildSelected ? 'selected' : ''}`}
                                        key={i}
                                        onClick={() => handleChildClick(treatment, value)}
                                    >   <div className='radio_treatment_info'>
                                            <div className='check_icon'><IconCheck /></div>
                                            <div className='radio_medical_info'>
                                                {value.name}
                                                <div className='medical_treatment_comments'>
                                                    {value.comment}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            );
        });
    };

    return (
        <div className='medical_treatment_wrapper'>
            <div className='medical_treatment_block'>
                <div className='header_medical_treatment'>
                    <div className='text_medical_treatment'>Медикаментозное лечение</div>
                    <div className='text_icon' onClick={handleToggleCommentPlate}>
                        <div className='text_comments'>Комментарий</div>
                        <div className='icon_book'><IconBook /></div>
                    </div>
                </div>
                <div className='main_medical_treatment'>
                    {renderTreatmentItems()}
                </div>
            </div>
            {isActive && <CommentPlate onClose={toggleCommentPlate} data={comment} data2={files} section="drug_treatment" title="Медикаментозное лечение" />}
        </div>
    );
}

export default Medical_treatmentPlate;