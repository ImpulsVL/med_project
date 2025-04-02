import React, { useState } from 'react';
import ReactRouterDOM from 'react-dom/client';
import './DiagnosPage.scss';
import { ReactComponent as IconBack } from './icons/Back.svg'
import { Link, useNavigate, useLocation, useParams } from 'react-router-dom';
import InspectionPlate from './inspectionPlate/InspectionPlate';
import Medical_treatmentPlate from './medical_treatmentPlate/Medical_treatmentPlate';
import RecomendPlate from './recomendPlate/RecomendPlate';
import MoveFooter from './moveFooter/MoveFooter';
import CommentPlate from './commentPlate/CommentPlate';
import Header from '../header/header';
import useFetchData from '../hooks/useFetchData';
import PopupChanges from '../mainPage/searchItem/components/popUpChanges/PopupChanges';

function DiagnosPage() {
    const { id, section } = useParams();
    const { data: recommendationData, loading, error } = useFetchData(id, 'testapi3.php');

    const location = useLocation();
    const { inspectionList: initialInspectionList, medicalTreatmentList: initialMedicalTreatmentList, recomendList: initialRecomendList } = location.state || {};
    // const { diagnosisId } = location.state;

    const [selectedItems, setSelectedItems] = useState([]);;

    const [showCommentPlate, setShowCommentPlate] = useState(false);

    const [inspectionList, updateInspection] = useState(initialInspectionList || []);
    const [medicalTreatmentList, updateMedicalTreament] = useState(initialMedicalTreatmentList || []);
    const [recomendList, updateRecomend] = useState(initialRecomendList  || []);

    const [activeCommentPlate, setActiveCommentPlate] = useState(null);

    if (loading) {
        return <div>Loading...</div>;
    }

    const toggleCommentPlate = (plateName) => {
        if (activeCommentPlate === plateName) {
            setActiveCommentPlate(null); // Закрываем форму
        } else {
            setActiveCommentPlate(plateName); // Открываем форму
        }
    };

    const handleSelectionChange = (newSelection) => {
        setSelectedItems(newSelection);
    };

    // const handleToggleCommentPlate = (plateName) => {
    //     if (activeCommentPlate === plateName) {
    //         setActiveCommentPlate(null); // Закрыть, если тот же
    //     } else {
    //         setActiveCommentPlate(plateName); // Открыть новый и закрыть старый
    //     }
    // };

    const updatePlateInspection = (plate) => {
        updateInspection(plate)
    }

    const updateMedicalTreamentPlate = (plate) => {
        updateMedicalTreament(plate)
    }

    const updateRecomendPlate = (plate) => {
        updateRecomend(plate)
    }

    return (
        <div className='third_wrapper'>
            <div className='header-1'>
                <Header />
            </div>
            <div className="main-container_third_page ">
                <div className='style_for_link'>
                    <Link to={`/diagnosis/${section ?? recommendationData.section}`}> {/* Используем code для возврата */}
                        <a className='back_wrapper'>
                            <div className='icon_back'>
                                <IconBack id="back_icon" />
                            </div>
                            <div className='back_button_text'>
                                Вернуться к диагнозам
                            </div>
                        </a>
                    </Link>
                </div>
                <div className='text_main_third_page'>
                    {recommendationData.code} {recommendationData.name} <PopupChanges name={recommendationData.name} code={recommendationData.code} />
                </div>
                <div className='content_wrapper'>
                    <div className='inspection_plate_wrapper'>
                        <InspectionPlate diagnos={recommendationData.survey} onChange={updatePlateInspection} onToggleCommentPlate={() => toggleCommentPlate('inspection')} isActive={activeCommentPlate === 'inspection'} onSelectionChange={handleSelectionChange} selectedItems={inspectionList}/>
                    </div>
                    <div className='medical_treatment_plate_wrapper'>
                        <Medical_treatmentPlate diagnos={recommendationData.drug_treatment} onChange={updateMedicalTreamentPlate} onToggleCommentPlate={() => toggleCommentPlate('treatment')} isActive={activeCommentPlate === 'treatment'} onSelectionChange={handleSelectionChange} selectedItems={medicalTreatmentList}/>
                    </div>
                    <div className='recomend_plate_wrapper'>
                        <RecomendPlate diagnos={recommendationData.recommendations} onChange={updateRecomendPlate} onToggleCommentPlate={() => toggleCommentPlate('recommendation')} isActive={activeCommentPlate === 'recommendation'} onSelectionChange={handleSelectionChange} selectedItems={recomendList}/>
                    </div>

                </div>
                <div className='footer'>
                    <MoveFooter inspectionList={inspectionList} medicalTreatmentList={medicalTreatmentList} recomendList={recomendList} sectionCode={section} diagnosId={id}/>
                </div>
            </div>
        </div>
    );
}

export default DiagnosPage;