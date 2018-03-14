import React from 'react';
import PropTypes from 'prop-types';
import './Ministatement.css';


const strftime = require('strftime');

class MiniStatement extends React.Component {
  constructor() {
    super();
    this.state = {
      transactionScreen: 2,
    };
  }
  render() {
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
          <div className="Ministatement-record-entry"> {strftime('%F', new Date(date))}</div>
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

    const allTransactions = miniStatement => (
      <div className="Ministatement-allRecords">
        {recordHeading()}
        { miniStatement.map((transaction, index) => (
         eachRecord(
         index,
         transaction.account,
         transaction.amount, transaction.balance,
         transaction.type,
         transaction.transactionTimestamp,
      )
    ))
    }
      </div>
    );
    const filterButton = (title, onClickFunction, screen) => (
      <div className="Ministatement-filter-button-wrapper">
        <button
          className="Ministatement-filter-button"
          onClick={() => onClickFunction(screen)}
        ><span className="Ministatement-filter-button-label">{title}</span>
        </button>
      </div>
    );
    const receivedTransactions = miniStatement => (
      <div className="Ministatement-allRecords">
        {recordHeading()}
        { miniStatement.map((transaction, index) => {
            if (transaction.type === 'Credit') {
                return eachRecord(
                index,
                transaction.account,
                transaction.amount, transaction.balance,
                transaction.type,
                transaction.transactionTimestamp,
              );
            }
          })
    }
      </div>
    );
    const sentTransactions = miniStatement => (
      <div className="Ministatement-allRecords">
        {recordHeading()}
        { miniStatement.map((transaction, index) => {
       if (transaction.type === 'Debit') {
          return eachRecord(
          index,
          transaction.account,
          transaction.amount, transaction.balance,
          transaction.type,
          transaction.transactionTimestamp,
    );
   }
})
  }
      </div>
    );
    const setTransactionScreen = (screen) => {
      this.setState({
        transactionScreen: screen,
      });
    };
    return (
      <div className="Ministatement-container">
        <div className="Ministatement-header">
          <div className="Ministatement-header-options">
            <div className="Ministatement-header-option-title">
          Recent transactions
            </div>
            <div className="Ministatement-header-option-filter">
              {filterButton('received', setTransactionScreen, 3)}
              {filterButton('sent', setTransactionScreen, 2)}
              {filterButton('all', setTransactionScreen, 1)}
            </div>
          </div>
        </div>
        {this.state.transactionScreen === 1 ?
      (<div className="Ministatement-table">
        {allTransactions(this.props.miniStatement)}
       </div>)
      : (this.state.transactionScreen === 2 ? (
        <div className="Ministatement-table">
          {sentTransactions(this.props.miniStatement)}
        </div>
      ) : (
        <div className="Ministatement-table">
          {receivedTransactions(this.props.miniStatement)}
        </div>
      ))
    }
      </div>
    );
  }
}

export default MiniStatement;
MiniStatement.propTypes = {
  miniStatement: PropTypes.string.isRequired,
};
