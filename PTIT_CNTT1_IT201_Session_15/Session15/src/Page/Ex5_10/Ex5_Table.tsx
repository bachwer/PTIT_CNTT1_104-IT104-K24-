import { Component } from "react";
import type { user } from "./Ex5_Parent";

interface TableProps {
  data?: user[];
  onDelete: (id: string) => void;
  handleStatus: (id: string) => void;
  handleEdit: (id:string) => void;
}

export default class Ex5_table extends Component<TableProps> {
  render() {
    const { data, onDelete, handleStatus, handleEdit } = this.props;

    return (
      <div>
        <table className={"Ex5table"}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Date</th>
              <th>Email</th>
              <th>Status</th>
              <th>function</th>
            </tr>
          </thead>

          <tbody>
            {data?.map((sv) => (
              <tr key="sv.id">
                <td>{sv.id}</td>
                <td>{sv.name}</td>
                <td>{sv.date}</td>
                <td>{sv.email}</td>
                
                <td >
                  <div className={sv.status ? "Active" : "inactive"}>
                    {sv.status ? "Active" : "inactive"}
                  </div>
                  </td>
                <td>
                  <div className="d-flex gap-2">
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => onDelete(sv.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-outline-warning btn-sm"
                      onClick={() => handleStatus(sv.id)}
                      title={
                        sv.status ? "Deactivate this user" : "Already inactive"
                      }
                    >
                      Deactivate
                    </button>

                    <button
                      className="btn  btn-sm"
                      onClick={() => handleEdit(sv.id)}
                    >
                      Edit
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
