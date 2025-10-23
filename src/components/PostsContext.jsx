import { createContext,useState } from 'react';

export const PostContext = createContext();

const PostProvider = ({children})=>{
    const defaultPosts = [
        {
            id: 1,
            title: "Stay Hydrated 💧",
            message: "Drink at least 8 glasses of water daily to maintain energy and focus.",
            imageUrl: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2xhc3MlMjBvZiUyMHdhdGVyfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000",
            category: "Nutrition",
            author: "Health Tips Daily",
            date: "2025-10-23",
        }
    ];
    const storedPosts = localStorage.getItem("posts");
    const [posts,setPosts] = useState(()=>{
        return storedPosts ? JSON.parse(storedPosts) : defaultPosts;
    });
    const [theme,setTheme] = useState("light");
    return(
        <PostContext.Provider value={{posts:posts,setPosts:setPosts,theme:theme,setTheme:setTheme}}>
            {children}
        </PostContext.Provider>
    )
}
export default PostProvider;