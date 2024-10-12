"use client";

import ModalComponent from "@/components/ModalComponent";
import SourceScriptComponent from "@/components/SourceScriptComponent";
import TargetScriptComponent from "@/components/TargetScriptComponent";
import { useState } from "react";

export default function Home() {
  const [sourceScript, setSourceScript] = useState("");
  const [targetScript, setTargetScript] = useState("");

  const funcSourceScript = (value) => {
    setSourceScript(value);
  };

  const funcTargetScript = (value) => {
    setTargetScript(value);
  };

  console.log("sourceScript", sourceScript);
  console.log("targetScript", targetScript);

  return (
    <div className="w-full h-screen p-5">
      {" "}
      <div className="flex flex-col border-2 rounded-lg">
        <div className="flex">
          {/* Source Section */}
          <div className="flex-1 p-5 border-r-2">
            <SourceScriptComponent funcSourceScript={funcSourceScript} />
          </div>

          {/* Target Section */}
          <div className="flex-1 p-5">
            <TargetScriptComponent funcTargetScript={funcTargetScript} />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <ModalComponent
            sourceScript={sourceScript}
            targetScript={targetScript}
          />
        </div>
      </div>
    </div>
  );
}
