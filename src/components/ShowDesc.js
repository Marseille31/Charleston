import React, { Component } from 'react'
import { FaTimes } from "react-icons/fa";
import { Carousel } from 'antd';


export class ShowDesc extends Component {

  render() {
    return (
      <div className='full-item'>
        <div>
          <FaTimes className='krestik' onClick={() => this.props.onShowItem(this.props.item)} />
          <>
            <Carousel arrows infinite={false} className='Carusel'>
              {this.props.item.img && <img src={"./img/" + this.props.item.img} alt={`img ${this.props.item.id}`} />}

              {this.props.item.img2 && <img src={"./img/" + this.props.item.img2} alt={`img ${this.props.item.id}`} />}

              {this.props.item.img3 && <img src={"./img/" + this.props.item.img3} alt={`img ${this.props.item.id}`} />}

              {this.props.item.img4 && <img src={"./img/" + this.props.item.img4} alt={`img ${this.props.item.id}`} />}

              {this.props.item.img5 && <img src={"./img/" + this.props.item.img5} alt={`img ${this.props.item.id}`} />}

              {this.props.item.img6 && <img src={"./img/" + this.props.item.img6} alt={`img ${this.props.item.id}`} />}
            </Carousel>
          </>
          <h2>{this.props.item.title}</h2>
          <b>Цена: {this.props.item.price}</b>
          <p>{this.props.item.desc}</p>
        </div>
      </div>
    )
  }
}

export default ShowDesc