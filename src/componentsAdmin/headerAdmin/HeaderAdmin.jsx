import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HeaderAdmin.scss';

function HeaderAdmin() {
    return (
        <div className='header-admin'>
            <div className="menu_section">
                <Link 
                to="/admin/">
                    <h2 className='admin-panel'>Админ панель</h2>
                </Link>
            </div>
        </div>
    );
}

export default HeaderAdmin;