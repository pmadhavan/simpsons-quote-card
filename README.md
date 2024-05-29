### README

#### Sympson's quotes

**Question**: Write a React functional component that displays a card containing a quote from The Simpsons. When the card is clicked, it should flip over to reveal the character who said the quote and an image of the character. There should also be a button that, when clicked, fetches a new quote and displays it on the card.

**API**: ```https://thesimpsonsquoteapi.glitch.me/quotes?count=10``` 


### Observations
- At about 40mins, I was close to finish, fetch done, state and onclick done. But the useEffect usage is wrong.
- The quote is not viisble, if I pass dummy init value, it disappears after few seconds. I am staring at a blank wall, no idea how the fetch call works. Pausing to debug and understand.
- Fetch call and useEffect was added, but the issue was the type of the incoming response and state was incorrect. Incoming was [] and the data state was object. Correcting it solved the problem of quote not visible.
