const { PersonDataAccessObject } = require('./mock');

describe('the PersonDataAccessObject', () => {
  it('calls the function that would save Ada Lovelace to the database', () => {
    /* Arrange */

    const mockDatabase = {
      data: [],
      save: function (param) {
        return this.data.push(param);
      }
    };

    const spyFn = jest.spyOn(mockDatabase, 'save');

    const mockSaveMethod = mockDatabase.save;

    const personDataAccessObject = new PersonDataAccessObject(mockDatabase)

    const expectedArgument = { firstName: 'Ada', lastName: 'Lovelace' }

    /* Act */
    personDataAccessObject.saveToDatabase(expectedArgument);

    /* Assert */
    expect(mockSaveMethod).toHaveBeenCalledWith(expectedArgument);
  })
})