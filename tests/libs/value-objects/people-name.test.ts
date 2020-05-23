import { assertEquals } from 'deno-std/testing/asserts.ts'
import { PeopleName } from '../../../src/libs/value-objects/people-name.ts'

const peopleNameShouldHaveBlankNamesByDefault = () => {
    const testingObject = PeopleName.createFromOptions({})
    assertEquals(testingObject.first, '')
    assertEquals(testingObject.last, '')
    assertEquals(testingObject.full, '')
}

const peopleNameShouldBeCreatedByOnlyFirstName = () => {
    const testingObject = PeopleName.createFromOptions({firstName: ' John  '})

    assertEquals(testingObject.first, 'John')
    assertEquals(testingObject.last, '')
    assertEquals(testingObject.full, 'John')
}

const peopleNameShouldBeCreatedByOnlyLastName = () => {
    const testingObject = PeopleName.createFromOptions({lastName: '  Doe '})

    assertEquals(testingObject.first, '')
    assertEquals(testingObject.last, 'Doe')
    assertEquals(testingObject.full, 'Doe')
}

const peopleNameShouldBeCreatedByFullName = () => {
    const testingObject = PeopleName.createFromOptions({firstName: ' John  ', lastName: '  Doe '})

    assertEquals(testingObject.first, 'John')
    assertEquals(testingObject.last, 'Doe')
    assertEquals(testingObject.full, 'John Doe')
}
const testCases = [
    {name: 'PeopleName should have blank names by default', fn () { peopleNameShouldHaveBlankNamesByDefault() }},
    {name: 'PeopleName should be created by only first name', fn () { peopleNameShouldHaveBlankNamesByDefault() }},
    {name: 'PeopleName should be created by only last name', fn () { peopleNameShouldBeCreatedByOnlyLastName() }},
    {name: 'PeopleName should be created by full name', fn () { peopleNameShouldBeCreatedByFullName() }},
]

for (const testCase of testCases) {
    Deno.test(testCase)
}
