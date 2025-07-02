import React from 'react';
import { Card } from '@alifd/next';

export default function Demo() {
  return (
    <Card title="卡片标题" style={{ width: 300 }} extra={<a href="#">更多</a>}>
      这里是卡片内容。
    </Card>
  );
} 