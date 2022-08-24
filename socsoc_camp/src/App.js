import './App.css';
import { Lobby, Register, Test, Hat } from './pages';
import {useRoutes} from 'react-router-dom';


function App() {
  const element = useRoutes([
    {path: '/', element: <Lobby/>},
    {path: '/register', element: <Register/>},
    {path: '/test', element: <Test/>},
    {path: '/hat', element: <Hat />},
  ])
  return element;
}

export default App;