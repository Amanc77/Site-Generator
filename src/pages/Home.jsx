import { useState } from "react";
import SiteForm from "../components/SiteForm";
import TemplatePreview from "../components/TemplatePreview";
import CodeOutput from "../components/CodeOutput";
import { generateStaticCode } from "../utils/generateStaticCode";

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
    template: "A",
    enableProfilePicture: true,
    displaySocialLinks: true,
    primaryColor: "#8b5cf6",
    secondaryColor: "#3b82f6",
    fontFamily: "Inter",
    backgroundColor: "#ffffff",
  });

  const [generatedCode, setGeneratedCode] = useState("");

  const handleFormChange = (newData) => {
    setFormData(newData);
  };

  const handleGenerate = () => {
    const code = generateStaticCode(formData);
    setGeneratedCode(code);
  };

  return (
    <div className="min-h-screen bg-gray-100 from-background via-background to-secondary">
      <header className=" p-4 bg-white rounded shadow">
        <h1 className="text-2xl font-bold text-gray-800">Site Generator</h1>
        <p className="text-gray-600 text-sm">
          Create your personal profile page
        </p>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <SiteForm
              formData={formData}
              onFormChange={handleFormChange}
              onGenerate={handleGenerate}
            />
          </div>

          <div className="space-y-6">
            <TemplatePreview formData={formData} />
            {generatedCode && <CodeOutput code={generatedCode} />}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
