import React, { useState } from "react";
import { auth } from "../../utils/firebase";
import { signOut } from "firebase/auth";
import { toggleGptSearchView } from "../../utils/gptSlice";
import { useDispatch, useSelector } from "react-redux";
import lang from "../../utils/lang";
import { addLanguage } from "../../utils/langSlice";
const Header = () => {
  const [optionValue,setOptionValue]=useState('');
  const dispatch=useDispatch();
    const gptSearch=useSelector(store=>store.gpt.showGptSearch);
  const handleSignout = async () => {
    try {
      await signOut(auth);
      window.location.href = "/";
    } catch (error) {
      console.error(error);
    }
  };
  const handleSelectionOfLanguage = (event) => {
    const selectedLanguage = lang.find(
      (language) => language.lang === event.target.value
    );
    setOptionValue(event.target.value);
    dispatch(addLanguage(selectedLanguage));
  };
  const handleGPTSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <h1 className="text-red-600 text-3xl font-bold">
        NETFLIX
      </h1>
      <div>
        <select value={optionValue} onChange={handleSelectionOfLanguage}>
          {
            lang.map((o) => (
              <option key={o.lang} value={o.lang}>
                {o.lang}
              </option>
            ))
          }
        </select>
      </div>
      <button className="text-white bg-red-500 h-30 w-80 rounded-md" onClick={handleGPTSearchClick}>{gptSearch?"Home Page":"GPT Search"}</button>
      <button
        className="bg-red-600 text-white px-4 py-2 rounded"
        onClick={handleSignout}
      >
        Sign out
      </button>
    </div>
  );
};

export default Header;