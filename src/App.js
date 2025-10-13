import logo from './logo.svg';
import './App.css';
import AppRouter from "./routes/AppRouter"
import useAuthStore from "./store/authStore"
import styles from "./basic.module.css"
function App() {

  const checkLogin = useAuthStore((state) => state.checkLogin);
  checkLogin();

  return (
      <AppRouter/>
  );
}

export default App;
