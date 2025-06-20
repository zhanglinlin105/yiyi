import React from 'react';
import { Button, Icon, Box } from '@alifd/next';

function Demo() {
    return <div>
        <Box direction="row" spacing={20}>
            <Button type="primary" size="large">
                <Icon type="atm" />
                Large
            </Button>
            <Button type="primary">
                <Icon type="atm" />
                Medium
            </Button>
            <Button type="primary" size="small">
                <Icon type="atm" />
                Small
            </Button>
        </Box>
        <br />
        <Button.Group size="large">
            <Button className="basic-button">Button</Button>
            <Button className="basic-button">Button</Button>
            <Button className="basic-button">Button</Button>
        </Button.Group>
    </div>
}
