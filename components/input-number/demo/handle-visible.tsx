import React from 'react';
import { ConfigProvider, InputNumber } from 'antd';

const App: React.FC = () => (
  <ConfigProvider theme={{ components: { InputNumber: { handleVisible: true } } }}>
    <InputNumber defaultValue={3} />
  </ConfigProvider>
);

export default App;
