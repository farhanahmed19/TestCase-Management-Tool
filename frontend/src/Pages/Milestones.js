import React, { useState } from 'react';
import '../styles/Milestones.css';
import { useNavigate } from 'react-router-dom';

const Milestones = () => {

  const navigate = useNavigate();
  const [showButtons, setShowButtons] = useState(false);

  const [openMilestones, setOpenMilestones] = useState([
    { id: 1, name: 'milestone', checked: false },
    { id: 2, name: 'milestone', checked: false },
  ]);
  const [completedMilestones, setCompletedMilestones] = useState([
    { id: 3, name: 'milestone', checked: false },
    { id: 4, name: 'milestone', checked: false },
  ]);


  const handleFormat = () => {
    setShowButtons(!showButtons);
  };

  const handleCheckboxChange = (id, type) => {
    if (type === 'open') {
      setOpenMilestones(openMilestones.map((milestone) => {
        if (milestone.id === id) {
          return { ...milestone, checked: !milestone.checked };
        }
        return milestone;
      }));
    } else {
      setCompletedMilestones(completedMilestones.map((milestone) => {
        if (milestone.id === id) {
          return { ...milestone, checked: !milestone.checked };
        }
        return milestone;
      }));
    }
  };

  const handleDelete = () => {
    setOpenMilestones(openMilestones.filter((milestone) => !milestone.checked));
    setCompletedMilestones(completedMilestones.filter((milestone) => !milestone.checked));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    navigate('/add-milestone', { state: { from: '/milestones' , action: 'add'} });
  };


  return (
    
    <div className="Milestones-container">
        <div className='heading'>
            <h2>Milestones</h2>
            <div className='button-class'>
                <button className="milestone-add-button" onClick={handleAdd}> + Add Milestone</button>
                <button className="milestone-delete-button" onClick={handleDelete}> - Delete Milestone</button>
            </div>
        </div>
 
        
        <div className='milestone-listing'>
          <h3 className='milestones-heading'> Open</h3>
          <div className='open'>
              {openMilestones.map((milestone) => (
                <div className='details' key={milestone.id}>
                  <input type="checkbox" checked={milestone.checked} onChange={() => handleCheckboxChange(milestone.id, 'open')} />
                  <a href='/milestone-status' className='milestoneName'>milestone</a>
                  <div class="status-bar">
                      <div class="status-bar-inner status-52"></div>
                  </div>
                  <span class="milestoneStatus">52%</span>
                </div>
              ))}

              {openMilestones.map((milestone) => (
                <div className='details' key={milestone.id}>
                  <input type="checkbox" checked={milestone.checked} onChange={() => handleCheckboxChange(milestone.id, 'open')} />
                  <a href='' className='milestoneName'>milestone</a>
                  <div class="status-bar">
                      <div class="status-bar-inner status-6"></div>
                  </div>
                  <span class="milestoneStatus">6%</span>
                </div>
              ))}

              {openMilestones.map((milestone) => (
                <div className='details' key={milestone.id}>
                  <input type="checkbox" checked={milestone.checked} onChange={() => handleCheckboxChange(milestone.id, 'open')} />
                  <a href='/milestone-status' className='milestoneName'>milestone</a>
                  <div class="status-bar">
                      <div class="status-bar-inner status-52"></div>
                  </div>
                  <span class="milestoneStatus">52%</span>
                </div>
              ))}

              {openMilestones.map((milestone) => (
                <div className='details' key={milestone.id}>
                  <input type="checkbox" checked={milestone.checked} onChange={() => handleCheckboxChange(milestone.id, 'open')} />
                  <a href='' className='milestoneName'>milestone</a>
                  <div class="status-bar">
                      <div class="status-bar-inner status-6"></div>
                  </div>
                  <span class="milestoneStatus">6%</span>
                </div>
              ))}
              
          </div>

          <h3 className='milestones-heading'>Completed</h3>
          <div className='completed'>
              {/* {completedMilestones.map((milestone) => (
                <div className='details' key={milestone.id}>
                  <input type="checkbox" checked={milestone.checked} onChange={() => handleCheckboxChange(milestone.id, 'completed')} />
                  <a href='' className='milestoneName'>{milestone.name}</a>
                </div>
              ))}
              {completedMilestones.map((milestone) => (
                <div className='details' key={milestone.id}>
                  <input type="checkbox" checked={milestone.checked} onChange={() => handleCheckboxChange(milestone.id, 'completed')} />
                  <a href='' className='milestoneName'>{milestone.name}</a>
                </div>
              ))}
              {completedMilestones.map((milestone) => (
                <div className='details' key={milestone.id}>
                  <input type="checkbox" checked={milestone.checked} onChange={() => handleCheckboxChange(milestone.id, 'completed')} />
                  <a href='' className='milestoneName'>{milestone.name}</a>
                </div>
              ))}
              {completedMilestones.map((milestone) => (
                <div className='details' key={milestone.id}>
                  <input type="checkbox" checked={milestone.checked} onChange={() => handleCheckboxChange(milestone.id, 'completed')} />
                  <a href='' className='milestoneName'>{milestone.name}</a>
                </div>
              ))} */}
          </div>
        </div>
    </div>
  );
};

export default Milestones;