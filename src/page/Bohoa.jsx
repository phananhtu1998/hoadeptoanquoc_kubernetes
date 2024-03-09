// Trong component Bohoa
import React, { useState, useEffect } from 'react';
import { Pagination } from 'antd';
import Container from 'react-bootstrap/Container';
import { Route, Routes, useNavigate } from 'react-router-dom';
import lstBoHoa from '../Data/data';
import Detail from './Detail';
import style from '../style/danhmuchoa.module.css';
let sortedData = lstBoHoa.filter(item => item.Category === "bo-hoa");
const Bohoa = ({ setCartItems }) => {
    useEffect(() => {
        document.title = "Bó Hoa";
        window.scrollTo({
            top: 760,
            left: 0,
            behavior: 'smooth' // để có hiệu ứng cuộn mượt mà (tuỳ chọn)
        });
    });
    const itemsPerPage = 16;
    const [currentPage, setCurrentPage] = useState(1);
    const [sortBy, setSortBy] = useState("1"); // Default sorting option
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const initialData = [...sortedData];
    const sortData = () => {
        let clonedData = [...sortedData];
        switch (sortBy) {
            case "1":
                return clonedData; // Return the original order
            case "2":
                clonedData.sort((a, b) => parseFloat(a.Price) - parseFloat(b.Price));
                break;
            case "3":
                clonedData.sort((a, b) => parseFloat(b.Price) - parseFloat(a.Price));
                break;
            default:
                break;
        }
        return clonedData;
    };
    const currentItems = sortData().slice(indexOfFirstItem, indexOfLastItem);
    const navigate = useNavigate();
    const totalItems = sortedData.length;
    const pageNumbers = Math.ceil(totalItems / itemsPerPage);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const handleAddToCartAndNavigate = (item, orderIndex) => {
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
    return (
        <div className={style.customstyles}>
            <Container>
                <h1 className={style.h1customtext}>
                    <span className={style.spantextcenter}>Bó hoa</span>
                </h1>
                <div className={style.custombox}>
                    <div className={style.customcontainer}>
                        <span>Sắp xếp </span>
                        <select value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)} className={style.onchangcustomcontainer}>
                            <option value="1">Mới nhất</option>
                            <option value="2">Giá tăng dần</option>
                            <option value="3">Giá giảm dần</option>
                        </select>
                    </div>
                    <ul className={style.customlist}>
                        {currentItems.map((item, index) => (
                            <li key={index} className={style.licustombox}>
                                <div className={style.divcustomcontainer}>
                                    <div className={style.divcustomelement}>
                                        <img onClick={() => navigate(`/chi-tiet/${item.Name}`, { state: { item } })} className={style.customimage} src={item.Images} alt={item.Name} title={item.Name} />
                                    </div>
                                    <h2 className={style.customtexth2}>
                                        <p style={{ cursor: 'pointer' }} onClick={() => navigate(`/chi-tiet/${item.Name}`, { state: { item } })} title={item.Name}>
                                            {item.Name}
                                        </p>
                                    </h2>
                                    <div className={style.custominlineblock}>
                                        <strong>{(parseInt(item.Price, 10)).toLocaleString('vi-VN')}</strong>
                                        <span> VNĐ</span>
                                    </div>
                                    {item.PriceOld !== '' ? (
                                        <div className={style.custominlineelement}>{(parseInt(item.PriceOld, 10)).toLocaleString('vi-VN')}</div>
                                    ) : (
                                        null
                                    )}
                                    <div className={style.customblockcenter}>
                                        <label style={{ cursor: 'pointer' }}>
                                            <span
                                                onClick={() => handleAddToCartAndNavigate(item, index + 1)}
                                                className={style.customlink}
                                            >
                                                <span className={style.custombutton}>Mua hàng</span>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </li>

                        ))
                        }
                    </ul>
                    <div className={style.paginaioncustomcontainer}>
                        {pageNumbers > 1 && (
                            <Pagination
                                current={currentPage}
                                total={totalItems}
                                showSizeChanger={false}
                                pageSize={itemsPerPage}
                                onChange={paginate}
                            />
                        )}
                    </div>
                </div>
            </Container >
            <Routes>
                {currentItems.map((index) => (
                    <Route
                        key={index}
                        path={`/bo-hoa/${index + 1}`}
                        element={<Detail index={index} />}
                    />
                ))}
            </Routes>

        </div >
    );
};

export default Bohoa;
