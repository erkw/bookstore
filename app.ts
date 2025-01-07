import bookData from './bookstore.json'

type Customer = {
    name:string
    address:string
}


const Book = (book: typeof bookData[number]) => {
    return `
    <li>${book.title}</li>
    `
}

const Books = (books: typeof bookData) => {
    return`
    <ul>
        ${books.map(book => Book(book)).join('')}
    </ul>
    `
}

console.log(bookData)

const render = (books: typeof bookData, query: string = '') => {
    document.getElementById('results')!.innerHTML = Books(bookData.filter(book => {
        return book.title.toLowerCase().includes(query.toLowerCase())
    }))

}

document.getElementById('search-input')?.addEventListener('change', (event) => {
    const query = (event.target as HTMLInputElement).value
    render(bookData, query)
})

document.getElementById('search-form')?.addEventListener('submit', (event) => {
    event.preventDefault()
})

document.getElementById('results')?.addEventListener('click', (event) => {
    (event.target as HTMLLIElement).classList.toggle('selected')
})

render(bookData)