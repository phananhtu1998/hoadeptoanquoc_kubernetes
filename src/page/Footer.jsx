import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faGooglePlusG, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { format } from 'date-fns';
import style from '../style/footer.module.css'
const WebFooter = () => {
    const currentDate = new Date();
    const formattedDate = format(currentDate, 'MM-yyyy');
    return (
        <div>
            {/* <div className={style.customelement}>
                <div className={style.customcontainer}>
                    <div className={style.divpadding}>
                        <div className={style.customelementdiv}>
                            <div className={style.customtext}>
                                <div>
                                    <span className={style.customtext}>
                                        <strong>TƯ VẤN NHANH</strong>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={style.customelementdiv}>
                            <div className={style.poisitiondiv}>
                                <form className={style.customecocontainer}>
                                    <div className={style.divdisplay}>
                                        <span></span>
                                        <span>
                                            <input className={style.inputcustom} placeholder="Nhập số điện thoại của bạn chúng tôi sẽ gọi lại tư vấn ngay" />
                                        </span>
                                    </div>
                                    <button className={style.custombuttondom}>Gửi</button>
                                </form>
                            </div>
                        </div>
                        <div className={style.customiconelement}>
                            <div className={style.customicontext}>
                                <div className={style.customiconelementcus}>
                                    <span className={style.customdomicondes}>
                                        <a href='https://www.facebook.com/profile.php?id=61554591125337&mibextid=LQQJ4d' target="_blank">
                                            <FontAwesomeIcon href='https://www.facebook.com/profile.php?id=61554591125337&mibextid=LQQJ4d' icon={faFacebookF} color='white' />
                                        </a>
                                    </span>
                                    <span className={style.customdomicondes}>
                                        <FontAwesomeIcon icon={faTwitter} color='white' />
                                    </span>
                                    <span className={style.customdomicondes}>
                                        <FontAwesomeIcon icon={faGooglePlusG} color='white' />
                                    </span>
                                    <span className={style.customdomicondes}>
                                        <FontAwesomeIcon icon={faYoutube} color='white' />
                                    </span>
                                    <span className={style.customdomicondes}>
                                        <FontAwesomeIcon icon={faInstagram} color='white' />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className={style.divcustomfootercontainer}>
                <div className={style.customwrapper}>
                    <div style={{
                        color: '#FFFFFF'
                    }}>
                        <div className={style.customfooterdivider}>
                            <div className={style.customtextfootrt}>
                                <div className={style.customtextcontainerFooter}>
                                    <div className={style.customelementdiv}>
                                        <div color='#FFFFFF'>
                                            <div className={style.customtextcondes}>
                                                <span className={style.customdsftext}>VỀ HOADEPTOANQUOC.COM</span>
                                            </div>
                                            <div className={style.customfsmelement}>
                                                <p className={style.pcustomtext}>
                                                    <span className={style.spancustomtext}>
                                                        <strong fontWeight="bold">Hỗ trợ tư vấn mua hàng 24/7</strong>
                                                    </span>
                                                </p>
                                                <p className={style.pcustomtext}>
                                                    <span className={style.newfontsizecus}>
                                                        <span style={{ color: '#9c0808' }}>
                                                            <strong style={{ fontWeight: 'bold' }}>XEM TOÀN BỘ ĐỊA CHỈ CỬA HÀNG</strong>
                                                        </span>
                                                    </span>
                                                </p>
                                                <p className={style.pcustomtext}>
                                                    <span className={style.emailcus}>
                                                        <strong>Hotline:
                                                            <a style={{ textDecoration: 'none', color: '#FFFFFF' }} href="tel:0979336771"> 0979336771</a>
                                                        </strong>
                                                    </span>
                                                </p>
                                                <p className={style.pcustomtext}>
                                                    <span className={style.emailcus}>
                                                        Email:&nbsp;hoadeptoanquoc88@gmail.com
                                                    </span>
                                                </p>
                                                <p className={style.pcustomtext}>
                                                    <span className={style.emailcus}>
                                                        Dịch vụ giao hoa đến 63 tỉnh thành Việt Nam.
                                                    </span>
                                                </p>
                                                <p className={style.pcustomtext}>
                                                    <span className={style.emailcus}>
                                                        Chúng tôi giao hoa gần như hoàn toàn Miễn Phí đến các Quận nội thành Tp. Hồ Chí Minh. Và tính phí giao hàng có hỗ trợ đối với các tỉnh thành khác.
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.customelementdiv}>
                                        <div className={style.zalodiv}>
                                            <div className={style.qrcustomtext}>
                                                <span>MÃ QR OA ZALO</span>
                                            </div>
                                            <div className={style.imgcustomelement}>
                                                <div className={style.customlogotext}>
                                                    <img className={style.divcustomimage} src="/Purple_Modern_Flower_Shop_Poster-removebg-preview-removebg-preview.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.customelementdiv}>
                                        <div className={style.hotrocustomelement}>
                                            <div className={style.qrcustomtext}>
                                                <span>HỖ TRỢ KHÁCH HÀNG</span>
                                            </div>
                                            <div className={style.camketcustomelement}>
                                                <p className={style.pcustomtext}>
                                                    <span className={style.dambaocustomtext}>
                                                        Cam kết mua hàng online đảm bảo
                                                    </span>
                                                </p>
                                                <p className={style.pcustomtext}>
                                                    <span className={style.thanhtoancustomtext}>
                                                        Cam kết bảo mật thông tin
                                                    </span>
                                                </p>
                                                <p className={style.pcustomtext}>
                                                    <span className={style.thanhtoancustomtext}>
                                                        Cam kết bảo mật thanh toán
                                                    </span>
                                                </p>
                                                <p className={style.pcustomtext}>
                                                    <span className={style.thanhtoancustomtext}>
                                                        Hướng dẫn thanh toán
                                                    </span>
                                                </p>
                                                <p className={style.pcustomtext}>
                                                    <span className={style.thanhtoancustomtext}>
                                                        Quy định đổi trả
                                                    </span>
                                                </p>
                                                <p className={style.pcustomtext}>
                                                    <span className={style.thanhtoancustomtext}>
                                                        Hệ thống cửa hàng trên toàn quốc
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.customelementdiv}>
                                        <div className={style.zalodiv}>
                                            <div className={style.qrcustomtext}>
                                                <span>HỢP TÁC & LIÊN KẾT</span>
                                            </div>
                                            <div className={style.tuyendungcustomelement}>
                                                <p className={style.pcustomtext}>
                                                    <span className={style.thanhtoancustomtext}>
                                                        Thông tin tuyển dụng
                                                    </span>
                                                </p>
                                                <p className={style.pcustomtext}>
                                                    <span className={style.thanhtoancustomtext}>
                                                        Liên hệ hợp tác
                                                    </span>
                                                </p>
                                                <p className={style.pcustomtext}>
                                                    <span className={style.thanhtoancustomtext}>
                                                        Chính sách và điều khoản
                                                    </span>
                                                </p>
                                                <p className={style.pcustomtext}>
                                                    <span className={style.thanhtoancustomtext}>
                                                        Dạy cắm hoa
                                                    </span>
                                                </p>
                                                <p className={style.pcustomtext}>
                                                    <span className={style.thanhtoancustomtext}>
                                                        Tư vấn mở shop
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.newcustomcontainer}>
                <div className={style.customlogotext}>
                    <div className={style.newcustompadding}>
                        <p className={style.newpcustomcenter}>
                            Bản quyền thuộc về Hoadeptoanquoc.com - Website được xây dựng từ 2023 - Cập nhật mới nhất {formattedDate}
                        </p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default WebFooter;
