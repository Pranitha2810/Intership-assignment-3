import { useContext,useState } from 'react';
import { PostContext } from './PostsContext.jsx'
import PostCard from './PostCard.jsx';
import CreatePost from './CreatePost.jsx';
import { IoIosMoon } from "react-icons/io";
import { IoSunny } from "react-icons/io5";
import styled, { createGlobalStyle } from 'styled-components';
import { Button } from './ButtonStyle.js';
function PostList(){
    const [add,setAdd] = useState(false);
    const { posts,theme,setTheme } = useContext(PostContext);

    function handleClick(){
        setAdd(true);
    }
    function handleTheme(){
        if(theme=="light") 
        {
            setTheme("dark");
        }
        else
        {
            setTheme("light");
        }
    }
    //styling
    const GlobalStyle = createGlobalStyle`
        body{
            margin: 0;
            padding: 0;
            background-color: ${(props) => (props.themeMode === "light" ? "#ffffff" : "#000000")};
            color: ${(props) => (props.themeMode === "light" ? "#000000" : "#ffffff")};
            font-family: Arial, Helvetica, sans-serif;
        }
    `
    const Container = styled.div`
        display : flex;
        flex-direction : column;
        gap : 1.5rem;
        justify-content : center;
        align-items : center;
    `


    return (
        <>
            <GlobalStyle themeMode={theme} />
            <Container>
                {(theme==="light")? <IoIosMoon onClick={handleTheme}/> : <IoSunny onClick={handleTheme}/>} 
                {add || <Button themeMode={theme} onClick={handleClick}>Create Post.</Button>}
                {
                    (add===true)?<CreatePost data={posts} setAdd={setAdd}/> : 
                    posts.map((item)=>{
                        return <PostCard key={item.id} data={item}/>
                    })
                }
            </Container>
        </>
    )
}
export default PostList;