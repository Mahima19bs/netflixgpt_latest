import React from "react";
import { auth } from "../../utils/firebase";
import { signOut } from "firebase/auth";

const Header = () => {
  const handleSignout = async () => {
    try {
      await signOut(auth);
      window.location.href = "/";
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <h1 className="text-red-600 text-3xl font-bold">
        NETFLIX
      </h1>

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