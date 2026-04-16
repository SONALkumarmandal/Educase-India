export default function FloatingInput({ label, type = "text", value, onChange, required }) {
  return (
    <div className="relative border border-gray-300 rounded-md px-3 pt-4 pb-2 bg-white">
      <span
        className="absolute top-1 left-3 text-xs font-semibold"
        style={{ color: "#7C3AED" }}
      >
        {label}
        {required && <span style={{ color: "#7C3AED" }}>*</span>}
      </span>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full text-sm text-gray-700 outline-none bg-transparent mt-1 placeholder-gray-400"
        placeholder={label.replace("*", "")}
      />
    </div>
  );
}
