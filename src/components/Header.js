import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <header>
        <div>
          <span className='logo'>Charleston</span>
          <nav>
            <div className='burger-btn'>
              <span />
            </div>
            <li><a href='https://t.me/+aIQFXnUUaINlNzQy'>Наш ТГК</a></li>
            <li><a onClick={() => this.props.onShowCont()}>Контакты</a></li>
          </nav>
        </div>
        <div className='presentation'>
          <h1 className='presen-li'>Лучшая мебель для вашего дома</h1>
        </div>
      </header>
    )
  }
}  