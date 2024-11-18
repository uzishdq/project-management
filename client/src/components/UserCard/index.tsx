import { UserType } from "@/lib/types/project";
import Image from "next/image";
import React from "react";

type UserCardProps = {
  user: UserType;
};
export default function UserCard({ user }: UserCardProps) {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      <li key={user.email} className="flex justify-between gap-x-6 py-5">
        <div className="flex min-w-0 gap-x-4">
          <Image
            alt=""
            src={`/profile/${user.profilePictureUrl}`}
            className="size-12 flex-none rounded-full bg-gray-50"
            width={12}
            height={12}
          />
          <div className="min-w-0 flex-auto">
            <p className="text-sm/6 font-semibold text-gray-900 dark:text-white">
              {user.username}
            </p>
            <p className="mt-1 truncate text-xs/5 text-gray-900 dark:text-white">
              {user.email}
            </p>
          </div>
        </div>
      </li>
    </ul>
  );
}
