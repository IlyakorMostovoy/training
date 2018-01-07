import React, { Component } from 'react';
import data from '../../assets/data/data';
import classNames from 'classnames';

class Table extends Component {
  sublevelsClassName(index) {
    return classNames('table__cell table__cell_approach', {
      'table__cell_approach_low': index === 0,
      'table__cell_approach_medium': index === 1,
      'table__cell_approach_high': index === 2,
    });
  }

  renderSublevels(dataSublevels) {
    return (
      dataSublevels.map((value, index) =>
        <div className={this.sublevelsClassName(index)} key={index}>
          <span>{value}</span>
        </div>
      )
    );
  }

  renderCells(dataCell) {
    return (
      <React.Fragment>
        <div className='table__cell table__cell_exercise' onClick={this.props.onChangeShowSidebar} dangerouslySetInnerHTML={{__html: dataCell.title}} />
        {this.renderSublevels(dataCell.sublevels)}
      </React.Fragment>
    );
  }

  renderRows(dataRows) {
    return Object.keys(dataRows).map(row =>
      <div className='table__row' key={row}>
        {this.renderCells(dataRows[row])}
      </div>
    );
  }

  render() {
    const { level } = this.props;
    const dataRows = data[level];
    const rows = this.renderRows(dataRows);

    return (
      <div className='table'>
        <div className="table__head">
          <div className='table__row'>
            <div className='table__cell table__cell_hide table__cell_exercise'></div>
            <div className='table__cell table__cell_sublevels table__cell_sublevels_low'><span>Начальный</span></div>
            <div className='table__cell table__cell_sublevels table__cell_sublevels_medium'><span>Продвинутый</span></div>
            <div className='table__cell table__cell_sublevels table__cell_sublevels_high'><span>Переход</span></div>
          </div>
        </div>
        {rows}
      </div>
    );
  }
}

export default Table;