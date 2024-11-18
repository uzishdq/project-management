"use client";

import React from "react";
import { useAppSelector } from "@/lib/redux";
import { useGetProjectsQuery } from "@/state/api";
import { DisplayOption, Gantt, ViewMode } from "gantt-task-react";
import "gantt-task-react/dist/index.css";
import LoadingCom from "@/components/Loading";
import Error from "@/components/Error";
import Header from "@/components/Header";

type TaskTypeItems = "task" | "milestone" | "project";

export default function Timeline() {
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  const { data: projects, error, isLoading } = useGetProjectsQuery();

  const [displayOptions, setDisplayOptions] = React.useState<DisplayOption>({
    viewMode: ViewMode.Month,
    locale: "en-US",
  });

  const ganttTasks = React.useMemo(() => {
    return (
      projects?.map((project) => ({
        start: project.startDate ? new Date(project.startDate) : new Date(),
        end: project.endDate ? new Date(project.endDate) : new Date(),
        name: project.name,
        id: `Project-${project.id}`,
        type: "project" as TaskTypeItems,
        progress: 50,
        isDisabled: false,
      })) || []
    );
  }, [projects]);

  const handleViewModeChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setDisplayOptions((prev) => ({
      ...prev,
      viewMode: event.target.value as ViewMode,
    }));
  };

  if (isLoading) return <LoadingCom />;
  if (error || !projects) return <Error title="projects" />;

  return (
    <div className="max-w-full p-8">
      <header className="mb-4 flex items-center justify-between">
        <Header name="Projects Timeline" />
        <div className="relative inline-block w-64">
          <select
            className="focus:shadow-outline block w-full appearance-none rounded border border-gray-400 bg-white px-4 py-2 pr-8 leading-tight shadow hover:border-gray-500 focus:outline-none dark:border-dark-secondary dark:bg-dark-secondary dark:text-white"
            value={displayOptions.viewMode}
            onChange={handleViewModeChange}
          >
            <option value={ViewMode.Day}>Day</option>
            <option value={ViewMode.Week}>Week</option>
            <option value={ViewMode.Month}>Month</option>
          </select>
        </div>
      </header>
      <div className="overflow-hidden rounded-md bg-white shadow dark:bg-dark-secondary dark:text-white">
        <div className="timeline">
          <Gantt
            {...displayOptions}
            tasks={ganttTasks}
            columnWidth={displayOptions.viewMode === ViewMode.Month ? 150 : 100}
            listCellWidth="100px"
            projectBackgroundColor={isDarkMode ? "#101214" : "#1f2937"}
            projectProgressColor={isDarkMode ? "#1f2937" : "#aeb8c2"}
            projectProgressSelectedColor={isDarkMode ? "#000" : "#9ba1a6"}
          />
        </div>
      </div>
    </div>
  );
}
