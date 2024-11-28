import ListGroup from 'react-bootstrap/ListGroup'
const QList = (props) => {
    let { horizontal = false, variant = "", data = [], action = true, qlistCls="", onClick } = props;

    return (
        <div className={`qlist-wrapper ${qlistCls}`}>
            <ListGroup horizontal={horizontal} as="ul" variant={variant}>
                {data && data.length && data.map((item, index) => {
                    return (<ListGroup.Item as="li" action={action} onClick={(e) => onClick? onClick(e): false} variant={item.variant} active={item.active} disabled={item.disabled}>
                        <div style={{ display: "flex" }}>
                            {item.imageURL && <img src={item.imageURL} height="36px" className=" rounded-circle"></img>}
                            <div>
                                <div>
                                    {item.label}
                                </div>
                                <div className="text-muted mb-0">
                                    {item.subText}
                                </div>
                            </div>
                        </div>
                    </ListGroup.Item>)
                })
                }
            </ListGroup>
        </div>
    )
};
export default QList;