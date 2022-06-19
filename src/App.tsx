import React, { useEffect, useState } from 'react';
import './App.css';
import AddStudent from './components/students/AddStudent';
import Students from './components/students/Students';

function App() {

  const [students, setStudents] = useState([{}])
    
    useEffect(() => {
      getStudents();
        
      }, []);

    function getStudents() {
      fetch("http://localhost:3333/student")
        .then(res => res.json())
        .then(data => {
          setStudents(data.data)
          console.log(data.data);

        })
        .catch(err => console.error(err))
    }


  return (
    <div className="App">
      <h1>Student Management</h1>
      <AddStudent />
      <Students students={students} />
      
    </div>
  );
}

export default App;
