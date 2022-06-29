import { useEffect ,useState} from 'react';
import { BookCard } from './BookCard';


export function Books() {
  
  const[BookInfo,setBookInfo]=useState([]);
  const bookinf=[
   {
    "id": "100",
    "img": "https://i.gr-assets.com/imgs/S/compressed.photo.goodreads.com/books/1601352433i/15823480._UY600_SS600_.jpg",
    "BookName": "Anna Karenina by Leo Tolstoy (1878)",
    "AuthorOrPublisherName": " The Russian Messenger",
    "PublishedYear": 1878,
    "NoOfCopies": 120
   },
   {
    "id": "101",
    "img": "https://i.pinimg.com/736x/72/ce/d8/72ced824cf2c54ff4f64b3ed3f6c8cc3--classic-books-music-books.jpg",
    "BookName": "To Kill a Mockingbird by Harper Lee (1960)",
    "AuthorOrPublisherName": "Herper Lee",
    "PublishedYear": 1960,
    "NoOfCopies": 160
   },
   {
    "id": "102",
    "img": "https://imgs-na.ssl-imgs-amazon.com/imgs/I/71weWWXM4XL.jpg",
    "BookName": "Where the Sidewalk Ends by Shel Silverstein (1974)",
    "AuthorOrPublisherName": "Shel Silverstein",
    "PublishedYear": 1974,
    "NoOfCopies": 220
   },
   {
    "id": "103",
    "img": "https://imgs-na.ssl-imgs-amazon.com/imgs/I/81QckmGleYL.jpg",
    "BookName": "The Shining by Stephen King (1977)",
    "AuthorOrPublisherName": "Stephen King",
    "PublishedYear": 1977,
    "NoOfCopies": 280
   },
   {
    "id": "104",
    "img": "https://i.gr-assets.com/imgs/S/compressed.photo.goodreads.com/books/1429239923i/581811._UY475_SS475_.jpg",
    "BookName": "Valley of the Dolls by Jacqueline Susann (1966)",
    "AuthorOrPublisherName": "Jacqueline Susann",
    "PublishedYear": 1966,
    "NoOfCopies": 190
   },
   {
    "id": "105",
    "img": "https://imgs-na.ssl-imgs-amazon.com/imgs/I/81G2R0luQJL.jpg",
    "BookName": "The Little Prince by Antoine de Saint-Exupéry (1943)",
    "AuthorOrPublisherName": "Antoine de Saint-Exupéry",
    "PublishedYear": 1943,
    "NoOfCopies": 150
   },
   {
    "id": "106",
    "img": "https://i.gr-assets.com/imgs/S/compressed.photo.goodreads.com/books/1578028274i/38447._UY500_SS500_.jpg",
    "BookName": "The Handmaid’s Tale by Margaret Atwood (1985)",
    "AuthorOrPublisherName": "Margaret Atwood",
    "PublishedYear": 1985,
    "NoOfCopies": 200
   },
   {
    "id": "107",
    "img": "https://upload.wikimedia.g/wikipedia/en/8/8e/The_Fellowship_of_the_Ring_cover.gif",
    "BookName": "The Fellowship of the Ring by J.R.R. Tolkien (1954)",
    "AuthorOrPublisherName": "J.R.R. Tolkien",
    "PublishedYear": 1954,
    "NoOfCopies": 300
   },
   {
    "id": "108",
    "img": "https://www.madeleinelengle.com/wp-content/uploads/2017/10/WIT-Trade-Paperback.jpg",
    "BookName": "A Wrinkle in Time by Madeleine L’Engle (1962)",
    "AuthorOrPublisherName": "Madeleine L’Engle",
    "PublishedYear": 1962,
    "NoOfCopies": 250
   },
   {
    "id": "109",
    "img": "https://m.media-amazon.com/imgs/I/51oQBC68VSL.jpg",
    "BookName": "Pride and Prejudice by Jane Austen (1813)",
    "AuthorOrPublisherName": "Jane Austen ",
    "PublishedYear": 1813,
    "NoOfCopies": 180
   },
   {
    "id": "110",
    "img": "https://imgs-na.ssl-imgs-amazon.com/imgs/I/910SVO+IyfL.jpg",
    "BookName": "All the President’s Men by Bob Woodward and Carl Bernstein (1974)",
    "AuthorOrPublisherName": "Bob Woodward and Carl Bernstein",
    "PublishedYear": 1974,
    "NoOfCopies": 90
   },
   {
    "id": "111",
    "img": "https://imgs-na.ssl-imgs-amazon.com/imgs/I/61nTspM+BYL.jpg",
    "BookName": "Man’s Search for Meaning by Vikt E. Frankl (1946)",
    "AuthorOrPublisherName": "Vikt E. Frankl ",
    "PublishedYear": 1946,
    "NoOfCopies": 1000
   },
   {
    "id": "112",
    "img": "https://i.gr-assets.com/imgs/S/compressed.photo.goodreads.com/books/1632283781l/6149._SY475_.jpg",
    "BookName": "Beloved by Toni Mrison (1987)",
    "AuthorOrPublisherName": "Toni Mrison",
    "PublishedYear": 1987,
    "NoOfCopies": 110
   },
   {
    "id": "113",
    "img": "https://imgs-na.ssl-imgs-amazon.com/imgs/I/914SzWAuthorOrPublisherNameucL.jpg",
    "BookName": "In Cold Blood by Truman Capote (1965)",
    "AuthorOrPublisherName": "Truman Capote",
    "PublishedYear": 1965,
    "NoOfCopies": 120
   }
  ]

  function getBookAPI(){
    fetch("https://618fb4edf6bf450017484a11.mockapi.io/Books")
    .then((data)=>data.json())
    .then((mvs)=>setBookInfo(mvs));
  }

  useEffect(()=>{
    getBookAPI();
  },[]);

  return (
    <div className="bookList">
      {BookInfo.map((value, index) => {
        return <BookCard key={value.id} id={value.id} img={value.img} 
        BookName={value.BookName} PublishedYear={value.PublishedYear} 
                          AuthorOrPublisherName={value.AuthorOrPublisherName} 
                          NoOfCopies={value.NoOfCopies} 
                          bookinf={BookInfo} setBookInfo={setBookInfo} getBookAPI = {getBookAPI} />;
      })}
    </div>
  );
}
