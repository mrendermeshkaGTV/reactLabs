import React from "react";

export function PropsFunction(prop1, prop2) {
    return (
        <div>Welcome student {prop1.name} of group name {prop1.groupName}. {prop2.todayDate}, {prop2.time}</div>
    )
}