import { createContext } from "react";

export interface ILayoutContext {
  navigation: {
    displayNavigation: boolean;
    toggleNavigation: () => void;
  };
}

export const DEFAULT_LAYOUT_CONTEXT: ILayoutContext = {
  navigation: {
    displayNavigation: false,
    toggleNavigation: () => undefined,
  },
};

export const LayoutContext = createContext<ILayoutContext>(
  DEFAULT_LAYOUT_CONTEXT,
);
