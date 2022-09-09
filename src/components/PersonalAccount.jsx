import React, { useEffect, useState } from 'react';
import OneTag from './uiComponentsForPersnlAccnt/OneTag';

export default function PersonalAccount({
  userName, userGoodTags, userBadTags, setUser, user,
}) {
  const [goodTags, setGoodTags] = useState(userGoodTags || null);
  useEffect(() => {
    if (!goodTags) {
      fetch('/api/v1/goodtags')
        .then((res) => res.json())
        .then((data) => setGoodTags(data));
    }
  }, []);

  const [badTags, setBadTags] = useState(userBadTags || null);
  useEffect(() => {
    if (!badTags) {
      fetch('/api/v1/badtags')
        .then((res) => res.json())
        .then((data) => setBadTags(data));
    }
  }, []);

  const deleteHandler = (tagid) => {
    fetch(`/api/v1/${tagid}`, {
      method: 'DELETE',
    })
      .then(() => setBadTags((prev) => prev
        .filter((badTagObject) => badTagObject.Tag.id !== tagid)))
      .then(() => setGoodTags((prev) => prev
        .filter((goodTagObject) => goodTagObject.Tag.id !== tagid)));
  };

  return (
    <>
      <div className="top"><h1>Хорошие новости</h1></div>
      {/* <div className="userpage"> */}
      <div className="block1">
        <div className="div">

          <p className="p">Интересные теги</p>
          {goodTags?.length ? goodTags?.map((el) => <OneTag tagObject={el.Tag} deleteHandler={deleteHandler} key={el.Tag.id} />) : 'no tags'}
        </div>
        <div className="div">
          <p className="p">Неинтересные теги</p>
          {badTags?.length ? badTags?.map((el) => <OneTag tagObject={el.Tag} deleteHandler={deleteHandler} key={el.Tag.id} />) : 'no tags'}
        </div>
        {/* </div> */}

      </div>

    </>
  );
}
