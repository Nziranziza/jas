import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect } from "react";

import { ApplicationCard } from "../../components";
import { useApplications } from "../../hooks";
import { updateApplication } from "../../services";

import "./styles.scss";

export function Home() {
  const { data, isLoading, refetch, error } = useApplications();

  useEffect(() => {
    if (error) {
      toast.error("Something went wrong failed to load applications");
    }
  }, [error]);

  const onStatusChange = async (id, status) => {
    try {
      await updateApplication(id, {
        status,
      });
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="home">
      <h1>Simple Job Application</h1>
      {isLoading && <span>Loading...</span>}
      {!isLoading && !data.length && (
        <span>No application found!</span>
      )}
      <div className="flex-1">
        {data.map(({ id, name, cvUrl, status }, index) => (
          <ApplicationCard
            key={index}
            name={name}
            cvUrl={cvUrl}
            status={status}
            onStatusChange={(status) => onStatusChange(id, status)}
            id={id}
          />
        ))}
      </div>
      <footer>
        <Link to="/new-application">New Application</Link>
      </footer>
    </div>
  );
}
