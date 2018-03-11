import React from 'react';
import './Ministatement.css';

const eachRecord = () => (
  <div className="Ministatement-each-row Ministatement-allRecord-entry">
    <div className="Ministatement-record-value Ministatement-record-sno">
      <div className="Ministatement-record-entry">a</div>
    </div>
    <div className="Ministatement-record-value Ministatement-record-name">
      <div className="Ministatement-record-entry">b</div>
    </div>
    <div className="Ministatement-record-value Ministatement-record-amount">
      <div className="Ministatement-record-entry">
        <i className="fas fa-rupee-sign" /> 100
      </div>
    </div>
    <div className="Ministatement-record-value Ministatement-record-balance">
      <div className="Ministatement-record-entry">
        <i className="fas fa-rupee-sign" /> 100
      </div>
    </div>
    <div className="Ministatement-record-value Ministatement-record-type">
      <div className="Ministatement-record-entry">e</div>
    </div>
  </div>
);

const recordHeading = () => (
  <div className="Ministatement-each-row Ministatement-allRecord-heading">
    <div className="Ministatement-record-heading Ministatement-record-sno">
      <div className="Ministatement-record-head">S.No.</div>
    </div>
    <div className="Ministatement-record-heading Ministatement-record-name">
      <div className="Ministatement-record-head">Receipent</div>
    </div>
    <div className="Ministatement-record-heading Ministatement-record-amount">
      <div className="Ministatement-record-head">Amount</div>
    </div>
    <div className="Ministatement-record-heading Ministatement-record-balance">
      <div className="Ministatement-record-head">Balance</div>
    </div>
    <div className="Ministatement-record-heading Ministatement-record-type">
      <div className="Ministatement-record-head">Type</div>
    </div>
  </div>
);

const allRecords = () => (
  <div className="Ministatement-allRecords">
    {recordHeading()}
    {eachRecord()}
    {eachRecord()}
    {eachRecord()}
    {eachRecord()}
    {eachRecord()}
    {eachRecord()}
    {eachRecord()}
    {eachRecord()}

  </div>
);

const MiniStatement = () => (
  <div className="Ministatement-container">
    <div className="Ministatement-table-wrapper">
      <div className="Ministatement-content">
        {allRecords()}
      </div>
    </div>
  </div>
);

export default MiniStatement;
