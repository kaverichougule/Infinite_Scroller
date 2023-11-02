const container=document.querySelector(".container")
const post=document.querySelector(".post")
let limit=5;
let pageCount=1;
let postCount=1;

async function fetchData(){
    let response=await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}$_page=${pageCount}`);
    response=await response.json()
    console.log(response);
    response.map((currEle,index)=>{
        const addHTML=`
        <div class="post" data-aos="zoom-in-up">
            <div class="post-id">${postCount++}</div>
            <h3 class="title">${currEle.title}</h3>
            <p class="post-info">${currEle.body}</p>
        </div>
        `
        container.insertAdjacentHTML('beforeend',addHTML)
    })
}
fetchData()

function showData(){
    setTimeout(()=>{
        pageCount++;
        fetchData()
    },100)
}
window.addEventListener("scroll",()=>{
    const {scrollHeight,scrollTop, clientHeight}=document.documentElement;

    if((scrollTop+clientHeight)>=scrollHeight){
        // console.log("I am at bottom");
        showData()
    }
})