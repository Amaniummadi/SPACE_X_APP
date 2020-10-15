import React,{lazy,Suspense} from 'react';

import './App.css';

const PostsPage = lazy(() => import('./components/postsPage'));
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <div className="App">
          <PostsPage/>
        </div>
    </Suspense>
  );
}

export default App;
