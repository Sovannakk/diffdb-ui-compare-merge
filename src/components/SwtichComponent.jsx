"use client";

import { Switch } from "@nextui-org/react";
import React, { useState } from "react";

const SwtichComponent = () => {
  const [isSelected, setIsSelected] = useState(false);

  return <Switch isSelected={isSelected} onValueChange={setIsSelected} />;
};

export default SwtichComponent;
