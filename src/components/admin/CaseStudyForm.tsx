import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, Plus, Trash2, HelpCircle } from "lucide-react";

type Metric = { value: string; label: string };
type TechStack = { category: string; items: string; icon: string };

export type CaseStudyFormData = {
  client: string;
  industry: string;
  accent: string;
  image: string;
  headline: string;
  body: string;
  related: string;
  projectName: string;
  objective: string;
  solutions: string[];
  challenges: string[];
  metrics: Metric[];
  keyBenefits: Metric[];
  results: string[];
  techStack: TechStack[];
  conclusion: string;
};

const DEFAULT_FORM: CaseStudyFormData = {
  client: "",
  industry: "",
  accent: "var(--brand-blue)",
  image: "",
  headline: "",
  body: "",
  related: "",
  projectName: "",
  objective: "",
  solutions: [""],
  challenges: [""],
  metrics: [{ value: "", label: "" }],
  keyBenefits: [{ value: "", label: "" }],
  results: [""],
  techStack: [{ category: "", items: "", icon: "ti-code" }],
  conclusion: "",
};

export function CaseStudyForm({
  initialData,
  onSubmit,
  loading,
  title,
}: {
  initialData?: any;
  onSubmit: (data: CaseStudyFormData) => Promise<void>;
  loading: boolean;
  title: string;
}) {
  const [formData, setFormData] = useState<CaseStudyFormData>({
    ...DEFAULT_FORM,
    ...initialData,
    solutions: initialData?.solutions || [""],
    challenges: initialData?.challenges || [""],
    metrics: initialData?.metrics?.map((m: any) => ({
      value: m.value || m.v || "",
      label: m.label || m.l || "",
    })) || [{ value: "", label: "" }],
    keyBenefits: initialData?.keyBenefits || [{ value: "", label: "" }],
    results: initialData?.results || [""],
    techStack: initialData?.techStack || [{ category: "", items: "", icon: "ti-code" }],
  });

  const [activeTab, setActiveTab] = useState<"basic" | "metrics" | "lists" | "tech">("basic");

  function handleFieldChange(field: keyof CaseStudyFormData, value: any) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  // Dynamic Array Handlers
  function handleArrayChange(
    field: "solutions" | "challenges" | "results",
    index: number,
    value: string,
  ) {
    setFormData((prev) => {
      const arr = [...prev[field]];
      arr[index] = value;
      return { ...prev, [field]: arr };
    });
  }

  function addArrayItem(field: "solutions" | "challenges" | "results") {
    setFormData((prev) => ({ ...prev, [field]: [...prev[field], ""] }));
  }

  function removeArrayItem(field: "solutions" | "challenges" | "results", index: number) {
    setFormData((prev) => {
      const arr = prev[field].filter((_, idx) => idx !== index);
      return { ...prev, [field]: arr.length ? arr : [""] };
    });
  }

  // Metrics Array Handlers
  function handleMetricChange(
    field: "metrics" | "keyBenefits",
    index: number,
    key: keyof Metric,
    value: string,
  ) {
    setFormData((prev) => {
      const arr = [...prev[field]];
      arr[index] = { ...arr[index], [key]: value };
      return { ...prev, [field]: arr };
    });
  }

  function addMetricItem(field: "metrics" | "keyBenefits") {
    setFormData((prev) => ({ ...prev, [field]: [...prev[field], { value: "", label: "" }] }));
  }

  function removeMetricItem(field: "metrics" | "keyBenefits", index: number) {
    setFormData((prev) => {
      const arr = prev[field].filter((_, idx) => idx !== index);
      return { ...prev, [field]: arr.length ? arr : [{ value: "", label: "" }] };
    });
  }

  // Tech Stack Array Handlers
  function handleTechChange(index: number, key: keyof TechStack, value: string) {
    setFormData((prev) => {
      const arr = [...prev.techStack];
      arr[index] = { ...arr[index], [key]: value };
      return { ...prev, techStack: arr };
    });
  }

  function addTechItem() {
    setFormData((prev) => ({
      ...prev,
      techStack: [...prev.techStack, { category: "", items: "", icon: "ti-code" }],
    }));
  }

  function removeTechItem(index: number) {
    setFormData((prev) => {
      const arr = prev.techStack.filter((_, idx) => idx !== index);
      return {
        ...prev,
        techStack: arr.length ? arr : [{ category: "", items: "", icon: "ti-code" }],
      };
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Filter out empty entries in arrays
    const cleanedData: CaseStudyFormData = {
      ...formData,
      solutions: formData.solutions.filter((s) => s.trim() !== ""),
      challenges: formData.challenges.filter((c) => c.trim() !== ""),
      results: formData.results.filter((r) => r.trim() !== ""),
      metrics: formData.metrics.filter((m) => m.value.trim() !== "" || m.label.trim() !== ""),
      keyBenefits: formData.keyBenefits.filter(
        (b) => b.value.trim() !== "" || b.label.trim() !== "",
      ),
      techStack: formData.techStack.filter(
        (t) => t.category.trim() !== "" || t.items.trim() !== "",
      ),
    };
    await onSubmit(cleanedData);
  }

  const tabClass = (tab: typeof activeTab) =>
    `px-5 py-3 text-sm font-semibold rounded-xl transition-all cursor-pointer ${
      activeTab === tab
        ? "bg-foreground text-background shadow-soft"
        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
    }`;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Link
          to="/admin"
          className="p-2 border border-border bg-surface hover:bg-secondary rounded-xl text-muted-foreground hover:text-foreground transition-all"
        >
          <ArrowLeft className="h-4.5 w-4.5" />
        </Link>
        <h1 className="text-3xl font-display font-bold">{title}</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-1.5 p-1.5 bg-surface-muted/50 rounded-2xl border border-border w-max">
          <button type="button" onClick={() => setActiveTab("basic")} className={tabClass("basic")}>
            Basic Info
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("metrics")}
            className={tabClass("metrics")}
          >
            Metrics & Benefits
          </button>
          <button type="button" onClick={() => setActiveTab("lists")} className={tabClass("lists")}>
            Solutions & Challenges
          </button>
          <button type="button" onClick={() => setActiveTab("tech")} className={tabClass("tech")}>
            Tech Stack
          </button>
        </div>

        {/* Tab Content */}
        <div className="glass-card border border-border bg-surface/50 rounded-3xl p-6 sm:p-8 space-y-6">
          {/* TAB 1: BASIC INFORMATION */}
          {activeTab === "basic" && (
            <div className="space-y-6">
              <h3 className="text-lg font-bold border-b border-border pb-3">Basic Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Client Name*</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Bridgestone"
                    value={formData.client}
                    onChange={(e) => handleFieldChange("client", e.target.value)}
                    className="w-full px-4 py-3 bg-surface border border-input rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Project Title*</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tire Inspection & Uniformity"
                    value={formData.projectName}
                    onChange={(e) => handleFieldChange("projectName", e.target.value)}
                    className="w-full px-4 py-3 bg-surface border border-input rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">
                    Industry / Sector*
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tire Manufacturing"
                    value={formData.industry}
                    onChange={(e) => handleFieldChange("industry", e.target.value)}
                    className="w-full px-4 py-3 bg-surface border border-input rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">
                    Accent Color (CSS Variable or Hex)*
                  </label>
                  <select
                    value={formData.accent}
                    onChange={(e) => handleFieldChange("accent", e.target.value)}
                    className="w-full px-4 py-3 bg-surface border border-input rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring"
                  >
                    <option value="var(--brand-blue)">Brand Blue</option>
                    <option value="var(--brand-green)">Brand Green</option>
                    <option value="var(--brand-orange)">Brand Orange</option>
                    <option value="var(--brand-red)">Brand Red</option>
                    <option value="var(--brand-yellow)">Brand Yellow</option>
                    <option value="var(--brand-purple)">Brand Purple</option>
                  </select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-semibold text-foreground">Image Path / URL</label>
                  <input
                    type="text"
                    placeholder="e.g. https://res.cloudinary.com/.../case-study.png"
                    value={formData.image}
                    onChange={(e) => handleFieldChange("image", e.target.value)}
                    className="w-full px-4 py-3 bg-surface border border-input rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring font-mono"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-semibold text-foreground">
                    Related Service URL Path
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. /services/software-development"
                    value={formData.related}
                    onChange={(e) => handleFieldChange("related", e.target.value)}
                    className="w-full px-4 py-3 bg-surface border border-input rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring font-mono"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-semibold text-foreground">
                    Card Highlight Summary (Headline)*
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Centralized Safety Dashboard System digitized 90% of safety observations."
                    value={formData.headline}
                    onChange={(e) => handleFieldChange("headline", e.target.value)}
                    className="w-full px-4 py-3 bg-surface border border-input rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-semibold text-foreground">
                    Card Brief Description (Body)*
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Provide a general paragraph summarizing the project..."
                    value={formData.body}
                    onChange={(e) => handleFieldChange("body", e.target.value)}
                    className="w-full px-4 py-3 bg-surface border border-input rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring resize-none"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-semibold text-foreground">
                    Full Project Objective*
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe the challenges and requirements that prompted the project..."
                    value={formData.objective}
                    onChange={(e) => handleFieldChange("objective", e.target.value)}
                    className="w-full px-4 py-3 bg-surface border border-input rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring resize-none"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-semibold text-foreground">Conclusion</label>
                  <textarea
                    rows={4}
                    placeholder="Wrap up the project success summary..."
                    value={formData.conclusion}
                    onChange={(e) => handleFieldChange("conclusion", e.target.value)}
                    className="w-full px-4 py-3 bg-surface border border-input rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring resize-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: METRICS & BENEFITS */}
          {activeTab === "metrics" && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold border-b border-border pb-3">
                  Card Summary Metrics
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Exactly 3 metrics displayed on the case study card.
                </p>
                <div className="mt-4 space-y-4">
                  {formData.metrics.map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-center">
                      <input
                        type="text"
                        placeholder="Value (e.g. 70%)"
                        value={item.value}
                        onChange={(e) =>
                          handleMetricChange("metrics", idx, "value", e.target.value)
                        }
                        className="w-1/3 px-4 py-3 bg-surface border border-input rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring"
                      />
                      <input
                        type="text"
                        placeholder="Label (e.g. reduction in manual workload)"
                        value={item.label}
                        onChange={(e) =>
                          handleMetricChange("metrics", idx, "label", e.target.value)
                        }
                        className="flex-1 px-4 py-3 bg-surface border border-input rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring"
                      />
                      <button
                        type="button"
                        onClick={() => removeMetricItem("metrics", idx)}
                        className="p-3 bg-destructive/10 text-destructive hover:bg-destructive hover:text-white rounded-xl transition-all cursor-pointer"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addMetricItem("metrics")}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold bg-secondary px-3.5 py-2 rounded-xl text-foreground hover:opacity-90"
                  >
                    <Plus className="h-3.5 w-3.5" /> Add Metric
                  </button>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <h3 className="text-lg font-bold">Key Benefits List</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Benefits displayed on the detail page.
                </p>
                <div className="mt-4 space-y-4">
                  {formData.keyBenefits.map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-center">
                      <input
                        type="text"
                        placeholder="Value (e.g. 91%)"
                        value={item.value}
                        onChange={(e) =>
                          handleMetricChange("keyBenefits", idx, "value", e.target.value)
                        }
                        className="w-1/3 px-4 py-3 bg-surface border border-input rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring"
                      />
                      <input
                        type="text"
                        placeholder="Description"
                        value={item.label}
                        onChange={(e) =>
                          handleMetricChange("keyBenefits", idx, "label", e.target.value)
                        }
                        className="flex-1 px-4 py-3 bg-surface border border-input rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring"
                      />
                      <button
                        type="button"
                        onClick={() => removeMetricItem("keyBenefits", idx)}
                        className="p-3 bg-destructive/10 text-destructive hover:bg-destructive hover:text-white rounded-xl transition-all cursor-pointer"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addMetricItem("keyBenefits")}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold bg-secondary px-3.5 py-2 rounded-xl text-foreground hover:opacity-90"
                  >
                    <Plus className="h-3.5 w-3.5" /> Add Benefit
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: SOLUTIONS, CHALLENGES, AND RESULTS */}
          {activeTab === "lists" && (
            <div className="space-y-8">
              {/* Solutions */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold border-b border-border pb-3">
                  Solutions Implemented
                </h3>
                <div className="space-y-3">
                  {formData.solutions.map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-center">
                      <span className="text-sm font-semibold text-muted-foreground w-6">
                        #{idx + 1}
                      </span>
                      <input
                        type="text"
                        required
                        placeholder="Provide details about the solution implemented..."
                        value={item}
                        onChange={(e) => handleArrayChange("solutions", idx, e.target.value)}
                        className="flex-1 px-4 py-3 bg-surface border border-input rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring"
                      />
                      <button
                        type="button"
                        onClick={() => removeArrayItem("solutions", idx)}
                        className="p-3 bg-destructive/10 text-destructive hover:bg-destructive hover:text-white rounded-xl transition-all cursor-pointer"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addArrayItem("solutions")}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold bg-secondary px-3.5 py-2 rounded-xl text-foreground hover:opacity-90"
                  >
                    <Plus className="h-3.5 w-3.5" /> Add Solution
                  </button>
                </div>
              </div>

              {/* Challenges */}
              <div className="space-y-4 pt-6 border-t border-border">
                <h3 className="text-lg font-bold border-b border-border pb-3">Key Challenges</h3>
                <div className="space-y-3">
                  {formData.challenges.map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-center">
                      <span className="text-sm font-semibold text-muted-foreground w-6">
                        #{idx + 1}
                      </span>
                      <input
                        type="text"
                        required
                        placeholder="Provide details about a key challenge faced..."
                        value={item}
                        onChange={(e) => handleArrayChange("challenges", idx, e.target.value)}
                        className="flex-1 px-4 py-3 bg-surface border border-input rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring"
                      />
                      <button
                        type="button"
                        onClick={() => removeArrayItem("challenges", idx)}
                        className="p-3 bg-destructive/10 text-destructive hover:bg-destructive hover:text-white rounded-xl transition-all cursor-pointer"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addArrayItem("challenges")}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold bg-secondary px-3.5 py-2 rounded-xl text-foreground hover:opacity-90"
                  >
                    <Plus className="h-3.5 w-3.5" /> Add Challenge
                  </button>
                </div>
              </div>

              {/* Results */}
              <div className="space-y-4 pt-6 border-t border-border">
                <h3 className="text-lg font-bold border-b border-border pb-3">Results & ROI</h3>
                <div className="space-y-3">
                  {formData.results.map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-center">
                      <span className="text-sm font-semibold text-muted-foreground w-6">
                        #{idx + 1}
                      </span>
                      <input
                        type="text"
                        required
                        placeholder="Provide details about the business outcomes achieved..."
                        value={item}
                        onChange={(e) => handleArrayChange("results", idx, e.target.value)}
                        className="flex-1 px-4 py-3 bg-surface border border-input rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring"
                      />
                      <button
                        type="button"
                        onClick={() => removeArrayItem("results", idx)}
                        className="p-3 bg-destructive/10 text-destructive hover:bg-destructive hover:text-white rounded-xl transition-all cursor-pointer"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addArrayItem("results")}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold bg-secondary px-3.5 py-2 rounded-xl text-foreground hover:opacity-90"
                  >
                    <Plus className="h-3.5 w-3.5" /> Add Result
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: TECHNOLOGY STACK */}
          {activeTab === "tech" && (
            <div className="space-y-6">
              <h3 className="text-lg font-bold border-b border-border pb-3">Technology Stack</h3>
              <div className="space-y-4">
                {formData.techStack.map((item, idx) => (
                  <div
                    key={idx}
                    className="grid sm:grid-cols-3 gap-4 items-center p-4 rounded-2xl border border-border bg-surface-muted/30"
                  >
                    <div className="space-y-1">
                      <label className="text-xs text-muted-foreground">
                        Category (e.g. Frameworks)
                      </label>
                      <input
                        type="text"
                        placeholder="Category"
                        value={item.category}
                        onChange={(e) => handleTechChange(idx, "category", e.target.value)}
                        className="w-full px-4 py-2.5 bg-surface border border-input rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs text-muted-foreground">
                        Items (e.g. React.js, Node.js)
                      </label>
                      <input
                        type="text"
                        placeholder="Items"
                        value={item.items}
                        onChange={(e) => handleTechChange(idx, "items", e.target.value)}
                        className="w-full px-4 py-2.5 bg-surface border border-input rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring"
                      />
                    </div>
                    <div className="flex items-end gap-3 justify-between">
                      <div className="space-y-1 flex-1">
                        <label className="text-xs text-muted-foreground">Icon Identifier</label>
                        <select
                          value={item.icon}
                          onChange={(e) => handleTechChange(idx, "icon", e.target.value)}
                          className="w-full px-4 py-2.5 bg-surface border border-input rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring"
                        >
                          <option value="ti-code">Code</option>
                          <option value="ti-database">Database</option>
                          <option value="ti-layout">Layout</option>
                          <option value="ti-server">Server</option>
                          <option value="ti-cloud">Cloud</option>
                          <option value="ti-plug">Plug</option>
                          <option value="ti-brain">Brain</option>
                          <option value="ti-cube">Cube</option>
                        </select>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeTechItem(idx)}
                        className="p-3 bg-destructive/10 text-destructive hover:bg-destructive hover:text-white rounded-xl transition-all cursor-pointer shrink-0 mt-6"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addTechItem}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold bg-secondary px-3.5 py-2 rounded-xl text-foreground hover:opacity-90 animate-fade-in"
                >
                  <Plus className="h-3.5 w-3.5" /> Add Technology
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Submit Actions */}
        <div className="flex items-center justify-end gap-3">
          <Link
            to="/admin"
            className="px-6 py-3.5 border border-border bg-surface text-foreground rounded-2xl text-sm font-semibold hover:bg-secondary transition-all"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3.5 bg-foreground text-background rounded-2xl text-sm font-semibold hover:opacity-90 shadow-soft transition-all disabled:opacity-50 cursor-pointer"
          >
            {loading ? "Saving..." : "Save Case Study"}
          </button>
        </div>
      </form>
    </div>
  );
}
