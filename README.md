# ALSID-frontend-technical-test

The tests consists to display a table of books with their authors.

## Specs

- Render a table with books and authors.
- Add a button to add a book with an existing or new author.
- Add a button to refresh the table that should contains all new added books and authors.

## Tools

- You can create an app with `create-react-app`. Typescript is prefered but not mandatory.
- You will use [Ant Design](https://ant.design) for the basics components like Buttons or Table.

## API

An API provides the different collections and allows to add a book and an author.
To install the API:

- `git checkout "http://github.com/AlsidOfficial/technical-test-frontend.git"
- `npm install`
- `npm start`

### Routes

#### Return the list of books

- `GET /books`
- Output:

```
[
  {
    id: number
    title: string
    authorId: number
  }
]
```

#### Return the list of authors

- `GET /authors`
- Output:

```
[
  {
    id: number
    firstName: string
    lastName: string
  }
]
```

#### Create a book

- `POST /books`
- Input:

```
{
  title: string
  authorId: number
}
```

- Output:

```
{
  id: number
  title: string
  authorId: number
}
```

#### Create an author

- `POST /authors`
- Input:

```
{
  firstName: string
  lastName: string
}
```

- Output:

```
{
  authorId: number
  firstName: string
  lastName: string
}
```

## UI

### Table of books and authors (example)

```
[Refresh]                    [Add a new book]

---------------------------------------------
| Book (v)              | Author (v)        |
---------------------------------------------
| React for dummies     | Dan Abramov       |
| Angular for dummies   | Miško Hevery      |
| Vue for dummies       | Evan You          |
---------------------------------------------

                                  < 1 [2] 3 >
```

### Form to add a new book

```
Add a new book

Name:             ______________
Author:           ____________ v   [New author]

Add a new author

First name:       ______________
Last name:        ______________

[OK]
```
