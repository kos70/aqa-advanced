import { Book } from './book.js';
import { EBook } from './ebook.js';

const book1 = new Book('necronomicon', 'Abdul Al Hazred', 1997);
const book2 = new Book('call of ctulhu', 'howard phillips lovecraft', 1943);
book1.printInfo();
book2.printInfo();
const ebook1 = new EBook('Conan the barbarian', 'Robert howard', 2008, 'PDF');
ebook1.printInfo();
ebook1.fileFormat = 'EPUB';
console.log(`new format: ${ebook1.fileFormat}`);

try {
  ebook1.year = 2050;
} catch (e) {
  if (e instanceof Error) {
    console.error(e.message);
  } else {
    console.error(String(e));
  }
}

const books = [book1, book2, ebook1];
const oldestBook = Book.getOldestBook(books);
console.log(`oldest book: ${oldestBook.title} (${oldestBook.year})`);
const ebook2 = EBook.fromBook(book2, 'MOBI');
ebook2.printInfo();