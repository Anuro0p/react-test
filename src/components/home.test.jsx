import { render, screen } from '@testing-library/react';
import store from '../redux/store';
import Home from './home.component';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchAllTodos } from './home.slice';

test('Check home for hello', () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>
  );
  const linkElement = screen.getByText('Hello');
  expect(linkElement).toBeInTheDocument();
});
test('Home props check', () => {
  render(
    <Provider store={store}>
      <Home name={'Anuroop'} />
    </Provider>
  );
  let linkElement;
  setTimeout(() => {
    linkElement = screen.getByText('delectus aut autem');
    expect(linkElement).toBeInTheDocument();
  }, 3000);
});
test('Home ALL DATA check', () => {
  const TodosState = store.getState();

  render(
    <Provider store={store}>
      <Home name={'Anuroop'} />
    </Provider>
  );
  let listElement;
  setTimeout(() => {
    listElement = screen.getAllByRole('listitem');
    expect(listElement).toHaveLength(TodosState?.home?.todo?.data.length);
  }, 3000);
});
