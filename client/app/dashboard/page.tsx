"use client";

import { useCurrentUser } from "@/hooks/use-auth";
import { User } from "lucide-react";
import React from "react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const DashboardPage = () => {
  const { data: user } = useCurrentUser();
  const displayName = user?.displayName || user?.githubUsername || "User";
  const initials = displayName
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <main className="flex min-h-svh items-start justify-end bg-background p-6">
      <Button
        type="button"
        variant="outline"
        className="gap-2.5 rounded-full pl-1.5 pr-3"
        aria-label={`Open ${displayName} profile`}
      >
        <Avatar size="sm">
          {user?.avatarUrl ? (
            <AvatarImage src={user.avatarUrl} alt={`${displayName} avatar`} />
          ) : null}
          <AvatarFallback>
            {initials || <User className="size-3.5" />}
          </AvatarFallback>
        </Avatar>
        <span className="max-w-32 truncate">{displayName}</span>
      </Button>
    </main>
  );
};

export default DashboardPage;
