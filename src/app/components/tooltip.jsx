import "./tooltip.css";
export default function ToolTip({ children, text }) {
  return (
    <div className="tooltip-container">
      <div className="tooltip-children">{children}</div>
      <div className="tooltip">
        <span>{text}</span>
      </div>
    </div>
  );
}
