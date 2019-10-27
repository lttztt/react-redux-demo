import React, {Component} from 'react';
import { connect } from 'react-redux'

// 声明App组件
class App extends Component{
  render(){
    return (
      <div>
        你点击了 <span>{this.props.n}</span>
        <div>
          <button onClick={()=>this.props.add1()}>+1</button>
          <button onClick={()=>this.props.add2()}>+2</button>
          <button onClick={()=>this.props.addIf(this.props.n)}>单数+1</button>
          <button onClick={()=>this.props.addAsync()}>2秒后+1</button>
        </div>
      </div>
    )
  }
}


// 把store的state绑定到props上
function mapStateToProps(state){
  return {
    n: state.n
  }
}
// 把对状态的操作绑定到props上
function mapDispatchToProps(dispatch){
  return {
    add1: () => dispatch({type: 'add', payload: 1}),
    add2: () => dispatch({type: 'add', payload: 2}),
    addIf: (n) => {
      if(n % 2 === 1){
        dispatch({type: 'add', payload: 1})
      }
    },
    addAsync: () => {
      setTimeout(()=>{
        dispatch({type: 'add', payload: 1})
      }, 2000)
    }
  }
}

// 用 react-redux 的 connect 处理App组件
export default connect(mapStateToProps, mapDispatchToProps)(App)
