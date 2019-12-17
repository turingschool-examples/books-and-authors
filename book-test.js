var assert = require('chai').assert;
var Book = require('./book.js');

describe('Book', function() {
  it('should have a title and publication', function() {
    var book = new Book('Harper', 'Lee', 'To Kill A Mockingbird', 'July 11, 1960');

    assert.equal(book.title, 'To Kill A Mockingbird');
    assert.equal(book.publicationYear, 'July 11, 1960');
  });

  it('should be able to have a different title and publication', function() {
    var book = new Book('N.K.', 'Jemisin', 'The Fifth Season', 'August 4, 2015');

    assert.equal(book.title, 'The Fifth Season');
    assert.equal(book.publicationYear, 'August 4, 2015');
  });

  it('should have an author', function() {
    var book = new Book('Harper', 'Lee', 'To Kill A Mockingbird', 'July 11, 1960');

    assert.equal(book.author, 'Harper Lee');
  });

  it('should be able to have a different author', function() {
    var book = new Book('N.K.', 'Jemisin', 'The Fifth Season', 'August 4, 2015');

    assert.equal(book.author, 'N.K. Jemisin');
  });

});
