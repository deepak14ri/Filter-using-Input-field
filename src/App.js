import "./styles.css";
import React, { useState } from "react";

const data = [
  { id: 1, name: "Deepak Chaudhari", age: 28 },
  { id: 2, name: "Vivek Gupta", age: 26 },
  { id: 3, name: "Aarti Kumawat", age: 35 }
];

const FilteredData = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());

    const filteredResults = data.filter((item) => {
      const lowerCaseName = item.name.toLowerCase();
      return lowerCaseName.includes(e.target.value.toLowerCase());
    });
    setFilteredData(filteredResults);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name or age"
        value={searchTerm}
        onChange={handleSearch}
        style={{ marginBottom: "10px", padding: "5px" }}
      />

      {filteredData.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "5px"
          }}
        >
          <p>Name: {item.name}</p>
          <p>Age: {item.age}</p>
        </div>
      ))}
    </div>
  );
};

export default FilteredData;
