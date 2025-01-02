const Security = () => {

  return (
    <div className="p-2 lg:p-4">
      <h2 className="text-2xl font-semibold text-gray-800">Security Setting</h2>
      <p className="text-[#bfbfbf]">
        These settings are helps you keep your account secure.
      </p>
      <div className="border border-[#afafaf] mt-10">
        <div className="p-6 border-b border-[#afafaf] flex items-center gap-4">
          <div>
            <p className="text-lg font-semibold text-gray-800">
              Save My Activity Logs
            </p>
            <span className="text-gray-600">
              You can save your all activity logs including unusual activity
              detected.
            </span>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <input type="checkbox" className="toggle" defaultChecked />
            </label>
          </div>
        </div>
        <div className="p-6">
          <h1 className="text-lg mb-3 font-semibold text-gray-800">
            Change Password
          </h1>
          <p className="text-gray-600 mb-5">
            Set a unique password to protect your account.
          </p>
          <div className="flex items-center gap-3">
            <p className="text-gray-600">Last Changes: 22 Sept 2024</p>
            <button className="bg-[#2e2532] text-white px-4 py-2 rounded-md">
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
