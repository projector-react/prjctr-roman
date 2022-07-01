import React, { useContext } from "react";
import { container } from "./composition-root";

export const DiContainer = React.createContext(container);

export const useDiContainer = () => useContext(DiContainer);
