export enum PriorityEnum {
  Urgent = "Urgent",
  High = "High",
  Medium = "Medium",
  Low = "Low",
  Backlog = "Backlog",
}

export enum StatusEnum {
  ToDo = "To Do",
  WorkInProgress = "Work In Progress",
  UnderReview = "Under Review",
  Completed = "Completed",
}

export interface UserType {
  userId?: number;
  username: string;
  email: string;
  profilePictureUrl?: string;
  cognitoId?: string;
  teamId?: number;
}

export interface ProjectType {
  id: number;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
}

export interface AttachmentType {
  id: number;
  fileURL: string;
  fileName: string;
  taskId: number;
  uploadedById: number;
}

export interface TeamType {
  teamId: number;
  teamName: string;
  productOwnerUserId?: number;
  projectManagerUserId?: number;
}

export interface CommentType {
  id: number;
  text: string;
  taskId: number;
  userId: number;
}

export interface TaskType {
  id: number;
  title: string;
  description?: string;
  status?: StatusEnum;
  priority?: PriorityEnum;
  tags?: string;
  startDate?: string;
  dueDate?: string;
  points?: number;
  projectId: number;
  authorUserId?: number;
  assignedUserId?: number;

  author?: UserType;
  assignee?: UserType;
  Comment?: CommentType[];
  Attachment?: AttachmentType[];
}

export interface SearchResultType {
  tasks?: TaskType[];
  projects?: ProjectType[];
  users?: UserType[];
}
