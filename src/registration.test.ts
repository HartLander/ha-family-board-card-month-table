// @vitest-environment happy-dom
import { beforeAll, expect, it } from "vitest";

class OriginalCard extends HTMLElement {}
class OriginalEditor extends HTMLElement {}
const originalEntry = { type: "family-board-card", name: "Family Board Card" };
let Card: typeof import("./ha-family-board-card").FamilyBoardCard;

beforeAll(async () => {
  customElements.define("family-board-card", OriginalCard);
  customElements.define("ha-family-board-card-editor", OriginalEditor);
  (window as any).customCards = [originalEntry];
  ({ FamilyBoardCard: Card } = await import("./ha-family-board-card"));
});

it("registers the fork alongside an already loaded original card and editor", async () => {
  const editor = await Card.getConfigElement();
  expect(customElements.get("family-board-card")).toBe(OriginalCard);
  expect(customElements.get("ha-family-board-card-editor")).toBe(OriginalEditor);
  expect(document.createElement("family-board-card")).toBeInstanceOf(OriginalCard);
  expect(document.createElement("family-board-card-month-table")).toBeInstanceOf(Card);
  expect(editor.localName).toBe("ha-family-board-card-month-table-editor");
  expect(editor).not.toBeInstanceOf(OriginalEditor);
});

it("creates new cards with the fork's own type", () => {
  expect(Card.getStubConfig().type).toBe("custom:family-board-card-month-table");
});

it("adds a distinct card-picker entry with fork documentation", () => {
  const entries = (window as any).customCards;
  expect(entries).toHaveLength(2);
  expect(entries[0]).toBe(originalEntry);
  expect(entries[1]).toMatchObject({
    type: "family-board-card-month-table",
    name: "Family Board Card – Month Table",
    documentationURL: "https://github.com/HartLander/ha-family-board-card-month-table",
  });
});
