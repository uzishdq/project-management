import { TaskType } from "@/lib/types/project";
import { format } from "date-fns";
import { PaperclipIcon } from "lucide-react";
import React from "react";

type TaskCardProps = {
  task: TaskType;
};

export default function TaskCard({ task }: TaskCardProps) {
  const PriorityTag = ({ priority }: { priority: TaskType["priority"] }) => (
    <div
      className={`rounded px-2 py-1 text-xs font-semibold ${
        priority === "Urgent"
          ? "bg-red-200 text-red-700"
          : priority === "High"
            ? "bg-yellow-200 text-yellow-700"
            : priority === "Medium"
              ? "bg-green-200 text-green-700"
              : priority === "Low"
                ? "bg-blue-200 text-blue-700"
                : "bg-gray-200 text-gray-700"
      }`}
    >
      {priority}
    </div>
  );
  return (
    <div className="mb-3 rounded bg-white p-4 shadow dark:bg-dark-secondary dark:text-white">
      <div className="px-4 sm:px-0">
        <h3 className="text-base/7 font-semibold text-gray-900 dark:text-white">
          {task.title}
        </h3>
        <p className="mt-1 max-w-2xl text-sm/6 text-gray-500 dark:text-neutral-400">
          {task.description || "No description provided"}
        </p>
      </div>
      <div className="mt-2 border-t border-gray-100 dark:border-stroke-dark">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-4 dark:text-neutral-500 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900 dark:text-white">
              Priority
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              {task.priority && <PriorityTag priority={task.priority} />}
            </dd>
          </div>
          {/* <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">ID</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              {task.id}
            </dd>
          </div> */}
          <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900 dark:text-white">
              Status
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-700 dark:text-neutral-400 sm:col-span-2 sm:mt-0">
              {task.status}
            </dd>
          </div>
          <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900 dark:text-white">
              Tags
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-700 dark:text-neutral-400 sm:col-span-2 sm:mt-0">
              {task.tags || "No tags"}
            </dd>
          </div>
          <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900 dark:text-white">
              Start Date
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-700 dark:text-neutral-400 sm:col-span-2 sm:mt-0">
              {task.startDate
                ? format(new Date(task.startDate), "P")
                : "Not set"}
            </dd>
          </div>
          <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900 dark:text-white">
              Due Date
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-700 dark:text-neutral-400 sm:col-span-2 sm:mt-0">
              {task.dueDate ? format(new Date(task.dueDate), "P") : "Not set"}
            </dd>
          </div>
          <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900 dark:text-white">
              Author
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-700 dark:text-neutral-400 sm:col-span-2 sm:mt-0">
              {task.author ? task.author.username : "Unknown"}
            </dd>
          </div>
          <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900 dark:text-white">
              Assignee
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-700 dark:text-neutral-400 sm:col-span-2 sm:mt-0">
              {task.assignee ? task.assignee.username : "Unassigned"}
            </dd>
          </div>
          {task.Attachment && task.Attachment.length > 0 && (
            <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm/6 font-medium text-gray-900 dark:text-white">
                Attachments
              </dt>
              <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <ul
                  role="list"
                  className="divide-y divide-gray-100 rounded-md border border-gray-200"
                >
                  {task.Attachment && task.Attachment.length > 0 && (
                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm/6">
                      <div className="flex w-0 flex-1 items-center">
                        <PaperclipIcon
                          aria-hidden="true"
                          className="size-5 shrink-0 text-gray-400 dark:text-neutral-400"
                        />
                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                          <span className="truncate font-medium dark:text-white">
                            {task.Attachment[0].fileName}
                          </span>
                        </div>
                      </div>
                      <div className="ml-4 shrink-0">
                        <a
                          href="#"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Download
                        </a>
                      </div>
                    </li>
                  )}
                </ul>
              </dd>
            </div>
          )}
        </dl>
      </div>
    </div>
  );
}
