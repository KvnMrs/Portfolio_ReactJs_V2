import React from "react";

function Profile() {
  return (
    <>
      <div className="w-full h-modal-content flex flex-col bg-[url('https://t3.ftcdn.net/jpg/02/87/90/92/360_F_287909239_K8bMpb0M9oUyOI8zrdqpKPQnIlC73WfD.jpg')] bg-cover bg-no-repeat rounded-2xl">
        <div className=" flex flex-col items-center justify-center w-full h-full rounded-lg shadow-lg bg-slate-800 bg-opacity-25">
          <span className="m-1">Kevin Marais</span>
          <span className="m-1">28 ans</span>
          <span className="m-1">Nantes</span>
          <span className="m-1">Kevin-mrs2020@gmail.com</span>
          <span className="m-1">Kevin Marais</span>
        </div>
      </div>
    </>
  );
}

export default Profile;
