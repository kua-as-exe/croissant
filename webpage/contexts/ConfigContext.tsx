import React, { createContext, useContext, useState } from "react";

type configContextType = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

const configContextDefaultValues: configContextType = {
  theme: null,
  setTheme: ()=>{}
};

const ConfigContext = createContext<configContextType>(configContextDefaultValues);

export function useConfig() {
    return useContext(ConfigContext);
}

type Props = {
  children: React.ReactNode;
};

export const ConfigProvider:React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<string>('dracula');

  const value = {
    theme, setTheme
  };
  
  return (
    <ConfigContext.Provider value={value}>
        {children}
    </ConfigContext.Provider>
  );
}