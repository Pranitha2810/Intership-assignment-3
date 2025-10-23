import { useContext,useState } from 'react';
import { PostContext } from './PostsContext.jsx';
import { Button } from './ButtonStyle.js';
import { Card } from './CardStyle.js';
import { Form } from './FormStyle.js'

function PostCard(props){
    const { posts,setPosts,theme } = useContext(PostContext);
    const {id,title,message,imageUrl,category,author,date} = props.data;
    const [isEditing, setIsEditing] = useState(false);
    const [inputs, setInputs] = useState({ title, message, imageUrl, category, author });

    function handleDelete(e){
        setPosts(posts.filter((item)=>{
            return item.id!==id;
        }));
    }

    const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        const updatedPost = { ...inputs, id, date };
        setPosts(posts.map((post) => (post.id === id ? updatedPost : post)));
        setIsEditing(false);
    };


    return(
        <div>
            {isEditing ? 
                <Form onSubmit={handleUpdate}>
                    <div>
                        <input type="text" name="title" value={inputs.title} onChange={handleChange} required />
                        <input type="text" name="message" value={inputs.message} onChange={handleChange} required />
                        <input type="text" name="imageUrl" value={inputs.imageUrl} onChange={handleChange} required />
                        <input type="text" name="author" value={inputs.author} onChange={handleChange} required />
                        <input type="text" name="category" value={inputs.category} onChange={handleChange} required />
                    </div>
                    <Button type="submit">Save</Button>
                    <Button type="button" onClick={() => setIsEditing(false)}>Cancel</Button>
                </Form>
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
                        <Button onClick={() => setIsEditing(true)}>Edit</Button>
                    </div>
                </Card>
            }
        </div>
    )
}
export default PostCard;