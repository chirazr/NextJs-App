export default async function PostDetails({postid}){
    //const postid = params.postid
    
    await new Promise((resolve)=>{
    setTimeout(()=>{
       resolve()
    },2000
    )
   })
    const response =  await fetch(
       `https://jsonplaceholder.typicode.com/posts/${postid}`,
        {
           // cache: 'no-store'
           next:{
               revalidate: 120,
           }
        }
        );
        const post = await response.json();
   
       return(
           <div>
            
               <div>
                   <h1> 
                       {post.title}
                   </h1>
                   <hr/>
                   <h4>
                   {post.body}  
                   </h4>
               </div>
           </div>
       )
   }