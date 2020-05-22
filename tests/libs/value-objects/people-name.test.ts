import { assertEquals } from 'deno-std/testing/asserts.ts'
import { PeopleName } from '../../../src/libs/value-objects/people-name.ts'

const peopleNameShouldHaveBlankNamesByDefault = () => {
    const testingObject = PeopleName.createFromOptions({})
    assertEquals(testingObject.first, '')
    assertEquals(testingObject.last, '')
    assertEquals(testingObject.full, '')
}

const peopleNameShouldBeCreatedByOnlyFirstName = () => {
    const testingObject = PeopleName.createFromOptions({firstName: 'first-name'})

    assertEquals(testingObject.first, 'first-name')
    assertEquals(testingObject.last, '')
    assertEquals(testingObject.full, 'first-name')
}

const peopleNameShouldBeCreatedByOnlyLastName = () => {
    const testingObject = PeopleName.createFromOptions({lastName: 'last-name'})

    assertEquals(testingObject.first, '')
    assertEquals(testingObject.last, 'last-name')
    assertEquals(testingObject.full, 'last-name')
}

const peopleNameShouldBeCreatedByFullName = () => {
    const testingObject = PeopleName.createFromOptions({firstName: ' first', lastName: 'last-name '})

    assertEquals(testingObject.first, ' first')
    assertEquals(testingObject.last, 'last-name ')
    assertEquals(testingObject.full, 'first last-name')
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
