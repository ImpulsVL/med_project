import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HeaderAdmin.scss';

function HeaderAdmin() {
    return (
        <div className='header-admin'>
            <div className="menu_section">
                <h2 className='admin-panel'>Админ панель</h2>
            </div>
            <div className="menu_section">
                <h2 className='scales'>Парсер</h2>
            </div>
            <div className="menu_section">
                <h2 className='scales'>Модерация</h2>
            </div>
        </div>
    );
}

export default HeaderAdmin;