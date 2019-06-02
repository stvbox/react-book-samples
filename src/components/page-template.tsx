import React = require('react');
import '../styles/page-template.less'
import { HashRouter, NavLink } from 'react-router-dom';

const MainMenu = () =>
    <nav className="menu-block">
        <NavLink to="/" exact activeClassName="active-menu-item">Главная</NavLink>
        <NavLink to="/test" exact activeClassName="active-menu-item">Тестовая</NavLink>
        <ul className="menu-block__submenu">
            <li>
                <NavLink to="/test/list" activeClassName="active-menu-item">список</NavLink>
            </li>
        </ul>
    </nav>

export const PageTemplate = ({ children }: any) =>
    <div className="page-template">
        <HashRouter>
            <div className="page-template__menu"><MainMenu /></div>
            <div className="page-template__content">{children}</div>
        </HashRouter>
    </div>
