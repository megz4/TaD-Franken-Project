# 🕯️ Frankenstein Digital Edition

An interactive digital edition of Mary Wollstonecraft Shelley's *Frankenstein* manuscript drafts (1816), visualizing the collaborative writing process between Mary Shelley and Percy Bysshe Shelley.

![Project Preview](insert-screenshot-here)

## ✨ About the Project

This project transforms TEI-encoded manuscript transcripts into an interactive web edition.

The edition presents selected pages from the Frankenstein manuscript drafts, allowing users to explore:
- the original manuscript image
- the encoded transcription
- additions and deletions
- authorial interventions by Mary and Percy Shelley

Originally created for the **Text as Data II** course at the University of Antwerp.

---

# 🔍 Features

## 📜 Manuscript Viewer

The project integrates the Bodleian Library's IIIF manuscript viewer using Mirador, allowing users to compare the transcription with the original handwritten manuscript.

## ✍️ TEI-Based Transcription

The manuscript pages are encoded using TEI XML, preserving:
- deletions
- additions
- marginal notes
- supralinear and infralinear additions
- author attribution

## 🎭 Author Attribution

Users can highlight modifications made by:
- Mary Wollstonecraft Shelley
- Percy Bysshe Shelley
- Both authors

## 📖 Reading Mode

A normalized reading view removes editorial marks and presents the text in a more conventional reading format while preserving the encoded manuscript data.

## 📊 Metadata Extraction

The edition automatically displays (for each page):
- number of additions
- number of deletions
- number of modifications by each contributor
- word count

---

# 🛠️ Technologies

- HTML
- CSS
- JavaScript
- XML / TEI
- XSLT
- IIIF / Mirador
- Bootstrap

---

# 📂 Project Structure

├── index.html
├── pages/ (TBA)
├── XML transcription files/ (TBA)
├── Frankenstein_text.xsl
├── Frankenstein_meta.xsl
├── style.css
├── script.js
└── README.md

---

# 📚 Background

The project was inspired by the digital editions created by the Shelley-Godwin Archive and uses manuscript resources provided by the Bodleian Library.

---

# 🧵 Development Journey

See [Project Journey 2024](project_Journey2024.md) for the original reflection written during development, initially written back in 2024.

This document preserves the process behind building the original edition, including challenges with TEI encoding, XSL transformations, JavaScript interactions, and digital manuscript representation.

---

# 📜 License

This project was created for educational purposes.

Original manuscript material:
Mary Shelley (1816), public domain.

Additional resources are credited to their respective institutions.