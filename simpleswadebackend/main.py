from flask import Flask, request, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)


@app.route('/character', methods=['GET'])
def get_character():
    with open('character_sheet.json', 'r') as file:
        character_sheet = json.load(file)

    return jsonify(character_sheet)


@app.route('/character', methods=['POST'])
def update_character():
    data = request.json
    with open('character_sheet.json', 'w') as file:
        json.dump(data, file)
        return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
