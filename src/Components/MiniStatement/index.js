import React from 'react';
import './Ministatement.css';

const strftime = require('strftime');

const eachRecord = (index, Receipent, amount, balance, type, date) => (
  // console.log(index, Receipent, amount, balance, type);
  // return (
  <div className="Ministatement-each-row Ministatement-allRecord-entry">
    <div className="Ministatement-record-value Ministatement-record-sno">
      <div className="Ministatement-record-entry">{index}</div>
    </div>
    <div className="Ministatement-record-value Ministatement-record-name">
      <div className="Ministatement-record-entry">{Receipent}</div>
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
      <div className="Ministatement-record-entry">{strftime('%F', new Date(date))}</div>
    </div>
  </div>
  // );
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

const allRecords = miniStatement => (
  <div className="Ministatement-allRecords">
    {recordHeading()}
    { miniStatement.map((transaction, index) => (
   // { eachRecord(index,transaction.account, transaction.amount, transaction.balance, transaction.type, transaction.transactionTimestamp); }
      <div className="Ministatement-each-row Ministatement-allRecord-entry">
        <div className="Ministatement-record-value Ministatement-record-sno">
          <div className="Ministatement-record-entry">{index}</div>
        </div>
        <div className="Ministatement-record-value Ministatement-record-name">
          <div className="Ministatement-record-entry">{transaction.account}</div>
        </div>
        <div className="Ministatement-record-value Ministatement-record-amount">
          <div className="Ministatement-record-entry">
            <i className="fas fa-rupee-sign" /> {transaction.amount}
          </div>
        </div>
        <div className="Ministatement-record-value Ministatement-record-balance">
          <div className="Ministatement-record-entry">
            <i className="fas fa-rupee-sign" /> {transaction.balance}
          </div>
        </div>
        <div className="Ministatement-record-value Ministatement-record-type">
          <div className="Ministatement-record-entry">{transaction.type}</div>
        </div>
        <div className="Ministatement-record-value Ministatement-record-date">
          <div className="Ministatement-record-entry" />{strftime('%F', new Date(transaction.transactionTimestamp))}
        </div>
      </div>
    ))
    }
  </div>
);

const MiniStatement = props => (
  <div className="Ministatement-container">
    <div className="Ministatement-table-wrapper">
      <div className="Ministatement-content">
        {allRecords(props.miniStatement)}
        <div className="Ministatement-tooltip">
          &quot;Credit is what comes in and Debit is what goes out&quot;
        </div>
      </div>
    </div>
  </div>
);

export default MiniStatement;
