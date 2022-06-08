import React from 'react';

const NameContext = React.createContext({nickname: '', setNickName: () => {}});

export default NameContext;