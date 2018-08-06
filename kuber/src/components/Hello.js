import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getStudentList} from '../actions/studentListActions'

class Hello extends Component {

    constructor(props){
      super(props)

      this.state = {}
      this.aaa = {}
      //绑定函数this作用域
      this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.props.getStudentList();
    }

    componentDidMount(){
        console.log("props", this.props)
        console.log("state", this.state)
        console.log("aaa", this.aaa)
    }


  render() {
    return (
      <div className="Hello">
          <button onClick={this.handleClick}>按钮</button>
          <p>{this.props.studentList.name}</p>
      </div>
    );
  }
}

//state中定义的方法都变成了props
function mapStateToProps(state) {
    return {
        studentList: state.doStudentList.studentList,
    }
}

//这个里边的对象改回当做属性绑定在上边
function mapDispatchToProps(dispatch) {
    return {
        getStudentList: bindActionCreators(getStudentList, dispatch),
    };
}

//connect方法 内部实现了store.dispatch() ，能把多个action绑定到dispatch方法上
export default connect(mapStateToProps, mapDispatchToProps)(Hello);