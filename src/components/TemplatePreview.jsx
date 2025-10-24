import { Card } from "../components/ui/card";
import TemplateA from "../components/templates/TemplateA";
import TemplateB from "../components/templates/TemplateB";
import { Eye } from "lucide-react";

const TemplatePreview = ({ formData }) => {
  return (
    <Card className="p-6 shadow-lg border-border/50">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <Eye className="w-5 h-5 text-primary" />
        Live Preview
      </h2>

      <div className="border-2 border-dashed border-border rounded-lg overflow-hidden bg-card">
        <div className="transform scale-90 origin-top">
          {formData.template === "A" ? (
            <TemplateA data={formData} />
          ) : (
            <TemplateB data={formData} />
          )}
        </div>
      </div>
    </Card>
  );
};

export default TemplatePreview;
