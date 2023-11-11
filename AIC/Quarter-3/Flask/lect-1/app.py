from flask import Flask,render_template

app = Flask(__name__)


@app.route("/")
def home():
    name=input("User please tell me your name")
    return render_template("home.html",data={'name':name});

@app.route("/about")
def about():
    return render_template("about.html")

if __name__ == "__main__":
    app.run(debug=True)
