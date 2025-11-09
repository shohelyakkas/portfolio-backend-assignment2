import MainRouter from './MainRouter';
import { AuthProvider } from './context/AuthContext';
import './styles/global.css';

function App() {
    return (
        <AuthProvider>
            <MainRouter />
        </AuthProvider>
    );
}
export default App;
