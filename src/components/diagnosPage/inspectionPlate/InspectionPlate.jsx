import React, { useState } from 'react';
import './InspectionPlate.scss';
import { ReactComponent as IconBook } from './icons/Book.svg';
import { ReactComponent as IconCheck } from './icons/Check.svg';
import { useParams } from 'react-router-dom';
import CommentPlate from '../commentPlate/CommentPlate';

function InspectionPlate({ onToggleCommentPlate, diagnos, onSelectionChange, onChange, isActive }) {
    const inspectionData = diagnos.items;
    const comment = diagnos.comment;
    const [showCommentPlate, setShowCommentPlate] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);

    const handleCountChange = () => {
        onChange(selectedItems)
    }

    const toggleCommentPlate = () => {
        setShowCommentPlate(!showCommentPlate);
    };

    const handleToggleCommentPlate = () => {
        onToggleCommentPlate(inspectionData, 'survey');
        toggleCommentPlate();
    };

    const handleParentClick = (inspection) => {
        const isSelected = selectedItems.some(item => item.parent === inspection.name);
        let updatedSelection = [];
        
        if (isSelected) {
            // Unselect parent and all children
            updatedSelection = selectedItems.filter(item => item.parent !== inspection.name);
        } else {
            // Select parent and all children
            updatedSelection = [
                ...selectedItems,
                { parent: inspection.name, children: [...inspection.values] }
            ];
        }
        
        setSelectedItems(updatedSelection);
        onSelectionChange(updatedSelection);
        onChange(updatedSelection);
    };
    
    const handleChildClick = (inspection, value) => {
        const parentItem = selectedItems.find(item => item.parent === inspection.name);
        const isChildSelected = parentItem?.children.includes(value);

        let updatedSelection = [];
    
        if (isChildSelected) {
            // Unselect specific child
            updatedSelection = selectedItems.map(item => {
                if (item.parent === inspection.name) {
                    return {
                        ...item,
                        children: item.children.filter(child => child !== value)
                    };
                }
                return item;
            }).filter(item => item.children.length > 0 || item.parent === inspection.name);
        } else {
            if (parentItem) {
                // Add child to already selected parent
                updatedSelection = selectedItems.map(item => {
                    if (item.parent === inspection.name) {
                        return {
                            ...item,
                            children: [...item.children, value]
                        };
                    }
                    return item;
                });
            } else {
                // Select both parent and child
                updatedSelection = [
                    ...selectedItems,
                    { parent: inspection.name, children: [value] }
                ];
            }
        }
    
        setSelectedItems(updatedSelection);
        onSelectionChange(updatedSelection);
        onChange(updatedSelection);
    };

    const renderInspectionItems = () => {
        return inspectionData?.map((inspection, index) => {
            const isParentSelected = selectedItems.some(item => item.parent === inspection.name);
    
            return (
                <div className='medical_inspection' key={index}>
                    <div 
                        className={`medical_inspection_header ${isParentSelected ? 'selected' : ''}`}
                        onClick={() => handleParentClick(inspection)}
                    >
                        <div className='check_icon'><IconCheck /></div>
                        <div className='header_info'>{inspection.name}</div>
                    </div>
                    {inspection.values.map((value, i) => {
                        const isChildSelected = selectedItems.some(item => item.parent === inspection.name && item.children.includes(value));
    
                        return (
                            <div 
                                className={`medical_inspection_info ${isChildSelected ? 'selected' : ''}`} 
                                key={i}
                                onClick={() => handleChildClick(inspection, value)}
                            >
                                <div className='check_icon'><IconCheck /></div>
                                <div className='medical_info'>{value}</div>
                            </div>
                        );
                    })}
                </div>
            );
        });
    };

    return (
        <div className='inspection_wrapper'>
            <div className='inspection_block'>
                <div className='header_inspection'>
                    <div className='text_inspection'>Обследования</div>
                    <div className='text_icon' onClick={handleToggleCommentPlate}>
                        <div className='text_comments'>Комментарий</div>
                        <div className='icon_book'><IconBook /></div>
                    </div>
                </div>
                <div className='main_inspection'>
                    {renderInspectionItems()}
                </div>
            </div>
            {isActive && <CommentPlate onClose={toggleCommentPlate} data={comment} section="survey" title="Обследования" />}
        </div>
    );
}

export default InspectionPlate;