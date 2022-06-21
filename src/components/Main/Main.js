import './Main.css';
import Header from '../Header/Header';
import ToDoList from '../ToDoList/ToDoList';
import Buttons from '../Buttons/Buttons';

function Main() {
    return (
        <main className="main">
            <Header />
            <ToDoList />
            <Buttons />
        </main>
    );
}

export default Main;
