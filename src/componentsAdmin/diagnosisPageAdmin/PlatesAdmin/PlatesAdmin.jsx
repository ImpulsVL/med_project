import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as CheckTopIcon } from '../icons/check-top.svg';
import { ReactComponent as CheckBottomIcon } from '../icons/check-top.svg';
import './PlatesAdmin.scss';

export const PlatesAdmin = () => {
    return (
        <div className='plates_wrapper'>
            <div className='head_diagnosis_plate_second'>
                <div className='special-text-sort'>
                    <div className='text-sort'>
                        <div className='head_code_diagnosis_plate'>
                            Код
                        </div>
                        <div className='check-icons'>
                            <CheckTopIcon />
                            <CheckBottomIcon className="bottom-icon" />
                        </div>
                    </div>
                    <div className='text-sort'>
                        <div className='head_name_diagnosis_plate'>
                            Название
                        </div>
                        <div className='check-icons'>
                            <CheckTopIcon />
                            <CheckBottomIcon className="bottom-icon" />
                        </div>
                    </div>
                </div>
                <div className='text-sort'>
                    <div className='head_count_diagnosis_plate'>
                        Количество посещений
                    </div>
                    <div className='check-icons'>
                        <CheckTopIcon />
                        <CheckBottomIcon className="bottom-icon" />
                    </div>
                </div>
                <div className='for-head'></div>
            </div>
            <Link
                className='diagnosis_plate'
                to={`/admin`}
            >
                <div className='force_diagnosis_plate'></div>
                <div className='special-text-sort-plate'>
                    <div className='text_diagnosis_plate'>Z21.0</div>
                    <div className='name_diagnosis_plate'>Диагноз</div>
                </div>
                <div className='count_diagnosis_plate'>Количество посещений: 123</div>
                <div className='buttons-plate'>
                    <div className='button-change'>
                        Изменить
                    </div>
                    <div className='button-delete'>
                        Удалить
                    </div>
                </div>
            </Link>
            <Link
                className='diagnosis_plate'
                to={`/admin`}
            >
                <div className='force_diagnosis_plate'></div>
                <div className='special-text-sort-plate'>
                    <div className='text_diagnosis_plate'>Z21.0</div>
                    <div className='name_diagnosis_plate'>Диагноз</div>
                </div>
                <div className='count_diagnosis_plate'>Количество посещений: 123</div>
                <div className='buttons-plate'>
                    <div className='button-change'>
                        Изменить
                    </div>
                    <div className='button-delete'>
                        Удалить
                    </div>
                </div>
            </Link>
            <Link
                className='diagnosis_plate'
                to={`/admin`}
            >
                <div className='force_diagnosis_plate'></div>
                <div className='special-text-sort-plate'>
                    <div className='text_diagnosis_plate'>Z21.0</div>
                    <div className='name_diagnosis_plate'>Диагноз</div>
                </div>
                <div className='count_diagnosis_plate'>Количество посещений: 123</div>
                <div className='buttons-plate'>
                    <div className='button-change'>
                        Изменить
                    </div>
                    <div className='button-delete'>
                        Удалить
                    </div>
                </div>
            </Link>
            <Link
                className='diagnosis_plate'
                to={`/admin`}
            >
                <div className='force_diagnosis_plate'></div>
                <div className='special-text-sort-plate'>
                    <div className='text_diagnosis_plate'>Z21.0</div>
                    <div className='name_diagnosis_plate'>Диагноз</div>
                </div>
                <div className='count_diagnosis_plate'>Количество посещений: 123</div>
                <div className='buttons-plate'>
                    <div className='button-change'>
                        Изменить
                    </div>
                    <div className='button-delete'>
                        Удалить
                    </div>
                </div>
            </Link>
            <Link
                className='diagnosis_plate'
                to={`/admin`}
            >
                <div className='force_diagnosis_plate'></div>
                <div className='special-text-sort-plate'>
                    <div className='text_diagnosis_plate'>Z21.0</div>
                    <div className='name_diagnosis_plate'>Диагноз</div>
                </div>
                <div className='count_diagnosis_plate'>Количество посещений: 123</div>
                <div className='buttons-plate'>
                    <div className='button-change'>
                        Изменить
                    </div>
                    <div className='button-delete'>
                        Удалить
                    </div>
                </div>
            </Link>
            <Link
                className='diagnosis_plate'
                to={`/admin`}
            >
                <div className='force_diagnosis_plate'></div>
                <div className='special-text-sort-plate'>
                    <div className='text_diagnosis_plate'>Z21.0</div>
                    <div className='name_diagnosis_plate'>Диагноз</div>
                </div>
                <div className='count_diagnosis_plate'>Количество посещений: 123</div>
                <div className='buttons-plate'>
                    <div className='button-change'>
                        Изменить
                    </div>
                    <div className='button-delete'>
                        Удалить
                    </div>
                </div>
            </Link>
            <Link
                className='diagnosis_plate'
                to={`/admin`}
            >
                <div className='force_diagnosis_plate'></div>
                <div className='special-text-sort-plate'>
                    <div className='text_diagnosis_plate'>Z21.0</div>
                    <div className='name_diagnosis_plate'>Диагноз</div>
                </div>
                <div className='count_diagnosis_plate'>Количество посещений: 123</div>
                <div className='buttons-plate'>
                    <div className='button-change'>
                        Изменить
                    </div>
                    <div className='button-delete'>
                        Удалить
                    </div>
                </div>
            </Link>
            <Link
                className='diagnosis_plate'
                to={`/admin`}
            >
                <div className='force_diagnosis_plate'></div>
                <div className='special-text-sort-plate'>
                    <div className='text_diagnosis_plate'>Z21.0</div>
                    <div className='name_diagnosis_plate'>Диагноз</div>
                </div>
                <div className='count_diagnosis_plate'>Количество посещений: 123</div>
                <div className='buttons-plate'>
                    <div className='button-change'>
                        Изменить
                    </div>
                    <div className='button-delete'>
                        Удалить
                    </div>
                </div>
            </Link>
            <Link
                className='diagnosis_plate'
                to={`/admin`}
            >
                <div className='force_diagnosis_plate'></div>
                <div className='special-text-sort-plate'>
                    <div className='text_diagnosis_plate'>Z21.0</div>
                    <div className='name_diagnosis_plate'>Диагноз</div>
                </div>
                <div className='count_diagnosis_plate'>Количество посещений: 123</div>
                <div className='buttons-plate'>
                    <div className='button-change'>
                        Изменить
                    </div>
                    <div className='button-delete'>
                        Удалить
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default PlatesAdmin;