// Declare variables for getting the xml file for the XSL transformation (folio_xml) and to load the image in IIIF on the page in question (number).

// Find each HTML corresponding XML file based on folio number
let tei = document.getElementById("folio"); // Get the folio number from the HTML element with id "folio"
let tei_xml = tei.innerHTML; // Get what's inside the file as a string
let extension = ".xml"; // Add the extension to the folio number to get the full path to the XML file
let folio_xml = tei_xml.concat(extension); // Concatenate for full path name

// Mirador viewer for IIIF images
let page = document.getElementById("page"); // Get the page number from the HTML element with id "page"
let pageN = page.innerHTML; // Get what's inside the file as a string
let number = Number(pageN); // Convert the string to a number for Mirador

// Loading the IIIF manifest
var mirador = Mirador.viewer({ // Mirador is a library specifically for digital manuscripts
  "id": "my-mirador",
  "manifests": {
    "https://iiif.bodleian.ox.ac.uk/iiif/manifest/53fd0f29-d482-46e1-aa9d-37829b49987d.json": {
      provider: "Bodleian Library, University of Oxford"
    } // Pointing Mirador to the Bodleian Library Archive to fetch the images
  },
  "window": {
    allowClose: false,
    allowWindowSideBar: true,
    allowTopMenuButton: false,
    allowMaximize: false,
    hideWindowTitle: true,
    panels: {
      info: false,
      attribution: false,
      canvas: true,
      annotations: false,
      search: false,
      layers: false,
    }
  },
  "workspaceControlPanel": {
    enabled: false,
  },
  "windows": [
    {
      loadedManifest: "https://iiif.bodleian.ox.ac.uk/iiif/manifest/53fd0f29-d482-46e1-aa9d-37829b49987d.json",
      canvasIndex: number, // Refer back to the recived page number to load the correct image
      thumbnailNavigationPosition: 'off'
    }
  ]
});


// function to transform the text encoded in TEI with the xsl stylesheet "Frankenstein_text.xsl", this will apply the templates and output the text in the html <div id="text">
function documentLoader() {

    // Promise: fetch both the XML and XSL files together
    Promise.all([
      fetch(folio_xml).then(response => response.text()),
      fetch("Frankenstein_text.xsl").then(response => response.text())
    ])
    .then(function ([xmlString, xslString]) { // Once both files are fetched, parse them into XML documents
      var parser = new DOMParser(); // Tool to parse the XML and XSL strings as XML documents instead of letters
      var xml_doc = parser.parseFromString(xmlString, "text/xml"); 
      var xsl_doc = parser.parseFromString(xslString, "text/xml"); 

      var xsltProcessor = new XSLTProcessor(); // Tool to apply the XSL transformation to the XML document
      xsltProcessor.importStylesheet(xsl_doc); // Import the XSL stylesheet into the processor
      var resultDocument = xsltProcessor.transformToFragment(xml_doc, document); // Combine the XML and XSL stylesheet to produce the final HTML fragment

      var criticalElement = document.getElementById("text"); // Find the HTML element with id "text" to insert the transformed content
      criticalElement.innerHTML = ''; // Clear existing content with an empty string to avoid duplication
      criticalElement.appendChild(resultDocument); // Insert the transformed content into the HTML 
    })
    .catch(function (error) {
      console.error("Error loading documents:", error);
    });
  }
  
// function to transform the metadate encoded in teiHeader with the xsl stylesheet "Frankenstein_meta.xsl", this will apply the templates and output the text in the html <div id="stats">
  function statsLoader() {

    Promise.all([
      fetch(folio_xml).then(response => response.text()), // Fetch the XML file for the current folio
      fetch("Frankenstein_meta.xsl").then(response => response.text()) // Fetch the XSL stylesheet for the metadata transformation
    ])
    .then(function ([xmlString, xslString]) {
      var parser = new DOMParser();
      var xml_doc = parser.parseFromString(xmlString, "text/xml");
      var xsl_doc = parser.parseFromString(xslString, "text/xml");

      var xsltProcessor = new XSLTProcessor();
      xsltProcessor.importStylesheet(xsl_doc);
      var resultDocument = xsltProcessor.transformToFragment(xml_doc, document);

      var criticalElement = document.getElementById("stats");
      criticalElement.innerHTML = ''; // Clear existing content
      criticalElement.appendChild(resultDocument);
    })
    .catch(function (error) {
      console.error("Error loading documents:", error);
    });
  }

  // Initial document load
  documentLoader();
  statsLoader();
  // Event listener for sel1 change
  function selectHand(event) {
  var visible_mary = document.getElementsByClassName('#MWS');
  var visible_percy = document.getElementsByClassName('#PBS');
  // Convert the HTMLCollection to an array for forEach compatibility
  var MaryArray = Array.from(visible_mary);
  var PercyArray = Array.from(visible_percy);

    if (event.target.value == 'both') {
    //write an forEach() method that shows all the text written and modified by both hand (in black). The forEach() method of Array instances executes a provided function once for each array element.
     
    MaryArray.forEach(
    (element) =>
    {element.style.color = 'black';
      element.style.fontWeight = 'normal';
    }
    );

    PercyArray.forEach(
      (element) =>
      {element.style.color = 'black';
        element.style.fontWeight = 'normal';
      }
    );

    } else if (event.target.value == 'Mary') {
     //write an forEach() method that shows all the text written and modified by Mary in a different color (highlight) and the text by Percy in black. 
     
    MaryArray.forEach(
      (element) =>
      {element.style.color = 'brown';
       element.style.fontWeight = '600';
      }
      );
  
      PercyArray.forEach(
        (element) =>
        {element.style.color = 'black';
          element.style.fontWeight = 'normal';
        }
      );
    } else if (event.target.value == 'Percy') {
     //write an forEach() method that shows all the text written and modified by Percy in a different color (highlight) and the text by Mary in black.
    
     MaryArray.forEach(
      (element) =>
      {element.style.color = 'black';
        element.style.fontWeight = 'normal';
      }
      );
  
      PercyArray.forEach(
        (element) =>
        {element.style.color = 'brown';
          element.style.fontWeight = '600';
        }
      );
  
    }
  }
  // write another function that will toggle the display of the deletions by clicking on a button

  function toggleDel(event) {
    var deletions = document.getElementsByTagName('del');
    var delArray = Array.from(deletions);


    if (event.target.value == 'show') {
      delArray.forEach(
        (element) => 
        {
          element.style.opacity = '1';
          element.style.display = 'inline';
        }
      );

    }

    else if (event.target.value == 'hide') {
      delArray.forEach(
        (element) => 
        {element.style.display = 'none';

        }
      );
    }

    else if (event.target.value == 'cover') {
      delArray.forEach(
        (element) =>
        {
          element.style.display = 'inline';
          element.style.opacity = '0.3';
        }
        
      )
    }
  }


    // EXTRA: write a function that will display the text as a reading text by clicking on a button or another dropdown list, meaning that all the deletions are removed and that the additions are shown inline (not in superscript)

    let isReadingMode = false;

    function toggleReading() {

      var deletions = document.getElementsByTagName('del');
      var delArray = Array.from(deletions);

      // Accounting for all variation of additions, for running text
    var additions = document.getElementsByClassName('defaultAdd');
    var addArray = Array.from(additions);

    var supras = document.getElementsByClassName('supraAdd');
    var supraArray = Array.from(supras);

    var infras = document.getElementsByClassName('infraAdd');
    var infraArray = Array.from(infras);

    var margin = document.getElementsByClassName('marginAdd');
    var marginArray = Array.from(margin);

    var leftmargin = document.getElementsByClassName('leftMargin');
    var leftmarginArray = Array.from(leftmargin);  

  
    if (isReadingMode) {
      // Return to normal css-style
      delArray.forEach((element) => {
          element.style.removeProperty('display');
      });

      addArray.forEach((element) => {
          element.style.removeProperty('display');
          element.style.removeProperty('font-size');
          element.style.removeProperty('font-style');
      });

      supraArray.forEach((element) => {
        element.style.removeProperty('display');
        element.style.removeProperty('font-size');
        element.style.removeProperty('font-style');
        element.style.removeProperty('top');
      });

      infraArray.forEach((element) => {
        element.style.removeProperty('display');
        element.style.removeProperty('font-size');
        element.style.removeProperty('font-style');
        element.style.removeProperty('bottom');
      });

      marginArray.forEach((element) => {
          element.style.removeProperty('display'); // Display in the margin
        }
      );

      leftmarginArray.forEach((element) => {
        element.style.removeProperty('display'); // Don't display in the text
      }
    );
     }

      
     else {
       delArray.forEach((element) =>
         {
           element.style.display = 'none';
         });

         addArray.forEach((element) =>
          {
            element.style.display = 'inline';
            element.style.fontSize = 'inherit';  
            element.style.fontStyle = 'normal'; 
            }
         );

         supraArray.forEach((element) =>
          {
            element.style.display = 'inline';
            element.style.fontSize = 'inherit';  
            element.style.fontStyle = 'normal'; 
            element.style.top = '0';  
            }
         );

          infraArray.forEach(
         (element) =>
         {
           element.style.display = 'inline';
           element.style.fontSize = 'inherit';  
           element.style.fontStyle = 'normal'; 
           element.style.bottom = '0';
         }
       );

       marginArray.forEach(
        (element) =>
        {
          element.style.display = 'inline'; // Display in the text
        }
      );

      leftmarginArray.forEach((element) => {
        element.style.display = 'none';   // Don't display in the margin
      }
    );

     }

     isReadingMode = !isReadingMode;
  }

  
