import './App.css';
import Container from '@mui/material/Container';
import {ComponentsList} from "./components/ComponentsList";

const dataURL = 'https://jsonplaceholder.typicode.com/photos'

function App() {
    return (
        <div className="App">
            <Container fixed>
                {ComponentsList(dataURL)}
            </Container>
        </div>
    );
}

export default App;
