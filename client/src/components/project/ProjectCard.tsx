import { ProjectType } from "@/lib/types/project";
import { format } from "date-fns";
import React from "react";

type ProjectCardProps = {
  project: ProjectType;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="mb-3 rounded bg-white p-4 shadow dark:bg-dark-secondary dark:text-white">
      <div className="px-4 sm:px-0">
        <h3 className="text-base/7 font-semibold text-gray-900 dark:text-white">
          {project.name}
        </h3>
        <p className="mt-1 max-w-2xl text-sm/6 text-gray-500 dark:text-neutral-400">
          {project.description || "No description provided"}
        </p>
      </div>
      <div className="mt-2 border-t border-gray-100 dark:border-stroke-dark">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900 dark:text-white">
              Start Date
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-700 dark:text-neutral-400 sm:col-span-2 sm:mt-0">
              {project.startDate
                ? format(new Date(project.startDate), "P")
                : "Not set"}
            </dd>
          </div>
          <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900 dark:text-white">
              Due Date
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-700 dark:text-neutral-400 sm:col-span-2 sm:mt-0">
              {project.endDate
                ? format(new Date(project.endDate), "P")
                : "Not set"}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
