export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') throw TypeError('name must be a string');
    this._name = value;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value !== 'number') throw TypeError('length must be a number');
    this._length = value;
  }

  get students() {
    return this._students;
  }

  set students(value) {
    if (!Array.isArray(value)) throw TypeError('students must be a array');
    if (value.some((student) => typeof student !== 'string')) {
      throw TypeError('students must be an Array of Strings');
    }
    this._students = value;
  }
}