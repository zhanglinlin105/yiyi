import React, { useCallback, useRef } from 'react';
import { Affix, Button } from '@alifd/next';

function Demo() {
    const containerRef = useRef(null);

    const getContainer = useCallback<() => Element>(() => {
        return containerRef.current as unknown as Element
    }, [])

    return <div className="custom-affix-container" ref={containerRef}>
        <div className="affix-wrapper">
            <Affix container={getContainer} offsetTop={0} useAbsolute>
                <Button type="secondary">Absolute Position Affixed</Button>
            </Affix>
        </div>
    </div>
}
