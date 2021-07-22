import React from 'react';

export default function Toolbar(props) {
  const { filters, selected } = props;
  const onSelectFilter = (e) => {
    props.onSelectFilter(e.target.innerText);
  };

  return (
    <div className="filter">
      {filters.map(filter => {
        return <div onClick={onSelectFilter} className={filter===selected && "active"}>{filter}</div>
      })}
    </div>
  )
}
