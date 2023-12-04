import logo from './logo.svg';
import './App.css';
import { ApiProvider } from './context/ApiContext';
import PostList from './components/PostList';
import PostDetails from './components/PostDetails';
import { useState } from 'react';

function App() {
  const [selectedPostId, setSelectedPostId] = useState(null);

  const handlePostSelect = (postId) => {
    setSelectedPostId(postId);
  };

  return (
    <ApiProvider>
      <div className="App">
        <h1>API Fetch Example</h1>
        <PostList onSelectPost={handlePostSelect} />
        {selectedPostId && <PostDetails postId={selectedPostId} />}
      </div>
    </ApiProvider>
  );
}

export default App;