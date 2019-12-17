var assert = require('chai').assert;
var Book = require('./book.js');
var Author = require('./author.js');

describe('Author', function() {

  it('should have a first and last name', function() {
    var alexie = new Author({ first: 'Sherman', last: 'Alexie' });

    assert.equal(alexie.first, 'Sherman');
    assert.equal(alexie.last, 'Alexie');
  });

  it('should be able to have a different first and last name', function() {
    var allende = new Author({ first: 'Isabel', last: 'Allende' });

    assert.equal(allende.first, 'Isabel');
    assert.equal(allende.last, 'Allende');
  });

  it('should start with no books', function() {
    var allende = new Author({ first: 'Isabel', last: 'Allende' });

    assert.deepEqual(allende.books, []);
  });

  it('should be able to write a book', function() {
    var allende = new Author({ first: 'Isabel', last: 'Allende' });
    var houseOfSpirits = allende.write('The House of the Spirits', 'April 12, 1985')

    assert.instanceOf(houseOfSpirits, Book);
    assert.equal(houseOfSpirits.title, 'The House of the Spirits')
    assert.equal(houseOfSpirits.author, 'Isabel Allende')
    assert.equal(houseOfSpirits.publicationYear, 'April 12, 1985');
  });

  it('should add newly written books to list of all books', function() {
    var allende = new Author({ first: 'Isabel', last: 'Allende' });
    var houseOfSpirits = allende.write('The House of the Spirits', 'April 12, 1985')

    assert.equal(allende.books.length, 1);
    assert.deepEqual(allende.books, [ houseOfSpirits ]);
  });

});
