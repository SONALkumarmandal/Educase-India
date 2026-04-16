import { useState } from "react";
import FloatingInput from "./FloatingInput";

export default function CreateAccount({ onAccountCreated }) {
  const [form, setForm] = useState({
    fullName: "Marry Doe",
    phone: "Marry Doe",
    email: "Marry Doe",
    password: "Marry Doe",
    company: "Marry Doe",
    isAgency: "yes",
  });

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  return (
    <div className="flex flex-col h-full bg-white px-6 pt-8 pb-6 overflow-y-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        Create your<br />PopX account
      </h1>

      <div className="flex flex-col gap-4">
        <FloatingInput label="Full Name" required value={form.fullName} onChange={set("fullName")} />
        <FloatingInput label="Phone number" required value={form.phone} onChange={set("phone")} />
        <FloatingInput label="Email address" type="email" required value={form.email} onChange={set("email")} />
        <FloatingInput label="Password" type="password" required value={form.password} onChange={set("password")} />
        <FloatingInput label="Company name" value={form.company} onChange={set("company")} />
      </div>

      <div className="mt-5">
        <p className="text-sm text-gray-700 mb-3">
          Are you an Agency?<span style={{ color: "#7C3AED" }}>*</span>
        </p>
        <div className="flex gap-6">
          {["yes", "no"].map((opt) => (
            <label key={opt} className="flex items-center gap-2 cursor-pointer">
              <div
                className="w-5 h-5 rounded-full border-2 flex items-center justify-center"
                style={{
                  borderColor: "#7C3AED",
                  background: form.isAgency === opt ? "#7C3AED" : "white",
                }}
                onClick={() => setForm({ ...form, isAgency: opt })}
              >
                {form.isAgency === opt && (
                  <div className="w-2 h-2 rounded-full bg-white" />
                )}
              </div>
              <span className="text-sm text-gray-700 capitalize">{opt}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mt-auto pt-6">
        <button
          onClick={onAccountCreated}
          className="w-full py-3 rounded-md text-white text-sm font-semibold hover: cursor-pointer" 
          style={{ background: "#7C3AED" }}
        >
          Create Account
        </button>
      </div>
    </div>
  );
}
