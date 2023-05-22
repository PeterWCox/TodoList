import ReactDOM from 'react-dom/client'
import './css/global.css'
import { TodoApp } from './components/TodoApp'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { Header } from './layouts/header/header'

const element = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(element)

root.render(
    <Provider store={store}>
        <Header />
        <TodoApp />
    </Provider>
)
