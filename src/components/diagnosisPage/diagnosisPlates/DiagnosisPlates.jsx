import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import './DiagnosisPlates.scss';

export const DiagnosisPlates = ({diagnoses, sectionCode}) => {

    return (
        <div className='diagnosis_plates_wrapper'>
            {diagnoses.map((diagnosis, index) => (
                <Link className='diagnosis_plate_second_page' to={`/diagnos/${diagnosis.id}/${sectionCode}`} key={index} state={{ code: diagnosis.code, name: diagnosis.name }}>
                    <div className='force_diagnosis_plate_second_page'></div>
                    <div className='code_diagnosis_plate_second_page'>{diagnosis.code}</div>
                    <div className='text_diagnosis_plate_second_page'>{diagnosis.name}</div>
                </Link>
            ))}
        </div>
    );
};

export default DiagnosisPlates;