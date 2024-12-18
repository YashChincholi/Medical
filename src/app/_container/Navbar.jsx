import React from "react";

function Navbar() {
  return (
    <header className="sm:hidden flex items-center p-10 my-6">
      <div className="flex flex-col gap-1 mr-20">
        <div className="h-1 w-10 bg-primary" />
        <div className="h-1 w-10 bg-primary" />
        <div className="h-1 w-10 bg-primary" />
      </div>
      <h1 className="font-semibold text-xl">A M R U T A M</h1>
    </header>
  );
}

export default Navbar;
