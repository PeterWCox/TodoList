import { Searchbar } from '../lib/Searchbar/Searchbar'
import { useEffect, useState } from 'react'
import './TodoApp.css'
import { Todos } from './Todos/Todos'
import { addTodo, updateMultipleTodos } from '../redux/todoSlice'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { StringUtils } from '../utils/StringUtils'
import { Button } from '../lib/Button/Button'

export const TodoApp = () => {
    //States
    const [searchQuery, setSearchQuery] = useState('')
    const [showCompletedTodos, setShowCompletedTodos] = useState(true)

    //Hooks
    const todos = useAppSelector((state) =>
        searchQuery.trim() === ''
            ? state.todos.todos.filter((todo) => !todo.isCompleted)
            : state.todos.todos
                  .filter((todo) => !todo.isCompleted)
                  .filter((todo) =>
                      todo.title
                          .toLowerCase()
                          .includes(searchQuery.toLowerCase())
                  )
    )

    const completedTodos = useAppSelector((state) =>
        searchQuery.trim() === ''
            ? state.todos.todos.filter((todo) => todo.isCompleted)
            : state.todos.todos
                  .filter((todo) => todo.isCompleted)
                  .filter((todo) =>
                      todo.title
                          .toLowerCase()
                          .includes(searchQuery.toLowerCase())
                  )
    )

    const dispatch = useAppDispatch()

    //Effects
    useEffect(() => {
        //On init, try and get todos from local storage
        const todos = localStorage.getItem('todos')

        if (todos) {
            dispatch(updateMultipleTodos(JSON.parse(todos)))
        }
    }, [])

    //Handlers
    const handleSearch = (value) => {
        setSearchQuery(value)
    }

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
                                    <Searchbar
                                        value={searchQuery}
                                        placeholder={'Search todos'}
                                        onChange={handleSearch}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="DataFilterContent">
                        {/* Todos */}
                        <div className="Row Row_spacing_l">
                            <div className="Column Column_span_12">
                                <div className="DataFilterContainer">
                                    {/* Counter */}
                                    <h3>{`You have ${
                                        todos.length
                                    } ${StringUtils.getSingularOrPlural(
                                        todos.length,
                                        'task',
                                        'tasks'
                                    )} to complete`}</h3>

                                    {/* Todos */}
                                    <Todos todos={todos} />

                                    {/* Create todo */}
                                    <div className="Row Row_spacing_l Justify_center">
                                        <div className="Column Column_span_12">
                                            <Button
                                                text={'Add todo'}
                                                type={'primary'}
                                                size={'small'}
                                                onClick={() => {
                                                    dispatch(addTodo())
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Completed */}
                        {showCompletedTodos ? (
                            <div className="Row Row_spacing_l">
                                <div className="Column Column_span_12">
                                    <div className="DataFilterContainer">
                                        <h3>Completed</h3>
                                        <Todos todos={completedTodos} />
                                    </div>
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    )
}
