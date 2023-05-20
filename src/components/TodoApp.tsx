import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunk_updateTodoMultiple } from "../redux/todosSlice";
import { thunk_updateMultipleTags } from "../redux/tagsSlice";
import "./TodoApp.scss";
import { Todos } from "./Todos/Todos";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { AddTodo } from "./AddTodo/AddTodo";
import { AddTag } from "./AddTag/AddTag";
import { TasksRemaining } from "./TasksRemaining";
import "./homepage.css";
import "../css/common.css";

export const TodoApp = () => {
  //States
  const [showCompletedTodos, setShowCompletedTodos] = useState<boolean>(true);

  //Redux
  const dispatch: any = useDispatch();
  const { todos } = useSelector((state) => state.todos);

  //Effects
  useEffect(() => {
    //On init, try and get todos from local storage
    const todos = localStorage.getItem("todos");

    if (todos) {
      dispatch(thunk_updateTodoMultiple(JSON.parse(todos)));
    }

    const tags = localStorage.getItem("tags");
    if (tags) {
      dispatch(thunk_updateMultipleTags(JSON.parse(tags)));
    }
  }, []);

  return (
    <section className="content-wrapper">
      <div className="homepage">
        <div className="bg-gray">
          <div className="homepage-title main-center">
            <div className="title">
              <h1>The new home for uk nature carbon</h1>
              <p>
                Browse every British nature-based carbon project, all in one
                place.
              </p>
              <a
                href="https://web.kana.earth/p/projects"
                className="button-visit"
              >
                Visit the directory
              </a>
            </div>
            <div className="gray-box">
              <img
                title="Kana Earth"
                id="d_banner-header"
                src="https://www.kana.earth/images/homepage/homepage-hero.webp"
              />
              <img
                title="Kana Earth"
                id="m_banner-header"
                src="https://www.kana.earth/images/homepage/homepage-hero.webp"
              />
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div className="homepage-statistical main-center">
            <div className="statistical-items">
              <h3>12</h3>
              <p>Project types</p>
            </div>
            <div className="statistical-items">
              <h3>1,750+</h3>
              <p>Projects</p>
            </div>
            <div className="statistical-items">
              <h3>5.6M+</h3>
              <p>Carbon units</p>
            </div>
          </div>
        </div>
        <div className="bg-gray">
          <div className="homepage-chart main-center">
            <span>The case for UK Nature Carbon offsetting</span>
            <div className="chart-title">
              <h2>CARBON OFFSETTING IS CRITICAL TO REACH NET ZERO</h2>
            </div>
            <div className="char-description">
              <div className="description-text">
                <p>
                  In order to reach net zero targets the UK government and
                  corporates will have to work to reduce their emissions,
                  whether direct and indirect, as much as possible. However,
                  some emissions will be hard to abate.
                </p>
              </div>
              <div className="description-text">
                <p>
                  For those emissions that can’t be avoided the carbon must be
                  offset, and based on current government projections we will
                  need hundreds of millions of tonnes of CO2e reductions per
                  year to do this.
                </p>
              </div>
            </div>
            <div className="line-chart">
              <img
                id="d_chart_mobile"
                src="/images/homepage/uk-carbon-emissions.svg"
              />
            </div>
            <div className="chart-note">
              <p>
                This data is sourced from the governments energy and emissions
                projections:
                <a href="https://www.gov.uk/government/publications/energy-and-emissions-projections-net-zero-strategy-baseline-partial-interim-update-december-2021">
                  Net Zero Strategy baseline
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
