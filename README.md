Running the project instructions:
  1. Clone the repository
  2. npm i to install the dependencies.
  3. npm start

Programming hours - 3.5;
Planning hours - 3

Project description: 
  - At home test, creating a wardrobe mobile oriented web app.
  
 Descinions explanation:
 Most of the time was spent on the architecture and data structures.
 
    - Data structures and API request:
    I wanted to create an efficient and simple way of working with the api data,
    so, I created several data structures where the main idea was to be able to find clothing items the fastest way possible by using dictionaries.
    The point was to have one dictionary that holds all the data for each clothing item and other data structures that will hold the id (key) for each item.
    However, this had a few disadvantages, as the boilerplate and the planning took a lot of time.
    In addition, This way of working is complex and not really necessary with such small amount of data, i did so because i wanted to simulate a real app, with large
    amounts of data.
    
    For the actual call I used a library that provides a custom hook for fetching, it's simple, fast, easy to work with and reliable.

    - Navigation:
    Chose a simple Material UI component that navigates using simple condition checks, 
    Each screen has a name, and I had an HOC return a component for that specific screen.
    I'm aware this is not the proper way of doing this, however, i chose to do it that way simply out of the time it would have taken it being done using a proper routing library for example.


    Styling:
    Chose using Material UI due to my familiarity with it that results in faster development and better UI.
    I also had the idea of using styled components, however, I encountered a setback with the installation due to conflicts with one of Material's libraries so that's why in some places i used simple inline styling.
