from wtforms import Form
from wtforms import IntegerField
from wtforms.widgets import html5


class CommentForm(Form):
    user_id = IntegerField('Enter an ID',widget=html5.NumberInput())