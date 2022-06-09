import { Routes, Route, NavLink, BrowserRouter, Navigate } from 'react-router-dom';
import { routes } from './routes';

import logo from '../logo.svg';

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo" />
                    <ul>
                        {
                            routes.map(({ to, name }) => (
                                <li key={to}>
                                    <NavLink to={to} className={({ isActive }) => isActive ? 'nav-active' : ''}>{name}</NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <Routes>
                    {
                        routes.map(({ path, Component }) => (
                            <Route path={path} element={<Component />} key={path} />
                        ))
                    }

                    <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
