// get form in js
const form = document.querySelector("#myForm")
const bookmarksResults = document.querySelector('#bookmarksResults')
// get the values of siteName and siteUrl
const siteName = document.querySelector("#siteName")
const siteUrl = document.querySelector("#siteUrl")
let sName=''
let url=''
let editMode = false
let editid 

function removeBookmark(id)
{
    let bookmarks = localStorage.getItem("bookmarks")
    if(bookmarks)
    {
        bookmarks = JSON.parse(bookmarks)
        bookmarks = bookmarks.filter(mark => mark.id !== id);
        let b = JSON.stringify(bookmarks)
        localStorage.setItem('bookmarks',b)
        updateUI()
        // bookmarks.foreach((bookmark,index) => {
        //     if(bid == bookmark.id)
        //     {
        //         bookmarks.splice(index,1)
        //         let b = JSON.stringify(bookmarks)
        //         localStorage.setItem('bookmarks',b)
        //         updateUI()
        //         break
        //     }
        //     console.log(bookmark)
        // })
    }
}

function editBookmark(id)
{
    editMode=true
    let bookmarks = localStorage.getItem("bookmarks")
    if(bookmarks)
    {
        bookmarks = JSON.parse(bookmarks)
        bookmark = bookmarks.find(mark => mark.id === id);
        siteName.value=bookmark.sName
        siteUrl.value=bookmark.url
        editid=id
    }    
}

function updateUI()
{
    let bookmarks = localStorage.getItem("bookmarks")
    bookmarksResults.innerHTML = ''
    if(bookmarks)
    {
        bookmarks = JSON.parse(bookmarks)
        bookmarks.map((bookmark) => {
            let {sName,url,id} = bookmark
            bookmarksResults.innerHTML +=
        `
        <div class="well">
          <h3>
            ${sName}
            <a class="btn btn-default" target="_blank"  href="` +
        `${url}` +
        `">Visit</a>
            <a class="btn btn-primary" href="#" onclick="editBookmark(` +
        `'${id}'` +
        `)">Edit</a>
            <a class="btn btn-danger" href="#" onclick="removeBookmark(` +
        `'${id}'` +
        `)">Delete</a>
          </h3>
        </div>
      `;
            
        })
    }
    
}

form.addEventListener("submit",function(e){
    e.preventDefault()
    sName = siteName.value
    url = siteUrl.value
    if(!sName || !url)
    {
        alert("Enter name and url")
        return false
    }
    const bookmark = {
        id : uuidv4(),
        sName,
        url
    }
    if(editMode)
    {
        let bookmarks = localStorage.getItem('bookmarks')
        bookmarks = JSON.parse(bookmarks)
        bookmarks.forEach(bookmark => {
            if(bookmark.id===editid)
            {
                bookmark.sName=siteName.value
                bookmark.url=siteUrl.value
            }
        });
        let b = JSON.stringify(bookmarks)
        localStorage.setItem('bookmarks',b)
        editMode=false
    }
    else
    {
        if(localStorage.getItem("bookmarks") === null)
        {
            let bookmarks = [bookmark]
            let b = JSON.stringify(bookmarks)
            localStorage.setItem('bookmarks',b)
        }
        else
        {
            let bookmarks = localStorage.getItem('bookmarks')
            bookmarks = JSON.parse(bookmarks)
            bookmarks.push(bookmark)
            let b = JSON.stringify(bookmarks)
            localStorage.setItem('bookmarks',b)
        }
    }
    

    this.reset()
    updateUI()
})
updateUI()