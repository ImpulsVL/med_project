import React from 'react';
import './MoveFooter.scss';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function MoveFooter() {
    return (
        <div className='footer_wrapper'>
            <div className='footer_info'>
                <div className='footer_text'>Выбрано 0 назначений</div>
                <Link to='/block'>
                    <button className='footer_button'>Создать текстовую версию</button>
                </Link>
            </div>
        </div>
    );
}

export default MoveFooter;