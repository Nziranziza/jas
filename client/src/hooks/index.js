import { useQuery } from "react-query"

import { getAllApplications } from "../services";

export function useApplications() {
  const { data, isLoading, error, refetch } = useQuery(
    "get-applications",
    getAllApplications
  );

  return {
    data: data?.data ?? [],
    isLoading,
    error,
    refetch
  }
}