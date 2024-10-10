// src/components/ClientList.js
import React from 'react';

const ClientList = () => {
  // Hard-coded JSON data
  const data = {
    clients: [
      {
        PTY_ID: "123e4567-e89b-12d3-a456-426614174000",
        PTY_FirstName: "John",
        PTY_LastName: "Doe",
        PTY_Phone: "555-1234",
        PTY_SSN: "123-45-6789",
        addresses: [
          {
            Add_ID: "456e4567-e89b-12d3-a456-426614174001",
            Add_Line1: "123 Main St",
            Add_Line2: "",
            Add_City: "Springfield",
            Add_State: "IL",
            Add_Zip: "62701",
          },
        ],
      },
    ],
  };

  return (
    <div>
      <h1>Client List</h1>
      <table border="1">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>SSN</th>
            <th>Addresses</th>
          </tr>
        </thead>
        <tbody>
          {data.clients.map((client) => (
            <tr key={client.PTY_ID}>
              <td>{client.PTY_FirstName}</td>
              <td>{client.PTY_LastName}</td>
              <td>{client.PTY_Phone}</td>
              <td>{client.PTY_SSN}</td>
              <td>
                {client.addresses.length > 0 ? (
                  client.addresses.map((address) => (
                    <div key={address.Add_ID}>
                      {address.Add_Line1}, {address.Add_City}, {address.Add_State} {address.Add_Zip}
                    </div>
                  ))
                ) : (
                  <span>No addresses</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientList;
