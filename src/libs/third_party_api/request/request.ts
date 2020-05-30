import {RequestFactory} from "../factories/request.factory.ts";

const factory = new RequestFactory('https://api.lyrics.ovh/v1')

const request = factory.createRequestInfo({a: 'test'})

const a = fetch(request)
console.log(a)