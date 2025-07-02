import React, { useState } from 'react';
import { Button, Dialog } from '@alifd/next';

export default function Demo() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Button onClick={() => setVisible(true)}>打开弹窗</Button>
      <Dialog
        title="弹窗标题"
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        onClose={() => setVisible(false)}
      >
        这里是弹窗内容。
      </Dialog>
    </div>
  );
} 