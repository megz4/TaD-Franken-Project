# 🧪 Project Journey: Frankenstein Digital Edition

## The Experiment Begins

This project was originally created as part of the **Text as Data II** course at the University of Antwerp. The goal was to create a digital edition of the *Frankenstein* manuscripts drafted by Mary Wollstonecraft Shelley and Percy Bysshe Shelley in 1816.

The project began from a provided template containing the required transcription files and metadata structure, including JavaScript and CSS components. Using the Shelley-Godwin Archive as the primary source of inspiration for layout and presentation, I developed additional features and design choices to create an interactive archival experience.

---

# ⚗️ Preparing the Manuscript

The first stage involved reviewing and refining the provided TEI/XML transcripts. I consulted both the archive materials and handwritten manuscript excerpts to ensure that the encoded formatting accurately represented the original document.

A major focus was ensuring that each modification contained the correct "hand" attribute, identifying whether changes were made by Mary Wollstonecraft Shelley or Percy Bysshe Shelley. I also aligned the encoding of different manuscript alterations, such as deletions, additions, and positional changes, with the goal of creating a consistent XML structure that would later support CSS styling and JavaScript functionality.

This process highlighted the importance of accurate data representation: before the manuscript could become an interactive digital object, the underlying encoding needed to be structured and reliable.

---

# 🖋️ CSS and Visual Representation

The next stage focused on transforming the encoded manuscript data into a visual representation.

Many of the CSS features were developed through experimentation and research, testing how different styles affected the appearance of the transcription. One of the first challenges was displaying supralinear additions — text written above the original line — in a way that resembled the manuscript itself. After trial and error, I developed a styling approach that positioned additions above the text while reducing their font size.

Using this method as a foundation, I adapted the styling for other manuscript features, such as infralinear additions and subscript elements, by adjusting their position while maintaining their visual relationship to the main text.

One particularly satisfying challenge was recreating manuscript page numbers inside circular markings and positioning them according to their location on the original page.

Another challenge involved representing handwritten indents within paragraphs. Initially, I attempted to use regular paragraph formatting, but this introduced unwanted spacing and the browser ignored literal spacing in XML. I experimented with non-breaking spaces using Unicode characters as a workaround. However, after becoming more comfortable with XSL transformations, I returned to the XML structure and created a dedicated indentation class using `<hi>` elements, resulting in a cleaner and more maintainable solution.

---

# ⚡️ JavaScript Interactions

The most challenging stage was understanding and adapting the JavaScript functionality behind the website.

Initially, JavaScript was unfamiliar and required extensive research and experimentation. Once the structure became clearer, I was able to modify and extend existing functions to create interactive manuscript features.

One of the main additions was the deletion visibility toggle. Instead of simply hiding or showing deleted text, I introduced an intermediate "cover" option that partially obscures deletions. This allowed users to maintain awareness of manuscript changes without letting them dominate the reading experience.

The most ambitious feature was the **Reading Mode**.

The goal was to transform the original transcription into a cleaner reading experience by dynamically:
- hiding deleted text,
- incorporating additions into the running text,
- adjusting marginal additions,
- removing manuscript-specific formatting when necessary.

This required handling multiple types of XML additions and creating a separate interaction rather than combining all toggles into one system.

Additional navigation buttons were also implemented to allow users to move between manuscript pages. Although I initially considered creating a dynamic JavaScript system that automatically detected the current page, this approach was beyond my current understanding at the time, so I implemented direct navigation links between the HTML pages instead.

---

# 🧵 Troubleshooting and Limitations

One of the biggest challenges was reorganizing the project structure.

While moving CSS, JavaScript, and XSL files was manageable, restructuring the HTML and XML files caused rendering problems. Changing the repository name also introduced unexpected errors. Despite multiple attempts to reorganize the file structure and correct the paths, the website continued to fail to load certain resources.

Eventually, I chose to preserve the original root-folder structure to ensure stability and functionality.

Although this was frustrating at the time, the experience provided valuable insight into the importance of file organization, relative paths, and maintaining consistency across interconnected web resources.

---

# 🧠 Lessons from the Laboratory

Overall, this project was both challenging and rewarding. Experimenting with design, encoding, and functionality made the development process particularly enjoyable, especially when a feature that had required hours of troubleshooting finally worked as intended.

The process also demonstrated the importance of persistence and knowing when to approach a problem differently. When repeated attempts failed, taking a break and returning with a fresh perspective often led to better solutions.

Through this project, I gained a deeper appreciation for the relationship between digital humanities, transcription work, and web development. The experience strengthened my understanding of how careful data modeling, creativity, and persistence can transform historical documents into interactive digital experiences.