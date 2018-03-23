import React from 'react';
import PropTypes from 'prop-types';
import './Ministatement.css';

const strftime = require('strftime');

class MiniStatement extends React.Component {
  constructor() {
    super();
    this.state = {
      transactionScreen: 1,
      transactionsCount: 10,
    };
  }
  render() {
    const eachRecord = (sno, name, amount, balance, type, date) => (
      <tr className="Ministatement-each-row Ministatement-allRecord-entry">
        <td className="Ministatement-record-value Ministatement-record-sno">
          <div className="Ministatement-record-entry">{sno}</div>
        </td>
        <td className="Ministatement-record-value Ministatement-record-name">
          <div className="Ministatement-record-entry">{name}</div>
        </td>
        <td className="Ministatement-record-value Ministatement-record-amount">
          <div className="Ministatement-record-entry">
            <i className="fas fa-rupee-sign" /> {amount}
          </div>
        </td>
        <td className="Ministatement-record-value Ministatement-record-balance">
          <div className="Ministatement-record-entry">
            <i className="fas fa-rupee-sign" /> {balance}
          </div>
        </td>
        <td className="Ministatement-record-value Ministatement-record-type">
          <div className="Ministatement-record-entry">{type}</div>
        </td>
        <td className="Ministatement-record-value Ministatement-record-date">
          <div className="Ministatement-record-entry"> {strftime('%H:%M %d/%m/%y', new Date(date))}</div>
        </td>
      </tr>
    );

    const recordHeading = () => (
      <tr className="Ministatement-each-row Ministatement-allRecord-heading">
        <td className="Ministatement-record-heading Ministatement-record-sno">
          <div className="Ministatement-record-head">S.No.</div>
        </td>
        <td className="Ministatement-record-heading Ministatement-record-name">
          <div className="Ministatement-record-head">Receipent</div>
        </td>
        <td className="Ministatement-record-heading Ministatement-record-amount">
          <div className="Ministatement-record-head">Amount</div>
        </td>
        <td className="Ministatement-record-heading Ministatement-record-balance">
          <div className="Ministatement-record-head">Balance</div>
        </td>
        <td className="Ministatement-record-heading Ministatement-record-type">
          <div className="Ministatement-record-head">Type</div>
        </td>
        <td className="Ministatement-record-heading Ministatement-record-date">
          <div className="Ministatement-record-head">Date</div>
        </td>
      </tr>
    );

    const allTransactions = miniStatement => (
      <table className="Ministatement-allRecords">
        {recordHeading()}
        { miniStatement.map((transaction, index) => (
         eachRecord(
        index + 1,
         transaction.account,
         transaction.amount, transaction.balance,
         transaction.type,
         transaction.transactionTimestamp,
        )
      ))
      }
      </table>
    );

    const filterButton = (title, onClickFunction, screen) => {
      let buttonClass = 'Ministatement-filter-button-label';
      if (screen === this.state.transactionScreen) {
        buttonClass = `${buttonClass} Ministatement-filter-button-active`;
      }
      return (
        <div className="Ministatement-filter-button-wrapper">
          <button
            className="Ministatement-filter-button"
            onClick={() => onClickFunction(screen)}
          ><span className={buttonClass}>{title}</span>
          </button>
        </div>
      );
    };

    const receivedTransactions = miniStatement => (
      <table className="Ministatement-allRecords">
        {recordHeading()}
        { miniStatement.map((transaction, index) => {
            if (transaction.type === 'Credit') {
                return eachRecord(
                index + 1,
                transaction.account,
                transaction.amount, transaction.balance,
                transaction.type,
                transaction.transactionTimestamp,
              );
            }
          })
        }
      </table>
    );

    const sentTransactions = miniStatement => (
      // props.setTransactionNumber(this.props.transactionsCount),
      <table className="Ministatement-allRecords">
        {recordHeading()}
        { miniStatement.map((transaction, index) => {
       if (transaction.type === 'Debit') {
          return eachRecord(
          index + 1,
          transaction.account,
          transaction.amount, transaction.balance,
          transaction.type,
          transaction.transactionTimestamp,
          );
         }
       })
      }
      </table>
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
              <div className="select-options">
                <span className="MiniStatement-filter-select">View&nbsp;</span>
                <span className="Ministatement-select-options-number">
                  <select
                    value={this.props.transactionsCount}
                    onChange={(event) => {
                      this.props.setTransactionNumber(event.target.value);
                    }}
                  >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                  </select>
                </span>
              </div>
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

