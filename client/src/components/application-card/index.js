import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import "./style.scss";
import { applicationStatuses } from '../../constants';

export function ApplicationCard({ id, name, cvUrl, status, onStatusChange = () => {} }) {
  const [_status, setStatus] = useState(status);
  const navigate = useNavigate();

  const onSelect = (e) => {
    setStatus(e.target.value)
    onStatusChange(e.target.value)
  }

  const onClick = () => {
    navigate(`applications/${id}`)
  }

  return (
    <div className="application-card" onClick={onClick}>
      <div className="application-item">
        <span className="label">Applicant name:</span>
        <span>{name}</span>
      </div>
      <div className="application-item">
        <span className="label">CV:</span>
        <a href={cvUrl} target="_blank" rel="noreferrer">{cvUrl}</a>
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
