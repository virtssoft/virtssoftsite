
import React from 'react';

export const Skeleton: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`bg-[#1a1a1a] animate-pulse rounded-md ${className}`}></div>
);

export const HomeSkeleton: React.FC = () => (
  <div className="space-y-12 p-8">
    <Skeleton className="h-[70vh] w-full rounded-2xl" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Skeleton className="h-96" />
      <Skeleton className="h-96" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Skeleton className="h-48" />
      <Skeleton className="h-48" />
      <Skeleton className="h-48" />
      <Skeleton className="h-48" />
    </div>
  </div>
);
