export interface PeopleNameInterface {
    first: string
    last: string
    full: string
}

export class PeopleName implements PeopleNameInterface {
    protected _firstName: string
    protected _lastName: string

    /**
     * Static create from PeopleNameOptions
     * @param options 
     */
    public static createFromOptions(options: PeopleNameOptions): PeopleNameInterface {
        return new PeopleName(options)
    }

    public static change(name: PeopleNameInterface, options: PeopleNameOptions): PeopleNameInterface {
        options = {firstName: options.firstName ?? name.first, lastName: options.lastName ?? name.last}
        return new PeopleName(options)
    }

    protected constructor (name?: PeopleNameOptions) {
        this._firstName = name?.firstName ?? ''
        this._lastName = name?.lastName ?? ''
    }

    get first(): string {
        return this._firstName
    }

    get last(): string {
        return this._lastName
    }

    get full(): string {
        return [this._firstName, this._lastName].join(' ').trim()
    }
}

export interface PeopleNameOptions {
    firstName?: string
    lastName?: string
}
