import React from "react"
import Table from "./table"

const Administrationpage = () => {
  return (
    <Table>
      <table align="center">
        <tbody>
          <tr>
            <th>Designation</th> <th>Member</th>
          </tr>
          <tr id="alt_row">
            <td>Chairman, Board of Governors </td>{" "}
            <td>Prof. Pradip Kumar Jain</td>
          </tr>
          <tr>
            <td>Director, NIT Patna </td> <td> Prof. Pradip Kumar Jain</td>
          </tr>
          <tr id="alt_row">
            <td>Deputy Director and Dean, Academic</td>
            <td>Prof. S. K. Verma</td>
          </tr>
          <tr>
            <td>Dean, Faculty Welfare </td>
            <td> Prof. Om Prakash</td>
          </tr>
          <tr id="alt_row">
            <td>Dean, Student Welfare </td>
            <td> Prof. Prakash Chandra</td>
          </tr>
          <tr>
            <td>Dean, Planning and Develpment </td>
            <td> Prof. Fulena Rajak</td>
          </tr>
          <tr id="alt_row">
            <td>Dean, Research and Consultancy </td>
            <td> Prof. Lal Bahadur Roy </td>
          </tr>
          <tr>
            <td>Registrar, NIT Patna </td>
            <td> Dr. Asit Narayan</td>
          </tr>
        </tbody>
      </table>
    </Table>
  )
}
export default Administrationpage
