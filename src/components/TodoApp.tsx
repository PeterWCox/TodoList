import { Searchbar } from '../lib/Searchbar/Searchbar'
import { useEffect, useState } from 'react'
import './TodoApp.css'
import { Todos } from './Todos/Todos'
import {
    addExampleTodos,
    addTodo,
    updateMultipleTodos,
} from '../redux/todoSlice'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { StringUtils } from '../utils/StringUtils'
import { Button } from '../lib/Button/Button'
import { TodoUtils } from '../utils/TodoUtils'
import { StringParam, useQueryParam } from 'use-query-params'

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
        const todos = localStorage.getItem('todos')

        if (todos) {
            dispatch(updateMultipleTodos(JSON.parse(todos)))
        }
    }, [])

    //Handlers
    const handleSearch = (value) => setSearchQuery(value)
    const handleExampleTodos = () => dispatch(addExampleTodos())
    const handleClearFilters = () => {
        setSearchQuery('')
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

                        {/* Test Button */}
                        <div>
                            <Button
                                text={'Add example todos'}
                                onClick={handleExampleTodos}
                                type={'primary'}
                                size={'small'}
                            />
                        </div>
                    </div>
                </div>

                {/* Spacer */}
                <div className="Row Row_spacing_ll">
                    <div className="Column Column_span_12">
                        <div className=" Divider_horizontal"></div>
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
                                    <div className="Row Row_spacing_l Justify_between Align_center">
                                        {/* Counter */}
                                        <h3>{`You have ${
                                            todos.length
                                        } ${StringUtils.getSingularOrPlural(
                                            todos.length,
                                            'task'
                                        )} to complete`}</h3>

                                        <Button
                                            text={'Sort A-Z'}
                                            onClick={() =>
                                                setShowCompletedTodos(
                                                    !showCompletedTodos
                                                )
                                            }
                                            type={'primary'}
                                            size={'small'}
                                        />
                                    </div>

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
