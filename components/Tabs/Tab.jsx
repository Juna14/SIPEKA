import React, { useState } from "react";

const Tab = ({ tabs, title, contents }) => {
  //   const tabs = ["Draft", "Diajukan", "Disetujui", "Ditolak", "Ditangguhkan"];
  //   const contents = [
  //     <p>Tab 1 Content</p>,
  //     <p>Tab 2 Content</p>,
  //     <p>Tab 3 Content</p>,
  //     <p>Tab 4 Content</p>,
  //     <p>Tab 5 Content</p>,
  //   ];
  const [activeTab, setActiveTab] = useState(0);

  if (!tabs) return <></>;

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-md font-bold capitalize">{title}</h1>
      <div className="grid grid-flow-col overflow-auto items-center gap-4">
        {tabs?.map((tab, index) => (
          <button
            key={tab}
            className={`px-2 py-2 rounded-lg shadow-xl ${
              activeTab === index
                ? "bg-primary text-white"
                : "bg-blue-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-700"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>
      {contents &&
        contents?.map((content, index) => activeTab === index && content)}
    </div>
  );
};

export default Tab;
