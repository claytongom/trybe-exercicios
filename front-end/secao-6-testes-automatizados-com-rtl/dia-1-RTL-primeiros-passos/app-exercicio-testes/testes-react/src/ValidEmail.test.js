import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ValidEmail from './Components/ValidEmail';
import App from './App';

test('Testando um componente, caso o email seja inválido.', () => {
    const EMAIL_USER = 'emailerrado';
    render(<ValidEmail email={ EMAIL_USER } />);
    const isValid = screen.getByText('Email Inválido');
    expect(isValid).toBeInTheDocument();
  });

test('Testando se o componente não aparece caso o campo e-mail esteja vazio.', () => {
    render(<ValidEmail email={ '' } />);
    const isValid = screen.queryByTestId('id-is-email-valid');
    expect(isValid).not.toBeInTheDocument();
});

test('Testando se o componente possui texto verde ao ser digitado um e-mail válido.', () => {
    const EMAIL_USER = 'email@email.com';

    render(<ValidEmail email={ EMAIL_USER } />);
    const isValid = screen.getByTestId('id-is-email-valid');
    expect(isValid).toHaveClass('green-text');
});

test('Testando se o componente possui texto vermelho ao ser digitado um e-mail inválido.', () => {
    const EMAIL_USER = 'emailerrado';

    render(<ValidEmail email={ EMAIL_USER } />);
    const isValid = screen.getByTestId('id-is-email-valid');
    expect(isValid).toHaveClass('red-text');
});

