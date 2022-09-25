import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './componants/header/Header';
import Main from './componants/main/main';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Header />
      <Main />
    </AuthProvider>
  );
}

export default App;
