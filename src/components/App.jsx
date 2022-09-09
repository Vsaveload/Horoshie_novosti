import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PersonalAccount from './PersonalAccount';

export default function App({ goodTagsIs, badTagsIs }) {
  return (
    <div>
      App
      <Routes>
        <Route path="/personalaccount" element={<PersonalAccount userGoodTags={goodTagsIs} userBadTags={badTagsIs} />} />
      </Routes>

    </div>
  );
}
