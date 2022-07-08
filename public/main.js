export const createMainContent = () => {
    // Create h1
    const h1 = document.createElement("h1");
    h1.innerText = "Fake Instagram";

    // Create img
    const img = document.createElement("img");
    img.style.margin = "20px";
    img.style.maxWidth = "750px";

    const container = document.querySelector(".container");
    container.appendChild(h1);
    container.appendChild(img);
    document.body.style.backgroundColor = "tan"
    
    fetchImage();
};

const fetchImage = async () => {
    // Fetch image from API and set img url
    try {
        const kittenResponse = await fetch("https://api.thecatapi.com/v1/images/search?size=small");
        // Converts to JSON
        const kittenData = await kittenResponse.json();
        // console.log(kittenData);
        const kittenImg = document.querySelector("img");
        kittenImg.src = kittenData[0].url;

    } catch (e) {
        console.log("Failed to fetch image", e);
    }
};

// Refresh Cat Button
const button = document.createElement("button")
document.body.append(button)
button.style.width = "100px"
button.style.height = "50px"
button.style.alignContent = "center"
button.innerText = 'New Cat'
button.addEventListener("click", fetchImage)



// Up Vote Button
let clicks = 0;
const upCounter = document.createElement("button")
document.body.append(upCounter)
upCounter.style.width = "45px"
upCounter.style.textAlign = "center"
upCounter.style.height = "35px"
upCounter.innerText = 'Up Vote'
upCounter.style.display = "flex"
window.addEventListener("DOMContentLoaded", event => {
    upCounter.addEventListener("click", event => {
      clicks += 1;
      let totalvote = document.querySelector('.totalvote')
      totalvote.innerHTML = clicks;
    //   totalvote.innerHTML = `<span>${clicks}</span>`
    });
  });

  // reset votes
button.addEventListener("click", event => {

    totalvote.innerHTML = 0
})

// Down Vote Button
const downCounter = document.createElement("button")
document.body.append(downCounter)
downCounter.style.width = "45px"
downCounter.style.height = "35px"
downCounter.style.display = "flex"
downCounter.style.alignItems = "center"
downCounter.innerText = 'Down Vote'
window.addEventListener("DOMContentLoaded", event => {
  downCounter.addEventListener("click", event => {
      clicks -= 1;
      let totalvote = document.querySelector('.totalvote')
      totalvote.innerHTML = clicks;
    //   totalvote.innerHTML = `<span>${clicks}</span>`
    });
  });

// Total Vote Count Button
const span = document.createElement('span')
span.setAttribute('id', 'clicked-count')

const votecount = document.createElement("button")
votecount.className = 'totalvote'
// votecount.innerHTML = `<span>${clicks}</span>`
document.body.append(votecount)
let totalvote = document.querySelector('.totalvote')
totalvote.innerText = clicks
votecount.style.width = "30px"
votecount.style.height = "25px"
votecount.style.display = "flex"


// Comments Section

const commentInput = document.createElement("input")
document.body.append(commentInput)
commentInput.style.width = "200px"
commentInput.style.height = "50px"

// Button to Submit a Comment
const commentSubmit = document.createElement("button")
document.body.append(commentSubmit)
commentSubmit.style.width = "75px"
commentSubmit.style.height = "40px"
commentSubmit.innerText = "Submit Comment"

// Comment's Section
const commentSection = document.createElement("ul")
document.body.append(commentSection)

// Event to Post comment
window.addEventListener("DOMContentLoaded", event => {
    commentSubmit.addEventListener("click", e => {
        e.preventDefault()
        const li = document.createElement("li")
        li.innerText = commentInput.value
        commentSection.appendChild(li)
    })
})
