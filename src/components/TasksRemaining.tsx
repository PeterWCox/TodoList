export interface ITasksRemainingProps {
  count: number;
}

export const TasksReamaining = (props: ITasksRemainingProps) => {
  const taskOrTasks = props.count === 1 ? "task" : "tasks";
  const message = `You have ${props.count} ${taskOrTasks} remaining`;

  return <h4>{message}</h4>;
};
