import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function NotFoundPage() {
  return (
    <Container>
      <h1>404</h1>
      <h2>Página não encontrada :/</h2>
      <div>
        <Link to="/">Go to Home </Link>
      </div>
    </Container>
  );
}
