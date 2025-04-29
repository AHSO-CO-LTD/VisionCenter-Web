import { createContext, useContext, useState } from "react";
import "../style/Snackbar.css";

const SnackbarContext = createContext();

export function SnackbarProvider({ children }) {
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(false);

  const showSnackbar = (msg) => {
    setMessage(msg);
    setVisible(true);
    setTimeout(() => setVisible(false), 3000);
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      {visible && <div className="snackbar">{message}</div>}
    </SnackbarContext.Provider>
  );
}

export const useSnackbar = () => useContext(SnackbarContext);
