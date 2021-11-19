const fs = require('fs')
const path = './config-filters.json';
const files = fs.readdirSync('filters/');


function isFunction(variableToCheck){
    //If our variable is an instance of "Function"
    if (variableToCheck instanceof Function) {
        return true;
    }
    return false;
}

console.log('LOG :');
console.log('------------------------------------------------------');

try {
  if (fs.existsSync(path)) {
    console.log('Le fichier : ' + path + ' existe !');
  } else {
    return console.error("Le fichier : " + path + " n'existe pas !");
  }
} catch(err) {
  console.error(err)
}

console.log('------------------------------------------------------');

for (let file of files) {
    const importFunctionOfFile = require('./filters/' + file);

    if(isFunction(importFunctionOfFile)){
        //If it is, print to console and call the function.
        console.log('Le ficher ' + file + ', possède une fonction !');
        importFunctionOfFile();
    } else{
        return console.error('Le ficher ' + file + ", ne possède pas une fonction !");
    } 
}

console.log('------------------------------------------------------');
console.log('Voici la liste des fichiers dans le dossier Filters : ');
console.log(files);
console.log('------------------------------------------------------');

const config = require(path);

function checkNext(step) {
    const nextStep = config.steps[step.next]
    if (step.next) {
        if (nextStep !== undefined) {
        } else {
            return console.error("Cette valeur " + step.next + " n'existe pas !");
        }        
    } else {
        console.log("Il n'y a pas de next");
    }
}

if (config.steps) {
    const stepsKeysArray =  Object.keys(config.steps);
    for (let i = 1; i <= stepsKeysArray.length; i++) {
        const step = config.steps[i];
        if (step !== undefined) {
            if (files.includes(step.filter + '.js')) {
                if (step.params) {
                    if (Array.isArray(step.params) && step.params.length > 0) {
                        checkNext(step);
                    } else {
                        return console.error("l'élément 'params' doit être de type Array (Ex : []) et doit avoir au minimum une liste");
                    }
                } else {
                    checkNext(step);
                }
            } else {
                return console.error(step.filter + ' ne contient pas bien son fichier');
            }
        } else {
            return console.error("Attention, chaque step doit avoir un identifiant (clef de l'objet : 1)");
        }
    }
} else {
    return console.error("config-filters.json doit contenir à sa racine 'steps' !")
}