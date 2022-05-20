import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar w-[320px] min-w-fit relative bg-background">
      <div className="logo items-center flex pl-7 py-4 h-[73px] border-b cursor-pointer">
        <span className="text-primary font-bold text-2xl">
          The Martec
        </span>
      </div>
      <div
        className="mt-5 py-3.5 px-6 cursor-pointer"
        style={{
          background:
            'linear-gradient(270deg, #E8F1FF 0%, rgba(233, 242, 255, 0) 100%)',
        }}
      >
        <div className="font-semibold text-base text-primary ">
          Dashboard
        </div>
      </div>
      <div className="account flex absolute bottom-6 pl-6">
        <img
          className="avatar w-12 rounded-full mr-6"
          src="/assets/images/user.png"
        />
        <div>
          <div className="font-semibold text-base">
            Kien Nguyen
          </div>
          <div className="text-xs text-grey-600">
            <span className="mr-3">Edit</span>
            <span>Sign out</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
