import { Typography } from "@mui/material";

export interface ITasksRemainingProps {
  count: number;
}

export const TasksRemaining = (props: ITasksRemainingProps) => {
  const taskOrTasks = props.count === 1 ? "task" : "tasks";
  return (
    <Typography variant="h5" gutterBottom>
      {`You have ${props.count} ${taskOrTasks} remaining`}
    </Typography>
  );
};
