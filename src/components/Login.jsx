import { useState } from "react";
import FloatingInput from "./FloatingInput";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col h-full bg-gray-100 px-6 pt-10">
      <h1 className="text-2xl font-bold text-gray-900 leading-tight mb-2">
        Signin to your<br />PopX account
      </h1>
      <p className="text-sm text-gray-500 mb-8">
        Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
      </p>

      <div className="flex flex-col gap-4">
        <FloatingInput
          label="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FloatingInput
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        onClick={onLogin}
        className="w-full py-3 rounded-md text-white text-sm font-semibold mt-6"
        style={{ background: password && email ? "#7C3AED" : "#D1D5DB" }}
      >
        Login
      </button>
    </div>
  );
}
