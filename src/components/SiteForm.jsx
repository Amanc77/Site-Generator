import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Code2 } from "lucide-react";

const SiteForm = ({ formData, onFormChange, onGenerate }) => {
  const handleChange = (field, value) => {
    onFormChange({ ...formData, [field]: value });
  };

  return (
    <Card className="p-6 shadow-lg border-border/50">
      <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
        Profile Details
      </h2>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="Your name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="intro">Introduction</Label>
          <Textarea
            id="intro"
            value={formData.intro}
            onChange={(e) => handleChange("intro", e.target.value)}
            placeholder="Tell us about yourself"
            rows={3}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="your@email.com"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="imageUrl">Profile Image URL</Label>
          <Input
            id="imageUrl"
            value={formData.imageUrl}
            onChange={(e) => handleChange("imageUrl", e.target.value)}
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div className="pt-4 border-t border-border">
          <h3 className="font-medium mb-3">Social Links</h3>

          <div className="space-y-3">
            <div className="space-y-2">
              <Label htmlFor="twitter">Twitter</Label>
              <Input
                id="twitter"
                value={formData.twitter}
                onChange={(e) => handleChange("twitter", e.target.value)}
                placeholder="https://twitter.com/username"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="github">GitHub</Label>
              <Input
                id="github"
                value={formData.github}
                onChange={(e) => handleChange("github", e.target.value)}
                placeholder="https://github.com/username"
              />
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-border">
          <h3 className="font-medium mb-3">Template</h3>
          <RadioGroup
            value={formData.template}
            onValueChange={(value) => handleChange("template", value)}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="A" id="templateA" />
              <Label htmlFor="templateA" className="cursor-pointer">
                Template A - Centered
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="B" id="templateB" />
              <Label htmlFor="templateB" className="cursor-pointer">
                Template B - Split
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="C" id="templateC" />
              <Label htmlFor="templateC" className="cursor-pointer">
                Template C - Hero
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="D" id="templateD" />
              <Label htmlFor="templateD" className="cursor-pointer">
                Template D - Card
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="pt-4 border-t border-border space-y-3">
          <h3 className="font-medium mb-3">Settings</h3>

          <div className="flex items-center justify-between">
            <Label htmlFor="profilePic" className="cursor-pointer">
              Enable Profile Picture
            </Label>
            <Switch
              id="profilePic"
              checked={formData.enableProfilePicture}
              onCheckedChange={(checked) =>
                handleChange("enableProfilePicture", checked)
              }
            />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="socialLinks" className="cursor-pointer">
              Display Social Links
            </Label>
            <Switch
              id="socialLinks"
              checked={formData.displaySocialLinks}
              onCheckedChange={(checked) =>
                handleChange("displaySocialLinks", checked)
              }
            />
          </div>
        </div>

        <div className="pt-4 border-t border-border space-y-3">
          <h3 className="font-medium mb-3">Theme</h3>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <Label htmlFor="primaryColor">Primary Color</Label>
              <div className="flex gap-2">
                <Input
                  id="primaryColor"
                  type="color"
                  value={formData.primaryColor}
                  onChange={(e) => handleChange("primaryColor", e.target.value)}
                  className="w-16 h-10 p-1 cursor-pointer"
                />
                <Input
                  value={formData.primaryColor}
                  onChange={(e) => handleChange("primaryColor", e.target.value)}
                  className="flex-1"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="secondaryColor">Secondary Color</Label>
              <div className="flex gap-2">
                <Input
                  id="secondaryColor"
                  type="color"
                  value={formData.secondaryColor}
                  onChange={(e) =>
                    handleChange("secondaryColor", e.target.value)
                  }
                  className="w-16 h-10 p-1 cursor-pointer"
                />
                <Input
                  value={formData.secondaryColor}
                  onChange={(e) =>
                    handleChange("secondaryColor", e.target.value)
                  }
                  className="flex-1"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="fontFamily">Font Family</Label>
            <select
              id="fontFamily"
              value={formData.fontFamily}
              onChange={(e) => handleChange("fontFamily", e.target.value)}
              className="w-full px-3 py-2 border border-input rounded-md bg-background"
            >
              <option value="Inter">Inter</option>
              <option value="Poppins">Poppins</option>
              <option value="Roboto">Roboto</option>
              <option value="Playfair Display">Playfair Display</option>
              <option value="Montserrat">Montserrat</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="backgroundColor">Background Color</Label>
            <div className="flex gap-2">
              <Input
                id="backgroundColor"
                type="color"
                value={formData.backgroundColor}
                onChange={(e) =>
                  handleChange("backgroundColor", e.target.value)
                }
                className="w-16 h-10 p-1 cursor-pointer"
              />
              <Input
                value={formData.backgroundColor}
                onChange={(e) =>
                  handleChange("backgroundColor", e.target.value)
                }
                className="flex-1"
              />
            </div>
          </div>
        </div>

        {/* Generate Button */}
        <Button onClick={onGenerate} className="w-full mt-6" size="lg">
          <Code2 className="w-4 h-4 mr-2" />
          Generate Code
        </Button>
      </div>
    </Card>
  );
};

export default SiteForm;
