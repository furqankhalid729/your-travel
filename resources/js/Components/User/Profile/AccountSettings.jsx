import { useState, useEffect } from "react";
import { usePage, router, Link } from "@inertiajs/react";

export default function AccountSettings() {
  const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
  const { props } = usePage();
  const { auth } = props;
  const user = auth.user;

  const [formData, setFormData] = useState({
    name: user.name || "",
    email: user.email || "",
    password: "",
    profile_url: null,
  });

  const [imagePreview, setImagePreview] = useState(user.profile_url || null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, profile_url: file });
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("password", formData.password);

      data.append("profile_url", formData.profile_url);
    
    console.log(formData.profile_url)
    router.post("/account/update", data);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Account Settings
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
          {/* Name Field */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email Field (Read-Only) */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              readOnly
              className="w-full px-3 py-2 border rounded-lg bg-gray-100 text-gray-500 cursor-not-allowed"
            />
          </div>

          {/* Profile Image Upload */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">Profile Photo</label>
            {imagePreview && (
              <div className="mb-2">
                <img
                  src={imagePreview}
                  alt="Profile Preview"
                  className="w-24 h-24 rounded-full object-cover"
                />
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">New Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition duration-300"
          >
            Update Account
          </button>
        </form>

        {/* Logout Button */}
        <div className="my-4 w-full">
          <form method="POST" action={route('logout')}>
            <input type="hidden" name="_token" value={csrfToken} />
            <button
              type="submit"
              className="w-full mt-3 bg-red-500 text-white font-medium py-2 rounded-lg transition duration-300"
            >
              Logout
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
