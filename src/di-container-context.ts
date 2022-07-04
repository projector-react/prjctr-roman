import React, { useContext } from "react";
import { container } from "./composition-root";

export const DiContainerContext = React.createContext(container);

export const useDiContainer = () => useContext(DiContainerContext);
