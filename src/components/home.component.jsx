import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import store from '../redux/store';
import { fetchAllTodos } from './home.slice';

const Home = (_props) => {
  const dispatch = useDispatch();
  const Tod = store.getState();
  console.log(Tod);
  useEffect(() => {
    dispatch(fetchAllTodos());
  }, []);

  const TodosState = useSelector((state) => state.home);

  const [todos, setTodos] = useState(TodosState?.todo?.data);

  useEffect(() => {
    setTodos(TodosState?.todo?.data);
  }, [TodosState]);

  console.log(TodosState);

  return (
    <>
      <p>Hello</p>
      <p>{_props.name}</p>
      <ul>
        {todos?.map((val) => (
          <li key={val.id}>{val.title}</li>
        ))}
      </ul>
    </>
  );
};
export default Home;
