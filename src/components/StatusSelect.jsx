import React from "react";

export function StatusSelect({ status, onStatusChange }) {
    return (
        <select
            value={status}
            onChange={(e) => onStatusChange(e.target.value)}
            className="px-3 py-1 border rounded-md text-sm"
        >
            <option value="want-to-read">Want to Read</option>
            <option value="reading">Reading</option>
            <option value="completed">Completed</option>
        </select>
    );
}

export default StatusSelect;
