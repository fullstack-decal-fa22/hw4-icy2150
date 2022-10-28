import React from 'react';
import Color from './Color';
/* Add any imports you think you might need here! */
import block from './Block';  
import { useState } from 'react';

const Menu = (props) => { 

    return (
      <div className="colorOptions">
          <Color color="red" handleClick={props.onClick}/>
          <Color color="pink" handleClick={props.onClick}/>
          <Color color="blue" handleClick={props.onClick}/>
          <Color color="green" handleClick={props.onClick}/>
      </div>
    );
}

export default Menu;