const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];
function getPosts() {
    setTimeout(() => {
        let output = '';
        for(let i=0;i<posts.length;i++) {
            output += `<li> ${posts[i].title} </li>`;
        }
        document.body.innerHTML=output;
    }, 1000);
 }
        
function createPost(post){
    return new Promise((resolve,reject)=> {
        setTimeout(()=>{

            posts.push(post);

            const error= false;
            if(!error){
                resolve();
            }
            else{
                reject('Error! Something went wrong')
            }
        }, 1000);

    });
    
}

function deletePost() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            //posts.pop();
            //console.log(p)
            const err=false;
            if(posts.length>0){
                posts.pop();
                resolve();
            }
            else{
                
                reject('Array is empty!')
            }
        }, 2000)
    });
}
createPost({title: 'Post Three', body: 'This is post three'})
    .then(getPosts)
    .catch(err => console.log(err));

deletePost().then(getPosts).catch(err => console.log(err));
deletePost().then(getPosts).catch(err => console.log(err));
//deletePost().then(getPosts).catch(err => console.log(err));
//deletePost().then(getPosts).catch(err => console.log(err));

createPost({title: 'Post Four', body: 'This is post four'})
    .then(getPosts)
    .then(deletePost)
    .catch(err => console.log(err));


//Promise all

