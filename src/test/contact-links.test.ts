import { describe, expect, it } from "vitest";

import { contactLinks } from "@/lib/portfolio";

// The contact section renders straight from this list, so a broken entry here is
// a broken link on the page. Check the destinations, not the markup.
describe("Contact links", () => {
  it("offers email, LinkedIn and GitHub", () => {
    expect(contactLinks.map(link => link.name)).toEqual(["Email", "LinkedIn", "GitHub"]);
  });

  it("opens email in the visitor's mail app", () => {
    const email = contactLinks.find(link => link.name === "Email");

    expect(email?.href).toMatch(/^mailto:[^\s@]+@[^\s@]+\.[^\s@]+$/);
  });

  it("opens the profile links at absolute https addresses", () => {
    for (const link of contactLinks.filter(link => link.name !== "Email")) {
      expect(link.href.startsWith("https://")).toBe(true);
      expect(new URL(link.href).protocol).toBe("https:");
    }
  });

  it("gives every link a real destination and a visible handle", () => {
    for (const link of contactLinks) {
      expect(link.href.trim()).not.toBe("");
      expect(link.href).not.toBe("#");
      expect(link.handle.trim().length).toBeGreaterThan(0);
      expect(typeof link.placeholder).toBe("boolean");
    }
  });
});
