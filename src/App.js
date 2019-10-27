import React, {Component} from 'react';
import { connect } from 'react-redux'

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


function mapStateToProps(state){
  return {
    n: state.n
  }
}
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

export default connect(mapStateToProps, mapDispatchToProps)(App)
