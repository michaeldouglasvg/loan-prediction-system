from flask import Flask, request, jsonify
from flask_cors import CORS
from flask import Flask, request, jsonify
import pandas as pd
import joblib
from sklearn.preprocessing import LabelEncoder
import json
import os

# create an instance of the Flask class
app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

# Loading trained model from the folder model
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.join(BASE_DIR, "model", "loan_classifier.joblib")

model = joblib.load(MODEL_PATH)

@app.route('/api/applyloan', methods=['POST'])
def apply_loan():
    user_data = request.get_json()
    print(user_data)

    new_data = pd.DataFrame({'Applicant_ID': [user_data['applicardId']],
                             'Gender': [user_data['gender']],
                             'Married': [user_data['maritalStatus']],
                             'Dependents': [user_data['dependants']],
                             'Self_Employed': [user_data['employed']],
                             'LoanAmount': [user_data['loanamount']],
                             'ApplicantIncome': [user_data['incomerate']],
                             'Credit_History': [user_data['credithistory']]})

    new_data.to_csv('model/user_inputs.csv', index=False)
    loan_status = model.predict(new_data)
    
    return jsonify({'loanstatus': loan_status[0]})


@app.route('/api/predict', methods=['GET'])
def predict_loan_status():
    data_to_predict = pd.read_csv('model/user_inputs.csv')

    new_data = pd.DataFrame({
        'Applicant_ID': str(data_to_predict['Applicant_ID']),
        'Gender': str(data_to_predict['Gender']),
        'Married': str(data_to_predict['Married']),
        'Dependents': str(data_to_predict['Dependents']),
        'Self_Employed': str(data_to_predict['Self_Employed']),
        'LoanAmount': data_to_predict['LoanAmount'],
        'ApplicantIncome': data_to_predict['ApplicantIncome'],
        'Credit_History': data_to_predict['Credit_History'],
    })

    cat_cols = ['Gender', 'Applicant_ID', 'Married', 'Dependents', 'Self_Employed']
    for col in cat_cols:
        new_data[col] = LabelEncoder().fit_transform(new_data[col].astype(str))

    predictions = model.predict(new_data)

    predictions = predictions.tolist()

    return json.dumps({'predictions': predictions})

# Check and execute main function if it exists
if __name__ == '__main__':
    app.run(debug=True, port=3001)