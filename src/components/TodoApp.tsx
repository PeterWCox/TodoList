import { useEffect, useState } from 'react'
import { StringParam, useQueryParam } from 'use-query-params'
import { Button } from '../lib/Button/Button'
import { Divider } from '../lib/Divider/Divider'
import { Searchbar } from '../lib/Searchbar/Searchbar'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import {
    addExampleTodos,
    addTodo,
    loadTodos,
    sortAlphabetically,
} from '../redux/todoSlice'
import { TodoUtils } from '../utils/TodoUtils'
import './TodoApp.css'
import { Todos } from './Todos/Todos'

export const TodoApp = () => {
    //QP's
    const [searchQuery, setSearchQuery] = useQueryParam('q', StringParam)

    //States
    const [showCompletedTodos, setShowCompletedTodos] = useState(true)

    //Hooks
    const todos = useAppSelector((state) =>
        TodoUtils.getTodosFilteredBySearchterm(state.todos.todos, searchQuery)
    )
    const completedTodos = useAppSelector((state) =>
        TodoUtils.getTodosFilteredBySearchterm(
            state.todos.completedTodos,
            searchQuery
        )
    )
    const dispatch = useAppDispatch()

    //Effects
    useEffect(() => {
        //On init, try and get todos from local storage
        dispatch(loadTodos())
    }, [])

    //Handlers
    const handleSearch = (value) => setSearchQuery(value)
    const handleExampleTodos = () => dispatch(addExampleTodos())
    const handleSortAlphabetically = () => dispatch(sortAlphabetically())
    const handleClearFilters = () => setSearchQuery('')

    return (
        <div className="Todo">
            <div className="TodoContent">
                {/* Header */}
                <div className="Row Row_spacing_2xl">
                    <div className="Column Column_span_12 TodoHeader">
                        {/* Title */}
                        <h1>Todo List</h1>

                        {/* Blurb */}
                        <h2>Start your day off right!</h2>

                        {/* Test Button */}
                        <div
                            style={{
                                display: 'flex',
                                gap: '1rem',
                            }}
                        >
                            <Button
                                text={'Add example todos'}
                                onClick={handleExampleTodos}
                                type={'primary'}
                            />
                            <Button
                                text={'Add todo'}
                                type={'tertiary'}
                                onClick={() => {
                                    dispatch(addTodo())
                                }}
                            />
                            <Button
                                text={'Delete all'}
                                type={'danger'}
                                onClick={() => {
                                    dispatch(addTodo())
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* Spacer */}
                <div className="Row Row_spacing_ll">
                    <div className="Column Column_span_12">
                        <Divider />
                    </div>
                </div>

                <div className="DataFilter">
                    {/* Filters Panel */}
                    <div className="DataFilterFilters">
                        {/* Header */}
                        <div className="Row Row_spacing_ml Justify_between Align_center DataFilterFiltersHeader">
                            {/* Filter Label */}
                            <div className="Column Column_span_6">
                                <h3>Filters</h3>
                            </div>

                            {/* Clear filters */}
                            <div className="Column Column_span_6 DataFilterFiltersHeaderClear">
                                <button
                                    className="Button Button_secondary Button_medium Button_content_medium"
                                    type="button"
                                    onClick={handleClearFilters}
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

                        <code>{JSON.stringify(todos, null, 2)}</code>
                    </div>
                    <div className="DataFilterContent">
                        {/* Todos */}
                        <div className="Row Row_spacing_l">
                            <div className="Column Column_span_12">
                                <div className="DataFilterContainer">
                                    <div className="Row Row_spacing_l Justify_between Align_center">
                                        {/* Counter */}
                                        {/* <h3>{`You have ${
                                            todos.length
                                        } ${StringUtils.getSingularOrPlural(
                                            todos.length,
                                            'task'
                                        )} to complete`}</h3> */}

                                        <Button
                                            text={'Sort A-Z'}
                                            onClick={handleSortAlphabetically}
                                            type={'primary'}
                                            size={'small'}
                                        />
                                    </div>

                                    {/* Todos */}
                                    <Todos todos={todos} type="todos" />
                                </div>
                            </div>
                        </div>

                        {/* Completed */}
                        {showCompletedTodos ? (
                            <div className="Row Row_spacing_l">
                                <div className="Column Column_span_12">
                                    <div className="DataFilterContainer">
                                        <h3>Completed</h3>
                                        <Todos
                                            todos={completedTodos}
                                            type="completedTodos"
                                        />
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
