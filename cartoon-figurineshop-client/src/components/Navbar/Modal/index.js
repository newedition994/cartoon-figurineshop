import React from 'react';
import classNames from 'classnames';
import { observable, action, decorate } from 'mobx';
import { observer } from 'mobx-react';

class Modal extends React.PureComponent {

    @observable isOpen = false;

    @action open = (e) => {
        if (e) { e.preventDefault(); }

        this.isOpen = true;
    }

    @action close = (e) => {
        if (e) { e.preventDefault(); }

        this.isOpen = false;
    }

    render() {

        const overlayClasses = classNames({ open: this.isOpen });

        return (
            <div id='modal' className={overlayClasses}>

            </div>
        )
    }
}

export default Modal;