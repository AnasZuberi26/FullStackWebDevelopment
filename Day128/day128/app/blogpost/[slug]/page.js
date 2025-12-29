export default async function Page({ params }) {

    // throw new Error("Error hai bhai");

    //Fetch your blog post by using its slug
    
    let languages = ["python", "javascript", "ruby", "go", "java"]; 
    
    const { slug } = await params;
    
    if(languages.includes(slug)){
        return <div>My Post: {slug}</div>;
    }else{
        return <div>Post Not Found</div>;
    }

}
