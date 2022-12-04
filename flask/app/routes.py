from app import app
from flask import render_template
from flask_login import current_user
from app.models import Cigars, Cigar_smdb, User
from .models import User
from flask_sqlalchemy import SQLAlchemy

@app.route('/')
def homePage():
    users = User.query.all()

    return render_template('index.html', users=users)

@app.route('/api/cigars')
def getCigarAPI():
    cigars = Cigars.query.all()
    all_cigars = [cigar.to_dict() for cigar in cigars]
    return {
        'status': 'ok',
        'data': all_cigars,
        'total_results': len(all_cigars)
    }

@app.route('/api/cigar_smdb')
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