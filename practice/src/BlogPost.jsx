function BlogPost(post){
    return(
        <div>
            <p>author:{post.author}</p>
            <p>title:{post.title}</p>
            <p>Description:{post.description}</p>
        </div>
    )
}
export default BlogPost;