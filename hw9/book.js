export class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  get title() {
    return this._title;
  }

  get author() {
    return this._author;
  }

  get year() {
    return this._year;
  }

  set title(value) {
    if (!value) throw new Error('name cant be empty');
    this._title = value;
  }

  set author(value) {
    if (!value) throw new Error('author cant be empty');
    this._author = value;
  }

  set year(value) {
    if (value < 0 || value > new Date().getFullYear())
      throw new Error('invalid year');
    this._year = value;
  }

  printInfo() {
    console.log(`book: ${this.title}, author: ${this.author}, year: ${this.year}`);
  }

  static getOldestBook(books) {
    return books.reduce((oldest, current) =>
      current.year < oldest.year ? current : oldest
    );
  }
}