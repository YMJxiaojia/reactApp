import React, {Component} from 'react'
import {render} from 'react-dom'
import style from './index.less'


class App extends Component {
  static defaultProps = {

  }
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return <div className={style.title}>Hello, world</div>
  }
}

render(<App />, document.body.appendChild(document.createElement('div')))