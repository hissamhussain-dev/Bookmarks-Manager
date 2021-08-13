# Bookmarks-Manager

This is a Bookmarks Manager app where you can store your websites as bookmarks for later use.

This app is specifically designed for people who don't want to save their bookmarks in their browser.

# How To Use : 

### For Web : 

Visit https://hissamhussain-dev.github.io/Bookmarks-Manager/  in google chrome and tap on the three dots at the 

top right of your browser below close button and from the options select

- More tools > Create shortcut... 

Write a name in the popped up banner and there you go , a shortcut will be created on your desktop .

### For Mobile : 

Visit https://hissamhussain-dev.github.io/Bookmarks-Manager/  in google chrome and tap on the three dots at the 

top right of your browser and from the options select 

- Add to Home screen 

Write a name in the popped up banner and there you go , a shortcut will be created on your Home Screen.

# Developer's Section : 

### Technologies used :

- HTML
- CSS
- Bootstrap
- Javascript

### Tools used :

- VS Code
- Local Storage

### Functionalities Added : 

1. Add Bookmark

  - All the elements are accessed using query selector
  - Upon inputting the data in input fields a unique id is generated 
    using uuidv4 program created by Robert Kieffer 
  - Bookmark name and url along with the id generated are stored in local storage
  - After that the UI is updated by fethching the data from local storage 

2. Edit Bookmark

  - On Click event listener is used to determine when the event button is clicked
  - Id is passed as a parameter to the function to access the respective Bookmark
  - After the Bookmark is fetched the values are displayed to the user
  - Values are updated in the local storage after the user hits submit button after editing the values.
 
3. Delete Bookmark

  - Same process of fetching the data is used as in Edit Bookmark function
    and adding to that filter function is used to filter out the respective bookmark.


Thats it for the description of the project.If you like the idea please give it a star.
