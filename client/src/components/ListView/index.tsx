import { useGetTasksQuery } from "@/state/api";
import React from "react";
import Header from "../Header";
import TaskCard from "../TaskCard";
import { TaskType } from "@/lib/types/project";
import Error from "../Error";
import LoadingCom from "../Loading";

type ListViewProps = {
  id: string;
  setIsModalNewTaskOpen: (isOpen: boolean) => void;
};

export default function ListView({ id, setIsModalNewTaskOpen }: ListViewProps) {
  const {
    data: tasks,
    isLoading,
    isError,
  } = useGetTasksQuery({ projectId: Number(id) });

  if (isLoading) return <LoadingCom />;
  if (isError || !tasks) return <Error title="tasks" />;

  return (
    <div className="px-4 pb-8 xl:px-6">
      <div className="pt-5">
        <Header
          name="Project Tasks List"
          buttonComponent={
            <button
              className="flex items-center rounded bg-blue-primary px-3 py-2 text-white hover:bg-blue-600"
              onClick={() => setIsModalNewTaskOpen(true)}
            >
              Add Task
            </button>
          }
          isSmallText
        />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {tasks?.map((task: TaskType) => <TaskCard key={task.id} task={task} />)}
      </div>
    </div>
  );
}
