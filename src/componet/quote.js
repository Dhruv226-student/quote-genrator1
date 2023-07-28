import React, { useState } from 'react';
import './QuoteGenerator.css'; // Import the CSS file
const quotes = [
    {
        categories: "love",
        quotes: [
            {
                quote: "The greatest pleasure of life is love.",
                author: "Euripides"
            },
            {
                quote: "Where there is love, there is life.",
                author: "Mahatma Gandhi"
            },
            {
                quote: "Love is composed of a single soul inhabiting two bodies.",
                author: "Aristotle"
            },
            {
                quote: "Love is the only force capable of transforming an enemy into a friend.",
                author: "Martin Luther King Jr."
            },
            {
                quote: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
                author: "Lao Tzu"
            },
            {
                quote: "The best thing to hold onto in life is each other.",
                author: "Audrey Hepburn"
            },
            {
                quote: "Love is not finding someone to live with; it's finding someone you can't live without.",
                author: "Rafael Ortiz"
            },
            {
                quote: "To love and be loved is to feel the sun from both sides.",
                author: "David Viscott"
            },
            {
                quote: "The best and most beautiful things in this world cannot be seen or even heard but must be felt with the heart.",
                author: "Helen Keller"
            },
            {
                quote: "I would rather spend one lifetime with you, than face all the ages of this world alone.",
                author: "J.R.R. Tolkien"
            }
        ]
    },
    {
        categories: "life",
        quotes: [
            {
                quote: "Life is what we make it, always has been, always will be.",
                author: "Grandma Moses"
            },
            {
                quote: "In three words I can sum up everything I've learned about life: it goes on.",
                author: "Robert Frost"
            },
            {
                quote: "Life is either a daring adventure or nothing at all.",
                author: "Helen Keller"
            },
            {
                quote: "The purpose of our lives is to be happy.",
                author: "Dalai Lama"
            },
            {
                quote: "Life is really simple, but we insist on making it complicated.",
                author: "Confucius"
            },
            {
                quote: "Life is 10% what happens to us and 90% how we react to it.",
                author: "Charles R. Swindoll"
            },
            {
                quote: "In the end, it's not the years in your life that count. It's the life in your years.",
                author: "Abraham Lincoln"
            },
            {
                quote: "The more you praise and celebrate your life, the more there is in life to celebrate.",
                author: "Oprah Winfrey"
            },
            {
                quote: "Life is a flower of which love is the honey.",
                author: "Victor Hugo"
            },
            {
                quote: "The biggest adventure you can take is to live the life of your dreams.",
                author: "Oprah Winfrey"
            }
        ]
    },
    {
        categories: "best friend",
        quotes: [
            {
                quote: "A real friend is one who walks in when the rest of the world walks out.",
                author: "Walter Winchell"
            },
            {
                quote: "A true friend is the greatest of all blessings.",
                author: "François de La Rochefoucauld"
            },
            {
                quote: "A friend is someone who knows all about you and still loves you.",
                author: "Elbert Hubbard"
            },
            {
                quote: "A best friend is like a four-leaf clover: hard to find and lucky to have.",
                author: "Irish Proverb"
            },
            {
                quote: "A real friend is one who walks in when the rest of the world walks out.",
                author: "Walter Winchell"
            },
            {
                quote: "A true friend is someone who accepts your past, supports your present, and encourages your future.",
                author: "Unknown"
            },
            {
                quote: "A best friend is someone who makes you laugh even when you think you'll never smile again.",
                author: "Unknown"
            },
            {
                quote: "A best friend is someone you can tell everything to and no matter what, they'll still love you.",
                author: "Unknown"
            },
            {
                quote: "A friend is someone who knows the song in your heart and can sing it back to you when you have forgotten the words.",
                author: "C.S. Lewis"
            },
            {
                quote: "A best friend is like a star. You may not always see them, but you know they're always there.",
                author: "Unknown"
            }
        ],
        
    } ,
     {
        categories: "inspiration",
        quotes: [
          {
            quote: "Believe you can and you're halfway there.",
            author: "Theodore Roosevelt"
          },
          {
            quote: "The only limit to our realization of tomorrow will be our doubts of today.",
            author: "Franklin D. Roosevelt"
          },
          {
            quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            author: "Winston Churchill"
          },
          {
            quote: "Your time is limited, don't waste it living someone else's life.",
            author: "Steve Jobs"
          },
          {
            quote: "The only way to do great work is to love what you do.",
            author: "Steve Jobs"
          },
          // Add 5 more inspiration quotes here...
        ]
      },
      {
        categories: "happiness",
        quotes: [
          {
            quote: "The greatest happiness you can have is knowing that you do not necessarily require happiness.",
            author: "William Saroyan"
          },
          {
            quote: "The only thing that will make you happy is being happy with who you are.",
            author: "Goldie Hawn"
          },
          {
            quote: "Happiness is a choice. You can choose to be happy. There's going to be stress in life, but it's your choice whether you let it affect you or not.",
            author: "Valerie Bertinelli"
          },
          {
            quote: "The secret of happiness is not in doing what one likes, but in liking what one does.",
            author: "James M. Barrie"
          },
          {
            quote: "Happiness is not something ready-made. It comes from your own actions.",
            author: "Dalai Lama"
          },
          // Add 5 more happiness quotes here...
        ]
      }
    // Add more categories and quotes here...
];


const QuoteGenerator = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [randomQuote, setRandomQuote] = useState(getRandomQuote());
    const [displayedQuotes, setDisplayedQuotes] = useState('');
    function getRandomQuote() {
        let filteredQuotes = quotes;

        if (selectedCategory !== 'all') {
            const category = quotes.find((item) => item.categories === selectedCategory);
            if (category) {
                filteredQuotes = category.quotes;
            }
        }

        const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
        return filteredQuotes[randomIndex];
    }

    function generateQuote() {
        setRandomQuote(getRandomQuote());
    }

    function handleCategoryClick(event) {
        setSelectedCategory(event.target.innerText.toLowerCase());
        const category = quotes.find((item) => item.categories === event.target.innerText.toLowerCase());
        if (category) {
            setRandomQuote(category.quotes);
        }
    }

    const handleButtonClick = () => {
        const categoryInput = document.getElementById('category-input').value.toLowerCase();
        const category = quotes.find((item) => item.categories === categoryInput);

        if (category) {
            setDisplayedQuotes(category.quotes);
        } else {
            setDisplayedQuotes([]);
        }
    };
    return (
        <>
            <div className='container'>
                <div className='center bg-all div-1'>
                    <h3 className=' head'>Random Quotes</h3>
                    <div>
                        {quotes.map(category => (
                            <button
                                key={category.categories}
                                onClick={handleCategoryClick}
                                className={selectedCategory === category.categories ? 'active' : ''}
                            >
                                {category.categories}
                            </button>
                        ))}
                    </div>
                    <blockquote className='bg-red'>
                        "{randomQuote.quote}"
                        <cite>- {randomQuote.author}</cite>
                    </blockquote>
                    <button onClick={generateQuote}>Generate Quote</button>
                </div>
                <div className='bg-all div-2'> <h3 className='center head '>Watch all Quotes : Available category
                    <br />(love,life,best friend , inspiration ,happines)   </h3>
                    <div className='center '>
                        <label htmlFor="category-input">Enter category:</label>
                        <input type="text" id="category-input" />
                        <button onClick={handleButtonClick}>Show Quotes</button>

                        <div className="bg-2">
                            {displayedQuotes.length > 0 ? (
                                displayedQuotes.map((quote, index) => (

                                    <div key={index} className='bg-1'>

                                        <p>{quote.quote}</p>
                                        <p>- {quote.author}</p>

                                        {/* <p>Category: {quote.categories}</p> */}
                                    </div>
                                ))
                            ) : (
                                <p>No quotes found for the specified category.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default QuoteGenerator;
