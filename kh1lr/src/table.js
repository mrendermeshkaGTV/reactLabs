import React from "react";

class TableKharchenko extends React.Component {
    render() {
        return (
            <table>
                <tbody>
                <tr>
                    <th>First name</th>
                    <td>Vitalii</td>
                </tr>
                <tr>
                    <th>LastName</th>
                    <td>Kharchenko</td>
                </tr>
                <tr>
                    <th>Occupation</th>
                    <td>Private Captain</td>
                </tr>
                </tbody>
            </table>
        )
    }
}

export default TableKharchenko;