import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addItem, checkedTask } from "../Actions/index";
import IndexComponent from "../Components/index";

class IndexContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <IndexComponent
        newtodoItem={this.props.newtodoItem}
        toDoItemList={this.props.toDoItemList}
        complatedList={this.props.complatedList}
        checkedTask={this.props.checkedTask}
        addItem={this.props.addItem}
      />
    );
  }
}

const mapStateToProps = state => ({
  newtodoItem: state.newtodoItem,
  borderRed: state.borderRed,
  toDoItemList: state.toDoItemList,
  complatedList: state.complatedList
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addItem,
      checkedTask
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexContainer);
