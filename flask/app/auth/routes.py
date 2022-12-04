from flask import Blueprint, render_template, request, redirect, url_for, flash
from flask_login import login_user, logout_user
from .forms import LoginForm, UserCreationForm
from app.models import User
from werkzeug.security import check_password_hash

auth = Blueprint('auth', __name__, template_folder='auth_templates')

@auth.route('/api/signup', methods=["POST"])
def signMeUpAPI():
        data = request.json
        fname = data['fname']
        lname = data['lname']
        email = data['email']
        username = data['username']
        password = data['password']
        u1 = User.query.filter_by(username=username).first()
        u2 = User.query.filter_by(email=email).first()
        if u1 and u2:
            return {
                'status': 'not ok',
                'message': 'That Username and Email already belong to an account.'}
        elif u1:
            return {
                'status': 'not ok',
                'message': 'That Username already belongs to an account.'}
        elif u1:
            return {
                'status': 'not ok',
                'message': 'That Email already belongs to an account.'}
        else:
            user = User(fname, lname, email, username, password)      # add user to database
            user.saveToDB()                             # add instance to SQL
            return {
                'status': 'ok',
                'message': 'Successfully created a user.',
                'data': user.to_dict()}