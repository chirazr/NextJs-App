import PostDetails from "@/app/components/postDetails"
import { Suspense } from "react";
export default async function PostDetailsPage({params}){
 const postid = params.postid;
 
const loadingJsx =(<div><h1>Loadind ..</h1></div>)
    return(
        <div>
            <h1>Post details</h1>
            <Suspense fallback={loadingJsx }>
            <PostDetails postid={postid} />
            </Suspense>
          
        </div>
    )
}