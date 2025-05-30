import { Book } from './book.js';

export class EBook extends Book {
  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this.fileFormat = fileFormat;
  }

  get fileFormat() {
    return this._fileFormat;
  }

  set fileFormat(value) {
    if (!value) throw new Error('format cant be empty');
    this._fileFormat = value;
  }

  printInfo() {
    super.printInfo();
    console.log(`file format: ${this.fileFormat}`);
  }

  static fromBook(book, fileFormat) {
    return new EBook(book.title, book.author, book.year, fileFormat);
  }
}