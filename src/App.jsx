import PostProvider from './components/PostsContext.jsx';
import PostList from './components/PostList.jsx';
import styled from 'styled-components';
const H1 = styled.h1`
  display : flex;
  justify-content : center
`
function App(){
  return (
    <div>
      <H1>Wellness Hub</H1>
      <PostProvider>
        <PostList />
      </PostProvider>
    </div>
  )
}
export default App;