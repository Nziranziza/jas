import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import moment from "moment";

import "./styles.scss";
import { useApplication } from "../../hooks";
import { applicationStatuses } from "../../constants";
import { updateApplication } from "../../services";

export function ApplicationDetails() {
  const { id } = useParams();
  const { data = {}, isLoading, error, refetch } = useApplication(id);
  const [status, setStatus] = useState(data.status);

  useEffect(() => {
    if (error) {
      toast.error("Something went wrong, failed to load an application");
    }
  }, [error]);

  useEffect(() => {
    setStatus(data.status)
  }, [data])

  const onSelect = async (e) => {
    try {
      setStatus(e.target.value);
      await updateApplication(id, {
        status: e.target.value,
      });
      refetch();
      toast.success(`Application status changed to ${e.target.value}`);
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="application-details">
      <h1>Application details</h1>
      {isLoading ? (
        <span>Loading...</span>
      ) : error ? (
        <span>Application not found!</span>
      ) : (
        <div>
          <div className="detail-item">
            <span className="label">Applicant Name:</span>
            <span>{data.name}</span>
          </div>
          <div className="detail-item">
            <span className="label">CV:</span>
            <a href={data.cvUrl}>{data.cvUrl}</a>
          </div>
          <div className="detail-item">
            <span className="label">Status:</span>
            <select value={status} onChange={onSelect}>
              {applicationStatuses.map((stat) => (
                <option key={stat} value={stat}>
                  {stat}
                </option>
              ))}
            </select>
          </div>
          <div>
            <span className="label">Last updated:</span>
            <span>{moment(data.updatedAt).fromNow()}</span>
          </div>
        </div>
      )}
    </div>
  );
}
