from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def default():
    return "Easy Python"

@app.route("/welcome")
def home():
    return "Hello!"

@app.route("/working")
def working():
    return jsonify(response="Python backend is working!")

if __name__ == "__main__":
    app.run("localhost", 6969, debug=True)