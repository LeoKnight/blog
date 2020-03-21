import React from 'react';
import 'css-doodle';


export default ({ rule = '',...others }) => (
  <css-doodle{...others}>{ rule }</css-doodle>
)