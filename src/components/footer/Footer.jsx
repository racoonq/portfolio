import React from 'react';

import './Footer.less';

class Footer extends React.Component {
    render() {
        const currentYear = (new Date()).getFullYear();
        return (
            <div className='rc-Footer'>
                {`Copyright © ${currentYear} Rongsheng Jiang`}
            </div>
        );
    }
}

export default Footer;