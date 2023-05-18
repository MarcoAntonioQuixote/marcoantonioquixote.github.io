import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import AddAStudent from './components/AddAStudent';
import ShowStudents from './components/ShowStudents';
import Profile from './components/Profile';
import PokeProfile from './components/PokeProfile';

function App() {
    return (
        <div className="App">
            {/* <ShowStudents/> */}
            <h2>Add/Del a student/pokemon</h2>
            <h2> <Link to='/students'> See Students </Link> </h2>
            <Routes>
                <Route path="/students" element={<ShowStudents/>}/>
                <Route path="/students/:id" element={<Profile/>}/>
                <Route path="/addStudent" element={<AddAStudent/>}/>
            </Routes>
        </div>
    );
}

export default App;
