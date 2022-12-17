import React, { useState } from "react";
import axios from "axios";

const CreateParkForm = () => {
  const [inputs, setInputs] = useState([]);

  const handleParkSubmit = async (e) => {
    e.preventDefault();
    if (
      !inputs.park_code ||
      !inputs.park_full_name ||
      !inputs.park_url ||
      !inputs.park_description ||
      !inputs.park_location ||
      !inputs.number_of_stamps
    ) {
      return;
    }

    try {
      setInputs({
        park_code: inputs.park_code,
        park_full_name: inputs.park_full_name,
        park_url: inputs.park_url,
        park_description: inputs.park_description,
        park_location: inputs.park_location,
        number_of_stamps: inputs.number_of_stamps,
      });
      const result = await axios.post(
        "http://localhost:3014/api/parks",
        inputs
      );
      alert(result.statusText);
      
      console.log(result);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  const handleCampgroundSubmit = async (e) => {
    e.preventDefault();
    if (
      !inputs.campgrounds_id ||
      !inputs.latitude ||
      !inputs.longitude ||
      !inputs.description ||
      !inputs.name
    ) {
      return;
    }

    try {
      setInputs({
        campgrounds_id: inputs.campgrounds_id,
        latitude: inputs.latitude,
        longitude: inputs.longitude,
        description: inputs.description,
        name: inputs.name,
      });
      const result = await axios.post(
        "http://localhost:3014/api/parks",
        inputs
      );
      alert(result.statusText);
      console.log(result);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  const handleActivitySubmit = async (e) => {
    e.preventDefault();
    if (!inputs.activity_id || !inputs.activity_name) {
      return;
    }

    try {
      setInputs({
        activity_id: inputs.activity_id,
        activity_name: inputs.activity_name,
      });
      const result = await axios.post(
        "http://localhost:3014/api/parks",
        inputs
      );
      alert(result.statusText);
      console.log(result);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  const handleInputChange = (e) => {
    e.persist();
    setInputs((inputs) => ({
      ...inputs,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form>
      <h2>Park Information</h2>
      <label>
        Park Code
        <input
          type="text"
          name="park_code"
          value={inputs.park_code}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Park Full Name
        <input
          type="text"
          name="park_full_name"
          value={inputs.park_full_name}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Park URL
        <input
          type="text"
          name="park_url"
          value={inputs.park_url}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Park Description
        <input
          type="text"
          name="park_description"
          value={inputs.park_description}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Park Location
        <input
          type="text"
          name="park_location"
          value={inputs.park_location}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Number of Stamps
        <input
          type="text"
          name="number_of_stamps"
          value={inputs.number_of_stamps}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit" onClick={handleParkSubmit}>
        Submit Park
      </button>
      <h2>Campground Information</h2>
      <label>
        Campgrounds ID
        <input
          type="text"
          name="campgrounds_id"
          value={inputs.campgrounds_id}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Latitude
        <input
          type="text"
          name="latitude"
          value={inputs.latitude}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Longitude
        <input
          type="text"
          name="longitude"
          value={inputs.longitude}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Description
        <input
          type="text"
          name="description"
          value={inputs.description}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Name
        <input
          type="text"
          name="name"
          value={inputs.name}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit" onClick={handleCampgroundSubmit}>
        Submit Campground
      </button>
      <h2>Activity Information</h2>
      <label>
        Activity ID
        <input
          type="text"
          name="activity_id"
          value={inputs.activity_id}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Activity Name
        <input
          type="text"
          name="activity_name"
          value={inputs.activity_name}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit" onClick={handleActivitySubmit}>
        Submit Activity
      </button>
    </form>
  );
};

export default CreateParkForm;
