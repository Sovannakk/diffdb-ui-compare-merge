"use client";

import React, { useState } from "react";
import SwtichComponent from "./SwtichComponent";

const statusStyles = {
  match: "bg-[#ECFFED]",
  different: "bg-[#FDF6E6]",
  missing: "bg-[#FFF1F1]",
};


const sqlScripts = [
  {
    data: `CREATE TABLE users (
      user_id INT AUTO_INCREMENT PRIMARY KEY, 
      username VARCHAR(50) NOT NULL, 
      password VARCHAR(100) NOT NULL, 
      email VARCHAR(100) NOT NULL UNIQUE, 
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );`,
    status: "match",
  },
  {
    data: `CREATE TABLE orders (
      order_id INT AUTO_INCREMENT PRIMARY KEY, 
      user_id INT NOT NULL, 
      product_name VARCHAR(100) NOT NULL, 
      order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
      FOREIGN KEY (user_id) REFERENCES users(user_id)
    );`,
    status: "different",
  },
  {
    data: `CREATE TABLE products (
      product_id INT AUTO_INCREMENT PRIMARY KEY, 
      product_name VARCHAR(100) NOT NULL, 
      price DECIMAL(10, 2) NOT NULL
    );`,
    status: "missing",
  },
];

const SourceScriptComponent = ({ funcSourceScript }) => {
  const [selectedScripts, setSelectedScripts] = useState([]);

  const handleSelected = (script) => {
    const alreadySelected = selectedScripts.find((s) => s.data === script.data);
    let updatedSelection;

    if (alreadySelected) {
      // Deselect if already selected
      updatedSelection = selectedScripts.filter((s) => s.data !== script.data);
    } else {
      // Add to selection if not selected
      updatedSelection = [...selectedScripts, script];
    }
    setSelectedScripts(updatedSelection);
    funcSourceScript({ type: "source", data: updatedSelection });
  };

  return (
    <div className="flex flex-col gap-y-3">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-semibold text-lg">Table</h3>
          <span className="text-sm text-gray-400">Source</span>
        </div>
        <div className="flex gap-x-5">
          <div className="flex items-center gap-x-3">
            <div className="bg-[#D0FFD2] rounded-full w-3 h-3"></div>
            <span>Match</span>
          </div>
          <div className="flex items-center gap-x-3">
            <div className="bg-[#FCE9BF] rounded-full w-3 h-3"></div>
            <span>Different</span>
          </div>
          <div className="flex items-center gap-x-3">
            <div className="bg-[#FFD8D8] rounded-full w-3 h-3"></div>
            <span>Missing</span>
          </div>
        </div>
        <div>
          <SwtichComponent />
        </div>
      </div>
      <div className="border-[1px] rounded-lg"></div>
      <div className="space-y-4">
        {sqlScripts.map((script, index) => (
          <div
            key={index}
            onClick={() => handleSelected(script)}
            className={`rounded-lg p-4 cursor-pointer ${
              selectedScripts.find((s) => s.data === script.data)
                ? "border-2"
                : ""
            } ${statusStyles[script.status]}`}
          >
            <pre className="font-mono text-sm leading-relaxed">
              {script.data}
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SourceScriptComponent;
