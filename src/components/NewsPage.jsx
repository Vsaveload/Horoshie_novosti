import React, { useEffect, useState } from 'react';

export default function NewsPage() {
  const [news, setNews] = useState([]);
  // const [link, all] = useState([]);

  useEffect(() => {
    fetch('/apinews')
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  // console.log(news);
  return (
    <div>

      {news.map((el) => (
        <div>
          <div>{el.title}</div>
          <a href={el.link} target="_blank" rel="noreferrer">Узнать подробнее</a>

        </div>
      ))}

    </div>
  );
}
