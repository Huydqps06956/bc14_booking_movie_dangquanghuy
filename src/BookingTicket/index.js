import React, { Component } from 'react';
import './BaiTapBookingTicket.css'
import ThongTinDatGhe from './ThongTinDatGhe';
import danhSachGheData from '../data/danhSachGhe.json'
import { Fragment } from 'react';
import HangGhe from './HangGhe';
class BookingTicket extends Component {
    renderHangGhe = () => {
        return danhSachGheData.map((hangGhe, index) => {
            return <div key={index} >
                <HangGhe hangGhe={hangGhe} soHangGhe={index} />
            </div>
        })
    }


    render() {
        return (
            <div style={{
                position: 'fixed', width: '100%', height: '100%',
                backgroundImage: "url(./images/bgmovie.jpg)",
                backgroundSize: "cover"
            }}>
                <div style={{ position: 'fixed', width: '100%', height: '100%', backgroundColor: "rgba(0,0,0,0.8)" }}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-8 text-center">
                                <h1 className="text-warning display-4">Đặt Vé Xem Phim</h1>
                                <div className="mt-3 text-light" style={{ fontSize: "25px" }}>Màn Hình</div>
                                <div className="d-flex flex-column justify-content-center mt-2">
                                    <div className="screen"></div>
                                    {this.renderHangGhe()}
                                </div>

                            </div>

                            <div className="col-4 text-left">
                                <h1 style={{ fontSize: "35px" }} className="text-success display-4">Danh Sách Ghế Bạn Chọn</h1>
                                <ThongTinDatGhe />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookingTicket;