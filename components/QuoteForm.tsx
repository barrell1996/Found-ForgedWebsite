"use client";

const contactEmail = "hello@foundforgedco.com";

export function QuoteForm() {
  return (
    <form
      className="panel grid gap-4 p-5 sm:p-7"
      onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const subject = `Free estimate request — ${data.get("service")} — ${data.get("city")}`;
        const body = [
          `Name: ${data.get("name")}`,
          `Phone: ${data.get("phone")}`,
          `Email: ${data.get("email") || "Not provided"}`,
          `City / service location: ${data.get("city")}`,
          `Service needed: ${data.get("service")}`,
          `Approximate project size / load: ${data.get("size") || "Not provided"}`,
          `Preferred contact: ${data.get("contactMethod")}`,
          "",
          "Project description:",
          String(data.get("description") || "Not provided"),
          "",
          "Please attach clear photos of the work area, items to remove, access, garden beds, or driveway before sending."
        ].join("\n");
        window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      }}
    >
      <div>
        <p className="eyebrow">Free estimate request</p>
        <h2 className="mt-2 text-2xl font-black uppercase">Tell us about the property.</h2>
        <p className="mt-2 text-sm leading-6 text-stone-600">Required fields are kept short. Your email app will open with the details ready to send.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="name" label="Name" autoComplete="name" required />
        <Field name="phone" label="Phone" type="tel" autoComplete="tel" required />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="email" label="Email (optional)" type="email" autoComplete="email" />
        <Field name="city" label="City / Service Location" autoComplete="address-level2" required />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-xs font-black uppercase tracking-[0.14em]">
          Service Needed
          <select name="service" className="min-h-12 border border-forged-concrete bg-forged-smoke px-3 text-base font-bold outline-none focus:border-forged-black">
            <option>Garden-Bed Cleanup</option><option>Mulching</option><option>Junk Removal</option><option>Gravel Driveway Repair</option><option>Driveway Grading</option><option>Pothole / Washout Repair</option><option>Gravel Spreading or Redistribution</option><option>Culvert / Drainage Concern</option><option>Light Tractor Work</option><option>Other Property Project</option>
          </select>
        </label>
        <Field name="size" label="Approx. Size / Load (optional)" placeholder="Bed dimensions, driveway size, or pickup loads" />
      </div>
      <label className="grid gap-2 text-xs font-black uppercase tracking-[0.14em]">
        What is happening?
        <textarea name="description" required rows={5} placeholder="Describe what needs cleaned up, mulched, removed, repaired, graded, or improved." className="border border-forged-concrete bg-forged-smoke px-3 py-3 text-base font-medium normal-case outline-none focus:border-forged-black" />
      </label>
      <label className="grid gap-2 text-xs font-black uppercase tracking-[0.14em]">
        Preferred Contact Method
        <select name="contactMethod" className="min-h-12 border border-forged-concrete bg-forged-smoke px-3 text-base font-bold outline-none focus:border-forged-black"><option>Text</option><option>Phone</option><option>Email</option></select>
      </label>
      <div className="border border-stone-200 bg-white p-4 text-sm leading-6 text-stone-700"><strong>Helpful photos:</strong> the full work area, garden-bed edges, current mulch, every item or pile to remove, access routes, driveway damage, and any areas that need special attention.</div>
      <button type="submit" className="button-primary w-full sm:w-auto">Open Estimate Email</button>
      <p className="text-xs leading-5 text-stone-600">Your information is used only to review and respond to your project request.</p>
    </form>
  );
}

function Field({ name, label, type = "text", required = false, autoComplete, placeholder }: { name: string; label: string; type?: string; required?: boolean; autoComplete?: string; placeholder?: string }) {
  return <label className="grid gap-2 text-xs font-black uppercase tracking-[0.14em]">{label}<input name={name} type={type} required={required} autoComplete={autoComplete} placeholder={placeholder} className="min-h-12 border border-forged-concrete bg-forged-smoke px-3 text-base font-bold normal-case outline-none placeholder:font-normal focus:border-forged-black" /></label>;
}
