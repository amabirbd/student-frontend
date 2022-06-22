import React from 'react'

// interface StudentsProps {
//     students : {_id: string, name: string, address: string, email: string}[]
// }
const Students: React.FC<any> = (props) => {
    
  return (
    <>
        <ul className='student_list'>
        {
            props.students.map(student => (
                <li className='student_li_item' key={student._id}>{student.name}<span className='email_field'>{student.email}</span></li>
            ))
        }
        </ul>
    </>
  )
}

export default Students