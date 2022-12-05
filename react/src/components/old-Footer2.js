import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { usePagination, DOTS } from './usePagination';
import '../main.css';

const Pagination = props => {
    const { onPageChange, totalCount, siblingCount = 1, currentPage, pageSize, className } = props;
    const paginationRange = usePagination({ currentPage, totalCount, siblingCount, pageSize });
    if (currentPage === 0 || paginationRange.length < 2 ) {
        return null;
    }
    const onNext = () => {
        onPageChange(currentPage + 1);
    };
    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };
    let lastPage = paginationRange[paginationRange.length - 1];
    return (
        <ul className={classnames('pagination-container', { [className]: className})}>
            <li className={classnames('pagination-item', { disabled: currentPage === 1 })} onClick={onPrevious}>
                <div className='arrow left' />   {/* Left arrow */}
            </li>
            {paginationRange.map(pageNumber => {
                if (pageNumber === DOTS) {
                    return <li className='pagination-item dots'>&#8230;</li>   // returns DOTS unicode character
                }
                return (
                    <li className={classnames('pagination-item', { selected: pageNumber === currentPage })} onClick={() => onPageChange(pageNumber)}>
                        { pageNumber }
                    </li>
                );
            })}
            <li className={classnames('pagination-item', { disabled: currentPage === lastPage })} onClick={onNext}>
                <div className='arrow right' />   {/* Right arrow */}
            </li>
        </ul>   
    );
};

export default class Footer extends Component {
    render() {
        return (
            <footer className="navbar navbar-expand-lg navbar-dark fixed-bottom bg-dark">
                <div className="container-fluid justify-content-end">
                    <div className="navbar-nav">
                        <Pagination className='pagination-bar' currentPage={currentPage} totalCount={data.length} pageSize={pageSize} onPageChange={page => setCurrentPage(page)} />
                        <Link className="nav-link active mx-2" to="index.html">Cigar DB</Link>
                        <Link className="nav-link active mx-2" to="mailto:sysrock@gmail.com">Contact</Link>
                        <Link className="nav-link active mx-2" to="#">About</Link>
                    </div>
                </div>
            </footer>
        )
    }
}
