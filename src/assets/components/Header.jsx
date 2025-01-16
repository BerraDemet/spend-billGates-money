import { useState } from "react";

export default function Header() {
  const [balance, setBalance] = useState(1000000000000);

  return (
    <>
      <div className="container bg-white w-max  flex flex-col items-center py-6 px-48 gap-8">
        <img
          className="w-24 h-24 rounded-full"
          src="./public/img/bill-gates.jpg"
        ></img>
        <h1>Spend Bill Gates' Money</h1>
      </div>
      <div className="bakiye container bg-green-300 w-full flex justify-center h-max mt-4 py-4">
        <p className="text-4xl tracking-small text-white">
          ${balance.toLocaleString("en-US")}
        </p>
      </div>
    </>
  );
}
