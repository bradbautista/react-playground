import React from 'react';
import './Demonym.css';

export default function Demonym(props) {

  return (
        <div className="content demonym">
        <p>A {props.name} comes from {props.country}.</p>
        </div>
  );
}