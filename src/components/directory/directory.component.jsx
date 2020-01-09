import "./directory.styles.scss";

import React, { Component } from "react";

import MenuItem from '../menu-item/menu-item.component'

const sections = [
    {
      title: 'hats',
      imageUrl: 'https://images.pexels.com/photos/1252982/pexels-photo-1252982.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      id: 1,
      linkUrl: 'shop/hats'
    },
    {
      title: 'jackets',
      imageUrl: 'https://images.pexels.com/photos/2887879/pexels-photo-2887879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      id: 2,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'sneakers',
      imageUrl: 'https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      id: 3,
      linkUrl: 'shop/sneakers'
    },
    {
      title: 'womens',
      imageUrl: 'https://images.pexels.com/photos/1967902/pexels-photo-1967902.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens'
    },
    {
      title: 'mens',
      imageUrl: 'https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens'
    }
  ];
  
class Directory extends Component {
 constructor(){
     super();
     this.state={
         sections: sections
     }
 }

  render() {
    return <div className="directory-menu">
    {this.state.sections.map(({title,imageUrl,size,id,linkUrl}) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
    ))}</div>;
  }
}

export default Directory;
