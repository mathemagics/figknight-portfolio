import React from 'react';
import HeaderTitle from './header_title';
import Actions from './actions';
import Action from './action';

export default () => {
  return (
    <div className="header">
      <HeaderTitle>Fig Knight</HeaderTitle>
      <Actions>
        <Action>Yum</Action>
      </Actions>
    </div>
  );
};
