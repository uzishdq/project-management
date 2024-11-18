"use client";

import React from "react";
import { useSearchQuery } from "@/state/api";
import { debounce } from "lodash";
import LoadingCom from "@/components/Loading";
import Error from "@/components/Error";
import Header from "@/components/Header";
import { Input } from "@mui/material";
import TaskCard from "@/components/TaskCard";
import ProjectCard from "@/components/project/ProjectCard";
import UserCard from "@/components/UserCard";

export default function Search() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const {
    data: searchResults,
    isLoading,
    isError,
  } = useSearchQuery(searchTerm, {
    skip: searchTerm.length < 3,
  });

  const handleSearch = debounce(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
    },
    500,
  );
  React.useEffect(() => {
    return handleSearch.cancel;
  }, [handleSearch.cancel]);

  if (isLoading) return <LoadingCom />;
  if (isError) return <Error title="data" />;

  return (
    <div className="max-w-full p-8">
      <header className="mb-4 flex items-center justify-between">
        <Header name="Projects Timeline" />
        <Input
          type="text"
          placeholder="Search..."
          className="w-full rounded border p-3 shadow"
          onChange={handleSearch}
        />
      </header>
      <div className="p-5">
        {!isLoading && !isError && searchResults && (
          <div>
            {searchResults.tasks && searchResults.tasks.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold dark:text-white">Tasks</h2>
                <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 xl:grid-cols-4">
                  {searchResults.tasks?.map((task) => (
                    <TaskCard key={task.id} task={task} />
                  ))}
                </div>
              </div>
            )}
            {searchResults.projects && searchResults.projects.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold dark:text-white">
                  Projects
                </h2>
                <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 xl:grid-cols-4">
                  {searchResults.projects?.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </div>
            )}
            {searchResults.users && searchResults.users.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold dark:text-white">Users</h2>
                <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 xl:grid-cols-4">
                  {searchResults.users?.map((user) => (
                    <UserCard key={user.userId} user={user} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
