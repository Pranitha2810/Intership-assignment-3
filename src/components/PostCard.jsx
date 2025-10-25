import { useContext,useState } from 'react';
import { PostContext } from './PostsContext.jsx';
import { Button } from './ButtonStyle.js';
import { Card } from './CardStyle.js';
import { Form } from './FormStyle.js'
import { IoArrowBackCircleSharp } from "react-icons/io5";

function PostCard(props){
    const { posts,setPosts,theme } = useContext(PostContext);
    const {id,title,message,imageUrl,category,author,date} = props.data;
    const [inputs, setInputs] = useState({ title, message, imageUrl, category, author });

    const isEditing = props.editingId === id; 

    function handleDelete(e){
        setPosts(()=>{
                const updatedPosts = posts.filter((item)=>{
                return item.id!==id;
            });
            localStorage.setItem("posts",JSON.stringify(updatedPosts))
            return updatedPosts;
        });
    }

    const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        const updatedPost = { ...inputs, id, date };
        setPosts(posts.map((post) => (post.id === id ? updatedPost : post)));
        props.setEditingId(null);
    };

    function handleClick(){
        props.setEditingId(null);
    }


    return(
        <div>
            {isEditing ? 
                <div>
                    <Button style={{width : 100 ,marginLeft : 500}} onClick={handleClick}>Back to home <IoArrowBackCircleSharp /></Button>
                    <Form onSubmit={handleUpdate} style={{marginLeft:500}}>
                        <div>
                            <input type="text" name="title" value={inputs.title} onChange={handleChange} required />
                            <input type="text" name="message" value={inputs.message} onChange={handleChange} required />
                            <input type="text" name="imageUrl" value={inputs.imageUrl} onChange={handleChange} required />
                            <input type="text" name="author" value={inputs.author} onChange={handleChange} required />
                            <input type="text" name="category" value={inputs.category} onChange={handleChange} required />
                        </div>
                        <Button type="submit">Save</Button>
                        <Button type="button" onClick={() =>props.setEditingId(null)}>Cancel</Button>
                    </Form>
                </div>
                  :
                <Card themeMode={theme}>
                    <h2>{title}</h2>
                    <div>
                        <img src={imageUrl} alt="image"/>
                        <p>{message}</p>
                    </div>
                    <div>
                        <p>category : {category}</p>
                        <p>author : {author}</p>
                        <p>date : {date}</p>
                    </div>
                    <div class="items">
                        <Button onClick={handleDelete} >DeletePost</Button>
                        <Button onClick={() => props.setEditingId(id)}>Edit</Button>
                    </div>
                </Card>
            }
        </div>
    )
}
export default PostCard;