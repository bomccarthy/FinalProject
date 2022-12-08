import React, {Component} from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import '../main.css'
import CigarTable from '../components/CigarTable';

export default class CigarDB extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            data: [],
            perPage: 200,
            currentPage: 0,
            pageOffset: ''
        };
        this.handlePageClick = this
            .handlePageClick
            .bind(this);
    };

    receivedData() {
        axios
            .get(`http://127.0.0.1:5000/api/cigars`)
            .then(res => {
                const data = res.data.data;
                const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                const postData = slice.map(c => <CigarTable  card={c} />)
                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),
                    postData
                })
            });
    };

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;
        
        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });
        window.scrollTo(0, 0)
    };

    componentDidMount() {
        this.receivedData()
    };

    render() {
        return (
            <div>
                <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={11}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
                    forcePage={this.state.currentPage} />
                    <div className='cigar-table'>
                        <table className="table table-dark table-borderless">
                            <thead>
                                <tr>
                                    <th scope="col">Cigar</th>
                                    <th scope="col">Length</th>
                                    <th scope="col">Ring</th>
                                    <th scope="col">Origin</th>
                                    <th scope="col">Shape</th>
                                    <th scope="col">Color</th>
                                    <th scope="col">Strength</th>
                                </tr>
                            </thead>
                            {this.state.postData}
                        </table>
                    </div>
                <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={11}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
                    forcePage={this.state.currentPage} />
            </div>

        )
    };
}