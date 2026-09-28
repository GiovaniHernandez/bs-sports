export class Activity {
  private _name = "";
  private _professor = "";
  private _time = "";

  constructor(name: string, professor: string, time: string) {
    this.name = name;
    this.professor = professor;
    this.time = time;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    const trimmed = value.trim();
    if (!trimmed) {
      throw new Error("La actividad no puede estar vacía.");
    }
    this._name = trimmed;
  }

  get professor(): string {
    return this._professor;
  }

  set professor(value: string) {
    const trimmed = value.trim();
    if (!trimmed) {
      throw new Error("El profesor no puede estar vacío.");
    }
    this._professor = trimmed;
  }

  get time(): string {
    return this._time;
  }

  set time(value: string) {
    if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(value)) {
      throw new Error("El horario debe tener el formato HH:MM.");
    }
    this._time = value;
  }
}
