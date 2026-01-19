
// cookies
console.log("hahah");

const getData = async (url) => {
  const response = await fetch(url);   // wait for fetch
  const data = await response.json();  // convert to JSON
  return data;                         // ✅ RETURN DATA
};

const run = async ()=> {
 
    console.log(localStorage);
    let notes = localStorage;
    let catCard = '';
   // iterate localStorage
   
   if(localStorage.length){
     for (let [key, value] of Object.entries(localStorage)){        
    // console.log(key)
        
        catCard += `
         <div class="card m-3" style="width: 18rem;">
                <h3>${key}</h3>
                <div class="card-body">
                    <p class="card-text">${value}</p>
                </div>
            </div>
            `;
    }
   }else{
    catCard = `<div class="alert alert-secondary" role="alert">
                No Notes Saved Yet !
                </div>`;
   }
   

    document.getElementsByClassName('show-data')[0].innerHTML =  catCard;
}
run();


// ----------- Get all elements --------------

const addNoteBtn = document.getElementById("add-note");

const addNote = async(event) => {

    // event.preventDefault();

    let loader = document.getElementsByClassName("save-note-loader")[0];
    loader.style.display = "block";
    setTimeout(() => {
       
          
            let noteTitle = document.getElementById("note-title").value.trim();
            let noteDesc = document.getElementById("message-text").value.trim();
            console.log(noteTitle + " "+ noteDesc )

            if(!noteTitle || !noteDesc){
                console.log(document.getElementsByClassName("validation"));
                document.getElementsByClassName("validation")[0].innerHTML = "Not Title and Text is Required";
                document.getElementsByClassName("validation")[0].style.display = "block";
            }else{
                document.getElementsByClassName("validation")[0].style.display = "none";
                localStorage.setItem( noteTitle , noteDesc );
                location.reload()

            }
            loader.style.display = "none";
    },2000);
}

if(addNoteBtn){
    addNoteBtn.addEventListener('click' , addNote);
}

// --------------- Delete notes 

const delNoteBtn = document.getElementById("delete-notes-action");
console.log(delNoteBtn);
const delNote = async (e) => {
    let loader = document.getElementsByClassName("del-note-loader")[0];
    loader.style.display = "block";
    setTimeout(
        ()=>{
            localStorage.clear();
            loader.style.display = "none";
            location.reload()

        },2000
    )
}

if(delNoteBtn){
    delNoteBtn.addEventListener('click' , delNote);
}