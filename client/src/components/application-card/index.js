import { useState } from 'react';

import "./style.scss";

const applicationStatuses = ["pending", "dropped", "passed"];

export function ApplicationCard({ name, cvUrl, status, onStatusChange = () => {} }) {
  const [_status, setStatus] = useState(status);

  const onSelect = (e) => {
    setStatus(e.target.value)
    onStatusChange(e.target.value)
  }

  return (
    <div className="application-card">
      <div className="application-item">
        <span className="label">Applicant name:</span>
        <span>{name}</span>
      </div>
      <div className="application-item">
        <span className="label">CV:</span>
        <a href={cvUrl}>{cvUrl}</a>
      </div>
      <div>
        <span className="label">status:</span>
        <select value={_status} onChange={onSelect}>
          {applicationStatuses.map((stat) => (
            <option key={stat} value={stat}>
              {stat}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
