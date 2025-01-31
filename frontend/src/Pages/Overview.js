import React from 'react';
import Graph from '../components/OverviewGraph';
import '../styles/Overview.css';
import Graphcontrol from '../components/Graphcontrol';
import Milestones from '../components/Milestones';
import TestRuns from '../components/TestRuns';
import Todos from '../components/ToDos';


const Overview = () => {
  
  return (
    <main className="overview">
      <div className='overview-graph'>
        <Graphcontrol/>
        
        <div className="overview-chart-container">
          <Graph/>
          <div className="overview-legend">
            <div className="overview-legend-item">
              <div className="overview-legend-color" style={{ backgroundColor: 'green' }}></div>
              <span className="overview-legend-text">1146 Passed</span>
            </div>
            <div className="overview-legend-item">
              <div className="overview-legend-color" style={{ backgroundColor: 'red' }}></div>
              <span className="overview-legend-text">7 Blocked</span>
            </div>
            <div className="overview-legend-item">
              <div className="overview-legend-color" style={{ backgroundColor: 'blue' }}></div>
              <span className="overview-legend-text">2 Retest</span>
            </div>
            <div className="overview-legend-item">
              <div className="overview-legend-color" style={{ backgroundColor: 'orange' }}></div>
              <span className="overview-legend-text">22 Failed</span>
            </div>
            <div className="overview-legend-item">
              <div className="overview-legend-color" style={{ backgroundColor: 'grey' }}></div>
              <span className="overview-legend-text">3 Comments</span>
            </div>
            <div className="overview-legend-item">
              <div className="overview-legend-color" style={{ backgroundColor: 'yellow' }}></div>
              <span className="overview-legend-text">34 Partial</span>
            </div>
          </div>
        </div>
      </div>

      <div className='overview-content'>
        <Todos/>
        <Milestones/>
        <TestRuns/>
      </div>
  
      <div className='overview-activitylog'>
        <h2>Activity</h2>
        <div className='overview-activity-scrollable'>
          <div className='activity-datewise-details'>
            <p className='activity-date'>20 July 2024</p>
            <div className='activity-details'>
              <button>Test Run</button>
              <p>details</p>
              <div className='activity-change-by'>
                <p>change by</p>
              </div>
            </div> 
            <div className='activity-details'>
              <button>Test Plan</button>
              <p>details</p>
              <div className='activity-change-by'>
                <p>change by</p>
              </div>
            </div> 
            <div className='activity-details'>
              <button>Milestone</button>
              <p>details</p>
              <div className='activity-change-by'>
                <p>change by</p>
              </div>
            </div> 
          </div>
          
          <div className='activity-datewise-details'>
            <p className='activity-date'>19 July 2024</p>
            <div className='activity-details'>
              <button>Test Run</button>
              <p>details</p>
              <div className='activity-change-by'>
                <p>change by</p>
              </div>
            </div> 
            <div className='activity-details'>
              <button>Test Run</button>
              <p>details</p>
              <div className='activity-change-by'>
                <p>change by</p>
              </div>
            </div> 
          </div>

          <div className='activity-datewise-details'>
            <p className='activity-date'>18 July 2024</p>
            <div className='activity-details'>
              <button>Test Run</button>
              <p>details</p>
              <div className='activity-change-by'>
                <p>change by</p>
              </div>
            </div> 
            <div className='activity-details'>
              <button>Test Run</button>
              <p>details</p>
              <div className='activity-change-by'>
                <p>change by</p>
              </div>
            </div>
          </div> 
        </div>

      </div>

    </main>
  );
}

export default Overview;
