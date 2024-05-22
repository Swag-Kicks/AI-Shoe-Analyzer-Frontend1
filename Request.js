const express = require('express');
const cors = require('cors');
const axios = require("axios"); // Ensure axios is imported
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.post('/getresults', async (req, res) => {
  console.log("Get a request....");
  const results = req.body;
 
  const checkAngleUrl = 'http://127.0.0.1:8080/check_angle';

  // Define the expected angles
  const expectedAngles = {
    1: 'back',
    2: 'bottom',
    3: 'front',
    4: 'right',
    5: 'left'
  };

  // To track received angles
  const angleList = [];
  const missingAngles = [];
  let leftSeen = false; // Flag to track if 'left' has been seen

  try {
    // Loop through all images
    for (const [angle, imageUrl] of Object.entries(results)) {
      const body = {
        image_url: imageUrl,
        angle: parseInt(angle) + 1 // Increment angle by 1
      };
      console.log(body);
      const response = await axios.post(checkAngleUrl, body);

      if (response.status === 200 && response.data.result === 'True') {
        console.log(`Angle ${body.angle} is correct.`);
        const angleName = expectedAngles[body.angle];
        if (!angleList.includes(angleName)) {
         
         
        }
        if (angleName === 'left' && leftSeen) {
          console.log("angle left detect 2nd time");
          // If 'left' appears again and leftSeen is true, consider it as 'right'
          angleList.push('right');
          leftSeen = false;
        } else {
          console.log("Angle name: ", angleName);
          angleList.push(angleName);
        
          if (angleName === 'left' && (leftSeen == false)) {
            console.log("1st left angle");
            leftSeen = true; // Set leftSeen to true if 'left' is encountered for the first time
          }
        }
      } else if (response.status === 201 && response.data.result === 'False') {
        const incorrectAngle = parseInt(response.data.predicted_class);
        const incorrectAngleName = expectedAngles[incorrectAngle];
        if (!angleList.includes(incorrectAngleName)) {
          angleList.push(incorrectAngleName);
        }
      }
      console.log("anglelist: ", angleList);
    }

    // Check for any missing angles
    for (const angle in expectedAngles) {
      const angleName = expectedAngles[angle];
      if (!angleList.includes(angleName)) {
        missingAngles.push(`Angle ${angleName} (Angle ${angle}) is missing.`);
      }
    }

    // If there are missing angles, return an error
    if (missingAngles.length > 0) {
      return res.status(400).json({ error: 'Some angles are incorrect or missing.', details: missingAngles });
    }

    // If all angles are correct
    res.status(200).json({ result: 'All angles are correct.' });
  } catch (error) {
    console.error('Error checking angles:', error);
    res.status(500).json({ error: 'Internal server error.', details: error.message });
  }
});




app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
