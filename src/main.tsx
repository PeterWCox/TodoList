import ReactDOM from 'react-dom/client'
import './css/global.css'
import { TodoApp } from './components/TodoApp'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { Header } from './layouts/header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6'

const element = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(element)

root.render(
    <BrowserRouter>
        <QueryParamProvider adapter={ReactRouter6Adapter}>
            <Provider store={store}>
                <Header />
                <Routes>
                    <Route path="/" element={<TodoApp />} />
                </Routes>
            </Provider>
        </QueryParamProvider>
    </BrowserRouter>
)
