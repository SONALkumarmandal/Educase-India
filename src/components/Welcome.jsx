export default function Welcome({ onCreateAccount, onLogin }) {
  return (
    <div className="flex flex-col h-full bg-white justify-end px-6 pb-10">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">
        Welcome to PopX
      </h1>
      <p className="text-sm text-gray-500 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>
      <button
        onClick={onCreateAccount}
        className="w-full py-3 rounded-md text-white text-sm font-semibold mb-3 hover: cursor-pointer"
        style={{ background: "#7C3AED" }}
      >
        Create Account
      </button>
      <button
        onClick={onLogin}
        className="w-full py-3 rounded-md text-sm font-semibold hover: cursor-pointer"
        style={{ background: "#C4B5FD", color: "#1F2937" }}
      >
        Already Registered? Login
      </button>
    </div>
  );
}
