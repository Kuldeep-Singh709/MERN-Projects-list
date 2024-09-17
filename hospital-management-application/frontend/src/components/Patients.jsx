import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPatients, addPatient, deletePatient, getSinglePatient, updatePatient } from '../asyncSlices/patients/patientSlice';



export default function Patients() {

    const dispatch = useDispatch();
    const patients = useSelector(state => state.patients.list);
    const status = useSelector(state => state.patients.status);

    // useEffect(() => {
    //     if (status === 'idle') {
    //         dispatch(fetchPatients());
    //     }
    // }, [dispatch, status]);


  return (
    <div>
    <h1>Patient List</h1>
    {status === 'loading' && <p>Loading...</p>}
    {status === 'succeeded' && (
        <ul>
            {patients.map(patient => (
                <li key={patient._id}>{patient.patientname}</li>
            ))}
        </ul>
    )}
</div>
  )
}




















// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchPatients } from '../features/patients/patientSlice';


// export default function Patients() {

//     const dispatch = useDispatch();
//     const patients = useSelector((state) => state.patients.list);
//     const status = useSelector((state) => state.patients.status);

//     useEffect(() => {
//         if (status === 'idle') {
//             dispatch(fetchPatients());
//         }
//     }, [status, dispatch]);



//   return (
//     <div>
//     <h2>Patient List</h2>
//     {patients.map(patient => (
//         <div key={patient._id}>
//             <p>Name: {patient.name}</p>
//             <p>Condition: {patient.condition}</p>
//             <p>Bed Number: {patient.bedNumber}</p>
//             <hr />
//         </div>
//     ))}
// </div>
//   )
// }


