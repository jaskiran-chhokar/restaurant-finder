# Restaurant Finder App

Used [Open Table's Public API](https://opentable.herokuapp.com/) to develop a React application that allows users to filter by City, and then refine their search results. 

**Visit The Live Website Here:** https://zealous-rosalind-1ee947.netlify.app/

## Technical Questions 

### How long did you spend on the coding assignment? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.

I spent approximately 18 hours working on this coding assignment. During the creation of this project, I really wanted to emphasize my understanding of React, writing accessible code, and CSS abilties. 

If I had more time to work on this project, I definitely would have dedicated more time towards learning Redux (in order to manage the state of my application in an efficient manner), and also utilize either Jest/React Testing Library to test my code. I don't have much experience with the two, but am very interested in learning about them! 

**Features I Would Love to Add:**
- Pagination (to better organize the restaurant cards) 
- A Modal View (where users would be able to read more details about a specific restaurant) 
- Return an error message if no cities are found

### What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

One of the most useful features I've come accross is [String.prototype.includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes), as it is a very simple way to determine whether one string (or part of a string) may be contained inside of another.

**The following code snippet is an example of how I used String.prototype.includes() to loop through an array of cities and compare it against what the user has typed in the input:**


```
    cities.map(city => {
    
      if (city.toLowerCase().includes(cityInput.toLowerCase())) {
      
        fetch(`https://opentable.herokuapp.com/api/restaurants?city=${city}`)
        
          .then((response) => response.json())
          
          .then(data => {
          
            this.setState({
            
              restaurants: data.restaurants,
              
            })
            
          })
          .catch(error => console.error('Looks like something went wrong!', error));
      }
      
    });
```

### How would you track down a performance issue in production? Have you ever had to do this?

In order to track down a performance issue in production, I would definitely utilize the Performance tab in Chrome Dev Tools. Analyzing runtime performance through Chrome Dev Tools allows for the devleoper to analyze specific responses, as well as idle phases. The way I would go about tracking performance is by running a recording of the performance panel. As a result, while the page is running, Chrome Dev Tools can capture specific performance metrics. 

One thing in particular that I like about tracking performance in Chrome Dev Tools, is the ability to simulate a mobile CPU. Mobile CPU's are oftentimes much slower than a regular computer, so it's great to be able to simulate that. 

### How would you improve the API that you just used?

I would improve the API by providing it with more information. For instance, having values for ratings, a menu, or contact information would be very useful. 

### Please describe yourself using JSON.

```
    {
        "name": "Jaskiran", 
        "lastName": "Chhokar", 
        "hobbies": [ 
            "Hiking", 
            "Programming", 
            "Designing", 
            "Drawing"
        ],
        "personalityTraits": [
            "Motivated", 
            "Collaborative", 
            "Organized", 
            "Analytic"
        ], 
        "favSnacks": [
            "Cupcakes", 
            "Ice Cream",
        ],
    }
```

