export default async function Page({ params }) {

    console.log(await params);
    
    //Fetch your blog post by using its slug
    
    let languages = ["python", "javascript", "ruby", "go", "java"]; 
    
    const { slug } = await params;
    
    if(languages.includes(slug)){
        return <div>My Post: {slug}</div>;
    }else{
        return <div>Post Not Found</div>;
    }

}
