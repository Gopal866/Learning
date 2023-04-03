import { Component } from "react";
import "./CompoStyles.css"

class MembersList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {membersList} = this.props;
    console.log("membersList:", membersList);

    return (
      <div>
        <table>
        <caption>Members List Data</caption>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {membersList.length > 0 ? (
              membersList.map((obj, index) => (
                <tr key={index + 1}>
                  <td>{obj.id}</td>
                  <td>{obj.name}</td>
                  <td>{obj.email}</td>
                  <td>{obj.role}</td>
                  <td><button>Action</button></td>
                </tr>
              ))
            ) : (
              <tr>
                <td></td>
                <td></td>
                <td>No Data Found</td>
                <td></td>
                <td></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MembersList;
