import "../index.css"


const dataUser = [
    { id: 1, name: "AAAA", dob: "21/01/2001", gender: "Nam", address: "New York" },
    { id: 2, name: "BBBB", dob: "15/05/2000", gender: "Nữ", address: "London" },
    { id: 3, name: "CCCC", dob: "30/09/1999", gender: "Nam", address: "Tokyo" },
    { id: 4, name: "DDDD", dob: "12/12/2002", gender: "Nữ", address: "Paris" },
    { id: 5, name: "EEEE", dob: "01/04/2003", gender: "Nam", address: "Berlin" }
];



const EX8_ListAccount = () => {
    return(
        <main>
            <table className={"tableEx8"}>
                <thead className={"theadEx8"}>
                <tr>
                    <th>SST</th>
                    <th>Name</th>
                    <th>Date of Birth</th>
                    <th>Sex</th>
                    <th>Address</th>
                    <th>Active</th>
                </tr>
                </thead>
               <tbody className={"tbodyEx8"}>
                   {
                       dataUser.map((user, i) => (
                           <tr key={i}>
                               <td>{i + 1}</td>
                               <td>{user.name}</td>
                               <td>{user.dob}</td>
                               <td>{user.address}</td>
                               <td>{user.gender}</td>
                               <td className={"activeBtn"}>
                                   <button>Edit</button>
                                   <button className={"delete"}>Delete</button>
                               </td>
                           </tr>
                       ))
                   }
               </tbody>
                <tfoot className={"footerEx8"}>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>
        </main>
    )
}


export default EX8_ListAccount;