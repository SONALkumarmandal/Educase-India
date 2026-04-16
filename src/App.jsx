import { useState } from "react";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import Account from "./components/Account";

export default function App() {
  const [screen, setScreen] = useState("welcome");

  const screens = {
    welcome: (
      <Welcome
        onCreateAccount={() => setScreen("register")}
        onLogin={() => setScreen("login")}
      />
    ),
    login: <Login onLogin={() => setScreen("settings")} />,
    register: <CreateAccount onAccountCreated={() => setScreen("settings")} />,
    settings: <Account />,
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4">
      <div
        className="relative flex flex-col overflow-hidden shadow-2xl rounded-3xl"
        style={{ width: 375, height: 720, background: "#F9FAFB" }}
      >
        <div className="flex-1 overflow-hidden">
          {screens[screen]}
        </div>
      </div>
    </div>
  );
}
