import React from 'react'

// interface StudentsProps {
//     students : {_id: string, name: string, address: string, email: string}[]
// }
const Students: React.FC<any> = (props) => {
    
  return (
    <div className='student_list'>
        <h3>Student list</h3>
        {
            props.students.map(student => (
                <li key={student._id}>{student.name}</li>
            ))
        }
    </div>
  )
}

export default Students