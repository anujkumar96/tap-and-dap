import React, { useState, useRef } from 'react';
import Popover from 'react-bootstrap/Popover';
import QList from '../QList/QList';
import QButton from '../QButton';
import Overlay from 'react-bootstrap/Overlay';
import "./styles.scss";
import { useEffect } from 'react';

const NotificationList = (props) => {
    let {currentEvent=false, onHideNotification} = props;
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);
    const data = [{ label: "Karen Robinson", subText: "Wow ! this admin looks good and awesome design", imageURL: "https://coderthemes.com/hyper/saas/assets/images/users/avatar-4.jpg" }, { label: "New user registered.", subText: "1 min ago", imageURL: "https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png" }, { label: "Cristina Pride", subText: "Hi, How are you? What about our next meeting", imageURL: "https://coderthemes.com/hyper/saas/assets/images/users/avatar-2.jpg" }, { label: "Karen Robinson", subText: "Hi, How are you?", imageURL: "https://coderthemes.com/hyper/saas/assets/images/users/avatar-4.jpg" }];

    const handleClick = (event) => {

    };
    useEffect(() => {
        if(currentEvent){
            setShow(!show);
            setTarget(currentEvent.target);
        }
      },[currentEvent]);
      
      return (
        <div ref={ref}>
            <Overlay
                show={show}
                target={target}
                placement="bottom"
                container={ref.current}
                rootClose={true}
                rootCloseEvent="click"
                onHide={() =>{ setShow(!show)
                    onHideNotification()
                }}
            >
                <Popover className="notification-wrapper">
                    <div className="notification-head">
                        <span>Notification</span>
                        <span>Clear All</span>
                    </div>
                    <QList data={data} onClick={handleClick}/>
                </Popover>
            </Overlay>
        </div>
    );
};
export default NotificationList;