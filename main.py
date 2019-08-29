from flask import Flask
from flask import render_template
from flask import request
from flask import jsonify


import forms

app = Flask(__name__)

@app.route('/', methods = ['GET', 'POST'])
def index():
    comment_form = forms.CommentForm(request.form)
    if request.method == 'POST':
        id_send = str(comment_form.user_id.data)
        url= "https://randomuser.me/api/?ud="+id_send
        print(url)
        return render_template('result.html', url=url)
        
        
    
    
    return render_template('index3.html', form= comment_form)



if __name__ == '__main__':
    app.run(debug= True, port= 8000)