import { describe, expect, it } from "vitest";
import { Activity } from "../domain/Activity.ts";

describe("Activity", () => {
  it("expone la actividad mediante su getter", () => {
    const activity = new Activity("Yoga", "Ana Pérez", "18:00");
    expect(activity.name).toBe("Yoga");
  });

  it("valida y normaliza la actividad mediante su setter", () => {
    const activity = new Activity("Yoga", "Ana Pérez", "18:00");
    activity.name = "  Pilates  ";
    expect(activity.name).toBe("Pilates");
    expect(() => (activity.name = " ")).toThrow();
  });

  it("expone el profesor mediante su getter", () => {
    const activity = new Activity("Yoga", "Ana Pérez", "18:00");
    expect(activity.professor).toBe("Ana Pérez");
  });

  it("valida y normaliza el profesor mediante su setter", () => {
    const activity = new Activity("Yoga", "Ana Pérez", "18:00");
    activity.professor = "  Luis Díaz  ";
    expect(activity.professor).toBe("Luis Díaz");
    expect(() => (activity.professor = " ")).toThrow();
  });

  it("expone el horario mediante su getter", () => {
    const activity = new Activity("Yoga", "Ana Pérez", "18:00");
    expect(activity.time).toBe("18:00");
  });

  it("valida el formato del horario mediante su setter", () => {
    const activity = new Activity("Yoga", "Ana Pérez", "18:00");
    activity.time = "09:30";
    expect(activity.time).toBe("09:30");
    expect(() => (activity.time = "25:00")).toThrow();
  });
});
