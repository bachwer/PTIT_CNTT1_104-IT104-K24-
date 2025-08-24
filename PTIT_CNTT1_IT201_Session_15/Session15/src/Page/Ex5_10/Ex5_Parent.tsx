import { Component } from "react";
import TableData from "./Ex5_Table";
import "./Ex5.css";
import NavTable from "./Ex5_navTable";
import ModalPopup from "./ModalPopup";

export interface user {
  id: string;
  name: string;
  date: string;
  email: string;
  status: boolean;
}

interface State {
  users: user[];
  usersFake: user[];
  isOpen: boolean;
  selectedUser: user | null;
  text: string;
}

export default class Ex5 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      users: [
        {
          id: "SV001",
          name: "Nguyen Van A",
          date: "20/03/2000",
          email: "Adsd@gmail.com",
          status: true,
        },
        {
          id: "SV002",
          name: "Tran Van B",
          date: "21/03/2000",
          email: "b@gmail.com",
          status: false,
        },
        {
          id: "SV003",
          name: "Le Th C",
          date: "22/03/2000",
          email: "c@gmail.com",
          status: true,
        },
      ],
      isOpen: false,
      selectedUser: null,
      text: "Add",
      usersFake: [],
    };
  }



  handleDelete = (id: string) => {
    this.setState((prev) => ({ users: prev.users.filter((a) => a.id !== id) }));
  };

  handleStatus = (id: string) => {
    this.setState((prev) => ({
      users: prev.users.map((u) => (u.id === id ? { ...u, status: !u.status } : u)),

    }));
  };

  handlePopup = () => {
    this.setState((prev) => ({ isOpen: !prev.isOpen }));
    this.setState ({isOpen: true, selectedUser: null});
  };

  onCloseModal = () => {
    this.setState({ isOpen: false });
  };

  handleEdit = (id: string) => {
    const found = this.state.users.find(u => u.id === id) || null;
    this.setState ({ text: "Submit", isOpen: true , selectedUser: found});
  };


  handleSave = (data: user) => {
    if(data.id === "" || data.name === "" || data.date === "" || data.email === "") return;
    if(this.state.text === "Add"){
      const foundId = this.state.users.find(a => a.id === data.id);
      if(foundId) return;
      this.setState((prev) => ({
        users: [...prev.users, data],
      }));
    }else{

      if(this.state.selectedUser === null) return;
      const id = this.state.selectedUser.id;
      this.setState((prev) => ({
        users: prev.users.map((u) => (u.id === id ? { ...u, ...data } : u)),
      }));

    }
    this.setState ({isOpen: false})
  };
  

  handleSearch = (value: string) => {
    this.setState({
      usersFake: this.state.users.filter(u =>
        u.name.toLowerCase().includes(value.toLowerCase())
      ),
    });
  };

  handleSort = (order: string) => {
    let sorted = [...this.state.users];
    if (order === "asc") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (order === "desc") {
      sorted.sort((a, b) => b.name.localeCompare(a.name));
    }
    this.setState({ usersFake: sorted });
  };

  render() {
    return (
      <div>
        <div className="container">
          <h1>Danh Sach SV</h1>
          <button onClick={this.handlePopup} className="btn btn-primary">
            Them Sinh Vien
          </button>
        </div>
        <ModalPopup
          isOpen={this.state.isOpen}
          onClose={this.onCloseModal}
          data={this.state.selectedUser}
          onSubmit={this.handleSave}
          text={this.state.text}
        ></ModalPopup>

        <NavTable
          onSearch={this.handleSearch}
          onSort={this.handleSort}
        />

        <TableData
          data={this.state.usersFake.length > 0 ? this.state.usersFake : this.state.users}
          onDelete={this.handleDelete}
          handleStatus={this.handleStatus}
          handleEdit={this.handleEdit}
        />
      </div>
    );
  }
}
