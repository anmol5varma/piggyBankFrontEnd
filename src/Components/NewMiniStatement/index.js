import React from 'react';
import './Ministatement.css';

const eachRecord = (sno, name, amount, balance, type, date) => (
  <div className="Ministatement-each-row Ministatement-allRecord-entry">
    <div className="Ministatement-record-value Ministatement-record-sno">
      <div className="Ministatement-record-entry">{sno}</div>
    </div>
    <div className="Ministatement-record-value Ministatement-record-name">
      <div className="Ministatement-record-entry">{name}</div>
    </div>
    <div className="Ministatement-record-value Ministatement-record-amount">
      <div className="Ministatement-record-entry">
        <i className="fas fa-rupee-sign" /> {amount}
      </div>
    </div>
    <div className="Ministatement-record-value Ministatement-record-balance">
      <div className="Ministatement-record-entry">
        <i className="fas fa-rupee-sign" /> {balance}
      </div>
    </div>
    <div className="Ministatement-record-value Ministatement-record-type">
      <div className="Ministatement-record-entry">{type}</div>
    </div>
    <div className="Ministatement-record-value Ministatement-record-date">
      <div className="Ministatement-record-entry">{date}</div>
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
    <div className="Ministatement-record-heading Ministatement-record-date">
      <div className="Ministatement-record-head">Date</div>
    </div>
  </div>
);

const allRecords = () => (
  <div className="Ministatement-allRecords">
    {recordHeading()}
    {eachRecord(1, 'Anmol', 100, 1000, 'Credit', 'date strf format')}
  </div>
);

const filterButton = (title, onClickFunction) => (
  <div className="Ministatement-filter-button-wrapper">
    <button
      className="Ministatement-filter-button"
      onClick={onClickFunction}
    ><span className="Ministatement-filter-button-label">{title}</span>
    </button>
  </div>
);

const MiniStatement = () => (
  <div className="Ministatement-container">
    <div className="Ministatement-header">
      <div className="Ministatement-header-options">
        <div className="Ministatement-header-option-title">
        Recent transaction
        </div>
        <div className="Ministatement-header-option-filter">
          {filterButton('received', null)}
          {filterButton('sent', null)}
          {filterButton('all', null)}
        </div>
      </div>
    </div>
    <div className="Ministatement-table">{allRecords()}</div>
  </div>
);

export default MiniStatement;
