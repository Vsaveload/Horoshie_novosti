import React, { useState } from 'react';

export default function OneTag({ tagObject, deleteHandler }) {
  return (

    <div className="div">

      <div>{`${tagObject.name}`}</div>

      <button className="btn2 btn-outline-danger" onClick={() => deleteHandler(tagObject.id)} type="button">X</button>

    </div>
  );
}
