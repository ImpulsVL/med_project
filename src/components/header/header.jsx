import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link
import './header.scss';

function Header() {
    const [showCalculators, setShowCalculators] = useState(false);
    const [showScales, setShowScales] = useState(false);

    const toggleCalculators = () => {
        setShowCalculators(!showCalculators);
        setShowScales(false); // Скрываем шкалы при нажатии на калькуляторы
    };

    const toggleScales = () => {
        setShowScales(!showScales);
        setShowCalculators(false); // Скрываем калькуляторы при нажатии на шкалы
    };

    return (
        <div className='header'>
            <Link to="/">
                <h1 className="assistant_header">Assistant</h1>
            </Link>
            <div className="menu_section">
                <h2 className='calculators' onClick={toggleCalculators}>Калькуляторы</h2>
                {showCalculators && (
                    <ul className="dropdown">
                        <li><Link to="/isa-calc">Калькулятор ИСА</Link></li>
                        <li><Link to="/imt-calc">Калькулятор ИМТ</Link></li>
                        <li><Link to="/roma-calc">Калькулятор индекса ROMA</Link></li>
                        <li><Link to="/rmi-calc">Калькулятор индекса RMI I</Link></li>
                        <li><Link to="/intensive-calc">Оценка ИМК</Link></li>
                    </ul>
                )}
            </div>
            <div className="menu_section">
                <h2 className='scales' onClick={toggleScales}>Шкалы</h2>
                {showScales && (
                    <ul className="dropdown">
                        <li><Link to="/gallay-scale">Шкала Ферримана-Галлвея</Link></li>
                        <li><Link to="/hurt-scale">Шкала оценки боли</Link></li>
                        <li><Link to="/ludwig-scale">Шкала Людвига</Link></li>
                        <li><Link to="/baden-scale">POP-Q и Baden-Walker</Link></li>
                        <li><Link to="/musa-scale">Ультразвуковые признаки аденомиоза, MUSA 2022</Link></li>
                        <li><Link to="/figo-scale">Миома матки: классификация FIGO</Link></li>
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Header;