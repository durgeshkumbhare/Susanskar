import React, { useState } from "react";
import Navbar from "../components/Navbar";

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    formNo: "",
    issueDate: "",
    submissionDate: "",
    photo: null,
    fullName: "",
    dob: "",
    birthPlace: "",
    age: "",
    bloodGroup: "",
    religion: "",
    caste: "",
    category: "",
    identificationMark: "",
    admissionClass: "",
    fatherName: "",
    fatherQualification: "",
    fatherWork: "",
    motherName: "",
    motherQualification: "",
    motherWork: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo") {
      setFormData({ ...formData, photo: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    // Add form submission logic here, like sending the data to a server
  };

  return (
   <section>
    <Navbar />
     <div className="px-20 mx-auto p-8 bg-white shadow-md ">
      <h2 className="text-2xl font-bold mb-6 text-center">
        School Admission Form
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Form Details */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-black text-sm font-medium">Form No.</label>
            <input
              type="text"
              name="formNo"
              value={formData.formNo}
              onChange={handleChange}
              className="mt-1 block w-full border-2 bg-white  border-gray-800 p-2 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-black text-sm font-medium">Date of Issue</label>
            <input
              type="date"
              name="issueDate"
              value={formData.issueDate}
              onChange={handleChange}
              className="mt-1 block w-full border-2 bg-white  border-gray-800 p-2 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-black text-sm font-medium">
              Date of Submission
            </label>
            <input
              type="date"
              name="submissionDate"
              value={formData.submissionDate}
              onChange={handleChange}
              className="mt-1 block w-full border-2 bg-white  border-gray-800 p-2 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-black text-sm font-medium">Upload Photo</label>
            <input
              type="file"
              name="photo"
              onChange={handleChange}
              className="mt-1 block w-full p-2 rounded-md border border-gray-300"
              accept="image/*"
              required
            />
          </div>
        </div>

        {/* Student Details */}
        <h3 className="text-xl text-black font-semibold mb-4">Student Information</h3>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-black text-sm font-medium">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="mt-1 block w-full border-2 bg-white  border-gray-800 p-2 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-black text-sm font-medium">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="mt-1 block w-full border-2 bg-white  border-gray-800 p-2 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-black text-sm font-medium">Birth Place</label>
            <input
              type="text"
              name="birthPlace"
              value={formData.birthPlace}
              onChange={handleChange}
              className="mt-1 block w-full border-2 bg-white  border-gray-800 p-2 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-black text-sm font-medium">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="mt-1 block w-full border-2 bg-white  border-gray-800 p-2 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-black text-sm font-medium">Blood Group</label>
            <input
              type="text"
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              className="mt-1 block w-full border-2 bg-white  border-gray-800 p-2 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-black text-sm font-medium">Religion</label>
            <input
              type="text"
              name="religion"
              value={formData.religion}
              onChange={handleChange}
              className="mt-1 block w-full border-2 bg-white  border-gray-800 p-2 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-black text-sm font-medium">Caste</label>
            <input
              type="text"
              name="caste"
              value={formData.caste}
              onChange={handleChange}
              className="mt-1 block w-full border-2 bg-white  border-gray-800 p-2 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-black text-sm font-medium">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="mt-1 block w-full border-2 bg-white  border-gray-800 p-2 rounded-md"
              required
            />
          </div>
          <div className="col-span-2">
            <label className="block text-sm text-black font-medium">
              Identification Mark
            </label>
            <input
              type="text"
              name="identificationMark"
              value={formData.identificationMark}
              onChange={handleChange}
              className="mt-1 block w-full border-2 bg-white  border-gray-800 p-2 rounded-md"
              required
            />
          </div>
          <div className="col-span-2">
            <label className="block text-black text-sm font-medium">
              Admission Sought to Class
            </label>
            <input
              type="text"
              name="admissionClass"
              value={formData.admissionClass}
              onChange={handleChange}
              className="mt-1 block w-full border-2 bg-white  border-gray-800 p-2 rounded-md"
              required
            />
          </div>
        </div>

        {/* Parent Details */}
        <h3 className="text-xl text-black font-semibold mb-4">Parent Information</h3>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-black text-sm font-medium">Father's Name</label>
            <input
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              className="mt-1 block w-full border-2 bg-white  border-gray-800 p-2 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-black text-sm font-medium">
              Father's Qualification
            </label>
            <input
              type="text"
              name="fatherQualification"
              value={formData.fatherQualification}
              onChange={handleChange}
              className="mt-1 block w-full border-2 bg-white  border-gray-800 p-2 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-black text-sm font-medium">
              Father's Work Details
            </label>
            <input
              type="text"
              name="fatherWork"
              value={formData.fatherWork}
              onChange={handleChange}
              className="mt-1 block w-full border-2 bg-white  border-gray-800 p-2 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-black text-sm font-medium">Mother's Name</label>
            <input
              type="text"
              name="motherName"
              value={formData.motherName}
              onChange={handleChange}
              className="mt-1 block w-full border-2 bg-white  border-gray-800 p-2 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-black text-sm font-medium">
              Mother's Qualification
            </label>
            <input
              type="text"
              name="motherQualification"
              value={formData.motherQualification}
              onChange={handleChange}
              className="mt-1 block w-full border-2 bg-white  border-gray-800 p-2 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-black text-sm font-medium">
              Mother's Work Details
            </label>
            <input
              type="text"
              name="motherWork"
              value={formData.motherWork}
              onChange={handleChange}
              className="mt-1 block w-full border-2 bg-white  border-gray-800 p-2 rounded-md"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600  text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
   </section>
  );
};

export default AdmissionForm;
