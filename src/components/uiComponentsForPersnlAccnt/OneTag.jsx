import React, { useState } from 'react';

export default function OneTag({ tagObject, deleteHandler }) {
  return (
    <div>
      {`${tagObject.name}`}
      <button onClick={() => deleteHandler(tagObject.id)} type="button" className="btn btn-outline-danger">X</button>
    </div>
  );
}
