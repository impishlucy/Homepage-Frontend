"use client";

import { useState, useEffect } from "react";
import type { AllData, Project, ImprintData } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toast";
import { useRouter } from "next/navigation";
import { Loader2, Plus, Trash2, X } from "lucide-react";

type SaveSection = "home" | "about" | "contact" | "imprint" | "projects";

const inputCls = "w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring";

function Field({ label, value, onChange, multiline = false }: {
  label: string;
  value: string | number | undefined;
  onChange: (v: string) => void;
  multiline?: boolean;
}) {
  return (
    <label className="block text-left space-y-1">
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
      {multiline ? (
        <textarea className={`${inputCls} min-h-[90px] resize-y`} value={value ?? ""} onChange={(e) => onChange(e.target.value)} />
      ) : (
        <input className={inputCls} value={value ?? ""} onChange={(e) => onChange(e.target.value)} />
      )}
    </label>
  );
}

function SaveButton({ saving, section, onClick }: {
  saving: SaveSection | null;
  section: SaveSection;
  onClick: () => void;
}) {
  return (
    <Button size="sm" onClick={onClick} disabled={saving !== null}>
      {saving === section ? <Loader2 className="h-4 w-4 animate-spin" /> : `Save ${section}`}
    </Button>
  );
}

export default function DashboardPage() {
  const router = useRouter();
  const [data, setData] = useState<AllData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [saving, setSaving] = useState<SaveSection | null>(null);
  const [showNewProject, setShowNewProject] = useState(false);
  const [newProject, setNewProject] = useState({ title: "", description: "", imageUrl: "", projectUrl: "", technologies: "" });

  const hostname = typeof window !== "undefined" ? window.location.hostname : "";
  const apiBaseUrl = `https://api.${hostname}`;

  async function authFetch(url: string, options: RequestInit = {}) {
    const token = localStorage.getItem("admin_jwt") ?? "";
    const res = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        ...(options.headers ?? {}),
      },
    });

    const rotated = res.headers.get("X-New-Token");
    if (rotated) localStorage.setItem("admin_jwt", rotated);

    if (res.status === 401) {
      localStorage.removeItem("admin_jwt");
      router.replace("/login");
      throw new Error("Unauthorized");
    }
    return res;
  }

  async function loadDashboard() {
    const token = localStorage.getItem("admin_jwt");
    if (!token) {
      router.replace("/login");
      return;
    }
    try {
      const res = await authFetch(`${apiBaseUrl}/admin/dashboard`);
      if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
      const text = await res.json();
      const jsonData = text ? text : null;
      setData(jsonData);
    } catch {
      localStorage.removeItem("admin_jwt");
      router.replace("/login");
    } finally {
      setIsLoading(false);
    }
  }

  async function refresh() {
    const res = await authFetch(`${apiBaseUrl}/admin/dashboard`);
    if (!res.ok) throw new Error(`Refresh failed: ${res.status}`);
    const text = await res.json();
    const jsonData = text ? JSON.parse(text) : null;
    setData(jsonData);
  }

  async function save(section: SaveSection) {
    if (!data) return;
    setSaving(section);
    try {
      const body =
        section === "home" ? data.user :
          section === "about" ? data.about :
            section === "contact" ? data.contact :
              section === "imprint" ? data.imprint :
                data.projects?.projects; // Send the array of projects to the backend

      const res = await authFetch(`${apiBaseUrl}/admin/update/${section}`, {
        method: "PUT",
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error(`Save failed: ${res.status}`);
      toast.add({ title: `${section.charAt(0).toUpperCase() + section.slice(1)} data saved` });
    } catch {
      toast.add({ title: `Failed to save ${section} data` });
    } finally {
      setSaving(null);
    }
  }

  async function addProject() {
    try {
      const res = await authFetch(`${apiBaseUrl}/admin/projects`, {
        method: "POST",
        body: JSON.stringify({
          title: newProject.title,
          description: newProject.description,
          imageUrl: newProject.imageUrl,
          projectUrl: newProject.projectUrl,
          technologies: newProject.technologies.split(",").map((s) => s.trim()).filter(Boolean),
        }),
      });
      if (!res.ok) throw new Error(`Create failed: ${res.status}`);
      const created: Project = await res.json();

      setData((d) => {
        if (!d) return d;
        const currentProjects = d.projects?.projects ?? [];
        return {
          ...d,
          projects: {
            projects: [created, ...currentProjects]
          }
        };
      });

      setNewProject({ title: "", description: "", imageUrl: "", projectUrl: "", technologies: "" });
      setShowNewProject(false);
      toast.add({ title: "Project created" });
    } catch {
      toast.add({ title: "Failed to create project" });
    }
  }

  async function deleteProject(id: string) {
    try {
      const res = await authFetch(`${apiBaseUrl}/admin/projects/${encodeURIComponent(id)}`, { method: "DELETE" });
      if (!res.ok) throw new Error(`Delete failed: ${res.status}`);
      await refresh();
      toast.add({ title: "Project deleted" });
    } catch {
      toast.add({ title: "Failed to delete project" });
    }
  }

  function patchHome(patch: Partial<NonNullable<AllData["user"]>>) {
    setData((d) => (d ? { ...d, user: { ...(d.user ?? {}), ...patch } } : d));
  }

  function patchAbout(patch: Partial<NonNullable<AllData["about"]>>) {
    setData((d) => (d ? { ...d, about: { ...(d.about ?? {}), ...patch } } : d));
  }

  function patchContact(patch: Partial<NonNullable<AllData["contact"]>>) {
    setData((d) => (d ? { ...d, contact: { ...(d.contact ?? {}), ...patch } } : d));
  }

  function patchImprint(patch: Partial<ImprintData>) {
    setData((d) => {
      if (!d) return d;
      // Ensure all required string fields exist to satisfy the strict ImprintData interface
      const current: ImprintData = d.imprint ?? { name: "", email: "", phone: "", address: "" };
      return { ...d, imprint: { ...current, ...patch } as ImprintData };
    });
  }

  function patchProject(id: string, patch: Partial<Project>) {
    setData((d) => {
      if (!d || !d.projects) return d;
      return {
        ...d,
        projects: {
          projects: d.projects.projects.map((p) => (p.id === id ? { ...p, ...patch } : p))
        }
      };
    });
  }

  useEffect(() => {
    void Promise.resolve().then(() => loadDashboard());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return (
      <>
      </>
    );
  }

  if (!data) return <></>;

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-foreground text-center">Admin Dashboard</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="bg-card/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <CardTitle className="text-lg">Home Data</CardTitle>
            <SaveButton saving={saving} section="home" onClick={() => save("home")} />
          </CardHeader>
          <CardContent className="space-y-3">
            <Field label="User" value={data.user?.user ?? ""} onChange={(v) => patchHome({ user: v })} />
            <Field label="Blurp" multiline value={data.user?.blurp ?? ""} onChange={(v) => patchHome({ blurp: v })} />
            <Field label="Avatar URL" value={data.user?.avatar ?? ""} onChange={(v) => patchHome({ avatar: v })} />
          </CardContent>
        </Card>

        <Card className="bg-card/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <CardTitle className="text-lg">Contact Data</CardTitle>
            <SaveButton saving={saving} section="contact" onClick={() => save("contact")} />
          </CardHeader>
          <CardContent className="space-y-3">
            <Field label="Email" value={data.contact?.email ?? ""} onChange={(v) => patchContact({ email: v })} />
            <Field label="Phone" value={data.contact?.phone ?? ""} onChange={(v) => patchContact({ phone: v })} />
            <Field label="Discord" value={data.contact?.discord ?? ""} onChange={(v) => patchContact({ discord: v })} />
            <Field label="Twitter" value={data.contact?.twitter ?? ""} onChange={(v) => patchContact({ twitter: v })} />
            <Field label="Linkedin" value={data.contact?.linkedin ?? ""} onChange={(v) => patchContact({ linkedin: v })} />
          </CardContent>
        </Card>

        <Card className="bg-card/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <CardTitle className="text-lg">Imprint Data</CardTitle>
            <SaveButton saving={saving} section="imprint" onClick={() => save("imprint")} />
          </CardHeader>
          <CardContent className="space-y-3">
            <Field label="Name" value={data.imprint?.name ?? ""} onChange={(v) => patchImprint({ name: v })} />
            <Field label="Email" value={data.imprint?.email ?? ""} onChange={(v) => patchImprint({ email: v })} />
            <Field label="Phone" value={data.imprint?.phone ?? ""} onChange={(v) => patchImprint({ phone: v })} />
            <Field label="Address (use <br> for line breaks)" multiline value={data.imprint?.address ?? ""} onChange={(v) => patchImprint({ address: v })} />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="bg-card/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <CardTitle className="text-lg">About Data</CardTitle>
            <SaveButton saving={saving} section="about" onClick={() => save("about")} />
          </CardHeader>
          <CardContent className="space-y-3">
            <Field label="Full Name" value={data.about?.fullName ?? ""} onChange={(v) => patchAbout({ fullName: v })} />
            <label className="block text-left space-y-1">
              <span className="text-xs font-medium text-muted-foreground">Age</span>
              <input
                type="number"
                className={inputCls}
                value={data.about?.age ?? ""}
                onChange={(e) => patchAbout({ age: e.target.value === "" ? undefined : Number(e.target.value) })}
              />
            </label>
            <Field label="Pronouns" value={data.about?.pronouns ?? ""} onChange={(v) => patchAbout({ pronouns: v })} />
            <Field label="Bio" multiline value={data.about?.bio ?? ""} onChange={(v) => patchAbout({ bio: v })} />
          </CardContent>
        </Card>

        <Card className="bg-card/50 lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <CardTitle className="text-lg">Projects</CardTitle>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" onClick={() => setShowNewProject(true)}>
                <Plus className="h-4 w-4 mr-1" /> Add
              </Button>
              <SaveButton saving={saving} section="projects" onClick={() => save("projects")} />
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {(data.projects?.projects ?? []).map((p) => (
              <div key={p.id} className="rounded-md border border-border bg-background/40 p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-muted-foreground">#{p.id}</span>
                  <Button size="sm" variant="destructive" onClick={() => deleteProject(p.id)}>
                    <Trash2 className="h-4 w-4 mr-1" /> Delete
                  </Button>
                </div>
                <Field label="Title" value={p.title ?? ""} onChange={(v) => patchProject(p.id, { title: v })} />
                <Field label="Description" multiline value={p.description ?? ""} onChange={(v) => patchProject(p.id, { description: v })} />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Field label="Image URL" value={p.imageUrl ?? ""} onChange={(v) => patchProject(p.id, { imageUrl: v })} />
                  <Field label="Project URL" value={p.projectUrl ?? ""} onChange={(v) => patchProject(p.id, { projectUrl: v })} />
                </div>
                <Field
                  label="Technologies (comma separated)"
                  value={(p.technologies ?? []).join(", ")}
                  onChange={(v) => patchProject(p.id, { technologies: v.split(",").map((s) => s.trim()).filter(Boolean) })}
                />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {showNewProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-md rounded-lg border border-border bg-background p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-foreground">New Project</h2>
              <Button size="sm" variant="ghost" onClick={() => setShowNewProject(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <Field label="Title" value={newProject.title} onChange={(v) => setNewProject((n) => ({ ...n, title: v }))} />
            <Field label="Description" multiline value={newProject.description} onChange={(v) => setNewProject((n) => ({ ...n, description: v }))} />
            <Field label="Image URL" value={newProject.imageUrl} onChange={(v) => setNewProject((n) => ({ ...n, imageUrl: v }))} />
            <Field label="Project URL" value={newProject.projectUrl} onChange={(v) => setNewProject((n) => ({ ...n, projectUrl: v }))} />
            <Field label="Technologies (comma separated)" value={newProject.technologies} onChange={(v) => setNewProject((n) => ({ ...n, technologies: v }))} />
            <Button className="w-full" onClick={addProject}>
              <Plus className="h-4 w-4 mr-1" /> Create Project
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}