import { useState } from "react";

const Home = () => {
  //defalt data
  const [formData, setFormData] = useState({
    name: "Aman kumar",
    intro:
      "Full-stack developer passionate about creating beautiful web experiences",
    twitter: "https://twitter.com/amanc77",
    github: "https://github.com/Amanc77",
    email: "amankrc7@gmail.oom",
    imageUrl: "https://randomuser.me/api/portraits/men/67.jpg",
    enableProfilePicture: true,
    displaySocialLinks: true,
    primaryColor: "#8b5cf6",
    secondaryColor: "#3b82f6",
    fontFamily: "Inter",
    backgroundColor: "#ffffff",
  });

  const [generatedCode, setGeneratedCode] = useState("");

  // Handle all input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle generate button click
  const handleGenerate = () => {
    const code = "";
    setGeneratedCode(code);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="mb-6 p-4 bg-white rounded shadow">
        <h1 className="text-2xl font-bold text-gray-800">Site Generator</h1>
        <p className="text-gray-600 text-sm">
          Create your personal profile page
        </p>
      </header>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded shadow space-y-4">
          <h2 className="font-semibold text-lg">Profile Information</h2>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full border p-2 rounded"
          />
          <textarea
            name="intro"
            value={formData.intro}
            onChange={handleChange}
            placeholder="Short Intro"
            className="w-full border p-2 rounded"
          />
          <input
            name="twitter"
            value={formData.twitter}
            onChange={handleChange}
            placeholder="Twitter URL"
            className="w-full border p-2 rounded"
          />
          <input
            name="github"
            value={formData.github}
            onChange={handleChange}
            placeholder="GitHub URL"
            className="w-full border p-2 rounded"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full border p-2 rounded"
          />
          <input
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            placeholder="Image URL"
            className="w-full border p-2 rounded"
          />
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="enableProfilePicture"
              checked={formData.enableProfilePicture}
              onChange={handleChange}
            />
            Show Profile Picture
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="displaySocialLinks"
              checked={formData.displaySocialLinks}
              onChange={handleChange}
            />
            Show Social Links
          </label>
          <button
            onClick={handleGenerate}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Generate Code
          </button>
        </div>

        <div className="bg-white p-4 rounded shadow text-center">
          {formData.enableProfilePicture && (
            <img
              src={formData.imageUrl}
              alt={formData.name}
              className="w-24 h-24 mx-auto rounded-full object-cover mb-2"
            />
          )}
          <h2
            className="text-xl font-bold"
            style={{ color: formData.primaryColor }}
          >
            {formData.name}
          </h2>
          <p className="text-gray-600">{formData.intro}</p>

          {formData.displaySocialLinks && (
            <div className="flex justify-center gap-4 mt-2">
              <a
                href={formData.twitter}
                target="_blank"
                className="text-blue-500"
              >
                Twitter
              </a>
              <a
                href={formData.github}
                target="_blank"
                className="text-blue-500"
              >
                GitHub
              </a>
              <a href={`mailto:${formData.email}`} className="text-blue-500">
                Email
              </a>
            </div>
          )}

          {generatedCode && (
            <pre className="bg-black text-green-400 p-2 rounded mt-4 overflow-auto text-sm">
              {generatedCode}
            </pre>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
