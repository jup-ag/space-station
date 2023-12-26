import clsx from "clsx";
import React from "react";

export const Skeleton = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <div
      style={style}
      className={clsx(
        "w-full h-12 bg-gray-300 rounded-lg animate-shine-reverse bg-skeleton dark:bg-skeleton-dark bg-200-auto",
        className
      )}
    />
  );
};

export const RowSkeleton = () => {
  return (
    <div className="flex items-center justify-between w-full h-12 px-6 py-3 rounded-lg">
      <Skeleton className="w-[45%] max-w-[200px] !h-[30px]" />
      <Skeleton className="w-[45%] max-w-[150px] !h-[30px]" />
    </div>
  );
};
