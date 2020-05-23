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
        options = {
          firstName: (options.firstName ?? name.first).trim(),
          lastName: (options.lastName ?? name.last).trim()
        }
        return new PeopleName(options)
    }

    protected constructor (name?: PeopleNameOptions) {
        this._firstName = name?.firstName?.trim() ?? ''
        this._lastName = name?.lastName?.trim() ?? ''
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
