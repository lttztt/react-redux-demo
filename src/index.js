import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// 获取创建store的方法
import { createStore } from 'redux'
// 获取 Provider 来包裹需要传入 store 的组件
import { Provider } from 'react-redux'

// 创建 处理 操作的 函数
const reducer = (state, action) =>{
  if(state === undefined){
    return { n: 0 }
  }else {
    if(action.type === 'add'){
      var newState = {n: state.n + action.payload}
      return newState
    }else {
      return state
    }
  }
}
const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);




serviceWorker.unregister();
