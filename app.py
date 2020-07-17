from flask import Flask, render_template
from flask_frozen import Freezer

app = Flask(__name__)
freezer = Freezer(app)

@app.route("/")
@app.route("/home.html")
def home():
    return render_template("home.html")

@app.route("/index.html")
def index():
    return render_template("index.html")

@app.route("/fox/<fox_name>.html")
def fox(fox_name):
   return render_template(f"foxes/{fox_name}.html")

@app.route("/about.html")
def about():
    return render_template("about.html")

if __name__ == "__main__":
    freezer.freeze()
