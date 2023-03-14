// here is some JSON-like data (we might typially retrieve this from an API)
const photos = [
    {
      "albumId": 1,
      "id": 1,
      "title": "accusamus beatae ad facilis cum similique qui sunt",
      "url": "https://via.placeholder.com/600/92c952",
      "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
      "albumId": 1,
      "id": 2,
      "title": "reprehenderit est deserunt velit ipsam",
      "url": "https://via.placeholder.com/600/771796",
      "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
      "albumId": 1,
      "id": 3,
      "title": "officia porro iure quia iusto qui ipsa ut modi",
      "url": "https://via.placeholder.com/600/24f355",
      "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
      "albumId": 1,
      "id": 4,
      "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
      "url": "https://via.placeholder.com/600/d32776",
      "thumbnailUrl": "https://via.placeholder.com/150/d32776"
    }
]

// ES is dynamically typed - no type checking
// if you need type-safety, then use Typescript

// a class
class Photo { // by default everything inherits from 'object'
    // we could declare stuff here
}

// use a class when the built-in structures don't provide what you need
const boo = true // if all we need is a boolean
const num = 99 // we might just need a number
const obj = {'member':boo, 'age':num, 'struct':[]}
// another class
class Snap  { // can also say 'extends Photo'
    albumId // here are some properties of this class
    id
    title
    url
    thumbnailUrl
    constructor(snap){ // constructor is optional
        this.albumId      = snap.albumId
        this.id           = snap.id
        this.title        = snap.title
        this.url          = snap.url
        this.thumbnailUrl = snap.thumbnailUrl
    }
    // methods of this class (e.g. for conditional or validation etc)
    pretty (){
        return `ID: ${this.id} URL: ${this.url}`
    }
}
// use the code
let s1 = new Snap(photos[0]) // let rather than const

s1.id    = 99  // classes let us use dot notation
s1['id'] = 999 /// ... or square bracket notation

console.log(s1, s1.pretty())