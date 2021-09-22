import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actionType from '../redux/actions/BookingMovieReducerAct';

class HangGhe extends Component {
    renderGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe, index) => {

            let cssGheDaDat = "";
            let disabled = false;

            if (ghe.daDat) {
                cssGheDaDat = 'gheDuocChon'
                disabled = true;
            }
            let cssGheDangDat = ''
            let indexGheDangDat = this.props.danhSachGheDangDat.findIndex
                (gheDangDat => gheDangDat.soGhe === ghe.soGhe)
            if (indexGheDangDat !== -1) {
                cssGheDangDat = 'gheDangChon'
            }
            return <button onClick={() => this.props.datGhe(ghe)} className={`ghe ${cssGheDaDat} ${cssGheDangDat}`} disabled={disabled} key={index}>
                {ghe.soGhe}
            </button>
        })
    }
    renderSoHang = () => {
        return this.props.hangGhe.danhSachGhe.map((hang, index) => {
            return <button className="rowNumber" key={index}>
                {hang.soGhe}
            </button>
        })
    }
    renderHangGhe = () => {
        if (this.props.soHangGhe === 0) {

            return <div className="ml-4">
                {this.props.soHangGhe.hang}{this.renderSoHang()}
            </div>
        } else {
            return <div>

                {this.props.hangGhe.hang} {this.renderGhe()}
            </div>
        }

    }
    render() {
        return (
            <div className="text-warning mt-3 ml-5 text-left" style={{ fontSize: 30 }}>

                {this.renderHangGhe()}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        danhSachGheDangDat: state.BookingMovieReducer.danhSachGheDangDat
    }
}
const mapDispatchToProps = dispatch => {
    return {
        datGhe: (ghe) => {
            dispatch(actionType.datGheAct(ghe))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);