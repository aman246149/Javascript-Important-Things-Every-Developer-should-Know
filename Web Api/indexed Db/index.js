// Opening a connection to a database.
// Inserting an object into the object store.
// Reading data from the object store.
// Using a cursor to iterate over a result set.
// Deleting an object from the object store.

if (!window.indexedDB) {
    console.log(`Your browser doesn't support IndexedDB`);
    return;
}