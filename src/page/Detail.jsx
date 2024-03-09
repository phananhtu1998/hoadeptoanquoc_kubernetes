import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import lstHoa from '../Data/data';
import style from '../style/Detail.module.css'
const Detail = ({ setCartItems }) => {
    useEffect(() => {
        document.title = Name;
        window.scrollTo({
            top: 800,
            left: 0,
            behavior: 'smooth' // để có hiệu ứng cuộn mượt mà (tuỳ chọn)
        });
    });
    const { Name } = useParams();
    const [item, setItem] = useState(null);
    const [LstSpLienQuan, setLstSpLienQuan] = useState([]);
    const [quantity, setQuantity] = useState(1);
    // Hàm để xử lý sự kiện tăng số lượng
    const handleIncrease = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    // Hàm để xử lý sự kiện giảm số lượng
    const handleDecrease = () => {
        // Đảm bảo số lượng không thể giảm dưới 1
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };
    const handleAddToCartAndNavigate = (item, quantity) => {
        // Tìm kiếm xem mục đã tồn tại trong localStorage hay chưa
        const storedCartItems = localStorage.getItem('cartItems');
        const cartItems = storedCartItems ? JSON.parse(storedCartItems) : [];

        const existingItem = cartItems.find((cartItem) => cartItem.Name === item.Name);
        if (existingItem) {
            // Nếu mục đã tồn tại, tăng giá trị quantity lên 1
            existingItem.quantity = (existingItem.quantity || 0) + quantity;
        } else {
            // Nếu mục chưa tồn tại, thêm mục mới vào mảng cartItems với quantity là 1
            const newItem = {
                ...item,
                quantity: quantity,
            };
            cartItems.push(newItem);
        }

        // Lưu mảng cartItems mới vào localStorage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        setCartItems(cartItems);
        // Navigate to the "/orders" route
        navigate(`/orders`);
    };
    const handleAddToCartAndNavigateMuaHang = (item, orderIndex) => {
        // Tìm kiếm xem mục đã tồn tại trong localStorage hay chưa
        const storedCartItems = localStorage.getItem('cartItems');
        const cartItems = storedCartItems ? JSON.parse(storedCartItems) : [];

        const existingItem = cartItems.find((cartItem) => cartItem.Name === item.Name);

        if (existingItem) {
            // Nếu mục đã tồn tại, tăng giá trị quantity lên 1
            existingItem.quantity = (existingItem.quantity || 0) + 1;
        } else {
            // Nếu mục chưa tồn tại, thêm mục mới vào mảng cartItems với quantity là 1
            const newItem = {
                ...item,
                quantity: 1,
            };
            cartItems.push(newItem);
        }

        // Lưu mảng cartItems mới vào localStorage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        setCartItems(cartItems);
        // Navigate to the "/orders" route
        navigate(`/orders`);
    };
    const navigate = useNavigate();
    useEffect(() => {
        let foundItem = lstHoa.find(item => item.Name === Name);
        setLstSpLienQuan(lstHoa.filter(item => item.Category === foundItem.Category))
        if (foundItem) {
            setItem(foundItem);
        }
    }, [Name]);
    if (!item) {
        return <div style={{ textAlign: "center" }}></div>; // You might want to add a loading state or handle not found case
    }
    return (
        <div className={style.customelement} id='detail'>
            <div className={style.customcontainer}>
                <div className={style.stylediv}>
                    <div className={style.customelement}>
                        <div className={style.customelementdetail}>
                            <div className={style.customcontainerdetail}>
                                <p className={style.customblock}></p>
                                <div className={style.customdivelement}>
                                    <div className={style.customdivcontainer}>
                                        <a className={style.customdivlink}>
                                            <img className={style.customimage} src={item.Images} alt="" />
                                        </a>
                                    </div>
                                    <div className={style.customblocklimk}>
                                        <img className={style.customdivelementlink} src={item.Images} alt="" />
                                    </div>
                                </div>

                                <div className={style.namecustomelement}>
                                    <h1 className={style.customtext}>
                                        <span>{item.Name}</span>
                                    </h1>
                                    <p className={style.pcustomtext}>
                                        <span>Giá: </span>
                                        <span>{(parseInt(item.Price, 10)).toLocaleString('vi-VN')} VNĐ</span>
                                    </p>
                                    <div className={style.hethongcustomelement}>
                                        <div className={style.htcustomborder}>
                                            <div className={style.htcustomcontainer}>
                                                <div className={style.customtexts}>
                                                    <span className={style.colorfortext}>
                                                        <strong className={style.fontweghttext}>Hệ thống cửa hàng của Hoa đẹp toàn quốc gồm nhìu cửa hàng trên toàn quốc. Nhận đặt và giao hoa tại tất các xã, phường, thị trấn của các quận huyện trên toàn quốc.</strong>
                                                    </span>
                                                </div>
                                                <div className={style.customtexts}>
                                                    &nbsp;
                                                </div>
                                                <div className={style.customtexts}>
                                                    <span className={style.colorfortext}>
                                                        <strong className={style.fontweghttext}>Chương trình giá khuyến mãi hiện áp dụng tại Hồ Chí Minh, các khu vực khác khách hàng vui lòng liên hệ bộ phận tư vấn để cập nhật ưu đãi tùy thời điểm</strong>
                                                    </span>
                                                </div>
                                                <div className={style.customtexts}>
                                                    &nbsp;
                                                </div>
                                                <div className={style.customtexts}>
                                                    <span className={style.colorfortext}>
                                                        <strong className={style.fontweghttext}>Quý khách cần đặt hoa có thể bấm vào
                                                            <span className={style.dtcustomtext}> ĐẶT HÀNG NGAY </span>
                                                            bên dưới và đặt trực tiếp trên website hoặc liên hệ SĐT và zalo để được nhân viên tư vấn cụ thể:
                                                        </strong>
                                                    </span>
                                                </div>
                                                <div className={style.customtexts}>
                                                    &nbsp;
                                                </div>
                                                <div className={style.displayBlock}>
                                                    <p className={style.customblock}>
                                                        <strong className={style.boldText}>Hotline: </strong>
                                                        <span className={style.redText}>
                                                            <strong className={style.fontweghttext}>
                                                                <a className={style.redLink} href='tel:19003189'> 0979336771</a>
                                                            </strong>
                                                            &nbsp;
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className={style.customtexts}>
                                                    &nbsp;
                                                </div>
                                                <div className={style.boldBlock}>
                                                    <a className={style.redNoDecoration} href="https://zalo.me/0328975111" target="_blank">
                                                        <img src="/zalo.png" alt="" className={style.iconStyle} />
                                                        &nbsp; CHAT ĐỂ ĐƯỢC TƯ VẤN
                                                    </a>
                                                </div>
                                                <div style={{ display: 'block', fontWeight: 'bold', marginTop: '5px' }}>
                                                    <a className={style.redNoDecoration} href='https://www.facebook.com/profile.php?id=61554837907445' target="_blank">
                                                        <img src="/fb.png" alt="" className={style.iconStyle} />
                                                        &nbsp; CHAT ĐỂ ĐƯỢC TƯ VẤN
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.blockStyle}>
                                        <div className={style.borderStyle}>
                                            <div className={style.relativeBlockStyle}>
                                                &nbsp;&nbsp;✅ MIỄN PHÍ BANNER, THIỆP trị giá 20.000đ
                                            </div>
                                            <div className={style.relativeBlockStyle}>
                                                &nbsp;&nbsp;✅ Giảm 5% cho lần mua thứ 5 trở đi
                                            </div>
                                            <div className={style.relativeBlockStyle}>
                                                &nbsp;&nbsp;✅ Giảm 7% cho lần mua thứ 7
                                            </div>
                                            <div className={style.relativeBlockStyle}>
                                                &nbsp;&nbsp;✅ Giảm 10% cho lần mua thứ 10 trở đi
                                            </div>
                                            <div className={style.relativeBlockStyle}>
                                                &nbsp;&nbsp;✅ Gửi hình trước khi giao, cam kết hài lòng 100%
                                            </div>
                                            <div className={style.relativeBlockStyle}>
                                                &nbsp;&nbsp;✅ Cam kết hoa tươi trên 3 ngày
                                            </div>
                                            <div className={style.relativeBlockStyle}>
                                                &nbsp;&nbsp;✅ Một số mẫu chỉ có tại TPHCM và Hà Nội, khách hàng ở các tỉnh vui lòng liên hệ trực tiếp để biết thêm chi tiết.
                                            </div>
                                            <div className={style.relativeBlockStyle}>
                                                &nbsp;&nbsp;✅ Sản phẩm tại Tphcm & Hà Nội có thể đạt 95%-98%, sản phẩm tại các tỉnh thành khác có thể đạt 90%-95% (do sản phẩm được làm thủ công và đặc điểm theo mùa của hàng nông nghiệp)
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.customelement}>
                                        <div className={style.blockdisplaygia}>
                                            <div className={style.relativepoisition}>
                                                <div className={style.cardStyle}>
                                                    <p className={style.customblock}>
                                                        🌸Giá Hồ Điệp tại Thành phố Hồ Chí Minh 250,000vnd /1 cành,
                                                        <br />
                                                        🌸Giá Hồ Điệp tại Đà Nẵng và Hà Nội là 330,000vnd/ 1 cành
                                                        <br />
                                                        🌸Giá hồ điệp tại các tỉnh thành khu vực khác là 350,000vnd
                                                        <br />
                                                        🌸Giá hồ điệp dành cho các doanh nghiệp hàng tháng ít nhất 50 cành thì vui lòng liên hệ bộ phận tư vấn để biết thêm thông tin
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.customblocklimk}>
                                        <div className={style.inlineBorderStyle}>
                                            <label onClick={handleDecrease} className={style.inlineBlockWithBorderRight}>-</label>
                                            <input type="text" className={style.customStyle} value={quantity} placeholder='Số lượng' readOnly />
                                            <label onClick={handleIncrease} className={style.inlineBlockWithBorderLeft}>+</label>
                                        </div>
                                        <label htmlFor="" className={style.customButton} onClick={() => handleAddToCartAndNavigate(item, quantity)}>
                                            <span>
                                                Đặt hàng ngay
                                                <span className={style.textStyles}>
                                                    Miễn phí giao hàng nội thành TPHCM
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.blockdisplaygia}>
                            <span className={style.iherihfontweight}></span>
                        </div>
                        <div className={style.blockStyles}>
                            <div className={style.centertextalign}>
                                <div className={style.uppercaseTitle}>
                                    <div className={style.customImage}>
                                    </div>
                                    <span className={style.customTextde}>Sản phẩm liên quan</span>
                                    <div className={style.separatorLine}></div>
                                </div>

                                <div className={style.centeredBlock}>
                                    <div className={style.divcenteredBlock}>
                                        <ul className={style.customList}>
                                            {LstSpLienQuan.length > 0 && LstSpLienQuan.slice(0, 20).map((item, index) => (
                                                < li key={index} className={style.columnContainer}>
                                                    <div className={style.containerWithBorder}>
                                                        <div className={style.rotatedBox}>
                                                            <span>NEW</span>
                                                        </div>
                                                        <div className={style.relativeContainer}>
                                                            <Link className={style.noDecoration} to={`/chi-tiet/${item.Name}`}>
                                                                <img className={style.absoluteCover} src={item.Images} alt={item.Name} />
                                                            </Link>

                                                            <a href="/" className={style.noDecoration}>
                                                                <i></i>
                                                                <span></span>
                                                            </a>
                                                        </div>
                                                        <h2 className={style.h2marginstyle}>
                                                            <Link className={style.inheritFont} to={`/chi-tiet/${item.Name}`} title={item.Name}>
                                                                {item.Name}
                                                            </Link>
                                                        </h2>
                                                        <div className={style.mediumText}>
                                                            <strong>{(parseInt(item.Price, 10)).toLocaleString('vi-VN')}</strong>
                                                            <span> VNĐ</span>
                                                        </div>
                                                        <div className={style.centeredBlockdiv}>
                                                            <label style={{ cursor: 'pointer' }}>
                                                                <span className={style.customButtonmuahang} onClick={() => handleAddToCartAndNavigateMuaHang(item, index + 1)}>Mua hàng</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className={style.centerblocktext}>
                                        <Link to={`/${item.Category}/`} className={style.buttonStylecusor}>
                                            Xem thêm nhiều mẫu hơn
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Detail;
