import { Activity } from "./Activity.ts";

export class ActivityList {
  private readonly activities: Activity[] = [];

  add(activity: Activity): void {
    const exists = this.activities.some(
      (item) =>
        item.name.toLowerCase() === activity.name.toLowerCase() &&
        item.time === activity.time,
    );
    if (exists) {
      throw new Error("Ya existe esa actividad en el mismo horario.");
    }
    this.activities.push(activity);
  }

  remove(activity: Activity): void {
    const index = this.activities.indexOf(activity);
    if (index !== -1) {
      this.activities.splice(index, 1);
    }
  }

  getActivities(): readonly Activity[] {
    return [...this.activities];
  }
}
