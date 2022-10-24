import { useQuery } from "react-query"

import { getAllApplications, getApplication } from "../services";

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

export function useApplication(id) {
  const { data, isLoading, error, refetch } = useQuery(
    ['get-application', id],
    () => getApplication(id)
  );

  return {
    data: data?.data,
    isLoading,
    error,
    refetch
  }
}