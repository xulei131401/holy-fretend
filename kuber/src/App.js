import React, { Component } from 'react';
// import { DatePicker,Button } from 'antd';

class App extends Component {

    constructor(props){
      super(props)
      //初始状态
      this.state = {
          open: false,
          name: "许磊"
      };

      //绑定函数this作用域
      this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        //①这种方法可以立马获取state修改后的值
        this.setStatePromise(({name}) => ({
            name: "王五"
        })).then(() => {
            console.log(this.state.name);
        });
        //②利用setTimeOut

        console.log(this.props.data)
    }

    setStatePromise(updator) {
        return new Promise( function (resolve,reject){
            this.setState(updator,resolve);
        }.bind(this))
    }

    componentDidMount(){
        const {parent, data} = this.props;
        // this.setStatePromise(
        //     ({name}) => ({name: "李四"})
        // ).then(() => {
        //     console.log(this.state.name);
        // });

        console.log(data)
        console.log(parent)
        console.log(this.hh = {sd:"sd"})
        // this.props.data = "asdasd"
    }


  render() {
    return (
      <div className="App">
          <button onClick={this.handleClick}>{this.state.name}</button>
          {/*<DatePicker />*/}
          {/*<Button type="primary">Primary</Button>*/}
      </div>
    );
  }
}

export default App;
