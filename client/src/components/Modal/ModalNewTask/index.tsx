import React from "react";
import { useCreateTaskMutation } from "@/state/api";
import { formatISO } from "date-fns";
import Modal from "@/components/Modal";
import { inputStyles, selectStyles } from "@/lib/utils";

enum PriorityEnum {
  Urgent = "Urgent",
  High = "High",
  Medium = "Medium",
  Low = "Low",
  Backlog = "Backlog",
}

enum StatusEnum {
  ToDo = "To Do",
  WorkInProgress = "Work In Progress",
  UnderReview = "Under Review",
  Completed = "Completed",
}

type ModalNewTaskProps = {
  isOpen: boolean;
  onClose: () => void;
  id?: string | null;
};

export default function ModalNewTask({
  isOpen,
  onClose,
  id,
}: ModalNewTaskProps) {
  const [createTask, { isLoading }] = useCreateTaskMutation();
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [status, setStatus] = React.useState<StatusEnum>(StatusEnum.ToDo);
  const [priority, setPriority] = React.useState<PriorityEnum>(
    PriorityEnum.Backlog,
  );
  console.log(id);

  const [tags, setTags] = React.useState("");
  const [startDate, setStartDate] = React.useState("");
  const [dueDate, setDueDate] = React.useState("");
  const [authorUserId, setAuthorUserId] = React.useState("");
  const [assignedUserId, setAssignedUserId] = React.useState("");
  const [projectId, setProjectId] = React.useState("");

  const handleSubmit = async () => {
    if (!title || !authorUserId || !(id !== null || projectId)) return;

    const formattedStartDate = formatISO(new Date(startDate), {
      representation: "complete",
    });
    const formattedDueDate = formatISO(new Date(dueDate), {
      representation: "complete",
    });

    await createTask({
      title,
      description,
      status,
      priority,
      tags,
      startDate: formattedStartDate,
      dueDate: formattedDueDate,
      authorUserId: parseInt(authorUserId),
      assignedUserId: parseInt(assignedUserId),
      projectId: id !== null ? Number(id) : Number(projectId),
    });
  };

  const isFormValid = () => {
    return title && authorUserId && !(id !== null || projectId);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} name="Create New Task">
      <form
        className="mt-4 space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input
          type="text"
          className={inputStyles}
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className={inputStyles}
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-2">
          <select
            className={selectStyles}
            value={status}
            onChange={(e) =>
              setStatus(StatusEnum[e.target.value as keyof typeof StatusEnum])
            }
          >
            <option value="">Select Status</option>
            <option value={StatusEnum.ToDo}>To Do</option>
            <option value={StatusEnum.WorkInProgress}>Work In Progress</option>
            <option value={StatusEnum.UnderReview}>Under Review</option>
            <option value={StatusEnum.Completed}>Completed</option>
          </select>
          <select
            className={selectStyles}
            value={priority}
            onChange={(e) =>
              setPriority(
                PriorityEnum[e.target.value as keyof typeof PriorityEnum],
              )
            }
          >
            <option value="">Select Priority</option>
            <option value={PriorityEnum.Urgent}>Urgent</option>
            <option value={PriorityEnum.High}>High</option>
            <option value={PriorityEnum.Medium}>Medium</option>
            <option value={PriorityEnum.Low}>Low</option>
            <option value={PriorityEnum.Backlog}>Backlog</option>
          </select>
        </div>
        <input
          type="text"
          className={inputStyles}
          placeholder="Tags (comma separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-2">
          <input
            type="date"
            className={inputStyles}
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <input
            type="date"
            className={inputStyles}
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <input
          type="text"
          className={inputStyles}
          placeholder="Author User ID"
          value={authorUserId}
          onChange={(e) => setAuthorUserId(e.target.value)}
        />
        <input
          type="text"
          className={inputStyles}
          placeholder="Assigned User ID"
          value={assignedUserId}
          onChange={(e) => setAssignedUserId(e.target.value)}
        />
        {id === null && (
          <input
            type="text"
            className={inputStyles}
            placeholder="ProjectId"
            value={projectId}
            onChange={(e) => setProjectId(e.target.value)}
          />
        )}
        <button
          type="submit"
          className={`focus-offset-2 mt-4 flex w-full justify-center rounded-md border border-transparent bg-blue-primary px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 ${
            !isFormValid() || isLoading ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={!isFormValid() || isLoading}
        >
          {isLoading ? "Creating..." : "Create Task"}
        </button>
      </form>
    </Modal>
  );
}
