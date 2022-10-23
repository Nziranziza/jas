import cx from "classnames";
import "./styles.scss";

export function Input({ error, ...props }) {
  return (
    <div
      className={cx("input", {
        error,
      })}
    >
      <input {...props} />
      <span className="error">{error}</span>
    </div>
  );
}
