"use client";

export function QuoteForm() {
  return (
    <form
      className="panel grid gap-4 p-5 sm:p-7"
      onSubmit={(event) => {
        event.preventDefault();
        const data = Object.fromEntries(new FormData(event.currentTarget).entries());
        console.log("Found & Forged quote request", data);
        // TODO: Connect form submission to email notification service.
        // TODO: Persist quote requests to a database or CRM.
        // TODO: Upload photos to durable storage and attach URLs to the CRM record.
        alert("Quote request logged. Email/CRM delivery can be connected next.");
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="name" label="Name" required />
        <Field name="phone" label="Phone" required />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="email" label="Email" type="email" required />
        <Field name="address" label="Address / Service Location" required />
      </div>
      <label className="grid gap-2 text-xs font-black uppercase tracking-[0.14em]">
        Service Needed
        <select name="service" className="min-h-12 border border-forged-concrete bg-forged-smoke px-3 text-base font-bold outline-none focus:border-forged-black">
          <option>Gravel Driveway Rehabilitation</option>
          <option>Driveway Grading</option>
          <option>Gravel Spreading</option>
          <option>Box Blade Work</option>
          <option>Small Property Improvement Project</option>
          <option>Digital Products / DIY Plans</option>
          <option>Curated Goods</option>
          <option>Custom Goods</option>
        </select>
      </label>
      <label className="grid gap-2 text-xs font-black uppercase tracking-[0.14em]">
        Project Description
        <textarea name="description" rows={5} className="border border-forged-concrete bg-forged-smoke px-3 py-3 text-base font-medium outline-none focus:border-forged-black" />
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-xs font-black uppercase tracking-[0.14em]">
          Preferred Contact Method
          <select name="contactMethod" className="min-h-12 border border-forged-concrete bg-forged-smoke px-3 text-base font-bold outline-none focus:border-forged-black">
            <option>Phone</option>
            <option>Email</option>
            <option>Text</option>
          </select>
        </label>
        <label className="grid gap-2 text-xs font-black uppercase tracking-[0.14em]">
          Upload Photos Optional
          <input name="photos" type="file" multiple className="min-h-12 border border-forged-concrete bg-forged-smoke px-3 py-3 text-sm" />
        </label>
      </div>
      <button type="submit" className="button-primary w-full sm:w-auto">Submit Quote Request</button>
    </form>
  );
}

function Field({ name, label, type = "text", required = false }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <label className="grid gap-2 text-xs font-black uppercase tracking-[0.14em]">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        className="min-h-12 border border-forged-concrete bg-forged-smoke px-3 text-base font-bold outline-none focus:border-forged-black"
      />
    </label>
  );
}
