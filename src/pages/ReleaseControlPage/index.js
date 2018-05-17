import React, { Component } from 'react';
import css from './index.scss';

export default class App extends Component {
  render() {
    return (
      <div className={css.cell}>Hello ReleaseControlPage<span className={css['cell--actived']}>AAAA</span></div>
    )
  }
}
