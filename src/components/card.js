import axios from "axios"

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  //creating card elements
  const card = document.createElement('div')
  const headLine = document.createElement('div')
  const author = document.createElement('div')
  const imDiv = document.createElement('div')
  const img = document.createElement('img')
  const bSpan = document.createElement('span')

  //adding classes
  card.classList.add('card')
  headLine.classList.add('headline')
  author.classList.add('author')
  imDiv.classList.add('img-container')

  //assigning textcontent
  headLine.textContent = `${article.headline}`
  img.src = article.authorPhoto
  bSpan.textContent =`By ${article.authorName}`

  //adding to parent element
  card.appendChild(headLine)
  card.appendChild(author)
  author.appendChild(imDiv)
  imDiv.appendChild(img)
  author.appendChild(bSpan)

  //adding eventlistener
  card.addEventListener('click', () =>{
    console.log(`${article.headline}`)

  })
  return card

}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  axios.get('http://localhost:5000/api/articles')
  .then(response =>{

    //fetching every object array 
    console.log(response.data)
    //for first object
    const eCard1 = response.data.articles.bootstrap
    eCard1.forEach(item =>{
      const fCard1 = Card(item)
      console.log(fCard1)
      document.querySelector(selector).append(fCard1)
    })
    //for second
    const eCard2 = response.data.articles.javascript
    eCard2.forEach(item =>{
      const fCard2 = Card(item)
      console.log(fCard2)
      document.querySelector(selector).append(fCard2)
    })
    //for third
    const eCard3 = response.data.articles.jquery
    eCard3.forEach(item =>{
      const fCard3 = Card(item)
      console.log(fCard3)
      document.querySelector(selector).append(fCard3)
    })
    //for fourth
    const eCard4 = response.data.articles.node
    eCard4.forEach(item =>{
      const fCard4 = Card(item)
      console.log(fCard4)
      document.querySelector(selector).append(fCard4)
    })
    //for fifth
    const eCard5 = response.data.articles.technology
    eCard5.forEach(item =>{
      const fCard5 = Card(item)
      console.log(fCard5)
      document.querySelector(selector).append(fCard5)
    })
  })
  .catch(err => console.log(err.message))
  .finally(() => console.log('done'))

}

export { Card, cardAppender }