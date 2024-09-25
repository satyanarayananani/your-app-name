import React, { useState } from 'react';

const dummyData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', age: 28 },
  { id: 2, name: 'Jane Doe', email: 'jane@example.com', age: 26 },
  { id: 3, name: 'Alice Johnson', email: 'alice@example.com', age: 32 },
];

const CrudTable = () => {
  const [data, setData] = useState(dummyData);
  const [formData, setFormData] = useState({ id: '', name: '', email: '', age: '' });
  const [isEditing, setIsEditing] = useState(false);

  // Add new item
  const addData = () => {
    setData([...data, { ...formData, id: data.length + 1 }]);
    setFormData({ id: '', name: '', email: '', age: '' });
  };

  // Update existing item
  const updateData = () => {
    setData(data.map(item => (item.id === formData.id ? formData : item)));
    setFormData({ id: '', name: '', email: '', age: '' });
    setIsEditing(false);
  };

  // Delete item
  const deleteData = (id) => {
    setData(data.filter(item => item.id !== id));
  };

  // Edit item
  const editData = (item) => {
    setIsEditing(true);
    setFormData(item);
  };

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-2xl font-bold mb-5">CRUD Table</h2>

      {/* Form */}
      <div className="mb-5">
        <input
          type="text"
          placeholder="Name"
          className="border rounded p-2 mr-2"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="border rounded p-2 mr-2"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="number"
          placeholder="Age"
          className="border rounded p-2 mr-2"
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
        />
        <button
          onClick={isEditing ? updateData : addData}
          className="bg-blue-500 text-white p-2 rounded"
        >
          {isEditing ? 'Update' : 'Add'}
        </button>
      </div>

      {/* Table */}
      <table className="min-w-full border-collapse block md:table">
        <thead className="block md:table-header-group">
          <tr className="border border-gray-300 md:border-none block md:table-row">
            <th className="p-2 bg-gray-200 text-left block md:table-cell">Name</th>
            <th className="p-2 bg-gray-200 text-left block md:table-cell">Email</th>
            <th className="p-2 bg-gray-200 text-left block md:table-cell">Age</th>
            <th className="p-2 bg-gray-200 text-left block md:table-cell">Actions</th>
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          {data.map((item) => (
            <tr
              key={item.id}
              className="bg-gray-100 border border-gray-300 md:border-none block md:table-row"
            >
              <td className="p-2 block md:table-cell">{item.name}</td>
              <td className="p-2 block md:table-cell">{item.email}</td>
              <td className="p-2 block md:table-cell">{item.age}</td>
              <td className="p-2 block md:table-cell">
                <button
                  onClick={() => editData(item)}
                  className="bg-yellow-500 text-white p-1 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteData(item.id)}
                  className="bg-red-500 text-white p-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;
