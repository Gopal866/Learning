import { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./Redux/Actions/MembersActions";
import MembersListData from "./Components/MembersListData";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.membersListAction();
  }

  render() {
    return (
      <div className="App">
        <MembersListData membersList={this.props.membersList} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("state:", state);
  return {
    membersList: state.membersList
  };
};

export default connect(mapStateToProps, actions)(App);
