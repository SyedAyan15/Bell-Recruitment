"""
Bell Recruitment website clone — Flask backend.

Serves the static-styled pages via Jinja2 templates and handles two
real forms: the Contact Us enquiry form and the CV Upload form
(saves uploaded files to /uploads and logs submissions to a local
JSON lines file so nothing requires an external database).
"""
import json
import os
import re
from datetime import datetime, timezone

from flask import Flask, render_template, request, redirect, url_for
from werkzeug.utils import secure_filename

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
UPLOAD_DIR = os.path.join(BASE_DIR, "uploads")
DATA_DIR = os.path.join(BASE_DIR, "data")
ALLOWED_CV_EXTENSIONS = {"pdf", "doc", "docx"}
MAX_CONTENT_LENGTH = 5 * 1024 * 1024  # 5MB, matches original site's limit

os.makedirs(UPLOAD_DIR, exist_ok=True)
os.makedirs(DATA_DIR, exist_ok=True)

app = Flask(__name__)
app.config["MAX_CONTENT_LENGTH"] = MAX_CONTENT_LENGTH

EMAIL_RE = re.compile(r"^[^@\s]+@[^@\s]+\.[^@\s]+$")


def _log_submission(kind, record):
    path = os.path.join(DATA_DIR, f"{kind}_submissions.jsonl")
    record["received_at"] = datetime.now(timezone.utc).isoformat()
    with open(path, "a", encoding="utf-8") as f:
        f.write(json.dumps(record) + "\n")


def _allowed_cv(filename):
    return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_CV_EXTENSIONS


BLOG_POSTS = [
    {
        "title": "How to attract top FMCG talent in a competitive market",
        "excerpt": "A few practical steps employers can take to stand out to candidates in the FMCG sector.",
        "image": "handshake-bg.webp",
    },
    {
        "title": "Preparing your CV for a commercial role",
        "excerpt": "Simple tips to help your CV get noticed by hiring managers in commercial and operational roles.",
        "image": "cta-bg.jpg",
    },
    {
        "title": "Why executive search is different to standard recruitment",
        "excerpt": "What sets an executive search apart, and when it's the right approach for your business.",
        "image": "hero-bg.png",
    },
]


@app.route("/")
def home():
    return render_template("index.html", active="home")


@app.route("/about-us/")
def about():
    return render_template("about.html", active="about")


@app.route("/employer/")
def services():
    return render_template("services.html", active="services")


@app.route("/blogs/")
def blogs():
    return render_template("blogs.html", active="blogs", posts=BLOG_POSTS)


@app.route("/testimonials/")
def testimonials():
    return render_template("testimonials.html", active="testimonials")


@app.route("/privacy-policy/")
def privacy():
    return render_template("privacy.html", active="privacy")


@app.route("/contact-us/", methods=["GET", "POST"])
def contact():
    if request.method == "POST":
        name = request.form.get("name", "").strip()
        email = request.form.get("email", "").strip()
        phone = request.form.get("phone", "").strip()
        message = request.form.get("message", "").strip()

        if not email or not EMAIL_RE.match(email):
            return render_template("contact.html", active="contact", error="Please enter a valid email address.")

        _log_submission("contact", {"name": name, "email": email, "phone": phone, "message": message})
        return render_template("contact.html", active="contact", submitted=True, submitted_name=name or "there")

    return render_template("contact.html", active="contact")


@app.route("/cv-upload/", methods=["GET", "POST"])
def cv_upload():
    if request.method == "POST":
        name = request.form.get("name", "").strip()
        email = request.form.get("email", "").strip()
        phone = request.form.get("phone", "").strip()
        linkedin = request.form.get("linkedin", "").strip()
        file = request.files.get("cv")

        if not email or not EMAIL_RE.match(email):
            return render_template("cv-upload.html", active="cv", error="Please enter a valid email address.")

        if not file or file.filename == "":
            return render_template("cv-upload.html", active="cv", error="Please attach your CV before submitting.")

        if not _allowed_cv(file.filename):
            return render_template("cv-upload.html", active="cv", error="Please upload a PDF, DOC, or DOCX file.")

        timestamp = datetime.now(timezone.utc).strftime("%Y%m%d%H%M%S")
        safe_name = secure_filename(file.filename)
        stored_name = f"{timestamp}_{safe_name}"
        file.save(os.path.join(UPLOAD_DIR, stored_name))

        _log_submission("cv", {
            "name": name, "email": email, "phone": phone,
            "linkedin": linkedin, "stored_file": stored_name,
        })
        return render_template("cv-upload.html", active="cv", submitted=True, submitted_name=name or "there")

    return render_template("cv-upload.html", active="cv")


if __name__ == "__main__":
    app.run(debug=True, port=5000)
