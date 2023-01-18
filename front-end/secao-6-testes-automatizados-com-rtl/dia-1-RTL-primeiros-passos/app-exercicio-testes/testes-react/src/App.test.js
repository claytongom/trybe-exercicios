import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ValidEmail from './Components/ValidEmail';
import App from './App';

test('Verifica se existe o campo Email', () => {
  render(<App />);
  const inputEmail = screen.getByLabelText('Email');
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveProperty('type', 'email');
});

// test('Verifica se existem os botões Enviar e Voltar', () => {
//   render(<App />);
//   const btnEnviar = screen.getByRole('button', { name: 'Enviar' });
//   const btnVoltar = screen.getByRole('button', { name: 'Voltar' });
//   expect(btnEnviar).toBeInTheDocument();
//   expect(btnVoltar).toBeInTheDocument();
// });

test ('Verifica se existem dois botões', () => {
  render(<App />);
  const btns = screen.getAllByRole('button');
  expect(btns.length).toBe(2);
});

test('Verifica se existe o botão Enviar', () => {
  render(<App />);
  const btnEnviar = screen.getByTestId('id-enviar');
  expect(btnEnviar).toBeInTheDocument();
  expect(btnEnviar).toHaveValue('Enviar');
});

test ('Verifica se o botão e o campo email estão funcionando', () => {
  render(<App />);
  const EMAIL_USER = 'email@email.com';

  const textEmail = screen.getByTestId('id-email-user');
  expect(textEmail).toBeInTheDocument();
  expect(textEmail).toHaveTextContent('Valor:');

  const btnEnviar = screen.getByTestId('id-enviar');
  const inputEmail = screen.getByLabelText('Email');
  userEvent.type(inputEmail, EMAIL_USER);
  userEvent.click(btnEnviar);

  expect(textEmail).toHaveTextContent('Valor: true');
  expect(inputEmail).toHaveValue('');
});

test('Testando um componente, caso o email seja inválido.', () => {
  const EMAIL_USER = 'emailerrado';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Inválido');
  expect(isValid).toBeInTheDocument();
});
