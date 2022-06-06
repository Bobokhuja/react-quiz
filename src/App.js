import Layout from './hoc/Layout/Layout'
import {Routes, Route} from 'react-router-dom'
import Quiz from './containers/Quiz/Quiz'
import QuizList from './containers/QuizList/QuizList'
import QuizCreator from './containers/QuizCreator/QuizCreator'
import Auth from './containers/Auth/Auth'

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path={'/auth'} element={<Auth />} />
          <Route path={'/quiz-creator'} element={<QuizCreator />} />
          <Route path={'/quiz/:id'} element={<Quiz />} />
          <Route path={'/'} element={<QuizList />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App