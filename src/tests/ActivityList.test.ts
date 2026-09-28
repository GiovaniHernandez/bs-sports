import { describe, expect, it } from "vitest";
import { Activity } from "../domain/Activity.ts";
import { ActivityList } from "../domain/ActivityList.ts";

describe("ActivityList", () => {
  it("agrega clases y evita duplicar una actividad en el mismo horario", () => {
    const list = new ActivityList();
    list.add(new Activity("Yoga", "Ana Pérez", "18:00"));
    expect(list.getActivities()).toHaveLength(1);
    expect(() =>
      list.add(new Activity("yoga", "Luis Díaz", "18:00")),
    ).toThrow();
  });

  it("devuelve una copia de la colección", () => {
    const list = new ActivityList();
    list.add(new Activity("Yoga", "Ana Pérez", "18:00"));
    const result = list.getActivities();
    expect(result[0].name).toBe("Yoga");
    expect(result).not.toBe(list.getActivities());
  });

  it("elimina una actividad agregada", () => {
    const list = new ActivityList();
    const activity = new Activity("Yoga", "Ana Pérez", "18:00");
    list.add(activity);
    list.remove(activity);
    expect(list.getActivities()).toHaveLength(0);
  });
});
