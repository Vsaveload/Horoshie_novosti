/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';

export default function NewsPage() {
  const [news, setNews] = useState([]);
  const [input, setInput] = useState({ tagName: '', tagChoise: null });
  const [newTagState, setNewTagState] = useState({});
  const [filterState, setFilterState] = useState([]);

  const radioChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const addTagHandler = async (event) => {
    event.preventDefault();
    const response = await fetch('/apinews/v1/createtag', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input),
    });

    if (response.ok) {
      const newTagResult = await response.json();
      setNewTagState(newTagResult);
    }
    setInput({ tagName: '', tagChoise: null });
  };

  useEffect(() => {
    const filterNews = news.filter((el) => el.title.includes(newTagState.name));
    setFilterState(filterNews);
  }, [newTagState]);


  useEffect(() => {
    fetch('/apinews/v1')
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <div>
      <div className="top"><h1>Хорошие новости</h1></div>
      <div className="topWraight">
        <div className="inputsContainer">
          <form onSubmit={addTagHandler}>
            <div className="mb-3">

              <label htmlFor="exampleInputName" className="form-label">
                Добавить тег
                <input onChange={inputHandler} value={input.name} name="name" type="text" className="form-control" id="exampleInputName" />
              </label>
            </div>
            <div className="radios">
              <div className="col">
                <input
                  type="radio"
                  id="favoritIsTrue"
                  name="tagChoise"
                  value="true"
                  checked={input.tagChoise === 'true'}
                  onChange={radioChange}
                />
                <label htmlFor="contactChoice1">Отметить как интересное</label>
              </div>
              <div className="col">
                <input
                  type="radio"
                  id="favoritIsFalse"
                  name="tagChoise"
                  value="false"
                  checked={input.tagChoise === 'false'}
                  onChange={radioChange}
                />
                <label htmlFor="contactChoice2">Отметить как неинтересное</label>
              </div>
            </div>
            <button type="submit" className="btn">Добавить</button>
          </form>
        </div>
        <div className="parentNewsBlock">
          <div className="newsBlock">
            {filterState.map((el) => (
              <div>
                <div key={el.id} className="news">
                  <div><h6>{el.title}</h6></div>
                  <a href={el.link} target="_blank" rel="noreferrer">Узнать подробнее</a>
                  <p />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
