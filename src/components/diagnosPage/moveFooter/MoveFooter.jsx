import React from 'react';
import './MoveFooter.scss';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function MoveFooter({ recomendList, medicalTreatmentList, inspectionList, sectionCode}) {
    const navigate = useNavigate();

    const handleCreateTextVersion = () => {
        navigate('/block', { state: { recomendList, medicalTreatmentList, inspectionList, sectionCode } });
    };

    return (
        <div className='footer_wrapper'>
            <div className='footer_info'>
                {<div className='footer_text'>Выбрано {inspectionList.concat(medicalTreatmentList.concat(recomendList)).reduce((acc, item) => acc + (item.children.length > 0 ? item.children.length : 1), 0)} назначений</div>}
                <button className='footer_button' onClick={handleCreateTextVersion}>Создать текстовую версию</button>
            </div>
        </div>
    );
}

export default MoveFooter;