import { useState,useContext} from 'react';
import { PostContext } from './PostsContext.jsx';
import { Form } from './FormStyle.js'
import { Button } from  './ButtonStyle.js';
import { IoArrowBackCircleSharp } from "react-icons/io5";


function CreatePost(props){
    const [inputs,setInputs] = useState({title: "",
    message: "",
    imageUrl: "",
    author: "",
    category: ""});
    
    const { setPosts,theme } = useContext(PostContext);

    function handleChange(e){
        const name=e.target.name;
        const value=e.target.value;
        setInputs(prev=>({...prev,[name]:value}));
    }
    function getFormattedDate() {
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    }
    
    function handleClick(){
       props.setAdd(false)
    }

    function handleSubmit(e)
    {
        e.preventDefault();
        const post = {
            ...inputs,
            date: getFormattedDate(),
            id: Date.now()
        };
        setPosts(prev=>{
                const updatedPosts = [...prev, post];
                localStorage.setItem("posts", JSON.stringify(updatedPosts)); 
                return updatedPosts; 
           }
        );
        setInputs({
            title: "",
            message: "",
            imageUrl: "",
            author: "",
            category: ""
        });
        props.setAdd(false);
    }
    
    return(
        <div>
            <Button style={{width : 100 ,}} onClick={handleClick}>Back to home <IoArrowBackCircleSharp /></Button>
            <Form themeMode={theme} onSubmit={handleSubmit} style={{marginTop : 70}}>
                <div>
                    <input type="text" placeholder="Enter title." name="title" value={inputs.title} onChange={handleChange} required/>
                    <input type="text" placeholder="Enter message" name="message" value={inputs.message} onChange={handleChange} required/>
                    <input type="text" placeholder="Enter image url" name="imageUrl" value={inputs.imageUrl} onChange={handleChange} required/>
                    <input type="text" placeholder="Enter author name" name="author" value={inputs.author} onChange={handleChange} required/>
                    <input type="text" placeholder="Enter category" name="category" value={inputs.category} onChange={handleChange} required/>
                </div>
                <Button type="submit" style={{marginTop : 20,marginLeft : 200}}>Submit</Button>
                
            </Form>
        
        </div>
    )
}
export default CreatePost;