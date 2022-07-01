import React, { useContext } from "react";
import { container } from "./composition-root";

const DiContainer = React.createContext(container);

export const useDiContainer = () => useContext(DiContainer);
