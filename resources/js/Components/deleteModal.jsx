import React, { useState } from 'react';

function DeleteModal({ isOpen, onClose, onSubmit, itemId }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-1/3 p-6">
        <h3 className="text-lg font-semibold">Are you sure you want to delete?</h3>
        <p className="text-sm text-gray-600">This action cannot be undone.</p>
        <div className="mt-4">
          <button
            onClick={() => onSubmit(itemId)}
            className="px-4 py-2 bg-red-500 text-white rounded mr-2"
          >
            Delete
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-500 text-white rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
