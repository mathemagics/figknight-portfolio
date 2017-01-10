import React from 'react';
import _ from 'lodash';
import HeaderTitle from './header_title';
import Actions from './actions';
import Action from './action';

const renderActions = (actions) => {
  return _.map(actions, (action) => {
    return <Action name={action} />;
  });
};

export default (props) => {
  return (
    <div className="header">
      <HeaderTitle>{props.titles}</HeaderTitle>
      <Actions>
        {renderActions(props.links)}
      </Actions>
    </div>
  );
};
