import React from 'react';

export default function Header() {
  return (
    <div className="header flex justify-between h-12 py-1.5 text-[#B3B3B3]">
      <button className="header__home-button">Home</button>
      <input
        type="text"
        placeholder="Search"
        className="w-[500px] rounded-full p-2.5 font-medium"
      />
      <div className="header__buttons flex gap-8 text-lg leading-6">
        <button className="header__signup">Signup</button>
        <button className="header__login text-black rounded-full border-2 border-solid px-8 bg-white">
          Login
        </button>
      </div>
    </div>
  );
}
