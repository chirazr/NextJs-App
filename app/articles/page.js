import Link from "next/link";

//create page for articles

export const metadata ={
    title: 'articles page',
}
export default function ArticlesPage(){
    return (
        <div>
            <h1>Articles page</h1>
        

      <Link href="/posts">
      <button>Take me to the posts page</button>
      </Link>

      </div>
    )
}