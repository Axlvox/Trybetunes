import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';
import { UserType } from '../types';

function Header() {
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState<UserType>();

  useEffect(() => {
    async function fetchUserName() {
      try {
        const user = await getUser();
        setUserName(user.name);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar o nome do usuário', error);
      }
    }

    fetchUserName();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <header data-testid="header-component">
      <nav>
        <NavLink to="/search" data-testid="link-to-search">Search</NavLink>
        <NavLink to="/favorites" data-testid="link-to-favorites">Favorites</NavLink>
        <NavLink to="/profile" data-testid="link-to-profile">Profile</NavLink>
      </nav>
      <p data-testid="header-user-name">
        Bem-vindo,
        {userName}
        !
      </p>
    </header>
  );
}

export default Header;
