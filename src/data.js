const data = {
    skills: ["HTML", "CSS", "JavaScript", "React", "Git", "Figma", "Research", "Graphic Design"],
    projects: [
        {
            name: "Shopping List",
            description: "A shopping list mobile-app I created for my parents. By typing the name of their desired item in the top input field and it's quantity in the next, then pressing the 'Add' button they can list an item below. Once listed, a document will be created in a Cloud Firestore collection, allowing them to check the list and add new entries on any device. Tapping an item will 'tick' its checkbox, and long-pressing an item will delete it. Tapping the 'Delete list' button will wipe the entire list from the firestore database, so that a new list can be created.",
            url: "https://shopping-list-4f8h2.netlify.app/",
            github: "https://github.com/thecodedoctor42/shopping-list",
            id: "1"
        },
        {
            name: "Quizzical",
            description: "Fancy a quick quiz? Quizzical is a web-app that asks its user to select a number of questions, a category to be quizzed on, and a difficulty. It'll then randomly retrieve questions, based on these three parameters, from the OpenDb Trivia API, and build an interactive quiz for its user to complete. Once completed, the quiz will be marked, and its user will get a score. If full marks are achieved, a blast of confetti will rain on the screen." ,
            url: "https://quizzical-by-antoni.netlify.app/",
            github: "https://github.com/thecodedoctor42/quizzical",
            id: "2"
        },
        {
            name: "Movie Watchlist",
            description: "Don't wanna forget a must-watch recommended movie? Add it to your watchlist for later. This web-app allows its user to find a movie within the OMDb API and allows them to save it for later when they next have the time to sit down in front of the television. This was my first experience using the 'fetch' method to request information from an API and rendering it to the DOM.",
            url: "https://movie-watchlist-antoni.netlify.app/",
            github: "https://github.com/thecodedoctor42/movie-watchlist",
            id: "3"
        },
        {
            name: "Tenzies",
            description: "A classical dice game made digitial. The aim is to have all dice showing the same number in the least number of rolls, or challenge to do so before the timer runs out. A really simple game that requires a lot of JavaScript. I learnt a lot of ReactJS skills with this project including: useEffect, useState, passing props; and proper use of the setInterval method in combination with the Date objects.",
            url: "https://tenzies-by-antoni.netlify.app/",
            github: "https://github.com/thecodedoctor42/tenzies",
            id: "4"
        },
        {
            name: "Travel Journal",
            description: "A travel journal of all of my favourite places in the world that I have definitely visited. No unfortunately not, more of a dream of mine, but this simple web-app reminds me of where I began and how much I've learnt since starting to learn HTML, CSS, and JavaScript.",
            url: "https://travel-journal-antoni.netlify.app/",
            github: "https://github.com/thecodedoctor42/MyTravelJournal",
            id: "5"
        },
        {
            name: "LOTR Battle Cards",
            url: "https://lotr-battle-cards.netlify.app//",
            github: "https://github.com/thecodedoctor42/LOTR-Battle-Cards",
            id: "6"
        },
        {
            name: "Color Palette",
            url: "https://quizzical-by-antoni.netlify.app/",
            github: "https://github.com/thecodedoctor42/SoloProject-ColorSchemeGen",
            id: "7"
        },
        {
            name: "Restaurant App",
            url: "https://erens-eatery.netlify.app/",
            github: "https://github.com/thecodedoctor42/RestaurantOrderingApp",
            id: "8"
        },
        {
            name: "Oldagram",
            url: "https://oldagram-by-antoni.netlify.app/",
            github: "https://github.com/thecodedoctor42/Oldagram",
            id: "9"
        }
    ]
}

export default data