import ReactDOM from 'react-dom/client'
import './css/global.css'
import { TodoApp } from './components/TodoApp'
import { Provider } from 'react-redux'
import { Header } from './layouts/header/header'
import { store } from './redux/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <Header />
        <TodoApp />
    </Provider>
)
