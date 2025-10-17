import React from "react";
import SignIn from "../../components/SignIn";

const AdminLoginPage: React.FC = () => {
  return (
    <div className="relative min-h-screen w-screen bg-gray-100">
      <div className="flex min-h-screen">
        <img
          src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=1010&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Egg dish"
          className="w-1/2 h-screen object-cover brightness-50"
          width="1010"
          height="674"
        />
        <img
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Salad dish"
          className="w-1/2 h-screen object-cover brightness-50"
          width="1480"
          height="987"
        />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
        <h1 className="henny-penny-regular text-4xl font-bold text-white drop-shadow-md">
          Qstash
        </h1>
        <SignIn />
      </div>
    </div>
  );
};

export default AdminLoginPage;
