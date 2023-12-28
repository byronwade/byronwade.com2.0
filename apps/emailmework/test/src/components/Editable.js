"use client";
import React, { useState, useRef } from "react";
import { XCircleIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

const Editable = ({
	elementType = "div",
	children,
	position, // to track position
	onContentChange,
	className,
}) => {
	const [isEditing, setIsEditing] = useState(false);
	const [content, setContent] = useState(children);
	const elementRef = useRef(null);

	const Element = elementType;

	const sanitizeContent = (content) => {
		const tempDiv = document.createElement("div");
		tempDiv.innerHTML = content;
		return tempDiv.textContent || tempDiv.innerText || "";
	};

	const handleSave = () => {
		let plainText = elementRef.current.innerText;

		// Determine action type
		const actionType = content === "" ? "addition" : plainText === "" ? "deletion" : "modification";

		// Sanitize input
		plainText = sanitizeContent(plainText);

		// Convert attributes to object
		const attributes = Array.from(elementRef.current.attributes).reduce((obj, attr) => {
			obj[attr.name] = attr.value;
			return obj;
		}, {});

		// Construct change details
		const changeDetails = {
			position: position,
			previousContent: children,
			newContent: plainText,
			timestamp: new Date().toISOString(),
			actionType: actionType,
			elementAttributes: attributes, // Using the converted attributes
		};

		// Update states
		setContent(plainText);
		onContentChange(changeDetails);

		// Exit editing mode
		setIsEditing(false);
	};

	const handleCancel = () => {
		setIsEditing(false);
		setContent(children);
	};

	const editingStyles = isEditing ? "rounded border border-blue-600 bg-transparent -m-[1px] focus:outline-none" : "";

	return (
		<span className={`relative ${className} ${editingStyles}`} ref={elementRef} contentEditable={isEditing} suppressContentEditableWarning={true} onBlur={handleSave} onClick={() => setIsEditing(true)}>
			{children}
			{isEditing && (
				<div className="absolute right-0 top-0 mr-2 mt-2 flex gap-2">
					<CheckCircleIcon
						className="h-6 w-6 cursor-pointer text-green-500 hover:text-green-700"
						onMouseDown={(e) => {
							e.preventDefault();
							handleSave();
						}}
					/>
					<XCircleIcon
						className="h-6 w-6 cursor-pointer text-red-500 hover:text-red-700"
						onMouseDown={(e) => {
							e.preventDefault();
							handleCancel();
						}}
					/>
				</div>
			)}
		</span>
	);
};

export default Editable;
