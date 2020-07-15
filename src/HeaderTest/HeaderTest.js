import React from 'react';
import style from './HeaderTest.module.css';

class HeaderTest extends React.Component {
    render() {
        return (
            <header className={style.test}>
                <div className="container">
                    Тестовое задание
                </div>
            </header>
        );
    }
}

export default HeaderTest;
