export default function Account() {
  return (
    <div className="flex flex-col h-full bg-gray-100">
      <div className="bg-white px-5 py-4 border-b border-gray-200">
        <h1 className="text-base font-semibold text-gray-900">Account Settings</h1>
      </div>

      <div className="bg-white px-5 py-5 flex items-start gap-4 border-b border-dashed border-gray-300">
        <div className="relative shrink-0">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="avatar"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div
            className="absolute bottom-0 right-0 w-5 h-5 rounded-full flex items-center justify-center"
            style={{ background: "#7C3AED" }}
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
              <path d="M12 15.2a3.2 3.2 0 100-6.4 3.2 3.2 0 000 6.4z" />
              <path d="M9 3L7.17 5H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V7a2 2 0 00-2-2h-3.17L15 3H9zm3 15a5 5 0 110-10 5 5 0 010 10z" />
            </svg>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">Marry Doe</p>
          <p className="text-xs text-gray-500 mt-0.5">Marry@Gmail.Com</p>
        </div>
      </div>

      <div className="bg-white px-5 py-5 border-b border-dashed border-gray-300">
        <p className="text-sm text-gray-700 leading-relaxed">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
    </div>
  );
}
