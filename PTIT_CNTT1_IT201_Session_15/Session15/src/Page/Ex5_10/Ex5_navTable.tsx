import { Component } from 'react';

interface Props {
  onSearch: (value: string) => void;
  onSort: (order: string) => void;
}

export default class Ex5_navTable extends Component<Props> {
  render() {
    return (
      <div className={"navTable"}>
        <select
          onChange={e => this.props.onSort(e.target.value)}
        >
          <option value="">Sap Xep theo ten</option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
        <input
          placeholder={"Tim kiem theo ten"}
          onChange={e => this.props.onSearch(e.target.value)}
        />
      </div>
    );
  }
}