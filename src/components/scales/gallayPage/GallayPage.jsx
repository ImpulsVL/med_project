import React, { useState } from 'react';
import './GallayPage.scss';
import img1 from './pictures/01-1.svg';
import img2 from './pictures/02-1.svg';
import img3 from './pictures/03-1.svg';
import img4 from './pictures/04-1.svg';
import img5 from './pictures/01-2.svg';
import img6 from './pictures/02-2.svg';
import img7 from './pictures/03-2.svg';
import img8 from './pictures/04-2.svg';
import img9 from './pictures/01-3.png';
import img10 from './pictures/02-3.png';
import img11 from './pictures/03-3.png';
import img12 from './pictures/04-3.png';
import img13 from './pictures/01-4.png';
import img14 from './pictures/02-4.png';
import img15 from './pictures/03-4.png';
import img16 from './pictures/04-4.png';
import img17 from './pictures/01-5.svg';
import img18 from './pictures/02-5.svg';
import img19 from './pictures/03-5.svg';
import img20 from './pictures/04-5.svg';
import img21 from './pictures/01-6.svg';
import img22 from './pictures/02-6.svg';
import img23 from './pictures/03-6.svg';
import img24 from './pictures/04-6.svg';
import img25 from './pictures/01-7.png';
import img26 from './pictures/02-7.png';
import img27 from './pictures/03-7.png';
import img28 from './pictures/04-7.png';
import img29 from './pictures/01-8.png';
import img30 from './pictures/02-8.png';
import img31 from './pictures/03-8.png';
import img32 from './pictures/04-8.png';
import img33 from './pictures/01-9.svg';
import img34 from './pictures/02-9.svg';
import img35 from './pictures/03-9.svg';
import img36 from './pictures/04-9.svg';
import Header from '../../header/header';

// Массив всех изображений
const images = [
    [img1, img2, img3, img4],
    [img5, img6, img7, img8],
    [img9, img10, img11, img12],
    [img13, img14, img15, img16],
    [img17, img18, img19, img20],
    [img21, img22, img23, img24],
    [img25, img26, img27, img28],
    [img29, img30, img31, img32],
    [img33, img34, img35, img36]
];

function GallayPage() {
    // Инициализация выбранных значений для каждого ряда (по 0 для каждой строки)
    const [selectedScores, setSelectedScores] = useState(Array(9).fill(0));

    // Обработчик выбора изображения
    const handleSelect = (rowIndex, score) => {
        const newScores = [...selectedScores];

        // Если выбранная картинка уже выделена, то снимем выделение
        if (newScores[rowIndex] === score) {
            newScores[rowIndex] = 0; // Снимаем выделение, сбрасывая балл для данного ряда
        } else {
            newScores[rowIndex] = score; // Иначе присваиваем новый балл
        }

        setSelectedScores(newScores);
    };

    const totalScore = selectedScores.reduce((acc, score) => acc + score, 0);

    return (
        <div className='wrapper_gallay'>
             <div className='header-1'>
                <Header />
            </div>
            <div className="gallay_wrapper">
                <div className="gallay_block">
                    <h2 className='gallay_header'>Шкала Ферримана-Галлвея</h2>
                </div>
                <div className='pictures_block'>
                    {/* Рендеринг рядов картинок */}
                    {images.map((imageRow, rowIndex) => (
                        <div key={rowIndex} className='row'>
                            <div className='pictures_block_gallay'>
                                {imageRow.map((img, index) => (
                                    <button
                                        key={index}
                                        className={`gallay_btn ${selectedScores[rowIndex] === index + 1 ? 'selected' : ''}`}
                                        onClick={() => handleSelect(rowIndex, index + 1)} // Первая картинка добавляет 1, вторая - 2 и т.д.
                                    >
                                        <img src={img} alt={`Score ${index + 1}`} className='gallay_img' />
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className='pictures_block'>
                    <div className="total_score">
                        <h2>
                            Результаты
                        </h2>
                        <h3>Общий балл: {totalScore}</h3>
                    </div>
                </div>
                <div className='pictures_block'>
                    Согласно последним рекомендациям ESHRE (европейское общество репродукции человека и эмбриологии) и данным федеральных клинических рекомендаций,
                    о гирсутизме, как правило, свидетельствует сумма баллов по модифицированной Шкале Ферримана-Галлвея ≥4-6, однако имеются расовые особенности оценки гирсутизма.
                </div>
            </div>
        </div>
    );
}

export default GallayPage;