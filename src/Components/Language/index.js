import React from 'react';
import gTranslate from './util';
import './language.css';


class Language extends React.Component {
  componentDidMount() {
    gTranslate();
  }
  render() {
    return (
      <div id="google_translate_element" />
    );
  }
}

export default Language;
