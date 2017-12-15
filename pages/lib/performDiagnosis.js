import diagnosis from '../../data/diagnosis.js'
import diseases from '../../data/diseases.js'
import patients from '../../data/patients.js'
import symptoms from '../../data/symptoms'


//let symptomsArray = ['2','5','6','8','11','12']

export default (symptomsArray) => {
  let matches = 0;
  //MetastructureFormat {diseaseId: '0', diseaseSymptomsCount: 3, totalMatches: 3}
  let metaStructure = []
  diseases.forEach((disease) => {
    metaStructure.push({
      diseaseId: disease.id,
      disease: disease,
      diseaseSymptomsCount: disease.symptomsIds.length,
      totalMatches: 0
    })
  })
//  console.log(metaStructure);

  symptomsArray.forEach((symptomId) => {
    //console.log('symptomId: '+symptomId);
    diseases.forEach((disease) => {
      let match = disease.symptomsIds.find((diseaseSymptomId)=>(diseaseSymptomId === symptomId))
      if (match){
        let metaD = metaStructure.find((meta)=>(meta.diseaseId === disease.id))
        metaD.totalMatches++;
      }
    })
  })

  metaStructure.sort(function (a, b) {
    return b.totalMatches - a.totalMatches;
  });
  //console.log(metaStructure);

  let results = {
    perfectFits : [],
    overFits : [],
    underFits : []
  }

  metaStructure.forEach((meta)=>{
    //console.log(meta.diseaseId);
    if (symptomsArray.length > meta.diseaseSymptomsCount){
      //possible Overfit
      //console.log('Possible Overfit');
      if (meta.diseaseSymptomsCount>4 && symptomsArray.length-meta.totalMatches < 4){
        //console.log('Definite Overfit');
        results.overFits.push({id: meta.diseaseId, disease: meta.disease})
      } else {
        //console.log('Disregard');
      }
    } else if (symptomsArray.length === meta.diseaseSymptomsCount) {
      //Possible Perfect Match
      //console.log('Possible Perfect Match');
      if (meta.totalMatches === meta.diseaseSymptomsCount){
        //console.log('Perfect Match!!');
        results.perfectFits.push({id: meta.diseaseId, disease: meta.disease})
      } else if (meta.totalMatches < meta.diseaseSymptomsCount){
        if (meta.diseaseSymptomsCount>4 && symptomsArray.length-meta.totalMatches < 3){
          //console.log('Definite Underfit');
          results.underFits.push({id: meta.diseaseId, disease: meta.disease})
        } else {
          //console.log('Disregard');
        }
      }
    } else if ( (meta.diseaseSymptomsCount - symptomsArray.length) < 3) {
      //Possible Underfit
      //console.log('Possible Underfit');
      if (meta.diseaseSymptomsCount>4 && symptomsArray.length-meta.totalMatches < 3){
        //console.log('Definite Underfit');
        results.underFits.push({id: meta.diseaseId, disease: meta.disease})
      } else {
        //console.log('Disregard');
      }
    }
  })

  return(results);
}
