import React from 'react';
import { Link } from 'react-router-dom';
import './NavComponent.css'; // Se importa el CSS

function NavComponent() {
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: '#4B0082' }}>
            <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Inicio</Link>
            <Link to="/profile" style={{ color: '#fff', textDecoration: 'none' }}>Perfil</Link>
            <Link to="/dashboard" style={{ color: '#fff', textDecoration: 'none' }}>Tablero</Link>
            <Link to="/login" style={{ color: '#fff', textDecoration: 'none' }}>Iniciar sesión</Link>
            <Link to="/logout" style={{ color: '#fff', textDecoration: 'none' }}>Cerrar sesión</Link>
        </nav>
    );
}

export default NavComponent;
