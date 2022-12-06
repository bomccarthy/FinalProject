from app import app
from flask import render_template, request
from flask_login import current_user
from app.models import Cigars, Cigar_smdb, User
from .models import User
from flask_sqlalchemy import SQLAlchemy

@app.route('/')
def homePage():
    users = User.query.all()

    return render_template('index.html', users=users)

@app.get('/api/cigars')
def getCigarAPI():
    cigars = Cigars.query.all()
    all_cigars = [cigar.to_dict() for cigar in cigars]
    return {
        'status': 'ok',
        'data': all_cigars,
        'total_results': len(all_cigars)
    }

@app.get('/api/cigars/<int:cigar_id>')
def getSingleCigerAPI(cigar_id):
    cigar = Cigars.query.get(cigar_id)
    if cigar:
        return {
            'status': 'ok',
            'data': cigar.to_dict()
        }
    return {
            'status': 'not ok',
            'message': 'That Cigar does not exist. Try again.'
    }

@app.get('/api/cigar_smdb')
def getCigar_smdbAPI():
    cigars = Cigar_smdb.query.all()
    all_cigars = [cigar.to_dict() for cigar in cigars]
    return {
        'status': 'ok',
        'data': all_cigars,
        'total_results': len(all_cigars)
    }

@app.route('/api/cigar_smdb/<int:page_num>')
def getCigar_smdbAPIperPage(page_num):
    cigars = Cigar_smdb.query.paginate(per_page=10, page=page_num, error_out=True)
    all_cigars = [cigar.to_dict() for cigar in cigars]
    return {
        'status': 'ok',
        'data': all_cigars,
        'total_results': len(all_cigars)
    }

@app.get('/api/cigars/<string:name>')
def filterCigarByName(filter):
    cigar_filter = '%' + filter + '%'
    filtered_cigars = Cigars.query.filter(Cigars.cigar.ilike(cigar_filter)).all()
    new_cigars = [filtered_cigar.to_dict() for filtered_cigar in filtered_cigars]
    return {
        'status': 'ok',
        'data': new_cigars,
        'total_results': len(new_cigars)
    }

@app.get('/api/cigar_smdb/search')
def search(cigar_id):
    cigars = Cigar_smdb.query.filter(Cigar_smdb.cigar_id == cigar_id).all()
    all_cigars = [cigar.to_dict() for cigar in cigars]
    print(all_cigars)
    cigar_id = all_cigars.index('cigar_id')
    cigar = all_cigars.index('cigar')
    length = all_cigars.index('length')
    ring_gauge = all_cigars.index('ring_gauge')
    country = all_cigars.index('country')
    shape = all_cigars.index('shape')
    wrapper = all_cigars.index('wrapper')
    binder = all_cigars.index('binder')
    filler = all_cigars.index('end_mfg_yr')
    color = all_cigars.index('color')
    strength = all_cigars.index('strength')
    start_mfg_yr = all_cigars.index('start_mfg_yr')
    end_mfg_yr = all_cigars.index('end_mfg_yr')
    if cigar_id is not None:
        result = {key: value for key, value in all_cigars.index() if key == cigar_id}
    elif cigar is not None:
        result = {key: value for key, value in all_cigars.index() if key == cigar}
    elif length is not None:
        result = {key: value for key, value in all_cigars.index() if key == length}
    elif ring_gauge is not None:
        result = {key: value for key, value in all_cigars.index() if key == ring_gauge}
    elif country is not None:
        result = {key: value for key, value in all_cigars.index() if key == country}
    elif shape is not None:
        result = {key: value for key, value in all_cigars.index() if key == shape}
    elif wrapper is not None:
        result = {key: value for key, value in all_cigars.index() if key == wrapper}
    elif binder is not None:
        result = {key: value for key, value in all_cigars.index() if key == binder}
    elif filler is not None:
        result = {key: value for key, value in all_cigars.index() if key == filler}
    elif color is not None:
        result = {key: value for key, value in all_cigars.index() if key == color}
    elif strength is not None:
        result = {key: value for key, value in all_cigars.index() if key == strength}
    elif start_mfg_yr is not None:
        result = {key: value for key, value in all_cigars.index() if key == start_mfg_yr}
    elif end_mfg_yr is not None:
        result = {key: value for key, value in all_cigars.index() if key == end_mfg_yr}
    return {
        'status': 'ok',
        'data': [result],
        'total_results': len(all_cigars)
    }