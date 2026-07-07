# 🧟 Frankenstein Digital Edition

An interactive digital edition of Mary Wollstonecraft Shelley's *Frankenstein* manuscript drafts (1816), visualizing the collaborative writing process between Mary Shelley and Percy Bysshe Shelley.

![Project Preview](insert-screenshot-here)

## 🚧 Current Status

This repository is undergoing a redesign from its original course submission into a documented project.

The original edition is functional, while current development focuses on:
- improving code organization
- documenting the workflow
- modernizing the interface
- expanding interactive features

## ✨ About the Project

This project transforms TEI-encoded manuscript transcripts into an interactive web edition.

The edition presents selected pages from the Frankenstein manuscript drafts, allowing users to explore:
- the original manuscript image
- the encoded transcription
- additions and deletions
- authorial interventions by Mary and Percy Shelley

Originally created for the **Text as Data II** course at the University of Antwerp. See [Project Journey 2024](project_Journey2024.md) for the original reflection written during development, initially written back in 2024. This document preserves the process behind building the original edition, including challenges with TEI encoding, XSL transformations, JavaScript interactions, and digital manuscript representation.

---

# 🔍 Features

## 📜 Manuscript Viewer

The project integrates the Bodleian Library's IIIF manuscript viewer using Mirador, allowing users to compare the transcription with the original handwritten manuscript.

## ✍️ TEI-Based Transcription

The manuscript pages are encoded using TEI XML, preserving:
- deletions and crossed-out text
- additions above and below the line
- marginal notes
- supralinear and infralinear additions
- author attribution
- page numbering and manuscript layout

## 🎭 Author Attribution

Users can highlight modifications made by:
- Mary Wollstonecraft Shelley
- Percy Bysshe Shelley
- Both authors

## 📖 Reading Mode

A reconstructed reading view transforms the edited manuscript into a continuous reading experience by dynamically hiding deletions and integrating additions into the text flow, while preserving the original TEI encoding.

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
```text
├── index.html
├── pages/                    # Planned restructuring of HTML pages
├── XML transcription files/  # Planned organization of XML files
├── Frankenstein_text.xsl
├── Frankenstein_meta.xsl
├── style.css
├── script.js
└── README.md
```

---

# 📚 Background

The project was inspired by digital editions created by the Shelley-Godwin Archive and uses manuscript resources provided by the Bodleian Library.

It explores how computational methods can make historical texts more accessible and interactive.

---

# 📜 License

This project was created for educational purposes.

Original manuscript material:
Mary Shelley (1816), public domain.

Additional resources are credited to their respective institutions.