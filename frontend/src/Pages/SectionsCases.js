// SectionsCases.js

import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/SectionsCases.css'; // Import the CSS for styling

const SectionsCases = () => {
  // Extract suiteId and suiteName from URL parameters
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const suiteId = searchParams.get('suiteId') || '0'; // Default to '0' if no suiteId is provided
  const suiteName = searchParams.get('suite') || 'Test Suite'; // Default to 'Test Suite' if no suiteName is provided

  // Example sections and cases data
  const sections = [
    {
      id: 0,
      title: "General Cases",
      cases: [
        { id: "C18950", title: "Opening and navigating on Chrome", automation: "Automated", type: "UI" },
        { id: "C18951", title: "Opening and navigating on Firefox", automation: "Automated", type: "UI" },
        { id: "C18952", title: "Opening and navigating on Edge", automation: "Automated", type: "UI" },
        { id: "C18953", title: "Opening and navigating on Safari", automation: "Automated", type: "UI" },
        { id: "C18954", title: "Opening and navigating on tablet (android/ipad)", automation: "Automated", type: "UI" },
        { id: "C18955", title: "Portal is responsive", automation: "Can't Automate", type: "UI" },
        { id: "C18956", title: "All fonts are same in whole portal", automation: "Automated", type: "UI" },
        { id: "C18957", title: "UI is not disturbing on resizing of screen (extra big and extra small screens)", automation: "Automatable", type: "UI" },
        { id: "C18958", title: "Errors are displaying on success and failures", automation: "Automated", type: "UI" },
        { id: "C18959", title: "Modals are opening in middle center of screen", automation: "Automatable", type: "UI" },
        { id: "C18960", title: "Required fields are having * marks", automation: "Automatable", type: "UI" },
        { id: "C18961", title: "Standard data types are followed overall portal (e.g. date, number, currency)", automation: "Automatable", type: "UI" },
        { id: "C18962", title: "Cosmetic consistencies across portal (e.g. color, fonts, layouts etc)", automation: "Automatable", type: "UI" },
        { id: "C18963", title: "Grammar and Spelling proofs", automation: "Automated", type: "UI" },
        { id: "C18964", title: "Scrolling and navigation between pages are working", automation: "Automated", type: "UI" },
        { id: "C18965", title: "Images are properly aligned with text", automation: "Automatable", type: "UI" },
        { id: "C18966", title: "Background and foreground colors are not conflicting with text colors and are aesthetically pleasing", automation: "Automatable", type: "UI" },
        { id: "C18967", title: "Clear demarcation of different sections on screen", automation: "Automatable", type: "UI" },
        { id: "C18968", title: "Disabled fields should be greyed out and users should not be able to set focus on these fields.", automation: "Automated", type: "UI" },
        { id: "C18969", title: "All pages should have a title", automation: "Automated", type: "UI" },
        { id: "C27737", title: "Verify that the 'Show All' toggle in API keys window stays at one place when it is enabled.", automation: "Functional", type: "UI" },
        { id: "C27738", title: "Verify that the 'Show All' toggle in API keys window stays at one place when it is disabled.", automation: "Functional", type: "UI" }
      ]
    },
    {
      id: 1,
      title: "UOC Launch",
      cases: [
        { id: "C18970", title: "Data Access Intelligence & Governance Navbar", automation: "Automatable", type: "UI" },
        { id: "C18971", title: "Data Security Posture Management Navbar", automation: "Automatable", type: "UI" },
        { id: "C18972", title: "Data Catalog Navbar", automation: "Automatable", type: "UI" },
        { id: "C18973", title: "Sensitive Data Intelligence Navbar", automation: "Automatable", type: "UI" }
      ]
    }
  ];

  const navigate = useNavigate();

//   const handleAddTestCase = () => {
//     navigate(`/AddTestCase?suiteId=${suiteId}`);
//   };

  // Navigate to Add Section page
  const handleAddSection = () => {
    navigate(`/AddSection?suiteId=${suiteId}&suite=${suiteName}`);
  };

  const handleCaseClick = (testCase) => {
    navigate(`/TestCaseDetails?suiteId=${suiteId}&suite=${suiteName}&section=${sections.find(section => section.cases.includes(testCase)).title}&testCaseId=${testCase.id}&testCaseName=${testCase.title}`);
  };

  // Calculate total sections and cases
  const totalSections = sections.length;
  const totalCases = sections.reduce((sum, section) => sum + section.cases.length, 0);

  return (
    <div className="sections-cases-page">
      <div className="sections-cases-header">
        <h2>{`S${suiteId} - ${suiteName}`}</h2>
        <div className="sections-cases-actions">
          <Link to={`/AddTestCase?suiteId=${suiteId}&suite=${encodeURIComponent(suiteName)}`} className="add-case-button">+ Add Case</Link>
          <Link to={`/EditTestSuite?suiteId=${suiteId}&suite=${encodeURIComponent(suiteName)}&source=SectionsCases`} className="edit-suite-link">Edit</Link>
          <button className="delete-button">Delete</button>
          <button className="columns-button">Columns</button>
        </div>
      </div>

      <div className="sections-cases-summary">
        <span>Contains {totalSections} sections and {totalCases} cases.</span>
      </div>

      <div className="sections-cases-content">
        <div className="sections-list">
          {sections.map((section) => (
            <div key={section.id} className="section">
              <div className="section-header">
                <h3>{section.title}</h3>
                <span>{section.cases.length} cases</span>
              </div>
              <div className="case-list">
                {section.cases.map((testCase) => (
                  <div key={testCase.id} className="case-item" onClick={() => handleCaseClick(testCase)}>
                    <div className="case-id">
                      <input type="checkbox" />
                      <Link to={`/TestCaseDetails`} className="case-id-link">{testCase.id}</Link>
                    </div>
                    <div className="case-title">{testCase.title}</div>
                    <div className="case-automation">{testCase.automation}</div>
                    <div className="case-type">{testCase.type}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="sections-tree-view">
          <div className="sections-tree-header">
            <span>Sections & Cases</span>
            <button className="add-section-button" onClick={handleAddSection}>+ Add Section</button>
          </div>
          <ul className="sections-tree">
            {sections.map((section) => (
              <li key={section.id}>
                <div className="tree-node">
                  <span className="tree-node-title">{section.title}</span>
                </div>
                <ul className="cases-subtree">
                  {section.cases.map((testCase) => (
                    <li key={testCase.id}>
                      <span className="subtree-node">{testCase.title}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SectionsCases;
