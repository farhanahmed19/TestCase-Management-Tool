import React, { useState , useEffect} from 'react';
import '../styles/AddMilestones.css'; // Import the CSS file
import { useNavigate , useLocation} from 'react-router-dom';

const AddMilestone = () => {
  const [name, setName] = useState('');
  const [references, setReferences] = useState('');
  const [parent, setParent] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [newText, setNewText] = useState('');

  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from;
  const action = location.state?.action;

  const handleCancel = () => {
    navigate(from);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log('Form submitted with:', {
      name,
      references,
      parent,
      description,
      startDate,
      endDate,
      isCompleted,
    });
    navigate('/milestones');
  };

  

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  
  return (
    <div className="milestone-form">
       
      
      <form className='add_f' onSubmit={handleSubmit}>
        {/* <h2>Add Milestone</h2> */}
        <h2>{action == "edit" ? 'Edit' : 'Add'} Milestone</h2>
        <div className="add-form-group">
          <label htmlFor="name">Name<span className='required'>*</span></label> 
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ex: Version 1.0, Internal Beta 2 or Sprint #4"
            required
          /> 
        </div>
        <div className="add-form-group">
          <label htmlFor="references">References</label>
          <input
            type="text"
            id="references"
            value={references}
            onChange={(e) => setReferences(e.target.value)}
          />
        </div>
        <div className="add-form-group">
          <label htmlFor="parent">Parent</label>
          <select
            id="parent"
            value={parent}
            onChange={(e) => setParent(e.target.value)}
          >
            <option value="">Select parent milestone</option>
            <option value="">parent milestone 1</option>
            <option value="">parent milestone 2</option>
            <option value="">parent milestone 3</option>
          </select>
        </div>
        <div className="add-form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Use this description to describe the purpose and goals of this milestone."
          >
            {selectedFile && `File: ${selectedFile.name}`}
          </textarea>
          <input type="file" id="file-upload" name="file-upload" onChange={handleFileChange}/>
          
        </div>
        <div className="add-form-group">
          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            placeholder="The expected or scheduled start date of this milestone (for upcoming and not yet active milestones)."
          />
        </div>
        <div className="add-form-group">
          <label htmlFor="endDate">End Date</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            placeholder="The expected due or end date of this milestone."
          />
        </div>
     
        <div className='add-form-check'>
            <input
                type="checkbox"
                id="isCompleted"
                checked={isCompleted}
                onChange={(e) => setIsCompleted(e.target.checked)}
            />
            <label htmlFor="isCompleted">This milestone is completed</label>
        </div>
      
        <div className="form-buttons">
          <button type="submit">{action == "edit" ? 'Update' : 'Add'} Milestone</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddMilestone;
