import React, { Component } from 'react'
import { FaTimes } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export class ShowContact extends Component {
  render() {
    return (
      <div className='menu'>
        <div className='blur' />
        <div className='menu__content'>

          <div className='menushka'>
            <FaTimes className='nk' onClick={() => this.props.onShowCont()} />
            <div className='menu__header'>Контакты</div>
          </div>

          <div>
            <ul className='lilka'>
              <li><a className='icons'><FaWhatsapp /></a><a>8 (996) 222 09-64</a></li>
              <li><a className='icons'><FaInstagram /></a><a href='https://www.instagram.com/mebel_charleston?igsh=cHp5ZzRtc2o5d2Zk'>@charleston</a></li>
            </ul>
          </div>

        </div>
      </div>
    )
  }
}

export default ShowContact