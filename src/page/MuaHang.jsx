import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { DeleteOutlined } from '@ant-design/icons';
import style from '../style/muahang.module.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Orders = ({ cartItems, setCartItems }) => {
    useEffect(() => {
        document.title = "Giỏ Hàng";
        window.scrollTo({
            top: 800,
            left: 0,
            behavior: 'smooth' // để có hiệu ứng cuộn mượt mà (tuỳ chọn)
        });
    });
    // lấy giá trị để gửi lên api
    const [Name, setCustomerName] = useState('');
    const [Phone, setCustomerPhone] = useState('');
    const [Date, setDeliveryTime] = useState('');
    const [Info, setDeliveryInfo] = useState('');
    const [Description, setDescription] = useState('');
    // xử lý lưu thông tin đơn hàng
    const handleContinue = async () => {
        if (!Name || !Phone || !Date || !Info) {
            toast.error('Vui lòng điền đầy đủ thông tin', { position: toast.POSITION.TOP_RIGHT });
            return; // Exit the function if validation fails
        }
        const orderDetails = cartItems.map((item) => ({
            Name,
            Phone,
            Date,
            Info,
            Description,
            Title: item.Name,
            Price: item.Price,
            Quantity: item.quantity,
            TotalPrice: item.Price * item.quantity,
        }));
        try {
            const response = await axios.post('https://sheetdb.io/api/v1/ttfybaa7ifqlm', orderDetails, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 201) {
                console.log('Data sent successfully to SheetDB');
                toast.success('Đặt hoa thành công!', { position: toast.POSITION.TOP_RIGHT });
                // Handle success logic
            } else {
                console.error('Failed to send data to SheetDB');
                toast.error('Lỗi', { position: toast.POSITION.TOP_RIGHT });
                // Handle error logic
            }
        } catch (error) {
            console.error('Error sending data:', error.message);
            toast.error('Lỗi', { position: toast.POSITION.TOP_RIGHT });
            // Handle error logic
        }
    };
    // 
    let totalorder = 0;
    let number = 0;
    const [quantityMap, setQuantityMap] = useState({});
    useEffect(() => {
        // Load stored quantityMap from localStorage
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || {};
        console.log(storedCartItems);
        // Convert storedCartItems to quantityMap
        const newQuantityMap = storedCartItems.reduce((map, item) => {
            const key = `${item.Name}-${item.Price}`;
            map[key] = item.quantity || 0;
            return map;
        }, {});
        setQuantityMap(newQuantityMap);
    }, []);
    const handleIncrease = (item) => {
        const key = `${item.Name}-${item.Price}`;
        const updatedQuantityMap = {
            ...quantityMap,
            [key]: (quantityMap[key] || 0) + 1,
        };
        setQuantityMap(updatedQuantityMap);

        // Update cartItems based on the updated quantityMap
        const updatedCartItems = cartItems.map((cartItem) => {
            const cartItemKey = `${cartItem.Name}-${cartItem.Price}`;
            return {
                ...cartItem,
                quantity: updatedQuantityMap[cartItemKey] || 0,
            };
        });

        // Update localStorage with the modified array
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        setCartItems(updatedCartItems);
    };

    const handleDecrease = (item) => {
        const key = `${item.Name}-${item.Price}`;
        const updatedQuantityMap = {
            ...quantityMap,
            [key]: (quantityMap[key] || 0) - 1,
        };
        setQuantityMap(updatedQuantityMap);

        // Update cartItems based on the updated quantityMap
        const updatedCartItems = cartItems.map((cartItem) => {
            const cartItemKey = `${cartItem.Name}-${cartItem.Price}`;
            return {
                ...cartItem,
                quantity: updatedQuantityMap[cartItemKey] || 0,
            };
        });
        if (updatedQuantityMap[key] === 0) {
            const filteredCartItems = updatedCartItems.filter((cartItem) => {
                const cartItemKey = `${cartItem.Name}-${cartItem.Price}`
                return cartItemKey !== key;
            })
            localStorage.setItem('cartItems', JSON.stringify(filteredCartItems));
            setCartItems(filteredCartItems);
        } else {
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
            setCartItems(updatedCartItems);
        }
    };
    const DeleteItem = (item) => {
        const key = `${item.Name}-${item.Price}`;
        const filteredCartItems = cartItems.filter((cartItem) => {
            const cartItemKey = `${cartItem.Name}-${cartItem.Price}`
            return cartItemKey !== key;
        })
        localStorage.setItem('cartItems', JSON.stringify(filteredCartItems));
        setCartItems(filteredCartItems);
    }
    return (
        <div className={style.customStyle}>
            <div className={style.containerStyle}>
                <div className={style.relativeContainer}>
                    <div className={style.divstyle}>
                        <div>
                            <h1 className={style.emphasisText}>
                                <span>Giỏ hàng của bạn</span>
                            </h1>
                            <div>
                                <div className={style.sectionHeader}>
                                    <div className={style.inlineBlock}></div>
                                    <div className={style.inlineBlock30}>Tên</div>
                                    <div className={style.rightAligned}>Đơn giá</div>
                                    <div className={style.rightAligned}>Số lượng</div>
                                    <div className={style.divrightAligned}>Thành tiền</div>
                                </div>

                                {cartItems.map((item, index) => (
                                    totalorder += (item.Price * item.quantity),
                                    number++,
                                    < div key={index} className={style.customStyleblock}>
                                        <div>
                                            <div className={style.customInlineBlock}>
                                                <a className={style.customTextStyle}>
                                                    <img className={style.imgResponsive} src={item.Images} alt="" width={200} />
                                                </a>
                                            </div>
                                            <div className={style.customdivInlineBlock}>
                                                <a className={style.customTextStyle}>{number}. {item.Name} </a>
                                                {/* <p className={style.customBlock}>
                                                    <span className={style.spanstyle}>Ghi chú</span>
                                                    <input className={style.customWidth} type="text" />
                                                </p> */}
                                                <div className={style.displayblock}></div>
                                            </div>
                                            <div className={style.divcustomInlineBlock}>
                                                <strong className={style.customStylebold}>
                                                    <span>{(parseInt(item.Price, 10)).toLocaleString('vi-VN')} VNĐ</span>
                                                </strong>
                                            </div>
                                            {/* số lượng */}
                                            <div className={style.divcustomInlineBlock}>
                                                <div className={style.borderStyle}>
                                                    <label className={style.inlineBlockWithBorder} onClick={() => handleDecrease(item)}>-</label>
                                                    <input className={style.horizontalText} type="text" value={item.quantity} readOnly />
                                                    <label className={style.borderLeftContainer} onClick={() => handleIncrease(item)}>+</label>
                                                </div>
                                            </div>
                                            {/* Thành tiền */}
                                            <div className={style.boldRightContainer}>
                                                {(item.Price * item.quantity).toLocaleString('vi-VN')} VNĐ
                                            </div>
                                            {/* xóa */}
                                            <div className={style.textAlignRightContainer}>
                                                <a className={style.customTextStyle} onClick={() => DeleteItem(item)} title='Xóa'>
                                                    <i className={style.iconContainer}>
                                                        <DeleteOutlined />
                                                    </i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <br />
                            <div className={style.borderBottomDotted}></div>
                            <div className={style.blockright}>
                                <span className={style.paddingInlineBlock}>
                                    Tổng cộng:
                                    <strong className={style.inlineBlockStyle}>
                                        {totalorder.toLocaleString('vi-VN')} VNĐ
                                    </strong>
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* điền thông tin */}
                    <div className={style.textLeftStyle}>
                        {/* H3 */}
                        <div className={style.customPaddingStyle}>
                            <h3 className={style.divcustomTextStyle}>
                                Quý khách vui lòng điền thông tin để đặt hàng
                            </h3>
                        </div>
                        {/* input */}
                        <div className={style.customBlockStyle}>
                            <span>
                                <input className={style.customInputStyle} onChange={(e) => setCustomerName(e.target.value)} type="text" placeholder='Tên người đặt' required />
                            </span>
                        </div>
                        <div className={style.customBlockStyle}>
                            <span>
                                <input className={style.hktcustomInputStyle} onChange={(e) => setCustomerPhone(e.target.value)} type="text" placeholder='SĐT người đặt' required />
                            </span>
                        </div>
                        <div className={style.customBlockStyle}>
                            <span>
                                <input className={style.hktcustomInputStyle} onChange={(e) => setDeliveryTime(e.target.value)} type="text" placeholder='Bạn muốn nhận hoa khi nào? (Ví dụ: 15h ngày 15/01/2021)' />
                            </span>
                        </div>
                        <div className={style.customBlockStyle}>
                            <span>
                                <textarea className={style.customTextAreaStyle} onChange={(e) => setDeliveryInfo(e.target.value)} placeholder='Tên, SĐT và địa chỉ người nhận' required>

                                </textarea>
                            </span>
                        </div>
                        <div className={style.customBlockStyle}>
                            <span>
                                <input className={style.hktcustomInputStyle} onChange={(e) => setDescription(e.target.value)} type="text" placeholder='Nội dung thông điệp BANNER hoặc THIỆP (Ví dụ: Banner: Công ty ABC chúc mừng khai trương)' />
                            </span>
                        </div>
                    </div>
                    {/* botton tiếp tục và quay lại */}
                    <p className={style.customBlock}>
                        <label style={{ verticalAlign: 'top', width: '25%', paddingRight: '10px', display: 'inline-block', textAlign: 'right' }}>
                        </label>
                        <button onClick={() => window.location.href = '/'} className={style.customButtonStyle}> « Quay lại chọn hàng </button>
                        <button className={style.customButtonnextStyle} onClick={handleContinue}>
                            Mua ngay
                        </button>
                    </p>
                </div>

            </div>
            <ToastContainer />
        </div >
    );
};

export default Orders;
