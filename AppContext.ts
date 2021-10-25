import React from "react";

const context = {
  songId: null,
  setSongId: (id: String) => {},
};

export const AppContext = React.createContext(context);
