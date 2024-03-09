import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, Link } from 'react-router-dom';
import Styles from '../style/homepage.module.css';
import React, { useEffect } from 'react';
export default function Home({ setCartItems }) {
    useEffect(() => {
        document.title = "Hoa Đẹp Toàn Quốc";
    });
    const BoHoaTuoi = [
        { Name: 'Everyday with you', Price: '200000', Images: '/BoHoa/13111_everyday-with-you.jpg' },
        { Name: 'Dating', Price: '250000', Images: '/BoHoa/14270_dating.jpg' },
        { Name: 'Nồng nàn', Price: '300000', Images: '/BoHoa/14470_nong-nan.jpg' },
        { Name: 'Điều thân thương', Price: '150000', Images: '/BoHoa/13234_dieu-than-thuong.jpg' },
        { Name: 'Say you do', Price: '300000', Images: '/BoHoa/14339_say-you-do.jpg' },
        { Name: 'Tana baby 2', Price: '350000', Images: '/BoHoa/13291_my-tana.jpg' },
        { Name: 'Bó Hoa Tú Cầu', Price: '400000', Images: '/BoHoa/6041_bo-hoa-tu-cau.jpg' },
        { Name: 'Đắm say 2', Price: '250000', Images: '/BoHoa/14432_dam-say.jpg' },
        { Name: 'Adore', Price: '400000', Images: '/BoHoa/14645_adore.jpg' },
        { Name: 'The greatest thing', Price: '450000', Images: '/BoHoa/13293_the-greatest-thing.jpg' },
        { Name: 'Mừng thành công', Price: '3000000', Images: '/BoHoa/14474_mung-thanh-cong.jpg' },
        { Name: 'Eternal Bloom', Price: '500000', Images: '/BoHoa/14649_eternal-bloom.jpg' },
    ]
    const GioHoaTuoi = [
        { Name: 'Lux basket mini 5', Price: '300000', Images: '/GioHoaTuoi/14566_lux-basket-mini.jpg' },
        { Name: 'Rạng rỡ', Price: '350000', Images: '/GioHoaTuoi/14710_rang-ro.jpg' },
        { Name: 'Lux basket 4', Price: '400000', Images: '/GioHoaTuoi/14580_lux-basket.jpg' },
        { Name: 'Lan tỏa yêu thương', Price: '550000', Images: '/GioHoaTuoi/14843_lan-toa-yeu-thuong.jpg' },
        { Name: 'Sound of love', Price: '350000', Images: '/GioHoaTuoi/11610_sound-of-love.jpg' },
        { Name: 'Bất ngờ nhỏ', Price: '450000', Images: '/GioHoaTuoi/14842_bat-ngo-nho.jpg' },
        { Name: 'Chiều hoàng hôn', Price: '600000', Images: '/GioHoaTuoi/11609_chieu-hoang-hon.jpg' },
        { Name: 'Love is you', Price: '650000', Images: '/GioHoaTuoi/14399_love-is-you.jpg' },
        { Name: 'Tuổi xanh', Price: '550000', Images: '/GioHoaTuoi/13219_tuoi-xanh.jpg' },
        { Name: 'Nữ hoàng', Price: '600000', Images: '/GioHoaTuoi/13075_nu-hoang.jpg' },
        { Name: 'Capuchino love', Price: '600000', Images: '/GioHoaTuoi/14833_capuchino-love.jpg' },
        { Name: 'A little wish', Price: '700000', Images: '/GioHoaTuoi/8671_a-little-wish.jpg' },
    ]
    const HopHoaTuoi = [
        { Name: 'Phút Dấu Yêu', Price: '400000', Images: '/HopHoaTuoi/14672_phut-dau-yeu.jpg' },
        { Name: 'This love', Price: '500000', Images: '/HopHoaTuoi/13127_this-love.jpg' },
        { Name: 'Sắc hương', Price: '500000', Images: '/HopHoaTuoi/13129_sac-huong.jpg' },
        { Name: 'Bản tình ca mùa đông', Price: '500000', Images: '/HopHoaTuoi/8038_ban-tinh-ca-mua-dong.jpg' },
        { Name: 'Ao ước', Price: '400000', Images: '/HopHoaTuoi/11614_ao-uoc.jpg' },
        { Name: 'Mây ngàn', Price: '500000', Images: '/HopHoaTuoi/11613_may-ngan.jpg' },
        { Name: 'Trái tim mùa thu', Price: '500000', Images: '/HopHoaTuoi/13140_trai-tim-mua-thu.jpg' },
        { Name: 'Đa sắc', Price: '750000', Images: '/HopHoaTuoi/14604_da-sac.jpg' },
        { Name: 'Sớm mai ngọt ngào', Price: '500000', Images: '/HopHoaTuoi/13161_som-mai-ngot-ngao.jpg' },
        { Name: 'Ngọc xanh', Price: '650000', Images: '/HopHoaTuoi/14692_ngoc-xanh.jpg' },
        { Name: 'Người đặc biệt', Price: '900000', Images: '/HopHoaTuoi/14606_nguoi-dac-biet.jpg' },
        { Name: 'Cutie bear and rose 11', Price: '1200000', Images: '/HopHoaTuoi/14551_cutie-bear-and-rose.jpg' },
    ]
    const HoaLanHoDiep = [
        { Name: 'Lan Hồ Điệp xuân mẫu 14', Price: '2850000', Images: '/LanHoDiep/12709_lan-ho-diep-xuan-mau.jpg' },
        { Name: 'Lan Hồ Điệp xuân mẫu 11', Price: '825000', Images: '/LanHoDiep/12706_lan-ho-diep-xuan-mau.jpg' },
        { Name: 'Hồ điệp chậu 100 cành', Price: '28500000', Images: '/LanHoDiep/12693_ho-diep-chau--canh.jpg' },
        { Name: 'Lan Hồ Điệp Mẫu 3', Price: '9250000', Images: '/LanHoDiep/12292_lan-ho-diep-mau.jpg' },
        { Name: 'Chậu lan trắng 1 cành 01', Price: '300000', Images: '/LanHoDiep/11124_chau-lan-trang--canh.png' },
        { Name: 'Hồ điệp vàng chậu sứ 05', Price: '550000', Images: '/LanHoDiep/14065_ho-diep-vang-chau-su.jpg' },
        { Name: 'Nghinh xuân', Price: '825000', Images: '/LanHoDiep/11117_nghinh-xuan.jpg' },
        { Name: 'Hồ điệp mix màu 03', Price: '925000', Images: '/LanHoDiep/14061_ho-diep-mix-mau.jpg' },
        { Name: 'Hồ điệp vàng 3 cành', Price: '925000', Images: '/LanHoDiep/7180_ho-diep-vang--canh.jpg' },
        { Name: 'Phát tài', Price: '1200000', Images: '/LanHoDiep/7779_phat-tai.jpg' },
        { Name: 'Lan Hồ Điệp xuân mẫu 12', Price: '1575000', Images: '/LanHoDiep/12707_lan-ho-diep-xuan-mau.jpg' },
        { Name: 'Hồ điệp tím chậu sứ 04', Price: '1950000', Images: '/LanHoDiep/14055_ho-diep-tim-chau-su.jpg' },
    ]
    const HoaKhaiTruong = [
        { Name: 'Congrats mini size 7', Price: '800000', Images: '/HoaKhaiTruong/14351_congrats-mini-size.jpg' },
        { Name: 'Congrats mini size 2', Price: '900000', Images: '/HoaKhaiTruong/13369_congrats-mini-size.png' },
        { Name: 'Kệ Chúc Mừng 02', Price: '950000', Images: '/HoaKhaiTruong/13150_ke-chuc-mung.jpg' },
        { Name: 'Cát tài', Price: '1000000', Images: '/HoaKhaiTruong/14372_cat-tai.jpg' },
        { Name: 'Great Achievement', Price: '1200000', Images: '/HoaKhaiTruong/12504_great-achievement.jpg' },
        { Name: 'Congrats mini size 3', Price: '950000', Images: '/HoaKhaiTruong/13370_congrats-mini-size.png' },
        { Name: 'Toả sáng', Price: '1200000', Images: '/HoaKhaiTruong/11032_toa-sang.jpg' },
        { Name: 'Dấu ấn', Price: '1500000', Images: '/HoaKhaiTruong/14378_dau-an.jpg' },
        { Name: 'Phú Quý 2', Price: '1600000', Images: '/HoaKhaiTruong/12505_phu-quy.jpg' },
        { Name: 'New Start', Price: '1000000', Images: '/HoaKhaiTruong/14349_new-start.jpg' },
        { Name: 'Tấn lộc', Price: '1200000', Images: '/HoaKhaiTruong/14374_tan-loc.jpg' },
        { Name: 'Perfection 02', Price: '1400000', Images: '/HoaKhaiTruong/13166_perfection.jpg' },
    ]
    const HoaChiaBuon = [
        { Name: 'Mây gió', Price: '300000', Images: '/HoaChiaBuon/13132_may-gio.jpg' },
        { Name: 'Bó hoa chia buồn 2', Price: '350000', Images: '/HoaChiaBuon/14337_bo-hoa-chia-buon.jpg' },
        { Name: 'Deep condolences', Price: '850000', Images: '/HoaChiaBuon/8396_deep-condolences.png' },
        { Name: 'Phút Chia Ly', Price: '1000000', Images: '/HoaChiaBuon/5239_phut-chia-ly.jpg' },
        { Name: 'Chia xa', Price: '300000', Images: '/HoaChiaBuon/12911_chia-xa.jpg' },
        { Name: 'Kệ Chia Buồn 05', Price: '700000', Images: '/HoaChiaBuon/13147_ke-chia-buon.jpg' },
        { Name: 'Tâm nguyện', Price: '1000000', Images: '/HoaChiaBuon/13099_tam-nguyen.jpg' },
        { Name: 'Hai thế giới 2', Price: '1200000', Images: '/HoaChiaBuon/8397_hai-the-gioi.png' },
        { Name: 'Kỉ niệm', Price: '300000', Images: '/HoaChiaBuon/13183_ki-niem.jpg' },
        { Name: 'Kệ Chia Buồn 04', Price: '850000', Images: '/HoaChiaBuon/13146_ke-chia-buon.jpg' },
        { Name: 'Nguyện cầu', Price: '1500000', Images: '/HoaChiaBuon/12489_nguyen-cau.jpg' },
        { Name: 'Cõi an yên', Price: '2000000', Images: '/HoaChiaBuon/11616_coi-an-yen.jpg' },
    ]
    const GioTraiCayQuaTang = [
        { Name: 'Giỏ trái cây 217', Price: '1300000', Images: '/GioQuaTraiCay/gio-trai-cay-217_300x300.jpg' },
        { Name: 'Giỏ trái cây 292', Price: '1200000', Images: '/GioQuaTraiCay/gio-trai-cay-292_300x300.jpg' },
        { Name: 'Giỏ trái cây 295', Price: '1200000', Images: '/GioQuaTraiCay/gio-trai-cay-295_300x300.jpg' },
        { Name: 'Giỏ trái cây 299', Price: '1200000', Images: '/GioQuaTraiCay/gio-trai-cay-299_300x300.jpg' },
        { Name: 'Giỏ trái cây 301', Price: '1200000', Images: '/GioQuaTraiCay/gio-trai-cay-301_300x300.jpg' },
        { Name: 'Giỏ trái cây 309', Price: '1200000', Images: '/GioQuaTraiCay/gio-trai-cay-309_300x300.jpg' },
        { Name: 'Giỏ trái cây 316', Price: '1200000', Images: '/GioQuaTraiCay/gio-trai-cay-316_300x300.jpg' },
        { Name: 'Giỏ trái cây 003', Price: '1300000', Images: '/GioQuaTraiCay/giotraicay003-1300000.jpg' },
        { Name: 'Giỏ trái cây 44', Price: '1600000', Images: '/GioQuaTraiCay/giotraicay44-1600000.jpg' },
        { Name: 'Giỏ trái cây 201', Price: '1500000', Images: '/GioQuaTraiCay/giotraicay201-1500000.jpg' },
        { Name: 'Giỏ trái cây 222', Price: '1200000', Images: '/GioQuaTraiCay/giotraicay222-1200000.jpg' },
        { Name: 'Giỏ trái cây 305', Price: '700000', Images: '/GioQuaTraiCay/giotraicay350-700.jpg' },
    ]
    const HoaCuoi = [
        { Name: 'Bên nhau mãi mãi', Price: '1100000', Images: '/HoaCuoi/ben-nhau-mai-mai.jpg' },
        { Name: 'Bên nhau trọn đời', Price: '880000', Images: '/HoaCuoi/ben-nhau-tron-doi.jpg' },
        { Name: 'Cherish day', Price: '650000', Images: '/HoaCuoi/cherish-day.png' },
        { Name: 'Chung bước', Price: '700000', Images: '/HoaCuoi/chung-buoc.png' },
        { Name: 'Chuyện trăm năm', Price: '800000', Images: '/HoaCuoi/chuyen-tram-nam.png' },
        { Name: 'Đôi cánh tình yêu', Price: '3362000', Images: '/HoaCuoi/doi-canh-tinh-yeu.jpg' },
        { Name: 'Giây phút êm đềm', Price: '900000', Images: '/HoaCuoi/giay-phut-em-dem.png' },
        { Name: 'Happy ending', Price: '1320000', Images: '/HoaCuoi/happy-ending.jpg' },
        { Name: 'Một nhà', Price: '850000', Images: '/HoaCuoi/mot-nha.png' },
        { Name: 'Hoa rum tinh khôi', Price: '1100000', Images: '/HoaCuoi/hoa-rum-tinh-khoi.jpg' },
        { Name: 'My baby', Price: '616000', Images: '/HoaCuoi/my-baby.jpg' },
        { Name: 'Ngày chung đôi', Price: '750000', Images: '/HoaCuoi/ngay-chung-doi.png' },
    ]
    const CayXanhVP = [
        { Name: 'Chậu cọ Nhật 1m5', Price: '980000', Images: '/CayChoPhongKhach/14507_chau-co-nhat-m.jpg' },
        { Name: 'Cây Cọ Nhật', Price: '690000', Images: '/CayChoPhongKhach/14494_cay-co-nhat.jpg' },
        { Name: 'Bạch mã chậu gốm', Price: '660000', Images: '/CayChoPhongKhach/12701_bach-ma-chau-gom.jpg' },
        { Name: 'Kim tiền MSTO', Price: '950000', Images: '/CayChoPhongKhach/9464_kim-tien-msto.jpg' },
        { Name: 'Đế vương xanh MSTO', Price: '1160000', Images: '/CayChoPhongKhach/8784_de-vuong-xanh-msto.jpg' },
        { Name: 'Chậu cây văn phòng mix 1', Price: '1350000', Images: '/CayChoPhongKhach/9544_chau-cay-van-phong-mix.jpg' },
        { Name: 'Vạn lộc mix ngọc ngân 1', Price: '650000', Images: '/CayChoPhongKhach/7992_van-loc-mix-ngoc-ngan.jpg' },
        { Name: 'Dương xỉ răng cưa Size S', Price: '770000', Images: '/CayChoPhongKhach/13566_duong-xi-rang-cua-size-s.jpg' },
        { Name: 'Kim ngân đại chậu gân', Price: '1170000', Images: '/CayChoPhongKhach/10192_kim-ngan-dai-chau-gan.jpg' },
        { Name: 'Chậu cây văn phòng mix 2', Price: '1300000', Images: '/CayChoPhongKhach/11085_chau-cay-van-phong-mix.jpg' },
        { Name: 'Chậu cây văn phòng mix 3', Price: '950000', Images: '/CayChoPhongKhach/9948_chau-cay-van-phong-mix.jpg' },
        { Name: 'Cây Lan Tuyết', Price: '500000', Images: '/CayChoPhongKhach/13432_cay-lan-tuyet.jpg' },
    ]
    const HoaDeBan = [
        { Name: 'Hoa để bàn 36', Price: '550000', Images: '/HoaDeBan/hoa-de-ban-36_300x300.png' },
        { Name: 'Hoa để bàn 35', Price: '500000', Images: '/HoaDeBan/hoa-de-ban-35_300x300.png' },
        { Name: 'Hoa để bàn 20', Price: '750000', Images: '/HoaDeBan/hoa-de-ban-20_300x300.png' },
        { Name: 'Hoa để bàn 08', Price: '550000', Images: '/HoaDeBan/hoa-de-ban-08_300x300.png' },
        { Name: 'Hoa để bàn 15', Price: '700000', Images: '/HoaDeBan/hoa-de-ban-15_300x300.png' },
        { Name: 'Hoa để bàn 05', Price: '1200000', Images: '/HoaDeBan/hoa-de-ban-05_300x300.png' },
        { Name: 'Hoa để bàn 03', Price: '1200000', Images: '/HoaDeBan/hoa-de-ban-03_300x300.png' },
        { Name: 'Hoa để bàn 43', Price: '600000', Images: '/HoaDeBan/hoa-de-ban-43_300x300.png' },
        { Name: 'Hoa để bàn 01', Price: '800000', Images: '/HoaDeBan/hoa-de-ban-01_300x300.png' },
        { Name: 'Hoa để bàn 42', Price: '700000', Images: '/HoaDeBan/hoa-de-ban-42_300x300.png' },
        { Name: 'Hoa để bàn 02', Price: '1200000', Images: '/HoaDeBan/hoa-de-ban-02_300x300.png' },
        { Name: 'Hoa để bàn 11', Price: '750000', Images: '/HoaDeBan/hoa-de-ban-11_300x300.png' },
    ]
    const navigate = useNavigate();
    const handleClick = (item) => {
        navigate(`/chi-tiet/${item.Name}`, { state: { item } });
        window.scrollTo(0, 0); // Cuộn lên đầu trang
    };
    const handleAddToCartAndNavigate = (item) => {
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
        <div>
            <div>
                <Container>
                    <div>
                        <div className={Styles.customdivider}>
                            <span className={Styles.customstylecontainers}>
                                <span>
                                    <a href='/bo-hoa/' className={Styles.customdanhmuchoatext}>BÓ HOA TƯƠI</a>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className={Styles.divnew}>
                        <ul className={Styles.customhoalist}>
                            {BoHoaTuoi.map((item, index) => (
                                <li key={index} className={Styles.customlishoabox}>
                                    <div className={Styles.customlisthoacontainer}>
                                        <div className={Styles.customdanhmuchoabox}>
                                            <span>New</span>
                                        </div>
                                        <div className={Styles.customhoaelement}>
                                            <a className={Styles.customlink}>
                                                <img
                                                    onClick={() => handleClick(item)}
                                                    className={Styles.customimage} // Thay thế bằng className của bạn
                                                    src={item.Images}
                                                    alt={item.Name}
                                                />
                                            </a>
                                            <a href="/" className={Styles.customlink}>
                                                <i></i>
                                                <span></span>
                                            </a>
                                        </div>
                                        <h2 className={Styles.divmargin}>
                                            <div
                                                className={Styles.customtexthoa}
                                                onClick={() => handleClick(item)}
                                                title={item.Name}
                                            >
                                                {item.Name}
                                            </div>
                                        </h2>
                                        <div className={Styles.customtexthoa1}>
                                            <strong>{(parseInt(item.Price, 10)).toLocaleString('vi-VN')}</strong>
                                            <span> VNĐ</span>
                                        </div>
                                        <div className={Styles.customonclickblock}>
                                            <label style={{ cursor: 'pointer' }}>
                                                <span className={Styles.custombuttonflowew} onClick={() => handleAddToCartAndNavigate(item, index + 1)}>Mua hàng</span>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className={Styles.customcontainerflower}>
                            <a href='/bo-hoa/' className={Styles.customtextdebutton}>
                                Xem thêm nhiều mẫu hơn
                            </a>
                        </div>
                    </div>
                </Container>
                <Container>
                    <div>
                        <div className={Styles.customdivider}>
                            <span className={Styles.customstylecontainers}>
                                <span>
                                    <a href='/gio-hoa-tuoi/' className={Styles.customdanhmuchoatext}>GIỎ HOA TƯƠI</a>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className={Styles.divnew}>
                        <ul className={Styles.customhoalist}>
                            {GioHoaTuoi.map((item, index) => (
                                <li key={index} className={Styles.customlishoabox}>
                                    <div className={Styles.customlisthoacontainer}>
                                        <div className={Styles.customdanhmuchoabox}>
                                            <span>New</span>
                                        </div>
                                        <div className={Styles.customhoaelement}>
                                            <a className={Styles.customlink}>
                                                <img
                                                    onClick={() => handleClick(item)}
                                                    className={Styles.customimage} // Thay thế bằng className của bạn
                                                    src={item.Images}
                                                    alt={item.Name}
                                                />
                                            </a>
                                            <a href="/" className={Styles.customlink}>
                                                <i></i>
                                                <span></span>
                                            </a>
                                        </div>
                                        <h2 className={Styles.divmargin}>
                                            <div
                                                className={Styles.customtexthoa}
                                                onClick={() => handleClick(item)}
                                                title={item.Name}
                                            >
                                                {item.Name}
                                            </div>
                                        </h2>
                                        <div className={Styles.customtexthoa1}>
                                            <strong>{(parseInt(item.Price, 10)).toLocaleString('vi-VN')}</strong>
                                            <span> VNĐ</span>
                                        </div>
                                        <div className={Styles.customonclickblock}>
                                            <label style={{ cursor: 'pointer' }}>
                                                <span className={Styles.custombuttonflowew} onClick={() => handleAddToCartAndNavigate(item, index + 1)}>Mua hàng</span>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className={Styles.customcontainerflower}>
                            <a href='/gio-hoa-tuoi/' className={Styles.customtextdebutton}>
                                Xem thêm nhiều mẫu hơn
                            </a>
                        </div>
                    </div>
                </Container>
                <Container>
                    <div>
                        <div className={Styles.customdividerflower}>
                            <span className={Styles.customstylecontainers}>
                                <span>
                                    <a href='/gio-hoa/' className={Styles.customdanhmuchoatext}>HỘP HOA TƯƠI</a>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className={Styles.divnew}>
                        <ul className={Styles.customhoalist}>
                            {HopHoaTuoi.map((item, index) => (
                                <li key={index} className={Styles.customlishoabox}>
                                    <div className={Styles.customlisthoacontainer}>
                                        <div className={Styles.customdanhmuchoabox}>
                                            <span>New</span>
                                        </div>
                                        <div className={Styles.customhoaelement}>
                                            <a className={Styles.customlink}>
                                                <img
                                                    onClick={() => handleClick(item)}
                                                    className={Styles.customimage} // Thay thế bằng className của bạn
                                                    src={item.Images}
                                                    alt={item.Name}
                                                />
                                            </a>
                                            <a href="/" className={Styles.customlink}>
                                                <i></i>
                                                <span></span>
                                            </a>
                                        </div>
                                        <h2 className={Styles.divmargin}>
                                            <div
                                                className={Styles.customtexthoa}
                                                onClick={() => handleClick(item)}
                                                title={item.Name}
                                            >
                                                {item.Name}
                                            </div>
                                        </h2>
                                        <div className={Styles.customtextflower}>
                                            <strong>{(parseInt(item.Price, 10)).toLocaleString('vi-VN')}</strong>
                                            <span> VNĐ</span>
                                        </div>
                                        <div className={Styles.customonclickblock}>
                                            <label style={{ cursor: 'pointer' }}>
                                                <span className={Styles.custombuttonflowew} onClick={() => handleAddToCartAndNavigate(item, index + 1)}>Mua hàng</span>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className={Styles.customcontainerflower}>
                            <a href='/gio-hoa' className={Styles.customtextdebutton}>
                                Xem thêm nhiều mẫu hơn
                            </a>
                        </div>
                    </div>
                </Container>
                <Container>
                    <div>
                        <div className={Styles.customdividerflower}>
                            <span className={Styles.customstylecontainers}>
                                <span>
                                    <a href='/lan-ho-diep/' className={Styles.customdanhmuchoatext}>HOA LAN HỒ ĐIỆP</a>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className={Styles.divnew}>
                        <ul className={Styles.customhoalist}>
                            {HoaLanHoDiep.map((item, index) => (
                                <li key={index} className={Styles.customlishoabox}>
                                    <div className={Styles.customlisthoacontainer}>
                                        <div className={Styles.customdanhmuchoabox}>
                                            <span>New</span>
                                        </div>
                                        <div className={Styles.customhoaelement}>
                                            <a className={Styles.customlink}>
                                                <img
                                                    onClick={() => handleClick(item)}
                                                    className={Styles.customimage} // Thay thế bằng className của bạn
                                                    src={item.Images}
                                                    alt={item.Name}
                                                />
                                            </a>
                                            <a href="/" className={Styles.customlink}>
                                                <i></i>
                                                <span></span>
                                            </a>
                                        </div>
                                        <h2 className={Styles.divmargin}>
                                            <div
                                                className={Styles.customtexthoa}
                                                onClick={() => handleClick(item)}
                                                title={item.Name}
                                            >
                                                {item.Name}
                                            </div>
                                        </h2>
                                        <div className={Styles.customtextflower}>
                                            <strong>{(parseInt(item.Price, 10)).toLocaleString('vi-VN')}</strong>
                                            <span> VNĐ</span>
                                        </div>
                                        <div className={Styles.customonclickblock}>
                                            <label style={{ cursor: 'pointer' }}>
                                                <span className={Styles.custombuttonflowew} onClick={() => handleAddToCartAndNavigate(item, index + 1)}>Mua hàng</span>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className={Styles.customcontainerflower}>
                            <a href='/lan-ho-diep/' className={Styles.customtextdebutton}>
                                Xem thêm nhiều mẫu hơn
                            </a>
                        </div>
                    </div>
                </Container>
                <Container>
                    <div>
                        <div className={Styles.customdividerflower}>
                            <span className={Styles.customstylecontainers}>
                                <span>
                                    <a href='/hoa-khai-truong/' className={Styles.customdanhmuchoatext}>HOA KHAI TRƯƠNG</a>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className={Styles.divnew}>
                        <ul className={Styles.customhoalist}>
                            {HoaKhaiTruong.map((item, index) => (
                                <li key={index} className={Styles.customlishoabox}>
                                    <div className={Styles.customlisthoacontainer}>
                                        <div className={Styles.customdanhmuchoabox}>
                                            <span>New</span>
                                        </div>
                                        <div className={Styles.customhoaelement}>
                                            <a className={Styles.customlinkflowers}>
                                                <img
                                                    onClick={() => handleClick(item)}
                                                    className={Styles.customimage} // Thay thế bằng className của bạn
                                                    src={item.Images}
                                                    alt={item.Name}
                                                />
                                            </a>
                                            <a href="/" className={Styles.customlinkflowers}>
                                                <i></i>
                                                <span></span>
                                            </a>
                                        </div>
                                        <h2 className={Styles.divmargin}>
                                            <div
                                                className={Styles.customtexthoa}
                                                onClick={() => handleClick(item)}
                                                title={item.Name}
                                            >
                                                {item.Name}
                                            </div>
                                        </h2>
                                        <div className={Styles.customtextflower}>
                                            <strong>{(parseInt(item.Price, 10)).toLocaleString('vi-VN')}</strong>
                                            <span> VNĐ</span>
                                        </div>
                                        <div className={Styles.customonclickblock}>
                                            <label style={{ cursor: 'pointer' }}>
                                                <span className={Styles.custombuttonflowew} onClick={() => handleAddToCartAndNavigate(item, index + 1)}>Mua hàng</span>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className={Styles.customcontainerflower}>
                            <a href='/hoa-khai-truong/' className={Styles.customtextdebutton}>
                                Xem thêm nhiều mẫu hơn
                            </a>
                        </div>
                    </div>
                </Container>
                <Container>
                    <div>
                        <div className={Styles.customdividerflower}>
                            <span className={Styles.customstylecontainers}>
                                <span>
                                    <a href='/hoa-chia-buon/' className={Styles.customdanhmuchoatext}>HOA CHIA BUỒN</a>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className={Styles.divnew}>
                        <ul className={Styles.customhoalist}>
                            {HoaChiaBuon.map((item, index) => (
                                <li key={index} className={Styles.customlishoabox}>
                                    <div className={Styles.customlisthoacontainer}>
                                        <div className={Styles.customdanhmuchoabox}>
                                            <span>New</span>
                                        </div>
                                        <div className={Styles.customhoaelement}>
                                            <a className={Styles.customlinkflowers}>
                                                <img
                                                    onClick={() => handleClick(item)}
                                                    className={Styles.customimage} // Thay thế bằng className của bạn
                                                    src={item.Images}
                                                    alt={item.Name}
                                                />
                                            </a>
                                            <a href="/" className={Styles.customlinkflowers}>
                                                <i></i>
                                                <span></span>
                                            </a>
                                        </div>
                                        <h2 className={Styles.divmargin}>
                                            <div
                                                className={Styles.customtexthoa}
                                                onClick={() => handleClick(item)}
                                                title={item.Name}
                                            >
                                                {item.Name}
                                            </div>
                                        </h2>
                                        <div className={Styles.customtextflower}>
                                            <strong>{(parseInt(item.Price, 10)).toLocaleString('vi-VN')}</strong>
                                            <span> VNĐ</span>
                                        </div>
                                        <div className={Styles.customonclickblock}>
                                            <label style={{ cursor: 'pointer' }}>
                                                <span className={Styles.custombuttonflowew} onClick={() => handleAddToCartAndNavigate(item, index + 1)}>Mua hàng</span>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className={Styles.customcontainerflower}>
                            <a href='/hoa-chia-buon/' className={Styles.customtextdebutton}>
                                Xem thêm nhiều mẫu hơn
                            </a>
                        </div>
                    </div>
                </Container>
                <Container>
                    <div>
                        <div className={Styles.customdividerflower}>
                            <span className={Styles.customstylecontainers}>
                                <span>
                                    <a href='/gio-qua-trai-cay/' className={Styles.customdanhmuchoatext}>GIỎ TRÁI CÂY QUÀ TẶNG</a>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className={Styles.divnew}>
                        <ul className={Styles.customhoalist}>
                            {GioTraiCayQuaTang.map((item, index) => (
                                <li key={index} className={Styles.customlishoabox}>
                                    <div className={Styles.customlisthoacontainer}>
                                        <div className={Styles.customdanhmuchoabox}>
                                            <span>New</span>
                                        </div>
                                        <div className={Styles.customhoaelement}>
                                            <a className={Styles.customlinkflowers}>
                                                <img
                                                    onClick={() => handleClick(item)}
                                                    className={Styles.customimage} // Thay thế bằng className của bạn
                                                    src={item.Images}
                                                    alt={item.Name}
                                                />
                                            </a>
                                            <a href="/" className={Styles.customlinkflowers}>
                                                <i></i>
                                                <span></span>
                                            </a>
                                        </div>
                                        <h2 className={Styles.divmargin}>
                                            <div
                                                className={Styles.customtexthoa}
                                                onClick={() => handleClick(item)}
                                                title={item.Name}
                                            >
                                                {item.Name}
                                            </div>
                                        </h2>
                                        <div className={Styles.customtextflower}>
                                            <strong>{(parseInt(item.Price, 10)).toLocaleString('vi-VN')}</strong>
                                            <span> VNĐ</span>
                                        </div>
                                        <div className={Styles.customonclickblock}>
                                            <label style={{ cursor: 'pointer' }}>
                                                <span className={Styles.custombuttonflowew} onClick={() => handleAddToCartAndNavigate(item, index + 1)}>Mua hàng</span>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className={Styles.customcontainerflower}>
                            <a href='/gio-qua-trai-cay/' className={Styles.customtextdebutton}>
                                Xem thêm nhiều mẫu hơn
                            </a>
                        </div>
                    </div>
                </Container>
                <Container>
                    <div>
                        <div className={Styles.customdividerflower}>
                            <span className={Styles.customstylecontainers}>
                                <span>
                                    <a href='/hoa-cuoi/' className={Styles.customdanhmuchoatext}>HOA CƯỚI</a>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className={Styles.divnew}>
                        <ul className={Styles.customhoalist}>
                            {HoaCuoi.map((item, index) => (
                                <li key={index} className={Styles.customlishoabox}>
                                    <div className={Styles.customlisthoacontainer}>
                                        <div className={Styles.customdanhmuchoabox}>
                                            <span>New</span>
                                        </div>
                                        <div className={Styles.customhoaelement}>
                                            <a className={Styles.customlinkflowers}>
                                                <img
                                                    onClick={() => handleClick(item)}
                                                    className={Styles.customimage} // Thay thế bằng className của bạn
                                                    src={item.Images}
                                                    alt={item.Name}
                                                />
                                            </a>
                                            <a href="/" className={Styles.customlinkflowers}>
                                                <i></i>
                                                <span></span>
                                            </a>
                                        </div>
                                        <h2 className={Styles.divmargin}>
                                            <div
                                                className={Styles.customtexthoa}
                                                onClick={() => handleClick(item)}
                                                title={item.Name}
                                            >
                                                {item.Name}
                                            </div>
                                        </h2>
                                        <div className={Styles.customtextflower}>
                                            <strong>{(parseInt(item.Price, 10)).toLocaleString('vi-VN')}</strong>
                                            <span> VNĐ</span>
                                        </div>
                                        <div className={Styles.customonclickblock}>
                                            <label style={{ cursor: 'pointer' }}>
                                                <span className={Styles.custombuttonflowew} onClick={() => handleAddToCartAndNavigate(item, index + 1)}>Mua hàng</span>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className={Styles.customcontainerflower}>
                            <a href='/hoa-cuoi/' className={Styles.customtextdebutton}>
                                Xem thêm nhiều mẫu hơn
                            </a>
                        </div>
                    </div>
                </Container>
                <Container>
                    <div>
                        <div className={Styles.customdividerflower}>
                            <span className={Styles.customstylecontainers}>
                                <span>
                                    <a href='/cay-xanh-van-phong/' className={Styles.customdanhmuchoatext}>CÂY XANH VĂN PHÒNG</a>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className={Styles.divnew}>
                        <ul className={Styles.customhoalist}>
                            {CayXanhVP.map((item, index) => (
                                <li key={index} className={Styles.customlishoabox}>
                                    <div className={Styles.customlisthoacontainer}>
                                        <div className={Styles.customdanhmuchoabox}>
                                            <span>New</span>
                                        </div>
                                        <div className={Styles.customhoaelement}>
                                            <a className={Styles.customlinkflowers}>
                                                <img
                                                    onClick={() => handleClick(item)}
                                                    className={Styles.customimage} // Thay thế bằng className của bạn
                                                    src={item.Images}
                                                    alt={item.Name}
                                                />
                                            </a>
                                            <a href="/" className={Styles.customlinkflowers}>
                                                <i></i>
                                                <span></span>
                                            </a>
                                        </div>
                                        <h2 className={Styles.divmargin}>
                                            <div
                                                className={Styles.customtexthoa}
                                                onClick={() => handleClick(item)}
                                                title={item.Name}
                                            >
                                                {item.Name}
                                            </div>
                                        </h2>
                                        <div className={Styles.customtextflower}>
                                            <strong>{(parseInt(item.Price, 10)).toLocaleString('vi-VN')}</strong>
                                            <span> VNĐ</span>
                                        </div>
                                        <div className={Styles.customonclickblock}>
                                            <label style={{ cursor: 'pointer' }}>
                                                <span className={Styles.custombuttonflowew} onClick={() => handleAddToCartAndNavigate(item, index + 1)}>Mua hàng</span>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className={Styles.customcontainerflower}>
                            <a href='/cay-cho-phong-khach/' className={Styles.customtextdebutton}>
                                Xem thêm nhiều mẫu hơn
                            </a>
                        </div>
                    </div>
                </Container>
                <Container>
                    <div>
                        <div className={Styles.customdividerflower}>
                            <span className={Styles.customstylecontainers}>
                                <span>
                                    <a href='/hoa-de-ban/' className={Styles.customdanhmuchoatext}>HOA ĐỂ BÀN</a>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className={Styles.divnew}>
                        <ul className={Styles.customhoalist}>
                            {HoaDeBan.map((item, index) => (
                                <li key={index} className={Styles.customlishoabox}>
                                    <div className={Styles.customlisthoacontainer}>
                                        <div className={Styles.customdanhmuchoabox}>
                                            <span>New</span>
                                        </div>
                                        <div className={Styles.customhoaelement}>
                                            <a className={Styles.customlinkflowers}>
                                                <img
                                                    onClick={() => handleClick(item)}
                                                    className={Styles.customimage} // Thay thế bằng className của bạn
                                                    src={item.Images}
                                                    alt={item.Name}
                                                />
                                            </a>
                                            <a href="/" className={Styles.customlinkflowers}>
                                                <i></i>
                                                <span></span>
                                            </a>
                                        </div>
                                        <h2 className={Styles.divmargin}>
                                            <div
                                                className={Styles.customtexthoa}
                                                onClick={() => handleClick(item)}
                                                title={item.Name}
                                            >
                                                {item.Name}
                                            </div>
                                        </h2>
                                        <div className={Styles.customtextflower}>
                                            <strong>{(parseInt(item.Price, 10)).toLocaleString('vi-VN')}</strong>
                                            <span> VNĐ</span>
                                        </div>
                                        <div className={Styles.customonclickblock}>
                                            <label style={{ cursor: 'pointer' }}>
                                                <span className={Styles.custombuttonflowew} onClick={() => handleAddToCartAndNavigate(item, index + 1)}>Mua hàng</span>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className={Styles.customcontainerflower}>
                            <a href='/hoa-de-ban/' className={Styles.customtextdebutton}>
                                Xem thêm nhiều mẫu hơn
                            </a>
                        </div>
                    </div>
                </Container>
            </div >
        </div >
    )
}
