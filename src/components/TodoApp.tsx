import './global.css'
import './PublicTemplate.css'
import '../css/grid.css'
import './DataFilter.css'
import './ProjectsHeader.css'
import './Divider.css'

import { Searchbar } from '../lib/Searchbar/Searchbar'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { thunk_updateTodoMultiple } from '../redux/todosSlice'
import './TodoApp.scss'
import { Todos } from './Todos/Todos'

export const TodoApp = () => {
    //States
    const [showCompletedTodos, setShowCompletedTodos] = useState<boolean>(true)

    //Redux
    const dispatch: any = useDispatch()
    const { todos } = useSelector((state) => state.todos)

    //Effects
    useEffect(() => {
        //On init, try and get todos from local storage
        const todos = localStorage.getItem('todos')

        if (todos) {
            dispatch(thunk_updateTodoMultiple(JSON.parse(todos)))
        }
    }, [])

    return (
        <div className="PublicTemplate">
            <div className="PublicTemplateContent">
                {/* Header */}
                <div className="Row Row_spacing_2xl">
                    <div className="Column Column_span_12 ProjectsHeader">
                        {/* Title */}
                        <h1>Todo List</h1>

                        {/* Blurb */}
                        <h2>Start your day off right!</h2>
                    </div>
                </div>
                {/* Spacer */}
                <div className="Row Row_spacing_ll">
                    <div className="Column Column_span_12">
                        <div className=" Divider_horizontal"></div>
                    </div>
                </div>
                {/* Filters + Contnt */}
                <div className="DataFilter">
                    {/* Filters Panel */}
                    <div className="DataFilterFilters">
                        {/* Header */}
                        <div className="Row Row_spacing_ml Justify_between Align_center DataFilterFiltersHeader">
                            {/* Filter Label */}
                            <div className="Column Column_span_6">
                                <h3>Filter</h3>
                            </div>

                            {/* Clear filters */}
                            <div className="Column Column_span_6 DataFilterFiltersHeaderClear">
                                <button
                                    className="Button Button_secondary Button_medium Button_content_medium"
                                    type="button"
                                >
                                    <span>Clear all</span>
                                </button>
                            </div>
                        </div>

                        {/* Searchbar */}
                        <div className="Row Row_spacing_l">
                            <div className="Column Column_span_12">
                                <div className="DataFilterContainer">
                                    <Searchbar />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="DataFilterContent">
                        {/* Todos Left  */}
                        <div className="ProjectsSearchContentHeader">
                            {/* <h3>{esults</h3> */}
                        </div>

                        {/* Todos */}
                        <Todos showCompletedTodos={showCompletedTodos} />
                    </div>
                </div>
            </div>
        </div>
    )
}
