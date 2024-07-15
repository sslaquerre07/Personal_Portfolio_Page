from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_mail import Mail, Message
app = Flask(__name__)
CORS(app)

app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'sslaquerre@gmail.com'
app.config['MAIL_PASSWORD'] = 'pghf vpch lquq tcva'

mail = Mail(app)

@app.route("/Contact", methods=['POST'])
def submit_message():
    data = request.json
    first_name = data.get("firstName")
    last_name = data.get("lastName")
    email = data.get("email")
    message = data.get("message")
    
    msg = Message('New From Submission',
                  sender='sslaquerre@gmail.com',
                  recipients=['sslaquerre@gmail.com'])
    msg.body = f'First Name: {first_name}\nLast Name: {last_name}\nEmail: {email}\nMessage:{message}'
    
    try:
        mail.send(msg)
        return jsonify({'message': 'Sent successfully'})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)