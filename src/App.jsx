import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'; 

// I could have written this function  as  a component and place it in /compnents folder 
// Since there is only one task i.e. fetching client details and displaying 
// I directly wrote the function here 

function App() {
    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const response = await axios.get('http://localhost:3001/getClients/');
                setClients(response.data.clients);
            } catch (err) {
                setError('Failed to fetch clients');
            } finally {
                setLoading(false);
            }
        };

        fetchClients();
    }, []);

    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="app-container">
            <h1 className="title">Client Data</h1>
            <table className="client-table">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>SSN</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip</th>
                    </tr>
                </thead>
                <tbody>
                    {clients.map(client => (
                        <tr key={client.PTY_ID}>
                            <td>{client.PTY_FirstName}</td>
                            <td>{client.PTY_LastName}</td>
                            <td>{client.PTY_Phone}</td>
                            <td>{client.PTY_SSN}</td>
                            <td>{client.Add_Line1}</td>
                            <td>{client.Add_City}</td>
                            <td>{client.Add_State}</td>
                            <td>{client.Add_Zip}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;




































// // client/src/App.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function App() {
//     const [clients, setClients] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchClients = async () => {
//             try {
//                 const response = await axios.get('http://localhost:3001/getClients');
//                 setClients(response.data.clients);
//             } catch (err) {
//                 setError('Failed to fetch clients');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchClients();
//     }, []);

//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>{error}</div>;

//     return (
//         <div>
//             <h1>Client Data</h1>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>First Name</th>
//                         <th>Last Name</th>
//                         <th>Phone</th>
//                         <th>SSN</th>
//                         <th>Address</th>
//                         <th>City</th>
//                         <th>State</th>
//                         <th>Zip</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {clients.map(client => (
//                         <tr key={client.PTY_ID}>
//                             <td>{client.PTY_FirstName}</td>
//                             <td>{client.PTY_LastName}</td>
//                             <td>{client.PTY_Phone}</td>
//                             <td>{client.PTY_SSN}</td>
//                             <td>{client.Add_Line1}</td>
//                             <td>{client.Add_City}</td>
//                             <td>{client.Add_State}</td>
//                             <td>{client.Add_Zip}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default App;
