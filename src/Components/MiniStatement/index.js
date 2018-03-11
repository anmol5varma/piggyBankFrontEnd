import React from 'react';
import './Ministatement.css';

const allRecords = () => (
  <div className="Ministatement-allRecords">
    <div className="Ministatement-each-row Ministatement-allRecord-heading">
      <div className="Ministatement-record-sno Ministatement-record-heading">
        <div className="Ministatement-record-head">S.No.</div>
      </div>
      <div className="Ministatement-record-name Ministatement-record-heading">
        <div className="Ministatement-record-head">Name</div>
      </div>
      <div className="Ministatement-record-amount Ministatement-record-heading">
        <div className="Ministatement-record-head">Amount</div>
      </div>
      <div className="Ministatement-record-balance Ministatement-record-heading">
        <div className="Ministatement-record-head">Balance</div>
      </div>
      <div className="Ministatement-record-type Ministatement-record-heading">
        <div className="Ministatement-record-head">Type</div>
      </div>
    </div>
    <div className="Ministatement-each-row">
      <div className="Ministatement-record-value Ministatement-record-sno">a</div>
      <div className="Ministatement-record-value Ministatement-record-name">b</div>
      <div className="Ministatement-record-value Ministatement-record-amount">c</div>
      <div className="Ministatement-record-value Ministatement-record-balance">d</div>
      <div className="Ministatement-record-value Ministatement-record-type">e</div>
    </div>
    <div className="Ministatement-each-row">
      <div className="Ministatement-record-value Ministatement-record-">a</div>
      <div className="Ministatement-record-value Ministatement-record-">b</div>
      <div className="Ministatement-record-value Ministatement-record-">c</div>
      <div className="Ministatement-record-value Ministatement-record-">d</div>
      <div className="Ministatement-record-value Ministatement-record-type">e</div>
    </div>
  </div>
);

const MiniStatement = props => (
  <div className="Ministatement-container">
    <div className="Ministatement-table-wrapper">
      <div className="Ministatement-content">
        {allRecords()}
      </div>
    </div>
  </div>
);

export default MiniStatement;
