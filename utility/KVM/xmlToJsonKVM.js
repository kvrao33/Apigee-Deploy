const fs = require('fs');
const xml2js = require('xml2js');
const path = require('path');

function checkRequiredParameters(jsonObject) {
  const requiredParameters=[];
  let validationFailed=false
  // checking KeyValueMapOperations
  if(!jsonObject?.KeyValueMapOperations){   
    requiredParameters.push("XML file shoud be correct formate")
      validationFailed=true
      return {message:requiredParameters.join("\n"),validationFailed}
  }
  jsonObject=jsonObject.KeyValueMapOperations
  if(!jsonObject.mapIdentifier){
      requiredParameters.push("mapIdentifier is required")
      validationFailed=true
  }
  if(!jsonObject.Scope){
    requiredParameters.push("Scope is required")
    validationFailed=true
}

   if(!jsonObject.InitialEntries?.Entry||jsonObject.InitialEntries.Entry.length<1){
          requiredParameters.push("Entry is required")
          validationFailed=true
    }else{
      let keyMessageAdded=false
      if(Array.isArray(jsonObject.InitialEntries.Entry)){
      jsonObject.InitialEntries.Entry.forEach(element => {
        if(!keyMessageAdded)
        if(!element.Key?.Parameter){
          requiredParameters.push("key parameter is required")
          validationFailed=true
          keyMessageAdded=true
        }
      });
    }else{
    if(!jsonObject.InitialEntries.Entry.Key.Parameter){
      requiredParameters.push("key parameter is required")
      validationFailed=true
      keyMessageAdded=true
    }
    }
    }
  
  return {message:requiredParameters.join("\n"),validationFailed}
}

function convertXmlToJson(xmlFilePath, callback) {
  const fileExt = path.extname(xmlFilePath);
  if (fileExt.toLowerCase() !== '.xml') {
    return callback('Invalid file format. Only XML files are allowed.', null);
  }
  
  fs.readFile(xmlFilePath, 'utf-8', (err, data) => {
    if (err) {
        if (err.code === 'ENOENT') {
          return callback(`File not found: ${xmlFilePath}`, null);
        } else {
          return callback("Something went wrong in file read.", null);
        }
      }
  

      const parser = new xml2js.Parser({
        explicitArray: false, // Don't wrap single child elements in arrays
        mergeAttrs: true,     // Merge attributes and elements
      });
    parser.parseString(data, (err, result) => {
      if (err) {
        return callback(err.message+` in this path ${xmlFilePath}`, null);
      }
      // checking the required parameters 
      const validationResult=checkRequiredParameters(result);
      if(validationResult.validationFailed){
        return callback(validationResult.message, null);
      }
     
      
    
      callback(null, result);
    });
  });
}

module.exports = convertXmlToJson;
